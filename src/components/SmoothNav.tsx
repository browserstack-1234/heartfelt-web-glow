import { useState, useEffect } from "react";
import { Home, MessageSquare, Image, Cake } from "lucide-react";

const SmoothNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "messages", icon: MessageSquare, label: "Messages" },
    { id: "gallery", icon: Image, label: "Gallery" },
    { id: "final", icon: Cake, label: "Wish" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav 
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 backdrop-blur-xl bg-background/30 p-4 rounded-full border border-white/20 shadow-xl"
      style={{ background: "var(--gradient-glass)" }}
    >
      <div className="flex flex-col gap-4">
        {sections.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group relative p-3 rounded-full transition-all duration-300 ${
              activeSection === id
                ? "bg-accent text-white scale-110"
                : "text-muted-foreground hover:text-foreground hover:scale-105"
            }`}
            aria-label={label}
          >
            <Icon size={20} />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-3 py-1 bg-background/90 text-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SmoothNav;
