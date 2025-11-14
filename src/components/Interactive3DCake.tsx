import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CSSCake = ({ isClicked, onCakeClick }: { isClicked: boolean; onCakeClick: () => void }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-end h-80 cursor-pointer"
      onClick={onCakeClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={isClicked ? { 
        rotate: [0, 5, -5, 0],
        scale: [1, 1.1, 1]
      } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Cake Base Layer */}
      <motion.div
        className="w-48 h-16 bg-gradient-to-b from-amber-700 to-amber-800 rounded-full relative shadow-2xl"
        style={{ 
          background: 'linear-gradient(to bottom, #8B4513, #654321)',
          borderRadius: '50%/20px'
        }}
        animate={isClicked ? { y: [0, -5, 0] } : {}}
        transition={{ delay: 0.1 }}
      />
      
      {/* Cake Layer 1 */}
      <motion.div
        className="w-40 h-14 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full relative -mt-2 shadow-xl"
        style={{ 
          background: 'linear-gradient(to bottom, #FFB6C1, #FF91A4)',
          borderRadius: '50%/18px'
        }}
        animate={isClicked ? { y: [0, -8, 0] } : {}}
        transition={{ delay: 0.2 }}
      />
      
      {/* Cake Layer 2 */}
      <motion.div
        className="w-32 h-12 bg-gradient-to-b from-pink-400 to-pink-500 rounded-full relative -mt-2 shadow-lg"
        style={{ 
          background: 'linear-gradient(to bottom, #FF69B4, #FF1493)',
          borderRadius: '50%/15px'
        }}
        animate={isClicked ? { y: [0, -10, 0] } : {}}
        transition={{ delay: 0.3 }}
      />
      
      {/* Cake Top Layer */}
      <motion.div
        className="w-24 h-10 bg-gradient-to-b from-pink-500 to-pink-600 rounded-full relative -mt-2 shadow-md"
        style={{ 
          background: 'linear-gradient(to bottom, #FF1493, #DC143C)',
          borderRadius: '50%/12px'
        }}
        animate={isClicked ? { y: [0, -12, 0] } : {}}
        transition={{ delay: 0.4 }}
      />
      
      {/* Candles */}
      <div className="absolute top-0 flex space-x-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="relative"
            animate={isClicked ? { 
              y: [0, -15, 0],
              rotate: [0, Math.random() * 10 - 5, 0]
            } : {}}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            {/* Candle stick */}
            <div 
              className="w-2 h-8 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-sm shadow-sm"
              style={{ background: 'linear-gradient(to bottom, #FFFF00, #FFD700)' }}
            />
            
            {/* Flame */}
            <motion.div
              className="absolute -top-3 left-1/2 transform -translate-x-1/2"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-3 h-4 bg-gradient-to-t from-red-500 via-orange-400 to-yellow-300 rounded-full opacity-90" />
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * 360;
          return (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-yellow-400 rounded-full"
              style={{
                left: '50%',
                top: '60%',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-60px)`,
              }}
              animate={isClicked ? {
                scale: [1, 1.5, 1],
                rotate: [angle, angle + 360, angle]
              } : {}}
              transition={{ delay: 0.6 + i * 0.05, duration: 1 }}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

const AnimatedConfetti = ({ show }: { show: boolean }) => {
  return (
    <AnimatePresence>
      {show && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-sm"
              style={{
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                left: `${Math.random() * 100}%`,
                top: '-10px'
              }}
              initial={{ y: -10, opacity: 0, rotate: 0 }}
              animate={{
                y: window.innerHeight + 100,
                opacity: [0, 1, 1, 0],
                rotate: 360 * 3,
                x: Math.random() * 200 - 100
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
              exit={{ opacity: 0 }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

const Interactive3DCake = () => {
  const [showCake, setShowCake] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleCakeClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="w-full my-16 relative"
    >
      <div className="text-center mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowCake(!showCake)}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {showCake ? "Hide the Magic" : "🎂 Reveal the Birthday Cake! 🎂"}
        </motion.button>
      </div>
      
      <AnimatePresence>
        {showCake && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.5 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative min-h-96 rounded-2xl overflow-hidden bg-gradient-to-b from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 p-8"
          >
            <div className="text-center mb-8">
              <motion.h3
                className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎉 Happy Birthday! 🎉
              </motion.h3>
              <p className="text-lg text-muted-foreground mt-2">
                Click the cake to make a wish!
              </p>
            </div>
            
            <div className="flex justify-center items-center">
              <CSSCake isClicked={isClicked} onCakeClick={handleCakeClick} />
            </div>
            
            <AnimatedConfetti show={isClicked} />
            
            {isClicked && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <motion.div
                  className="text-6xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 360, 0]
                  }}
                  transition={{ duration: 2 }}
                >
                  🎊
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Interactive3DCake;
