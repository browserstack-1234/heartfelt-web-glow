import { Card } from "@/components/ui/card";

// Placeholder for her photos - replace these with actual photo paths
const photos = [
  {
    src: "src\\assets\\2.jpg",
    caption: "Your Beautiful Smile ✨",
    quote: "Your smile lights up my world"
  },
  {
    src: "src\\assets\\1.jpg",
    caption: "Radiant & Gorgeous 💫",
    quote: "You shine brighter than stars"
  },
  {
    src: "src\\assets\\3.jpg",
    caption: "Pure Joy & Happiness 🌟",
    quote: "Your happiness is contagious"
  },
  {
    src: "src\\assets\\4.jpg",
    caption: "Absolutely Stunning 💖",
    quote: "Beautiful inside and out"
  },
  {
    src: "src\\assets\\8.jpg",
    caption: "My Amazing Bestie 🎉",
    quote: "Grateful for your friendship"
  },
  {
    src: "src\\assets\\5.jpg",
    caption: "Forever in My Heart 💕",
    quote: "You mean the world to me"
  }
];

const PhotoGallery = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-pink-300 mx-auto max-w-2xl">
            <h2 className="text-5xl font-bold mb-4 text-pink-600 drop-shadow-lg">
              Beautiful You 📸
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
          </p>
          <div className="mt-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-pink-200 max-w-2xl mx-auto">
            <p className="text-lg font-medium text-gray-700 italic">
              "Every photo captures your amazing spirit and beauty! 💖"
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <Card 
              key={index}
              className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-700 hover:scale-125 hover:rotate-6 group animate-zoom-in border-4 backdrop-blur-sm hover:z-10"
              style={{ 
                borderColor: index % 3 === 0 ? "hsl(var(--accent))" : index % 3 === 1 ? "hsl(var(--primary))" : "hsl(var(--secondary))",
                animation: `parallax-float 5s ease-in-out infinite ${index * 0.3}s, zoom-in 0.6s ease-out forwards ${index * 0.3}s`,
              }}
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                />
                
                {/* Holographic Overlay on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{
                    background: "var(--gradient-holographic)",
                    backgroundSize: "300% 300%",
                    animation: "holographic 4s ease infinite",
                    mixBlendMode: "overlay",
                  }}
                />
                
                {/* Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <p className="text-white text-xl font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 mb-2">
                    {photo.caption}
                  </p>
                  <p className="text-pink-200 text-sm italic transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    "{photo.quote}"
                  </p>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                </div>
              </div>
              <div className="p-6 text-center bg-gradient-sunset relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <p className="text-lg font-semibold text-white relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {photo.caption}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
