
const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function setMsg(text, isOk) {
  const el = document.getElementById("msg");
  el.className = "msg " + (isOk ? "ok" : "err");
  el.textContent = text;
}

async function registerUser() {
  setMsg("", true);
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const { error } = await supabaseClient.auth.signUp({ email, password });
  if (error) return setMsg(error.message, false);

  setMsg("Cont creat. Verifică email-ul dacă ai confirmarea activă.", true);
}

async function login() {
  setMsg("", true);
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) return setMsg(error.message, false);


  const resp = await fetch("/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ access_token: data.session.access_token }),
  });

  if (!resp.ok) {
    const e = await resp.json().catch(() => ({ error: "Session error" }));
    return setMsg(e.error || "Session error", false);
  }

  location.href = "/dashboard.html";
}
