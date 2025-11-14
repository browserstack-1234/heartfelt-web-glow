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
    <div className="relative flex flex-col items-center gap-6 p-8">
      <h3 className="text-2xl font-bold text-foreground mb-4 animate-bounce-subtle">
        Make a Wish! 🌟
      </h3>
      
      <div className="relative">
        {/* Candle flames */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex gap-8">
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
              <div className="w-2 h-8 bg-gradient-to-t from-accent to-yellow-400 rounded-full relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-yellow-400 rounded-full blur-sm animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Cake */}
        <button
          onClick={handleBlow}
          className="relative group cursor-pointer"
          disabled={isBlown}
        >
          <Cake 
            size={120} 
            className="text-accent fill-accent transition-all duration-300 group-hover:scale-110"
            style={{ filter: "drop-shadow(0 0 20px currentColor)" }}
          />
          
          {!isBlown && (
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <p className="text-sm text-muted-foreground animate-pulse">
                Click to blow the candles! 🎂
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
                className="absolute text-yellow-400 animate-ping"
                style={{
                  left: `${50 + Math.cos((i * Math.PI * 2) / 12) * 60}%`,
                  top: `${50 + Math.sin((i * Math.PI * 2) / 12) * 60}%`,
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
