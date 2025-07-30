import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50 dark:bg-gray-900" id="about">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <img
            src="/assets/about.png"
            alt="About Sunshine Web Studio"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            About Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Sunshine Web Studio is a team of passionate developers dedicated to
            building powerful, elegant, and fast websites.
            <br /><br />
            We specialize in responsive designs, SEO-friendly code, modern animations,
            and business-focused solutions. We bring your brand to life online —
            attract customers, impress clients, and grow your digital presence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
