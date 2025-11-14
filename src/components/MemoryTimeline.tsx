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
    <section className="responsive-spacing-lg relative overflow-hidden no-overflow-x safe-area-top">
      <div className="responsive-container">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl responsive-spacing-sm shadow-2xl border-2 border-blue-300 mx-auto max-w-2xl mobile-simplified">
            <h2 className="responsive-text-4xl font-bold text-blue-600 drop-shadow-lg mobile-reduced-motion">
              Our Journey Together
            </h2>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden relative">
          {/* Mobile timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-secondary" />
          
          {memories.map((memory, index) => {
            const Icon = memory.icon;
            
            return (
              <div
                key={index}
                className="relative flex items-start mb-8 animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Mobile Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${memory.color} backdrop-blur-xl bg-background/50 border-4 border-background flex items-center justify-center shadow-xl z-10`}>
                  <Icon className="fill-current" size={20} />
                </div>
                
                {/* Mobile Content */}
                <div className="ml-6 flex-1">
                  <div className="backdrop-blur-xl bg-background/30 p-4 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 glass-card animate-glow-pulse touch-target">
                    <h3 className="responsive-text-lg font-bold mb-2 text-foreground">
                      {memory.title}
                    </h3>
                    <p className="responsive-text-sm text-muted-foreground">
                      {memory.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Timeline - Alternating */}
        <div className="hidden lg:block relative">
          {/* Desktop timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-secondary" />

          {memories.map((memory, index) => {
            const Icon = memory.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center mb-16 animate-fade-in-up opacity-0 ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${isEven ? "text-right pr-8" : "text-left pl-8"}`}
                >
                  <div className="backdrop-blur-xl bg-background/30 p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 glass-card animate-glow-pulse">
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-foreground">
                      {memory.title}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {memory.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Icon */}
                <div className="w-2/12 flex justify-center z-10">
                  <div className={`w-16 h-16 rounded-full ${memory.color} backdrop-blur-xl bg-background/50 border-4 border-background flex items-center justify-center shadow-xl animate-parallax-float`}>
                    <Icon className="fill-current" size={24} />
                  </div>
                </div>

                {/* Empty space for desktop layout */}
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
