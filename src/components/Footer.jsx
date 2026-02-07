const Footer = () => {
  const stars = Array.from({ length: 22 });

  return (
    <footer className="relative overflow-hidden bg-black text-gray-300">
      
      {/* Moving stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((_, i) => {
          const size = Math.random() * 2 + 1; // 1–3px
          const opacity = Math.random() * 0.5 + 0.2;
          const duration = Math.random() * 20 + 20; // 20–40s
          const delay = Math.random() * 10;
          const isCyan = Math.random() > 0.8;

          return (
            <span
              key={i}
              className={`absolute rounded-full ${
                isCyan ? "bg-cyan-400" : "bg-white"
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity,
                animation: `floatStar ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-10 py-24 grid grid-cols-1 md:grid-cols-3 gap-20">
        
        {/* Left links */}
        <div>
          <h3 className="text-cyan-400 font-medium mb-4">Welcome</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">For Educators</li>
            <li className="hover:text-white cursor-pointer">For Employers</li>
            <li className="hover:text-white cursor-pointer">Why CosmosForSure?</li>
            <li className="hover:text-white cursor-pointer">Reviews</li>
          </ul>
        </div>

        {/* Center brand */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 relative flex justify-center">
            <span
              className="
                inline-block w-2 h-2 rounded-full bg-white
                shadow-[0_0_20px_rgba(255,255,255,0.9)]
                animate-orbitDot
              "
            />
          </div>

          <h2 className="text-cyan-400 text-lg font-semibold mb-3">
            CosmosForSure
          </h2>

         
        </div>

        {/* Contact */}
        <div className="text-right">
          <h3 className="text-cyan-400 font-medium mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400 mb-2">
            Do you have any questions?
          </p>
          <p className="text-sm text-cyan-400 cursor-pointer hover:underline">
            support@cosmosforsure.com
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} CosmosForSure
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes floatStar {
            0% {
              transform: translateY(0) translateX(0);
            }
            100% {
              transform: translateY(-120px) translateX(40px);
            }
          }

          @keyframes orbitDot {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.8;
            }
            50% {
              transform: translateY(-6px) scale(1.1);
              opacity: 1;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 0.8;
            }
          }

          .animate-orbitDot {
            animation: orbitDot 3s ease-in-out infinite;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
