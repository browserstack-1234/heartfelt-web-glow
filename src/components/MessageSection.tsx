import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const MessageSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-purple-300 mx-auto max-w-3xl">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-600 animate-pulse" />
            <h2 className="text-5xl font-bold mb-4 text-purple-700 drop-shadow-lg">
              A Message From The Heart
            </h2>
          </div>
        </div>
        
        <div className="space-y-8">
          <Card 
            className="backdrop-blur-xl bg-background/30 p-8 rounded-2xl border-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-in-left border-accent/30"
            style={{
              background: "var(--gradient-glass)",
              animation: "glow-pulse 4s ease-in-out infinite",
            }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-center animate-fade-in-up">
              From the moment we became friends, you've filled my life with endless laughter, 
              unwavering support, and countless precious memories. You're not just my best friend—
              you're my chosen family, my partner in crime, and my rock through everything.
            </p>
          </Card>
          
          <Card 
            className="backdrop-blur-xl bg-background/30 p-8 rounded-2xl border-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-in-right border-primary/30"
            style={{
              background: "var(--gradient-glass)",
              animation: "glow-pulse 4s ease-in-out infinite",
              animationDelay: "0.5s",
            }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Your kindness, strength, and beautiful soul inspire me every single day. 
              Thank you for being authentically YOU, for accepting me completely, 
              and for making every ordinary moment extraordinary just by being there.I hope our relation will be long-lasting, filled with love, trust, and moments that make our hearts feel at home in each other forever.
            </p>
          </Card>
          
          <Card 
            className="backdrop-blur-xl bg-background/30 p-8 rounded-2xl border-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-in-left border-secondary/30"
            style={{
              background: "var(--gradient-glass)",
              animation: "glow-pulse 4s ease-in-out infinite",
              animationDelay: "1s",
            }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              On this special day, I wish you all the happiness in the world, 
              dreams that come true, adventures that take your breath away, 
              and love that fills your heart to overflowing. You deserve nothing but the absolute best!
            </p>
          </Card>
          
          <div className="text-center pt-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-300 mx-auto max-w-2xl">
              <p className="text-3xl font-bold text-pink-600 drop-shadow-sm">
                Here's to you and another amazing year! 🎂✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
