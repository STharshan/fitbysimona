import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
    rotate: "-6deg",
    x: -25,
    y: -15,
    z: "z-30",
  },
  {
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200",
    rotate: "2deg",
    x: 10,
    y: 10,
    z: "z-20",
  },
  {
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
    rotate: "8deg",
    x: 35,
    y: 25,
    z: "z-10",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f7f4f1] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* TOP ICON */}
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#9d9287]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2L15 8H22L16.5 12L18.5 19L12 15L5.5 19L7.5 12L2 8H9L12 2Z"
              />
            </svg>
          </div>

          {/* TITLE */}
          <h2 className="mb-6 font-serif text-5xl font-semibold leading-tight tracking-tight text-[#1e1c1a] md:text-7xl">
            Discover the story of Aluna.
          </h2>

          {/* DESCRIPTION */}
          <p className="max-w-xl text-xl leading-[1.8] text-[#867f76] md:text-2xl">
            A welcoming space for movement and holistic well being. We help you
            reconnect with your body, mind, and build balance.
          </p>

          {/* BUTTON */}
          <button className="group mt-10 flex items-center gap-3 rounded-full bg-[#9d9287] px-8 py-5 text-lg font-semibold text-[#ffffff] transition-all duration-500 hover:scale-105">
            Learn more
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffffff]/20 transition-all duration-500 group-hover:translate-x-1">
              <ArrowRight size={18} />
            </span>
          </button>
        </motion.div>

        {/* RIGHT STACKED CARDS */}
        <div className="relative flex h-[500px] items-center justify-center lg:justify-end lg:pr-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: 160, // வலது பக்கத்தில் இருந்து கார்டுகள் தொடங்கும்
                y: 40,
                rotate: 0,
              }}
              whileInView={{
                opacity: 1,
                x: card.x, // வீடியோவில் உள்ளது போல் பக்கவாட்டில் பிரியும்
                y: card.y,
                rotate: card.rotate,
              }}
              transition={{
                type: "spring",
                stiffness: 45,  // மென்மையான ஸ்பிரிங் அனிமேஷன்
                damping: 14,
                mass: 1.2,
                delay: index * 0.15, // ஒவ்வொரு கார்டும் தனித்தனியாக வர சிறிய தாமதம்
              }}
              viewport={{ once: true, margin: "-100px" }}
              className={`absolute ${card.z}`}
            >
              {/* கார்டுகளின் பார்டர் மற்றும் நிழல் (Border & Shadow) */}
              <div className="rounded-[24px] bg-[#e8e1da] p-2.5 shadow-[0_15px_45px_rgba(59,41,33,0.12)]">
                {/* கார்டுகளின் அளவு - Landscape வடிவம் (Width > Height) */}
                <div className="h-[220px] w-[320px] overflow-hidden rounded-[18px] sm:h-[280px] sm:w-[420px] md:h-[320px] md:w-[480px]">
                  <img
                    src={card.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
