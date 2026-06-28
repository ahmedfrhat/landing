import { useState, useEffect } from 'react';
import { Users, MonitorSmartphone, Laptop, Smartphone, Globe } from 'lucide-react';

export default function Dashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
    const interval = setInterval(fetchStats, 10000); // Refresh every 10s
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center font-mono">Loading Dashboard...</div>;
  }

  const { visitorsCount, votes, recentVotes } = stats;
  const onlinePercent = votes.total > 0 ? Math.round((votes.online / votes.total) * 100) : 0;
  const offlinePercent = votes.total > 0 ? Math.round((votes.offline / votes.total) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#050816] text-white p-6 md:p-12 font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-gradient">لوحة تحكم الأكاديمية</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass p-8 rounded-3xl border border-white/10 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <div className="text-gray-400 text-lg mb-1">إجمالي الزوار</div>
              <div className="text-4xl font-bold">{visitorsCount}</div>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-center">
            <div className="flex justify-between items-end mb-4">
              <div className="text-gray-400 text-lg">تصويت الأونلاين</div>
              <div className="text-3xl font-bold text-cyan-400">{onlinePercent}%</div>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${onlinePercent}%` }}></div>
            </div>
            <div className="text-sm text-gray-500 mt-2">{votes.online} صوت</div>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-center">
            <div className="flex justify-between items-end mb-4">
              <div className="text-gray-400 text-lg">تصويت المقر (أوفلاين)</div>
              <div className="text-3xl font-bold text-purple-400">{offlinePercent}%</div>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-purple-400 rounded-full" style={{ width: `${offlinePercent}%` }}></div>
            </div>
            <div className="text-sm text-gray-500 mt-2">{votes.offline} صوت</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">سجل التصويتات الأخيرة</h2>
        <div className="glass rounded-3xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 font-medium text-gray-400">التصويت</th>
                  <th className="p-4 font-medium text-gray-400">الجهاز</th>
                  <th className="p-4 font-medium text-gray-400">نظام التشغيل</th>
                  <th className="p-4 font-medium text-gray-400">المتصفح</th>
                  <th className="p-4 font-medium text-gray-400">الوقت</th>
                </tr>
              </thead>
              <tbody>
                {recentVotes.map((v: any) => (
                  <tr key={v.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${v.preference === 'online' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-500/20 text-purple-400'}`}>
                        {v.preference === 'online' ? 'أونلاين' : 'في المقر'}
                      </span>
                    </td>
                    <td className="p-4 flex items-center gap-2">
                      {v.device === 'Mobile' ? <Smartphone size={16} className="text-gray-400"/> : <Laptop size={16} className="text-gray-400"/>}
                      {v.device}
                    </td>
                    <td className="p-4">{v.os}</td>
                    <td className="p-4 flex items-center gap-2">
                      <Globe size={16} className="text-gray-400"/>
                      {v.browser}
                    </td>
                    <td className="p-4 text-gray-400 text-sm" dir="ltr">
                      {new Date(v.created_at).toLocaleString('ar-EG')}
                    </td>
                  </tr>
                ))}
                {recentVotes.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">لا توجد تصويتات حتى الآن</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}