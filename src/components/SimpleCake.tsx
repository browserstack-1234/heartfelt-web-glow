import { useState, useEffect } from 'react';

const SimpleCake = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showHearts, setShowHearts] = useState(false);

  const emotionalQuotes = [
    "You are absolutely stunning, inside and out 💖",
    "Your smile could light up the darkest room ✨",
    "You're not just beautiful, you're extraordinary 🌟",
    "Every day with you in my life is a blessing 💫",
    "You deserve all the love and happiness in the world 💕",
    "Your kindness and beauty inspire everyone around you 🌸",
    "You are a rare gem in this world 💎",
    "Thank you for being the amazing person you are 🦋"
  ];

  const surpriseElements = [
    { emoji: "🌸", name: "Cherry Blossoms" },
    { emoji: "🦋", name: "Butterflies" },
    { emoji: "✨", name: "Sparkles" },
    { emoji: "💎", name: "Diamonds" },
    { emoji: "🌹", name: "Roses" },
    { emoji: "🎀", name: "Ribbons" },
    { emoji: "💖", name: "Hearts" },
    { emoji: "🌺", name: "Flowers" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % emotionalQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showSurprise) {
      const animationInterval = setInterval(() => {
        setCurrentAnimation((prev) => (prev + 1) % surpriseElements.length);
      }, 2000);
      
      const heartsTimeout = setTimeout(() => {
        setShowHearts(true);
      }, 1000);

      return () => {
        clearInterval(animationInterval);
        clearTimeout(heartsTimeout);
      };
    }
  }, [showSurprise]);

  const handleSurpriseClick = () => {
    setShowHearts(!showHearts);
    setTimeout(() => setShowHearts(false), 3000);
  };

  return (
    <div className="w-full my-16 relative">
      <div className="text-center mb-8">
        <button
          onClick={() => setShowSurprise(!showSurprise)}
          className="px-12 py-6 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white font-bold rounded-full text-2xl shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 hover:scale-110 transform hover:rotate-1"
          style={{
            background: 'linear-gradient(45deg, #ff6b9d, #c44569, #f8b500, #3742fa)',
            backgroundSize: '300% 300%',
            animation: 'morphing-gradient 3s ease infinite'
          }}
        >
          {showSurprise ? "Hide the Magic ✨" : "💖 Reveal Your Special Surprise! 💖"}
        </button>
      </div>
      
      {showSurprise && (
        <div className="relative min-h-[600px] rounded-2xl overflow-hidden bg-gradient-to-b from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-pink-400/40 p-8 shadow-2xl">
          {/* Emotional Quote Section */}
          <div className="text-center mb-8 relative z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-200/50">
              <h3 className="text-4xl font-bold text-pink-600 mb-4 drop-shadow-sm">
                🎉 Happy Birthday My Dearest Friend! 🎉
              </h3>
              <div className="h-16 flex items-center justify-center">
                <p className="text-lg font-medium text-gray-800 italic transition-all duration-1000 ease-in-out px-4">
                  "{emotionalQuotes[currentQuote]}"
                </p>
              </div>
              <p className="text-md text-pink-500 mt-3 font-semibold">
                Click anywhere to spread more magic! ✨
              </p>
            </div>
          </div>
          
          {/* Magical Garden Scene */}
          <div 
            className="flex justify-center items-center relative cursor-pointer min-h-96"
            onClick={handleSurpriseClick}
          >
            {/* Enchanted Garden Background */}
            <div className="relative w-full max-w-4xl h-96 rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
                backgroundSize: '400% 400%',
                animation: 'morphing-gradient 8s ease infinite'
              }}
            >
              {/* Floating Elements */}
              <div className="absolute inset-0">
                {surpriseElements.map((element, index) => (
                  <div
                    key={index}
                    className={`absolute text-4xl transition-all duration-1000 ${
                      currentAnimation === index ? 'animate-bounce scale-150' : 'animate-pulse'
                    }`}
                    style={{
                      left: `${10 + (index * 11)}%`,
                      top: `${20 + Math.sin(index) * 30}%`,
                      animationDelay: `${index * 0.2}s`,
                      transform: showHearts ? 'scale(1.5) rotate(360deg)' : 'scale(1)',
                      transition: 'all 1s ease-in-out'
                    }}
                  >
                    {element.emoji}
                  </div>
                ))}
              </div>

              {/* Central Message */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-pink-300 text-center max-w-md">
                  <h4 className="text-3xl font-bold text-purple-600 mb-4">
                    You Are Absolutely Amazing! 
                  </h4>
                  <div className="text-6xl mb-4 animate-bounce">
                    {surpriseElements[currentAnimation].emoji}
                  </div>
                  <p className="text-lg text-gray-700 font-medium">
                    {surpriseElements[currentAnimation].name} for the most beautiful soul! 💖
                  </p>
                </div>
              </div>

              {/* Magical Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Heart Rain */}
          {showHearts && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-2xl animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: '-10px',
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`
                  }}
                >
                  💖
                </div>
              ))}
            </div>
          )}

          {/* Beautiful Message Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-2xl border-2 border-pink-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-3">🌸</div>
                <h5 className="text-xl font-bold text-pink-600 mb-2">You're Blooming Beautiful</h5>
                <p className="text-gray-700">Like a flower in spring, you bring color and joy to everyone's life</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-2xl border-2 border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <h5 className="text-xl font-bold text-purple-600 mb-2">Sparkle & Shine</h5>
                <p className="text-gray-700">Your inner light illuminates the path for others to follow</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleCake;
