import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Laptop, Users } from 'lucide-react';

export function Poll() {
  const [voted, setVoted] = useState(false);
  const [stats, setStats] = useState({ online: 0, offline: 0, total: 0 });

  useEffect(() => {
    if (localStorage.getItem('academy_voted')) {
      setVoted(true);
      fetchStats();
    }
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/stats');
      const data = await res.json();
      setStats(data.votes);
    } catch (err) {}
  };

  const handleVote = async (preference: 'online' | 'offline') => {
    if (voted) return;
    
    // Optimistic update
    setVoted(true);
    localStorage.setItem('academy_voted', 'true');
    setStats(prev => ({
      ...prev,
      [preference]: prev[preference] + 1,
      total: prev.total + 1
    }));

    const ua = navigator.userAgent;
    let os = "Unknown OS";
    if (ua.indexOf("Win") !== -1) os = "Windows";
    if (ua.indexOf("Mac") !== -1) os = "MacOS";
    if (ua.indexOf("Linux") !== -1) os = "Linux";
    if (ua.indexOf("Android") !== -1) os = "Android";
    if (ua.indexOf("like Mac") !== -1) os = "iOS";

    let browser = "Unknown Browser";
    if (ua.indexOf("Chrome") !== -1) browser = "Chrome";
    else if (ua.indexOf("Safari") !== -1) browser = "Safari";
    else if (ua.indexOf("Firefox") !== -1) browser = "Firefox";
    else if (ua.indexOf("Edge") !== -1) browser = "Edge";

    let device = /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua) ? "Mobile" : "Desktop";

    try {
      await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preference, os, browser, device })
      });
      fetchStats(); // refresh with real data
    } catch (err) {
      console.error(err);
    }
  };

  const onlinePercent = stats.total > 0 ? Math.round((stats.online / stats.total) * 100) : 50;
  const offlinePercent = stats.total > 0 ? Math.round((stats.offline / stats.total) * 100) : 50;

  return (
    <section className="py-32 relative max-w-4xl mx-auto px-4 z-10">
      <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 text-center relative overflow-hidden glow-blue">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.1)_0,transparent_70%)]"></div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10" dir="rtl">
          شاركنا <span className="text-gradient">رأيك</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 relative z-10" dir="rtl">
          تفضل التعلم أونلاين أم الحضور في المقر؟
        </p>

        {!voted ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10" dir="rtl">
            <button 
              onClick={() => handleVote('online')}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group flex flex-col items-center gap-4 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Laptop className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold text-white">أونلاين</div>
              <div className="text-sm text-gray-400">من أي مكان وفي أي وقت</div>
            </button>

            <button 
              onClick={() => handleVote('offline')}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 group flex flex-col items-center gap-4 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white">في المقر (أوفلاين)</div>
              <div className="text-sm text-gray-400">تفاعل مباشر في بيئة الأكاديمية</div>
            </button>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 flex flex-col gap-8"
            dir="rtl"
          >
            <div className="text-2xl font-bold text-green-400 mb-4">شكراً لمشاركتك!</div>
            
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-2 text-lg font-bold"><Laptop className="w-5 h-5 text-cyan-400" /> أونلاين</div>
                  <div className="text-2xl font-bold text-cyan-400">{onlinePercent}%</div>
                </div>
                <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${onlinePercent}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-l from-cyan-400 to-blue-600 rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-2 text-lg font-bold"><Users className="w-5 h-5 text-purple-400" /> في المقر</div>
                  <div className="text-2xl font-bold text-purple-400">{offlinePercent}%</div>
                </div>
                <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${offlinePercent}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-gradient-to-l from-purple-400 to-pink-600 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="text-gray-400 text-sm mt-4">إجمالي الأصوات: {stats.total}</div>
          </motion.div>
        )}
      </div>
    </section>
  );
}