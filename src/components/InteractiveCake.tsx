import { useState } from "react";
import { Cake, Sparkles } from "lucide-react";
import { toast } from "sonner";

const InteractiveCake = () => {
  const [isBlown, setIsBlown] = useState(false);
  const [candles, setCandles] = useState([true, true, true]);

  const handleBlow = () => {
    if (isBlown) return;

    setCandles([false, false, false]);
    setIsBlown(true);
    toast.success("🎉 Wish granted! May all your dreams come true!");

    setTimeout(() => {
      setCandles([true, true, true]);
      setIsBlown(false);
    }, 5000);
  };

  return (
    <div className="relative flex flex-col items-center gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4 animate-bounce-subtle text-center">
        Make a Wish! 🌟
      </h3>
      
      <div className="relative">
        {/* Candle flames */}
        <div className="absolute -top-8 sm:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-6 lg:gap-8">
          {candles.map((isLit, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isLit ? "opacity-100" : "opacity-0"
              }`}
              style={{
                animation: isLit ? "candle-flicker 1.5s ease-in-out infinite" : "blow-away 0.5s ease-out",
              }}
            >
              <div className="w-1.5 h-6 sm:w-2 sm:h-7 lg:w-2 lg:h-8 bg-gradient-to-t from-accent to-yellow-400 rounded-full relative">
                <div className="absolute -top-2 sm:-top-2.5 lg:-top-3 left-1/2 transform -translate-x-1/2 w-2 h-3 sm:w-2.5 sm:h-3.5 lg:w-3 lg:h-4 bg-yellow-400 rounded-full blur-sm animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Cake */}
        <button
          onClick={handleBlow}
          className="relative group cursor-pointer p-4 rounded-full hover:bg-accent/10 transition-all duration-300 min-w-[80px] min-h-[80px] sm:min-w-[100px] sm:min-h-[100px] lg:min-w-[140px] lg:min-h-[140px] flex items-center justify-center"
          disabled={isBlown}
          aria-label="Blow out the candles to make a wish"
        >
          <Cake 
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 text-accent fill-accent transition-all duration-300 group-hover:scale-110 group-active:scale-95"
            style={{ filter: "drop-shadow(0 0 10px currentColor) drop-shadow(0 0 20px currentColor)" }}
          />
          
          {!isBlown && (
            <div className="absolute -bottom-12 sm:-bottom-14 lg:-bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <p className="text-xs sm:text-sm text-muted-foreground animate-pulse text-center px-2">
                {/* Show different text based on device */}
                <span className="hidden sm:inline">Click to blow the candles! 🎂</span>
                <span className="sm:hidden">Tap to blow! 🎂</span>
              </p>
            </div>
          )}
        </button>

        {/* Sparkles on blow */}
        {isBlown && (
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 12 }).map((_, i) => (
              <Sparkles
                key={i}
                className="absolute text-yellow-400 animate-ping w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                style={{
                  left: `${50 + Math.cos((i * Math.PI * 2) / 12) * 50}%`,
                  top: `${50 + Math.sin((i * Math.PI * 2) / 12) * 50}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveCake;
