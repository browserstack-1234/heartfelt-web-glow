import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MorphingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

const MorphingText = ({ texts, className = "", interval = 3000 }: MorphingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ 
            opacity: 0, 
            y: 50,
            rotateX: -90,
            scale: 0.8
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            scale: 1
          }}
          exit={{ 
            opacity: 0, 
            y: -50,
            rotateX: 90,
            scale: 0.8
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent font-bold">
            {texts[currentIndex]}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MorphingText;
