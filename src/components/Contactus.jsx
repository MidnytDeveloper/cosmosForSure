import { useState } from "react";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blac-900 to-black"></div>

      {/* ✨ Glass Form */}
      <div className="
        relative
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        shadow-2xl
        rounded-2xl
        p-8
        max-w-md
        w-full
        text-white
        my-40
      ">
        <h1 className="text-3xl font-extrabold mb-6 text-center tracking-wide">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="
              bg-white/20
              text-white
              placeholder-white/70
              px-4 py-2
              rounded-lg
              border border-white/30
              focus:outline-none
              focus:ring-2
              focus:ring-blue-400
            "
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="
              bg-white/20
              text-white
              placeholder-white/70
              px-4 py-2
              rounded-lg
              border border-white/30
              focus:outline-none
              focus:ring-2
              focus:ring-blue-400
            "
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="
              bg-white/20
              text-white
              placeholder-white/70
              px-4 py-2
              rounded-lg
              border border-white/30
              focus:outline-none
              focus:ring-2
              focus:ring-blue-400
            "
            required
          />

          <button
            type="submit"
            className="
              mt-2
              bg-blue-500/80
              hover:bg-blue-600
              text-white
              font-semibold
              py-2
              rounded-lg
              transition-all
              duration-300
              shadow-md
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
