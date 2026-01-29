import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <div
        className="absolute top-0 left-0 w-full z-50
             flex items-center px-6 py-4
             bg-white/15 backdrop-blur-md"
      >
        {/* Hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
        </div>

        {/* Logo */}
        <p
          className="absolute left-1/2 -translate-x-1/2
             text-2xl font-semibold tracking-wide
             md:static md:translate-x-0 text-white"
        >
          CosmosForSure
        </p>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 ml-auto">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="
                px-6 py-2 rounded-xl cursor-pointer
                text-gray-800 font-medium
                bg-white/10 backdrop-blur-md
                border border-transparent
                transition-all duration-300
                hover:bg-white/30
                hover:backdrop-blur-xl
                hover:border-white/40
                hover:shadow-sm
              "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side Menu */}
      {open && (
        <div
          className="fixed top-0 left-0 h-full w-72
                     bg-white/70 backdrop-blur-xl
                     z-50 shadow-xl"
        >
          <div
            className="text-2xl p-5 cursor-pointer text-gray-700"
            onClick={() => setOpen(false)}
          >
            ✕
          </div>

          <div className="flex flex-col gap-5 p-6 text-lg font-medium text-gray-800">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="
                  px-3 py-2 rounded-lg cursor-pointer
                  transition-all duration-300
                  hover:bg-white/40 hover:backdrop-blur-lg
                "
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
