import { motion } from "framer-motion";


export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Contact Us
        </h2>
        <motion.form
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          action="https://formspree.io/f/xdoqvlgz" // Replace with your Formspree endpoint
          method="POST"
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md grid gap-6"
        >
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Direct contact details */}
        <div className="mt-10 text-center text-gray-700 dark:text-gray-300">
          <p>Email: <a href="mailto:sunshiensp1113@gmail.com" className="text-blue-500 hover:underline">sunshiensp1113@gmail.com</a></p>
          <p>Phone: <a href="tel:7875884096" className="text-blue-500 hover:underline">7875884096</a></p>
        </div>
      </div>
    </section>
  );
  
}
