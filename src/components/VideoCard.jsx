import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ videoSrc, title, category, link }) => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // 👇 Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true);
        }
      },
      {
        threshold: 0.4, // show when 40% visible
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="relative">
      {/* Card */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative bg-white border border-white/70 shadow-lg overflow-hidden group cursor-pointer cut-card"
      >
        {/* Video */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="
            w-full
            h-72
            sm:h-60
            md:h-64
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Content (Scroll reveal) */}
        <div
          className={`
            absolute bottom-0 left-0 w-full px-4 py-4 z-10
            transition-all duration-700 ease-out
            ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-2 py-1 uppercase">
            {category}
          </span>

          <h3 className="text-white text-lg sm:text-xl font-semibold mt-2 pr-28">
            {title}
          </h3>
        </div>
      </div>

      {/* Read More Button */}
      {link && (
        <Link
          to={link}
          className="
            absolute bottom-0 right-0
            w-[4.9rem] h-[1.78rem]
            bg-red-600 text-white
            text-[11px] font-medium
            flex items-center justify-center
            border border-white/80
            hover:bg-red-700
            transition
          "
        >
          Explore →
        </Link>
      )}

      {/* Clip-path */}
      <style>
        {`
          .cut-card {
            border-radius: 0;
            clip-path: polygon(
              0 0,
              100% 0,
              100% calc(100% - 30px),
              calc(100% - 80px) calc(100% - 30px),
              calc(100% - 80px) 100%,
              0 100%
            );
          }
        `}
      </style>
    </div>
  );
};

export default VideoCard;
