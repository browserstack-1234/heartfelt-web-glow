import { Heart, Star, Sparkles, Gift } from "lucide-react";

const memories = [
  {
    icon: Heart,
    title: "First Meeting",
    description: "The day we became friends - the start of something beautiful",
    color: "text-accent",
  },
  {
    icon: Star,
    title: "Unforgettable Adventures",
    description: "All those crazy moments and spontaneous trips we'll never forget",
    color: "text-primary",
  },
  {
    icon: Sparkles,
    title: "Late Night Talks",
    description: "Sharing dreams, secrets, and endless laughter until sunrise",
    color: "text-secondary",
  },
  {
    icon: Gift,
    title: "Growing Together",
    description: "Through ups and downs, we've become stronger together",
    color: "text-accent",
  },
];

const MemoryTimeline = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-blue-300 mx-auto max-w-2xl">
            <h2 className="text-5xl font-bold text-blue-600 drop-shadow-lg">
              Our Journey Together
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-secondary" />

          {memories.map((memory, index) => {
            const Icon = memory.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }`}
                style={{
                  animation: "fade-in-up 0.8s ease-out forwards",
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0,
                }}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${isEven ? "text-right pr-8" : "text-left pl-8"}`}
                >
                  <div 
                    className="backdrop-blur-xl bg-background/30 p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                    style={{
                      background: "var(--gradient-glass)",
                      animation: "glow-pulse 3s ease-in-out infinite",
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      {memory.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {memory.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-2/12 flex justify-center z-10">
                  <div 
                    className={`w-16 h-16 rounded-full ${memory.color} backdrop-blur-xl bg-background/50 border-4 border-background flex items-center justify-center shadow-xl`}
                    style={{
                      animation: "parallax-float 4s ease-in-out infinite",
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <Icon className="fill-current" size={28} />
                  </div>
                </div>

                {/* Empty space */}
                <div className="w-5/12" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;
