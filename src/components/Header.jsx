import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <div
        className={`
          fixed top-0 left-0 w-full z-50
          flex items-center
          px-6 py-4
          font-primary
          transition-all duration-300
          ${
            isHome
              ? "bg-black/20 backdrop-blur-md border-b border-white/10"
              : "bg-black border-b border-white/10"
          }
        `}
      >
        {/* Hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-[2px] bg-white transition-all" />
          <span className="block w-6 h-[2px] bg-white transition-all" />
          <span className="block w-6 h-[2px] bg-white transition-all" />
        </div>

        {/* Logo → Home */}
        <Link to="/" className="cursor-pointer">
          <img
            src="/assets/logo.png"
            alt="CosmosForSure"
            className="
              absolute left-1/2 -translate-x-1/2
              h-8 md:h-10
              object-contain
              md:static md:translate-x-0
            "
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 ml-auto">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="
                text-white text-sm
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

      {/* Mobile Menu */}
      {open && (
        <div className="
          fixed top-0 left-0 h-full w-72
          bg-black backdrop-blur-xl
          z-50 shadow-xl
        ">
          <div
            className="text-2xl p-5 cursor-pointer text-white"
            onClick={() => setOpen(false)}
          >
            ✕
          </div>

          <div className="flex flex-col gap-5 p-6 text-lg text-white">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="hover:text-gray-300"
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
