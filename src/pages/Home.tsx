import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import WebsiteTypes from "../components/WebsiteTypes";
import AboutSection from "../components/AboutSection";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AOS.init();
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="pt-20 scroll-smooth">
      {/* Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow-md"
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </button>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(/assets/dp.jpg)` }}
      >
        <div className="relative z-10 flex flex-col justify-between h-full p-10">
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              We Build Beautiful Websites
            </motion.h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <section id="services" className="p-10 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Web Development","Website Design","E-commerce Website Development","Web Application Development","Social Media Marketing","Digital Marketing","SEO","Advertisement"].map((service, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-zinc-700 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p>We offer tailored solutions that match your business goals and deliver premium service quality.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="p-10 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Amazing Features</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Responsive design","Powerful Customization","Cool & modern animations","SEO Friendly Coding","Best Technical support","Parallax & Varied Layouts"].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-2">{feature}</h3>
              <p>Experience top-notch design and smooth functionality in every detail we build.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Types of Websites Section */}
      <WebsiteTypes />

      {/* Contact Section */}
      <section id="contact" className="p-10 bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-zinc-700"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-zinc-700"
              required
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-zinc-700"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-6 px-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Sunshine Web Studio. All rights reserved. | sunshinewebstudio.com
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917875884096"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}
