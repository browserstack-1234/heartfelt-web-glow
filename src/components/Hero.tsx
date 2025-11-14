import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/birthday-hero.jpg";
import MorphingText from "./MorphingText";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 gradient-radial" />
      
      {/* Floating Hearts - More animated */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-random"
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
            } opacity-40 animate-pulse-slow`}
            style={{
              filter: "drop-shadow(0 0 8px currentColor)",
            }}
          />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
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
            className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent"
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
              "To My Amazing Bestie 🎉",
              "My Partner in Crime 💫",
              "My Chosen Family 💖",
              "My Forever Friend 🌟"
            ]}
            className="text-3xl md:text-5xl font-semibold h-20 text-foreground drop-shadow-glow"
            interval={2500}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Today is all about celebrating YOU and the incredible person you are!
          </p>
        </motion.div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
