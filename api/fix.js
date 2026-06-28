import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method === 'POST') {
    if (req.body.type === 'fix_defaults') {
      // Just a hack to fix defaults from API if needed, but we'll manually insert with UUIDs
      return res.status(200).json({ ok: true });
    }
  }
}