import { useState } from "react";
import Hero from "@/components/Hero";
import MessageSection from "@/components/MessageSection";
import PhotoGallery from "@/components/PhotoGallery";
import Confetti from "@/components/Confetti";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingElements from "@/components/FloatingElements";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorTrail from "@/components/CursorTrail";
import InteractiveCake from "@/components/InteractiveCake";
import MemoryTimeline from "@/components/MemoryTimeline";
import SmoothNav from "@/components/SmoothNav";
import MagicalSurprise from "@/components/MagicalSurprise";
import FinalMessage from "@/components/FinalMessage";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden mobile-nav-safe-area">
      {/* Enhanced Background Effects */}
      <AnimatedBackground />
      <Confetti />
      <FloatingElements />
      <CursorTrail />
      <MusicPlayer />
      <SmoothNav />
      
      {/* Main Content Sections */}
      <div id="hero" className="scroll-mt-16">
        <Hero />
      </div>
      
      <div id="messages" className="scroll-mt-16">
        <MessageSection />
      </div>
      
      <div className="scroll-mt-16">
        <MemoryTimeline />
      </div>
      
      <div id="gallery" className="scroll-mt-16">
        <PhotoGallery />
      </div>
      
      {/* New Interactive Features */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <MagicalSurprise />
      </div>
      
      <div id="final" className="scroll-mt-16">
        <FinalMessage />
        <div className="pb-20 sm:pb-24 lg:pb-20">
          <InteractiveCake />
        </div>
      </div>
    </div>
  );
};

export default Index;
