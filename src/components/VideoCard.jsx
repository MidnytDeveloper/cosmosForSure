// import React from "react";
// import { Link } from "react-router-dom";

// const VideoCard = ({ videoSrc, title, category, link }) => {
//   return (
//     <div className="relative bg-white border border-gray-300 shadow-lg overflow-hidden rounded-xl group">
//       {/* Video - always running */}
//       <video
//         src={videoSrc}
//         className="w-full h-52 sm:h-60 md:h-64 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="metadata"
//       />

//       {/* Overlay */}
//       <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 flex flex-col gap-2">
//         {/* Category */}
//         <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-2 py-1 uppercase rounded">
//           {category}
//         </span>

//         {/* Title */}
//         <h3 className="text-white text-lg sm:text-xl font-semibold">{title}</h3>

//         {/* Link */}
//         {link && (
//           <Link
//             to={link}
//             className="self-start mt-2 px-2 py-0.5 bg-red-600 text-white rounded text-sm font-medium hover:bg-red-700 transition-colors"
//           >
//             Read more →
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoCard;

import React, { useRef } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ videoSrc, title, category, link }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // reset to start
    }
  };

  return (
    <div
      className="relative bg-white border border-gray-300 shadow-lg overflow-hidden rounded-xl group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-52 sm:h-60 md:h-64 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 flex flex-col gap-2">
        {/* Category */}
        <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-2 py-1 uppercase rounded">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-white text-lg sm:text-xl font-semibold">{title}</h3>

        {/* Link */}
        {link && (
          <Link
            to={link}
            className="self-start mt-2 px-2 py-0.5 bg-red-600 text-white rounded text-sm font-medium hover:bg-red-700 transition-colors"
          >
            Read more →
          </Link>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
