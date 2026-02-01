import { motion } from "framer-motion";

const Aboutus = () => {
  const timeline = [
    {
      title: "Senior Research Fellow",
      institution: "National Institute of Technology Meghalaya",
      details: "Doctor of Philosophy - PhD, Mechanical Engineering",
      period: "Jan 2022 - Dec 2026",
    },
    {
      title: "Master of Technology - MTech",
      institution: "Madan Mohan Malaviya University of Technology",
      details: "Computer Integrated Manufacturing",
      period: "Aug 2019 - Jul 2021",
    },
    {
      title: "Bachelor of Technology - BTech",
      institution: "ITS Engineering College, Greater Noida",
      details: "Mechanical Engineering",
      period: "Aug 2014 - Jul 2018",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gray-900 flex flex-col items-center justify-start px-4 pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black/80 animate-gradientBackground -z-10"></div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-gray-800/70 backdrop-blur-lg border border-gray-700 rounded-3xl p-8 md:p-12 max-w-4xl shadow-2xl flex flex-col items-center"
      >
        {/* Profile Image */}
        <motion.img
          src="https://res.cloudinary.com/dtsp8zzu3/image/upload/v1769937452/k7taobepdi0qjbhov4r8.jpg"
          alt="Ankit Dhar Dubey"
          className="w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-blue-500 shadow-lg mb-6 object-cover"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg"
        >
          About Me
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-gray-300 text-base md:text-lg leading-relaxed text-center mb-8 max-w-2xl"
        >
          Welcome to{" "}
          <span className="text-blue-500 font-semibold">CosmosForSure</span>!
          I’m passionate about exploring and sharing the wonders of the cosmos
          and physics in a way that is both engaging and visually stunning.
        </motion.p>

        {/* Timeline */}
        <div className="relative w-full">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full border-l-2 border-blue-500"></div>

          <div className="flex flex-col gap-8 ml-10">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute left-[-1.45rem] top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-gray-900"></div>

                {/* Timeline Content */}
                <h3 className="text-white font-semibold text-lg md:text-xl">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-medium">{item.institution}</p>
                <p className="text-gray-400 text-sm md:text-base">
                  {item.details}
                </p>
                <p className="text-gray-500 text-xs md:text-sm">
                  {item.period}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Gradient Animation */}
      <style>
        {`
          @keyframes gradientBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradientBackground {
            background-size: 200% 200%;
            animation: gradientBackground 15s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Aboutus;
