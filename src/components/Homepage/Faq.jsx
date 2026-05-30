import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HeartHandshake } from "lucide-react";

const faqs = [
  {
    question: "How does online coaching work?",
    answer:
      "Once you sign up, you'll receive a personalised training and nutrition plan tailored to your goals, lifestyle, and experience level. Everything is managed through your coaching app where you can track workouts, progress, and stay connected throughout your journey.",
  },
  {
    question: "Do I need gym experience to start?",
    answer:
      "Not at all. Whether you're completely new to fitness or already training regularly, your plan will be built around your current level and adjusted as you progress.",
  },
  {
    question: "Will my nutrition plan be personalised?",
    answer:
      "Yes - your nutrition guidance is tailored to your goals, preferences, and lifestyle. The aim is to create something realistic, sustainable, and enjoyable rather than restrictive.",
  },
  {
    question: "How often will I receive support and check-ins?",
    answer:
      "Support depends on the package you choose. Plans range from bi-weekly email check-ins to full 24/7 WhatsApp support with ongoing accountability and fast adjustments when needed.",
  },
  {
    question: "What if I have a busy schedule?",
    answer:
      "Your coaching is designed to fit around your lifestyle. Workouts, nutrition, and routines are built to be realistic and manageable so you can stay consistent even with a busy routine.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="w-full overflow-hidden bg-[#f7f4f1] py-16 md:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <div className="mb-8">
            <HeartHandshake
              size={46}
              strokeWidth={1.7}
              className="text-[#c0846b]"
            />
          </div>

          <h2 className="max-w-md font-serif text-4xl font-semibold leading-[1] tracking-tight text-[#1e1c1a] md:text-6xl">
            Everything you need to know.
          </h2>

          <p className="mt-6 max-w-md text-base leading-8 text-[#867f76] md:text-lg">
            Everything you need to know before starting your coaching journey.
          </p>

          <button className="mt-8 flex w-fit items-center gap-3 rounded-full bg-[#9d9287] px-6 py-3 text-sm font-medium text-[#ffffff] transition-all duration-300 hover:scale-105">
            <span className="text-base">*</span>
            Contact us
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="rounded-[34px] bg-[#e8e1da] p-5 md:p-7"
        >
          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  layout
                  transition={{
                    layout: {
                      duration: 0.45,
                      type: "spring",
                    },
                  }}
                  className="overflow-hidden rounded-[22px] bg-[#ffffff]/60 backdrop-blur-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left md:px-8"
                  >
                    <h3 className="font-serif text-base font-semibold leading-snug text-[#1e1c1a] md:text-[22px]">
                      {faq.question}
                    </h3>

                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#9d9287]"
                    >
                      {isOpen ? (
                        <Minus size={22} className="text-[#ffffff]" />
                      ) : (
                        <Plus size={22} className="text-[#ffffff]" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-7 md:px-8">
                          <p className="max-w-3xl text-sm leading-7 text-[#867f76] md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
