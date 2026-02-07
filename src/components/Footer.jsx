import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const stars = Array.from({ length: 22 });

  return (
    <footer className="relative overflow-hidden bg-black text-gray-300">
      
      {/* Moving stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((_, i) => {
          const size = Math.random() * 2 + 1;
          const opacity = Math.random() * 0.5 + 0.2;
          const duration = Math.random() * 20 + 20;
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

        {/* Center brand + socials */}
        <div className="flex flex-col items-center justify-center gap-6">
          <h2
            className="
              text-cyan-400
              text-3xl md:text-4xl
              font-bold
              tracking-widest
              drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]
            "
          >
            CosmosForSure
          </h2>

          {/* Social icons */}
          <div className="flex gap-5">
            <a
              href="#"
              className="p-3 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <FaGithub size={16} />
            </a>
          </div>
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
        `}
      </style>
    </footer>
  );
};

export default Footer;
