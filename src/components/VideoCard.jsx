import React, { useRef } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ videoSrc, title, category, link }) => {
  const videoRef = useRef(null);

  return (
    <div className="relative bg-white border border-gray-300 shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-52 sm:h-60 md:h-64 object-cover"
        muted
        loop
        playsInline
        onMouseEnter={() => videoRef.current.play()}
        onMouseLeave={() => videoRef.current.pause()}
      ></video>

      {/* Overlay for category and title */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 flex flex-col gap-2">
        {/* Category/Label */}
        <span
          className="
            inline-block
            bg-white/20        
            backdrop-blur-md  
            border border-white/30
            text-white text-xs font-bold
            px-2 py-1          
            uppercase
            rounded
            whitespace-nowrap
          "
        >
          {category}
        </span>

        {/* Title */}
        <h3 className="text-white text-lg sm:text-xl font-semibold">{title}</h3>

        {/* Read More Button */}
        {link && (
          <Link
            to={link}
            className="self-start mt-1 text-sm font-medium text-red-600 hover:underline"
          >
            Read more <span className="ml-1">→</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
