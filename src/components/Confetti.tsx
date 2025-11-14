import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

const Confetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(340, 75%, 65%)",
      "hsl(15, 85%, 60%)",
      "hsl(35, 95%, 65%)",
      "hsl(50, 95%, 70%)",
      "hsl(280, 75%, 65%)",
      "hsl(200, 85%, 60%)",
    ];

    const pieces: ConfettiPiece[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setConfetti(pieces);
    
    // Refresh confetti every 7 seconds
    const interval = setInterval(() => {
      const newPieces: ConfettiPiece[] = Array.from({ length: 100 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      setConfetti(newPieces);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            backgroundColor: piece.color,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            borderRadius: Math.random() > 0.5 ? "50%" : "0%",
            boxShadow: `0 0 10px ${piece.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
