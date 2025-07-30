import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen w-full flex items-center justify-center px-4 sm:px-8"
      style={{ backgroundImage: "url('/assets/hero.jpg')" }} // Change to your actual hero image name in public/assets
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white max-w-2xl space-y-4 sm:space-y-6"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg">
          We Build Beautiful Websites
        </h1>

        <p className="text-lg sm:text-xl drop-shadow-md">
          Stunning, fast, mobile-friendly websites tailored for your business.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <a
            href="#contact"
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:scale-105 transition"
          >
            Get a Free Quote
          </a>
          <a
            href="#portfolio"
            className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            View Portfolio
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
