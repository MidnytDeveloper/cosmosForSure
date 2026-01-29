import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-10 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black/80 animate-gradientBackground"></div>

      {/* Glass Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mt-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 max-w-3xl text-center shadow-xl flex flex-col items-center"
      >
        {/* Ankit Image */}
        <motion.img
          src="/public/assets/ankit.jpeg" // Replace with your image path
          alt="Ankit Dhar Dubey"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-white/30 mb-6 object-cover shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg text-white"
        >
          About Us
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4"
        >
          Welcome to{" "}
          <span className="text-[#0057ff] font-semibold">CosmosForSure</span>!
          Our mission is to explore and share the wonders of the cosmos and
          physics in an engaging way. We make complex ideas simple, fun, and
          visually stunning.
        </motion.p>

        {/* Published By */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="text-md md:text-lg text-gray-300 font-semibold mt-2"
        >
          Published by <span className="text-[#0057ff]">Ankit Dhar Dubey</span>
        </motion.p>
      </motion.div>

      {/* Tailwind gradient animation */}
      <style>
        {`
          @keyframes gradientBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradientBackground {
            background-size: 200% 200%;
            animation: gradientBackground 10s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Aboutus;
