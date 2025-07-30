// src/components/TypesSection.tsx
import WebsiteTypeCard from "../components/WebsiteTypeCard";
import { motion } from "framer-motion";

const types = [
  {
    image: "/assets/ecommerce.jpg",
    title: "E-Commerce Website",
    description: "Sell products online with secure checkout and payment integration.",
  },
  {
    image: "/assets/business.jpg",
    title: "Business Website",
    description: "Promote your company, services, and generate customer trust.",
  },
  {
    image: "/assets/blog.jpg",
    title: "Blog Website",
    description: "Share tutorials, opinions, and news with your audience.",
  },
  {
    image: "/assets/portfolio.jpg",
    title: "Portfolio Website",
    description: "Showcase your creative work and projects beautifully.",
  },
  {
    image: "/assets/event.jpg",
    title: "Event Website",
    description: "Promote and manage events with booking and schedules.",
  },
  {
    image: "/assets/personal.jpg",
    title: "Personal Website",
    description: "Present your personal brand, resume, or life journey.",
  },
  {
    image: "/assets/membership.jpg",
    title: "Membership Website",
    description: "Offer exclusive content and user login/registration features.",
  },
  {
    image: "/assets/nonprofit.jpg",
    title: "Non-Profit Website",
    description: "Raise awareness and donations for your cause.",
  },
  {
    image: "/assets/info.jpg",
    title: "Informational Website",
    description: "Educational or resource websites with structured content.",
  },
];

const TypesSection = () => {
  return (
    <section id="types" className="py-16 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Types of Website Development We Provide
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {types.map((type, index) => (
          <WebsiteTypeCard
            key={index}
            image={type.image}
            title={type.title}
            description={type.description}
          />
        ))}
      </div>
    </section>
  );
};

export default TypesSection;
