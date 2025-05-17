import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, email, username } = req.body;

    // Insert profiel in database
    const { data, error } = await supabase
      .from('profiles')
      .upsert({ id, email, username }, { onConflict: 'id' });

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ data });
  }
  res.status(405).json({ error: 'Method not allowed' });
}
