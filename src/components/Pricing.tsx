// Pricing.tsx
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "₹4,999",
    features: [
      "Responsive Design",
      "1 Page Website",
      "SEO Optimized",
      "Delivery in 3 Days",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "₹9,999",
    features: [
      "Up to 5 Pages",
      "Custom Design",
      "SEO + Speed Optimization",
      "Free Hosting (1 year)",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹14,999",
    features: [
      "Unlimited Pages",
      "Dynamic CMS (Blog/Portfolio)",
      "Advanced SEO & Analytics",
      "Priority Support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white dark:bg-gray-950">
      <h2 className="text-3xl text-center font-bold mb-12 text-gray-800 dark:text-white">
        Pricing Plans
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`rounded-xl shadow-lg p-6 border ${
              plan.highlight
                ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-blue-600"
                : "bg-gray-100 dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded ${
                plan.highlight
                  ? "bg-white text-blue-600 font-semibold"
                  : "bg-blue-600 text-white"
              } hover:opacity-90 transition`}
            >
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
