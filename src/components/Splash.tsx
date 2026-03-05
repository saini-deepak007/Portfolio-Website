import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-64 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-4xl font-bold tracking-tighter"
        >
          DS
        </motion.div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-gray-800">
          <motion.div
            className="h-full bg-emerald-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-xs font-mono text-gray-500">
          INITIALIZING SYSTEM... {progress}%
        </div>
      </div>
    </motion.div>
  );
}
