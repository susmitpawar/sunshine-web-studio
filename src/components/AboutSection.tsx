import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-zinc-900 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="/assets/about.png"
          alt="About"
          className="rounded-xl shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            Sunshine Web Studio is a team of passionate developers dedicated to building powerful, elegant, and fast websites.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We specialize in responsive designs, SEO-friendly code, modern animations, and business-focused solutions.
            We bring your brand to life online — attract customers, impress clients, and grow your digital presence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
