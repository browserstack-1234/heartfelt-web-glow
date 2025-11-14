import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Gift } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "Preparing something special...",
    "Adding extra sparkles...",
    "Wrapping with love...",
    "Almost ready to celebrate!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 1500);

    return () => clearInterval(messageTimer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              animate={{
                x: [0, Math.random() * window.innerWidth],
                y: [0, Math.random() * window.innerHeight],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: Math.random() * window.innerWidth,
                top: Math.random() * window.innerHeight,
              }}
            />
          ))}
        </div>

        <div className="text-center z-10">
          {/* Animated icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity }
              }}
            >
              <Heart className="w-12 h-12 text-pink-400 fill-pink-400" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-12 h-12 text-yellow-400" />
            </motion.div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [-5, 5, -5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Gift className="w-12 h-12 text-purple-400" />
            </motion.div>
          </div>

          {/* Loading text */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Creating Magic...
          </motion.h1>

          {/* Progress bar */}
          <div className="w-80 h-2 bg-white/20 rounded-full mx-auto mb-6 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Progress percentage */}
          <motion.div
            className="text-2xl font-semibold text-white mb-4"
            key={progress}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            {progress}%
          </motion.div>

          {/* Loading messages */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-lg text-white/80"
            >
              {messages[currentMessage]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
