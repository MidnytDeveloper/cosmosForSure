import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import VideoSection from "./VideoSection";
import VideoCardsSection from "./VideoCardsSection";

const Body = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Show button when near footer (last 20% of page)
      if (scrollPosition > pageHeight * 0.8) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <VideoSection />
      <VideoCardsSection />

      {/* Move to top button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
      fixed bottom-5 right-5 z-50
      p-2.5 rounded-full
      bg-cyan-500 text-black
      shadow-[0_0_12px_rgba(34,211,238,0.6)]
      hover:bg-cyan-400
      hover:scale-105
      transition-all duration-300
    "
          aria-label="Move to top"
        >
          <FaArrowUp size={14} />
        </button>
      )}
    </div>
  );
};

export default Body;
