import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const userPref = window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(userPref.matches ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 shadow-lg fixed top-0 z-50">
      <div className="text-xl font-bold text-blue-600 dark:text-white">
        Sunshine Web Studio
      </div>
      <div className="space-x-6 text-gray-800 dark:text-white">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleTheme} className="ml-4">
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
