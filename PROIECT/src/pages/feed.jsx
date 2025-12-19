import { useState } from 'react';

function Feed() {
  const [posts, setPosts] = useState([
    { id: 1, user: 'Artist Oficial', content: 'Tocmai am terminat de înregistrat o piesă nouă! 🎵', likes: 120 },
    { id: 2, user: 'Fan Club', content: 'Cine merge la concertul de vineri?', likes: 45 }
  ]);
  const [newPost, setNewPost] = useState('');

  const handleCreatePost = () => {
    if (!newPost.trim()) return;
    // Aici se trimite postarea la Backend (Content Service)
    const post = { id: Date.now(), user: 'Eu', content: newPost, likes: 0 };
    setPosts([post, ...posts]);
    setNewPost('');
  };

  const handleLike = (id) => {
    // Aici se trimite interacțiunea la Backend (Interaction Service)
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <div>
      {/* Zona de creare postare */}
      <div className="card">
        <h2>Creează o postare</h2>
        <textarea 
          rows="3"
          value={newPost} 
          onChange={(e) => setNewPost(e.target.value)} 
          placeholder="Împărtășește ceva cu comunitatea..."
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {/* Butonul are width: auto pentru a nu ocupa toată lățimea */}
          <button onClick={handleCreatePost}>Postează</button>
        </div>
      </div>

      {/* Lista de postări */}
      {posts.map(post => (
        <div key={post.id} className="card">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ width: '40px', height: '40px', background: '#ddd', borderRadius: '50%', marginRight: '10px' }}></div>
            <strong>{post.user}</strong>
          </div>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>{post.content}</p>
          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
            <button className="secondary" onClick={() => handleLike(post.id)}>
              ❤️ {post.likes} Aprecieri
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;