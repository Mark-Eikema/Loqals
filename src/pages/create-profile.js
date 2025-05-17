import { useState } from 'react';

export default function CreateProfile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);

    const res = await fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(`Profiel aangemaakt: ${data.profile.username}`);
      setUsername('');
      setEmail('');
    } else {
      setMessage(`Fout: ${data.error}`);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h1>Profiel aanmaken</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Gebruikersnaam:<br />
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <label>
          E-mail:<br />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Aanmaken</button>
      </form>

      {message && (
        <p style={{ marginTop: 20 }}>
          {message}
        </p>
      )}
    </div>
  );
}
