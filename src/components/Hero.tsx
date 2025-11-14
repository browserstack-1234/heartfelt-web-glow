import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/birthday-hero.jpg";
import MorphingText from "./MorphingText";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 gradient-radial" />
      
      {/* Floating Hearts - More animated - Responsive */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-random hidden sm:block"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          <Heart
            className={`w-${4 + Math.floor(Math.random() * 6)} h-${4 + Math.floor(Math.random() * 6)} ${
              i % 3 === 0
                ? "text-accent fill-accent"
                : i % 3 === 1
                ? "text-primary fill-primary"
                : "text-secondary fill-secondary"
            } opacity-40 animate-pulse-slow mobile-reduced-motion`}
            style={{
              filter: "drop-shadow(0 0 8px currentColor)",
            }}
          />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto responsive-container safe-area-all">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2 
          }}
        >
          <h1 
            className="responsive-text-9xl font-bold mb-6 bg-clip-text text-transparent mobile-reduced-motion"
            style={{
              background: "var(--gradient-holographic)",
              backgroundSize: "300% 300%",
              animation: "holographic 8s ease infinite",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Happy Birthday!
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <MorphingText
            texts={[
              "To My Amazing Bestie ",
              "My Partner in Crime ",
              "My Chosen Family ",
              "My Forever Friend "
            ]}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold h-12 xs:h-16 sm:h-20 md:h-24 text-foreground drop-shadow-glow mobile-reduced-motion"
            interval={2500}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="responsive-text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Today is all about celebrating YOU and the incredible person you are!
          </p>
        </motion.div>
        
        {/* Responsive scroll indicator */}
        <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          {/* Icon-based indicator for larger screens */}
          <div className="hidden xs:block sm:hidden">
            <div className="w-5 h-8 border-2 border-primary rounded-full flex items-start justify-center p-1.5 touch-target">
              <div className="w-1 h-2 bg-primary rounded-full animate-scroll" />
            </div>
          </div>
          
          {/* Text indicator for mobile */}
          <div className="block xs:hidden">
            <div className="text-primary text-xs animate-pulse touch-target text-center">
              Scroll down ↓
            </div>
          </div>
          
          {/* Larger indicator for tablet+ */}
          <div className="hidden sm:block">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 touch-target">
              <div className="w-1 h-2 bg-primary rounded-full animate-scroll" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
