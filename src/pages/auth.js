import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function signInWithEmail() {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setMessage(error.message);
    else setMessage('Check je mail om in te loggen!');
  }

  return (
    <div>
      <h1>Login / Signup</h1>
      <input 
        type="email" 
        placeholder="jouw email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
      />
      <button onClick={signInWithEmail}>Stuur login link</button>
      <p>{message}</p>
    </div>
  );
}
