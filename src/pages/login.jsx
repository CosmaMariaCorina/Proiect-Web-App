import { useState } from 'react';
import { useNavigate } from 'react-router';

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aici s-ar apela Backend-ul (Servicii de Autentificare)
    console.log("Utilizator autentificat:", email);
    alert("Autentificare reușită! (Simulare)");
    navigate('/feed'); // Redirecționare către flux
  };

  return (
    <div className="card" style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h2 style={{ textAlign: 'center' }}>Bine ai venit</h2>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '20px' }}>
        Conectează-te pentru a interacționa cu artiștii tăi preferați.
      </p>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        {/* Poți adăuga un câmp pentru parolă dacă dorești */}
        <button type="submit">Autentificare</button>
      </form>
    </div>
  );
}

export default Login;