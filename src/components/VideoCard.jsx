// import React, { useRef } from "react";
// import { Link } from "react-router-dom";

// const VideoCard = ({ videoSrc, title, category, link }) => {
//   const videoRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   const handleMouseLeave = () => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0; // reset to start
//     }
//   };

//   return (
//     <div
//       className="relative bg-white border border-gray-300 shadow-lg overflow-hidden  group cursor-pointer"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Video */}
//       <video
//         ref={videoRef}
//         src={videoSrc}
//         className="w-full h-52 sm:h-60 md:h-64 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
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

  const handleMouseEnter = () => videoRef.current?.play();

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative">
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
          className="w-full h-52 sm:h-60 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full px-4 py-4 z-10">
          <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-2 py-1 uppercase">
            {category}
          </span>

          <h3 className="text-white text-lg sm:text-xl font-semibold mt-2 pr-28">
            {title}
          </h3>
        </div>
      </div>

      {/* Read More Button — fitted in cut area */}
      {link && (
        <Link
          to={link}
          className="absolute 
                     bottom-0 right-0
                     w-[4.9rem] h-[1.78rem]
                     bg-red-600 text-white
                     text-[11px] font-medium
                     flex items-center justify-center
                     border border-white/80
                     hover:bg-red-700
                     transition"
        >
          Read more →
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
