import { useState } from "react";
import Hero from "@/components/Hero";
import MessageSection from "@/components/MessageSection";
import PhotoGallery from "@/components/PhotoGallery";
import FinalMessage from "@/components/FinalMessage";
import Confetti from "@/components/Confetti";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingElements from "@/components/FloatingElements";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorTrail from "@/components/CursorTrail";
import InteractiveCake from "@/components/InteractiveCake";
import MemoryTimeline from "@/components/MemoryTimeline";
import SmoothNav from "@/components/SmoothNav";
// import LoadingScreen from "@/components/LoadingScreen";
// import Interactive3DCake from "@/components/Interactive3DCake";
// import VoiceMessageRecorder from "@/components/VoiceMessageRecorder";
import MagicalSurprise from "@/components/MagicalSurprise";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Enhanced Background Effects */}
      <AnimatedBackground />
      <Confetti />
      <FloatingElements />
      <CursorTrail />
      <MusicPlayer />
      <SmoothNav />
      
      {/* Main Content Sections */}
      <div id="hero">
        <Hero />
      </div>
      
      <div id="messages">
        <MessageSection />
      </div>
      
      <MemoryTimeline />
      
      <div id="gallery">
        <PhotoGallery />
      </div>
      
      {/* New Interactive Features */}
      <div className="container mx-auto px-4">
        <MagicalSurprise />
      </div>
      
      <div id="final">
        <FinalMessage />
        <InteractiveCake />
      </div>
    </div>
  );
};

export default Index;
