import { Card } from "@/components/ui/card";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";


// Placeholder for her photos - replace these with actual photo paths
const photos = [
  {
    src: img2,
    caption: "Your Beautiful Smile ✨",
    quote: "Your smile lights up my world"
  },
  {
    src: img1,
    caption: "Radiant & Gorgeous 💫",
    quote: "You shine brighter than stars"
  },
  {
    src: img3,
    caption: "Pure Joy & Happiness 🌟",
    quote: "Your happiness is contagious"
  },
  {
    src: img4,
    caption: "Absolutely Stunning 💖",
    quote: "Beautiful inside and out"
  },
  {
    src: img6,
    caption: "My Amazing Bestie 🎉",
    quote: "Grateful for your friendship"
  },
  {
    src: img5,
    caption: "Forever in My Heart 💕",
    quote: "You mean the world to me"
  }
];

const PhotoGallery = () => {
  return (
    <section className="responsive-spacing-lg bg-gradient-to-b from-background to-muted no-overflow-x safe-area-top">
      <div className="responsive-container">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl responsive-spacing-sm shadow-2xl border-2 border-pink-300 mx-auto max-w-2xl mobile-simplified">
            <h2 className="responsive-text-4xl font-bold mb-4 text-pink-600 drop-shadow-lg mobile-reduced-motion">
              Beautiful You 📸
            </h2>
          </div>
          <div className="mt-4 responsive-spacing-xs bg-white/80 backdrop-blur-sm rounded-lg border border-pink-200 max-w-2xl mx-auto">
            <p className="responsive-text-base font-medium text-gray-700 italic">
              "Every photo captures your amazing spirit and beauty! 💖"
            </p>
          </div>
        </div>
        
        <div className="responsive-grid">
          {photos.map((photo, index) => (
            <Card 
              key={index}
              className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-700 hover:scale-105 sm:hover:scale-110 lg:hover:scale-125 hover:rotate-2 sm:hover:rotate-3 lg:hover:rotate-6 group animate-zoom-in border-2 sm:border-4 backdrop-blur-sm hover:z-10 mobile-simplified touch-target"
              style={{ 
                borderColor: index % 3 === 0 ? "hsl(var(--accent))" : index % 3 === 1 ? "hsl(var(--primary))" : "hsl(var(--secondary))",
                animation: `parallax-float 5s ease-in-out infinite ${index * 0.3}s, zoom-in 0.6s ease-out forwards ${index * 0.3}s`,
              }}
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 sm:group-hover:scale-125 group-hover:rotate-1 sm:group-hover:rotate-3 transition-all duration-700"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6 text-center">
                  <p className="text-white text-sm sm:text-lg lg:text-xl font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 mb-1 sm:mb-2">
                    {photo.caption}
                  </p>
                  <p className="text-pink-200 text-xs sm:text-sm italic transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    "{photo.quote}"
                  </p>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                </div>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 text-center bg-gradient-sunset relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-white relative z-10 group-hover:scale-110 transition-transform duration-300">
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
