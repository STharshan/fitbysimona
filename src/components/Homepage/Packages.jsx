import { useState } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: { monthly: 79, yearly: 63 },
    desc: "For runners getting started with more structure and routine.",
    features: [
      "Structured weekly run plan",
      "Goal-focused training schedule",
      "Progress tracking dashboard",
      "Monthly adjustments",
      "Clear weekly training guidance",
      "Ongoing email support",
    ],
  },
  {
    name: "Performance",
    price: { monthly: 129, yearly: 103 },
    desc: "Built for runners preparing for a goal, with more accountability.",
    popular: true,
    dark: true,
    features: [
      "Everything in Starter",
      "Customized weekly coaching plan",
      "Personalized pacing guidance",
      "Weekly accountability check-in",
      "Progress monitoring",
      "Monthly training updates",
    ],
  },
  {
    name: "Elite",
    price: { monthly: 189, yearly: 151 },
    desc: "For athletes who want a more tailored coaching experience.",
    features: [
      "Everything in Performance",
      "Fully personalized coaching plan",
      "Weekly coach check-ins",
      "Video or form feedback",
      "Race-day strategy",
      "Priority support",
    ],
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="w-full bg-[#f7f4f1] py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* TOGGLE */}
        <div className="mb-14 flex items-center justify-center gap-3">
          <span
            className={`text-xl font-semibold transition ${
              !yearly ? "text-[#1e1c1a]" : "text-[#867f76]"
            }`}
          >
            Monthly
          </span>

          <button
            onClick={() => setYearly(!yearly)}
            className={`relative h-10 w-16 rounded-full transition-all duration-500 ${
              yearly ? "bg-[#1e1c1a]" : "bg-[#9d9287]"
            }`}
          >
            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
              className="absolute top-1 h-8 w-8 rounded-full bg-[#ffffff] shadow-lg"
              style={{
                left: yearly ? "32px" : "4px",
              }}
            />
          </button>

          <span
            className={`text-xl font-semibold transition ${
              yearly ? "text-[#1e1c1a]" : "text-[#867f76]"
            }`}
          >
            Yearly
          </span>

          <div className="rounded-full bg-[#c0846b] px-3 py-1 text-lg font-bold text-[#ffffff]">
            -20%
          </div>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[34px] p-4 shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                plan.dark
                  ? "bg-[#3b2921] text-[#ffffff]"
                  : "border border-[#e8e1da] bg-[#ffffff] text-[#1e1c1a]"
              }`}
            >
              {/* TOP */}
              <div
                className={`rounded-[26px] p-7 ${
                  plan.dark ? "bg-[#1e1c1a]" : "bg-[#e8e1da]"
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>

                  {plan.popular && (
                    <span className="rounded-full bg-[#f5c77c] px-4 py-2 text-sm font-bold text-[#1e1c1a]">
                      Popular
                    </span>
                  )}
                </div>

                {/* PRICE ANIMATION */}
                <div className="mb-5 flex items-end gap-2 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={yearly ? "yearly" : "monthly"}
                      initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                      transition={{ duration: 0.45 }}
                      className="flex items-end gap-2"
                    >
                      <span className="text-6xl font-black tracking-tight">
                        $
                        {yearly
                          ? plan.price.yearly
                          : plan.price.monthly}
                      </span>

                      <span
                        className={`mb-2 text-base ${
                          plan.dark ? "text-[#e8e1da]" : "text-[#1e1c1a]"
                        }`}
                      >
                        /month
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <p
                  className={`text-lg leading-8 ${
                    plan.dark ? "text-[#e8e1da]" : "text-[#867f76]"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              {/* FEATURES */}
              <div className="px-6 pb-7 pt-8">
                <p className="mb-6 text-sm font-bold uppercase tracking-wide text-[#867f76]">
                  This Plan Includes:
                </p>

                <ul className="space-y-5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f5c77c] text-[#1e1c1a]">
                        <Check size={14} strokeWidth={3} />
                      </span>

                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BUTTON */}
              <div className="px-2 pb-2">
                <button
                  className={`h-14 w-full rounded-xl text-sm font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                    plan.dark
                      ? "bg-[#f5c77c] text-[#1e1c1a]"
                      : "bg-[#9d9287] text-[#ffffff]"
                  }`}
                >
                  GET STARTED
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
