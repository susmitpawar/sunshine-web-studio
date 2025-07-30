// src/components/WebsiteTypeCard.tsx
import { motion } from "framer-motion";

interface WebsiteTypeCardProps {
  image: string;
  title: string;
  description: string;
}

const WebsiteTypeCard: React.FC<WebsiteTypeCardProps> = ({ image, title, description }) => {
  return (
    <motion.div
      className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* ALWAYS VISIBLE TITLE BAR */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white px-4 py-2 z-20">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      {/* FADE-IN DESCRIPTION ON HOVER (behind title) */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center px-4 text-white text-center">
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default WebsiteTypeCard;
