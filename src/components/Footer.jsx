const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0b1e2d] text-gray-300">
      
      {/* Floating stars */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-10 left-1/4 w-1.5 h-1.5 bg-white/40 rounded-full" />
        <span className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/60 rounded-full" />
        <span className="absolute bottom-16 right-1/4 w-1 h-1 bg-white/30 rounded-full" />
        <span className="absolute bottom-24 left-1/3 w-1.5 h-1.5 bg-cyan-400/40 rounded-full" />
      </div>

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
          <div className="mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          </div>

          <h2 className="text-cyan-400 text-lg font-semibold mb-3">
            CosmosForSure
          </h2>

          <div className="flex gap-3">
            <button className="px-4 py-1.5 text-xs rounded bg-cyan-500 text-black hover:bg-cyan-400 transition">
              Sign Up
            </button>
            <button className="px-4 py-1.5 text-xs rounded border border-cyan-400/40 hover:border-cyan-400 transition">
              Sign In
            </button>
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
    </footer>
  );
};

export default Footer;
