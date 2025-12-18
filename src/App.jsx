import { BrowserRouter as Router, Routes, Route, NavLink, BrowserRouter } from 'react-router';
import Login from './pages/login';
import Feed from './pages/feed';
import Chat from './pages/chat';
import './App.css'; // FOARTE IMPORTANT: Importă stilurile!

function App() {
  return (

<Router>
      <div className="app-container">
        <nav className="nav-bar">
          {/* NavLink este folosit pentru link-uri și activează stilul 'active' automat */}
          <NavLink to="/" className="nav-link">Login</NavLink>
          <NavLink to="/feed" className="nav-link">Flux</NavLink>
          <NavLink to="/chat" className="nav-link">Mesagerie</NavLink>
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </div>
</Router>
  );
}

export default App;