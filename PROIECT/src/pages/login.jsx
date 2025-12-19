import { useState } from 'react';
import { useNavigate } from 'react-router';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Registration complete!", email, password);
    alert("Registration complete!");
    navigate('/');
  };

  return (
    <div className="card">
      <h2 className="h2">Welcome!</h2>
      <p>
        Put in your username and start posting drawings!
      </p>
      <form onSubmit={handleLogin} action="/login">
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit"className="button">Go!</button>
      </form>
    </div>
  );
}

export default Login;