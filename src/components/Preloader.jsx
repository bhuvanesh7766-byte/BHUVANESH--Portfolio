import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950 text-white"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="text-4xl md:text-6xl font-bold tracking-tighter"
            >
              Bhuvanesh Selvaraj
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-4">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="text-neutral-400 font-medium tracking-widest uppercase text-sm"
            >
              Portfolio 2026
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
