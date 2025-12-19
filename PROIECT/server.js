const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const { createClient } = require("@supabase/supabase-js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookieParser());


const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Home -> login page
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.post("/session", async (req, res) => {
  try {
    const { access_token } = req.body || {};
    if (!access_token) return res.status(400).json({ error: "Missing access_token" });

    const { data, error } = await supabase.auth.getUser(access_token);
    if (error || !data?.user) return res.status(401).json({ error: "Invalid token" });

    res.cookie("sb_token", access_token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return res.json({ ok: true, email: data.user.email });
  } catch (e) {
    return res.status(500).json({ error: "Server error" });
  }
});

async function requireAuth(req, res, next) {
  const token = req.cookies.sb_token;
  if (!token) return res.status(401).json({ error: "Not authenticated" });

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user) return res.status(401).json({ error: "Invalid/expired token" });

  req.user = data.user;
  next();
}

// Get current user (protected)
app.get("/me", requireAuth, (req, res) => {
  res.json({ id: req.user.id, email: req.user.email });
});

// Logout
app.post("/logout", (req, res) => {
  res.clearCookie("sb_token");
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`✅ Server running: http://localhost:${PORT}`);
});
