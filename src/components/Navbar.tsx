import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/assets/sun.png"
            alt="Sunshine Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 text-transparent bg-clip-text tracking-tight">
            Sunshine <span className="text-blue-600">Web Studio</span>
          </span>
        </motion.div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 font-semibold text-gray-800">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: "#2563EB" }}
              className="cursor-pointer hover:text-blue-600 transition-colors duration-300"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-1.5 rounded-full shadow-inner">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search services"
            className="bg-transparent outline-none text-sm placeholder-gray-500 text-gray-800"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-in */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md rounded-b-xl px-6 pt-4 pb-6"
          >
            <ul className="flex flex-col space-y-4 text-lg font-semibold text-gray-800">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            {/* Mobile Search */}
            <div className="mt-4 flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-inner">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search 🔍"
                className="bg-transparent outline-none text-sm placeholder-gray-500 text-gray-800"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
