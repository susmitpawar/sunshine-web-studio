// Portfolio.tsx
import { motion } from "framer-motion";

const projects = [
  { title: "Bakery Website", image: "/img/bakery.png", link: "#" },
  { title: "Tech Startup", image: "/img/startup.png", link: "#" },
  { title: "Portfolio Site", image: "/img/portfolio.png", link: "#" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl text-center font-bold mb-10 text-gray-800 dark:text-white">
        Our Portfolio
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          >
            <img src={proj.image} alt={proj.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white">{proj.title}</h3>
              <a
                href={proj.link}
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
