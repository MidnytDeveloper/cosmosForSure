import Typewriter from "typewriter-effect";

const VideoSection = () => {
  return (
    <div
      className="
        relative w-full overflow-hidden
      h-[40vh]
    sm:h-[45vh]      
    md:h-[28vh]      
    lg:h-[100vh]
      "
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dtsp8zzu3/video/upload/v1770276066/opv1nwmr3k2xaxelh88a.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* Left-Aligned Content */}
      <div className="absolute inset-0 flex flex-col justify-center z-10 px-8 sm:px-12 lg:px-24">
        <div className="max-w-full">
          <h1
            className="
  text-6xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl
  font-extrabold tracking-wide md:tracking-widest
  leading-[1.15]
  drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]
  text-[#f5f7fa] text-left
"
          >
            Physics
            <span
              className="
    block
    mt-0 sm:mt-0.5 md:mt-0.5
    text-[#cfe0ff]
text-6xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl
  "
            >
              and Cosmos
            </span>
          </h1>
        </div>

        <div className="mt-4 sm:mt-6 text-sm sm:text-base md:text-2xl lg:text-3xl font-semibold tracking-wide relative max-w-[100%] sm:max-w-[80%] text-left">
          <Typewriter
            options={{
              strings: [
                "<span class='text-white/80 animate-fadeInGlow'>Get to know the deepest secret of cosmos.</span>",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              pauseFor: 2000,
              wrapperClassName: "text-white/80 font-semibold",
            }}
          />
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInGlow {
            0% {
              opacity: 0;
              transform: scale(0.95);
              text-shadow: 0 0 0px #fff;
            }
            50% {
              opacity: 1;
              transform: scale(1.02);
              text-shadow: 0 0 15px #cfe0ff;
            }
            100% {
              opacity: 1;
              transform: scale(1);
              text-shadow: 0 0 5px #cfe0ff;
            }
          }

          .animate-fadeInGlow {
            display: inline-block;
            animation: fadeInGlow 1s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default VideoSection;
