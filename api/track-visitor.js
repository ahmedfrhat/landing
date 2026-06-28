import supabase from './db-client.js';
import crypto from 'crypto';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'POST') {
      const { os, browser, device, userAgent } = req.body;
      const id = crypto.randomUUID();
      const { error } = await supabase
        .from('visitors')
        .insert({ id, os, browser, device, user_agent: userAgent, created_at: new Date().toISOString() });
      
      if (error) throw error;
      return res.status(200).json({ success: true });
    }
    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message });
  }
}