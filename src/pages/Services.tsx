import React from 'react';

const Services = () => {
  return (
    <section id="services" className="p-10 bg-gray-800" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-4 text-yellow-300">Our Services</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <li className="p-6 bg-gray-700 rounded-xl shadow-xl">Website Design</li>
        <li className="p-6 bg-gray-700 rounded-xl shadow-xl">Website Development</li>
        <li className="p-6 bg-gray-700 rounded-xl shadow-xl">SEO Optimization</li>
      </ul>
    </section>
  );
};

export default Services;