import { motion } from 'framer-motion';

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050816]">
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px]"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/10 blur-[150px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  );
}