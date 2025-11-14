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
    <>
      {/* Desktop Navigation - Right Side */}
      <nav 
        className="hidden lg:flex fixed right-4 xl:right-8 top-1/2 transform -translate-y-1/2 z-50 backdrop-blur-xl bg-background/30 p-3 xl:p-4 rounded-full border border-white/20 shadow-xl glass-nav"
      >
        <div className="flex flex-col gap-3 xl:gap-4">
          {sections.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`group relative p-2 xl:p-3 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? "bg-accent text-white scale-110"
                  : "text-muted-foreground hover:text-foreground hover:scale-105"
              }`}
              aria-label={label}
            >
              <Icon size={18} className="xl:w-5 xl:h-5" />
              
              {/* Tooltip */}
              <span className="absolute right-full mr-3 xl:mr-4 px-2 xl:px-3 py-1 bg-background/90 text-foreground text-xs xl:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm">
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile/Tablet Navigation - Hidden on mobile, only visible on tablets */}
      <nav className="hidden md:flex lg:hidden fixed bottom-1 left-1 right-8 xs:bottom-2 xs:left-2 xs:right-12 sm:bottom-2 sm:left-2 sm:right-12 md:bottom-3 md:left-3 md:right-16 z-50 backdrop-blur-xl bg-background/30 px-1 py-1 xs:px-1.5 xs:py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full border border-white/20 shadow-xl glass-nav safe-area-bottom"
      >
        <div className="flex gap-1 xs:gap-1.5 sm:gap-2.5 md:gap-3">
          {sections.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`group relative p-0.5 xs:p-1 sm:p-1.5 md:p-2 rounded-full transition-all duration-300 min-w-[32px] min-h-[32px] xs:min-w-[36px] xs:min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] md:min-w-[44px] md:min-h-[44px] flex items-center justify-center ${
                activeSection === id
                  ? "bg-accent text-white scale-110"
                  : "text-muted-foreground hover:text-foreground hover:scale-105"
              }`}
              aria-label={label}
            >
              <Icon size={14} className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              
              {/* Mobile Tooltip - Above button */}
              <span className="absolute bottom-full mb-2 px-2 py-1 bg-background/90 text-foreground text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm">
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default SmoothNav;
