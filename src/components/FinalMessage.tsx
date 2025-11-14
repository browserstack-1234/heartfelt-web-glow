import { Heart, Cake } from "lucide-react";

const FinalMessage = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial opacity-50" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="flex justify-center gap-4 mb-8">
          <Cake className="w-16 h-16 text-primary animate-bounce-slow animate-spin-slow" />
          <Heart className="w-20 h-20 text-accent fill-accent animate-pulse-grow" style={{ filter: "drop-shadow(0 0 20px hsl(var(--accent)))" }} />
          <Cake className="w-16 h-16 text-secondary animate-bounce-slow animate-spin-slow" style={{ animationDelay: "0.3s" }} />
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-yellow-300 mx-auto max-w-2xl mb-8">
          <h2 className="text-6xl font-bold text-yellow-600 drop-shadow-lg">
            Make a Wish! 🎂
          </h2>
        </div>
        
        <p className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed animate-wave">
          May this year bring you endless joy, incredible adventures, 
          and all the success you deserve!
        </p>
        
        <div className="mt-12 p-8 bg-card/50 backdrop-blur-sm rounded-2xl shadow-glow hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-float-slow border-2 border-primary/30">
          <p className="text-xl italic text-muted-foreground mb-4 animate-fade-in-up">
            "A true friend is one of life's greatest blessings."
          </p>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-pink-300">
            <p className="text-3xl font-bold text-pink-600 drop-shadow-sm">
              Love you always, my girl 💖
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-lg text-muted-foreground space-y-2">
          <p className="animate-bounce-slow">🎈 Keep shining bright 🎈</p>
          <p className="animate-bounce-slow" style={{ animationDelay: "0.3s" }}>✨ The best is yet to come ✨</p>
        </div>
      </div>
    </section>
  );
};

export default FinalMessage;
