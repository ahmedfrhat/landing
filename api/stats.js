import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'GET') {
      const { count: visitorsCount, error: vErr } = await supabase
        .from('visitors')
        .select('*', { count: 'exact', head: true });
        
      if (vErr) throw vErr;

      const { data: votes, error: voteErr } = await supabase
        .from('votes')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (voteErr) throw voteErr;

      const onlineCount = votes.filter(v => v.preference === 'online').length;
      const offlineCount = votes.filter(v => v.preference === 'offline').length;

      return res.status(200).json({
        visitorsCount: visitorsCount || 0,
        votes: {
          online: onlineCount,
          offline: offlineCount,
          total: votes.length
        },
        recentVotes: votes.slice(0, 50)
      });
    }
    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message });
  }
}