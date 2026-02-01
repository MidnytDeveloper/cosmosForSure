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
      <div className="absolute top-0 left-0 w-full z-50 flex items-center px-6 py-10 font-primary">
        {/* Hamburger (Mobile) */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>

        {/* Logo */}
        <img
          src="/assets/logo.png"
          alt="CosmosForSure"
          className="
            absolute left-1/2 -translate-x-1/2 translate-x-20
            h-8 md:h-10
            object-contain
            md:static md:translate-x-20
          "
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 flex-1 ml-80">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="
                text-white
                text-sm
                font-normal
                hover:text-gray-300
                transition-colors
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

      {/* Side Menu (Mobile) */}
      {open && (
        <div className="fixed top-0 left-0 h-full w-72 bg-white/70 backdrop-blur-xl z-50 shadow-xl font-primary">
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
                className="cursor-pointer hover:text-gray-500 transition-colors"
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
