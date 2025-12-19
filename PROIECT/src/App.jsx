import {Routes, Route, NavLink } from 'react-router';
import Login from './pages/login';
import Feed from './pages/feed';
import Chat from './pages/chat';
import './App.css'; 
import { Navbar } from './components/Navbar';

function App() {
  return (
      <div className="app-container">
        <Navbar/>
        {/*<nav className="nav-bar">
          <NavLink to="/" className="nav-link">Login</NavLink>
          <NavLink to="/feed" className="nav-link">Flux</NavLink>
          <NavLink to="/chat" className="nav-link">Mesagerie</NavLink>
        </nav>*/}

        <div className="page-content">
          <Routes>
            <Route path="/feed" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;