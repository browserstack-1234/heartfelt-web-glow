import { Heart, Star, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  Icon: any;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const icons = [Heart, Star, Sparkles];
    const colors = [
      "text-accent",
      "text-primary",
      "text-secondary",
      "text-pink-400",
      "text-yellow-400",
    ];

    const floatingElements: FloatingElement[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 3,
      size: 20 + Math.random() * 20,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setElements(floatingElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {elements.map((element) => {
        const Icon = element.Icon;
        return (
          <div
            key={element.id}
            className={`absolute animate-float-random ${element.color} opacity-30`}
            style={{
              left: `${element.left}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <Icon
              size={element.size}
              className="fill-current"
              style={{
                filter: "drop-shadow(0 0 10px currentColor)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;
