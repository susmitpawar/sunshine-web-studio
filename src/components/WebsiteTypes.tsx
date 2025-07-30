import React from "react";
import { motion } from "framer-motion";

const websiteTypes = [
  {
    title: "E-Commerce Website",
    image: "/assets/ecommerce.jpg",
    description: "Online stores for products and services. Built for growth, ease of use, and security.",
  },
  {
    title: "Business Website",
    image: "/assets/business.jpg",
    description: "Professional websites for businesses to showcase services, team, and contact info.",
  },
  {
    title: "Blog Website",
    image: "/assets/blog.jpg",
    description: "Blogs are a space for people to share written and visual content about whatever they desire.",
  },
  {
    title: "Portfolio Website",
    image: "/assets/portfolio.jpg",
    description: "Showcase your creative work with a visually appealing and responsive portfolio.",
  },
  {
    title: "Event Website",
    image: "/assets/event.jpg",
    description: "Promote events with schedules, registration, and updates. Ideal for conferences and launches.",
  },
  {
    title: "Personal Website",
    image: "/assets/personal.jpg",
    description: "Create a personal online presence or resume-style website to stand out.",
  },
  {
    title: "Membership Website",
    image: "/assets/membership.jpg",
    description: "Websites that allow user signups, subscriptions, and premium content access.",
  },
  {
    title: "Non-profit Website",
    image: "/assets/nonprofit.jpg",
    description: "Web presence for NGOs and non-profits to inform and collect donations.",
  },
  {
    title: "Informational Website",
    image: "/assets/info.jpg",
    description: "Used for sharing encyclopedic or structured info like Wikipedia or news portals.",
  },
];

const WebsiteTypes = () => {
  return (
    <div className="py-16 px-4 md:px-20 bg-white" id="types">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Types of Website Development We Provide
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {websiteTypes.map((site, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            data-aos="fade-up"
            className="relative overflow-hidden rounded-xl shadow-md group"
          >
            <img
              src={site.image}
              alt={site.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">{site.title}</h3>
              <p className="text-sm">{site.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteTypes;
