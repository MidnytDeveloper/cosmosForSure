import Typewriter from "typewriter-effect";

const VideoSection = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/public/assets/v6.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
        {/* Glass Panel for Main Heading */}
        <div className="px-6 sm:px-10 py-4 sm:py-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 animate-fadeInScale max-w-[90%] sm:max-w-[80%] lg:max-w-[90%]">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide md:tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] text-[#f5f7fa]">
            Physics and <span className="text-[#cfe0ff]">Cosmos</span>
          </h1>
        </div>

        {/* Subtitle with enhanced typing + heavier font */}
        <div className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide relative max-w-[90%] sm:max-w-[80%]">
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

      {/* Tailwind animations for glow */}
      <style>
        {`
          @keyframes fadeInGlow {
            0% { opacity: 0; transform: scale(0.95); text-shadow: 0 0 0px #fff; }
            50% { opacity: 1; transform: scale(1.02); text-shadow: 0 0 15px #cfe0ff; }
            100% { opacity: 1; transform: scale(1); text-shadow: 0 0 5px #cfe0ff; }
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
