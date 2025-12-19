import { useState, useRef, useEffect } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'Artist', text: 'Salut! Mulțumesc că mă urmărești.' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll automat la ultimul mesaj
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Aici se trimite mesajul la Backend (Messaging Service)
    setMessages(prev => [...prev, { sender: 'Eu', text: input }]);
    setInput('');
    
    // Simulare răspuns automat
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'Artist', text: 'Super! Vorbim mai târziu.' }]);
    }, 1000);
  };

  return (
    <div className="card" style={{ height: '80vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ borderBottom: '1px solid #eeeeeeff', paddingBottom: '10px', marginBottom: '10px' }}>
        <strong>Chat Privat</strong>
      </div>

      <div className="chat-window" style={{ flex: 1 }}>
        {messages.map((msg, index) => {
          const isMe = msg.sender === 'Eu';
          return (
            <div key={index} className={`message ${isMe ? 'sent' : 'received'}`}>
              {!isMe && <div style={{ fontSize: '0.7em', opacity: 0.7, marginBottom: '2px' }}>{msg.sender}</div>}
              {msg.text}
            </div>
          );
        })}
        <div ref={messagesEndRef} /> {/* Punct de referință pentru scroll */}
      </div>

      <form className="input-group" onSubmit={sendMessage}>
        <input 
          style={{ marginBottom: 0 }}
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Scrie un mesaj..."
        />
        <button type="submit" style={{ width: 'auto' }}>Trimite</button>
      </form>
    </div>
  );
}

export default Chat;