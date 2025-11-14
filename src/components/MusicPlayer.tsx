import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Free birthday music URL (using a royalty-free happy birthday tune)
  const musicUrl = "https://www.bensound.com/bensound-music/bensound-memories.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-40 flex gap-2 safe-area-all">
      <Button
        onClick={togglePlay}
        size="lg"
        className="rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-glow animate-pulse-glow bg-gradient-sunset border-0 touch-target"
      >
        {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 sm:ml-1" />}
      </Button>
      <Button
        onClick={toggleMute}
        size="lg"
        variant="secondary"
        className="rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-card touch-target"
      >
        {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
      </Button>
      <audio ref={audioRef} loop src={musicUrl} />
    </div>
  );
};

export default MusicPlayer;
