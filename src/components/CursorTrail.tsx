import { useEffect, useState } from "react";

interface Trail {
  id: number;
  x: number;
  y: number;
}

const CursorTrail = () => {
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
      };

      setTrails((prev) => [...prev.slice(-15), newTrail]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) => prev.slice(-10));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-accent to-primary"
          style={{
            left: trail.x,
            top: trail.y,
            animation: "cursor-trail 0.6s ease-out forwards",
            filter: "blur(2px)",
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
