import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef(null);

  // Track the scroll progress across a 400vh long scroll track
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // --- 1. Top Heading Animations (0.00 -> 0.15) ---
  // Starts below the navbar, fades and scrolls out smoothly
  const topHeadingOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const topHeadingY = useTransform(scrollYProgress, [0, 0.15], ["0px", "-40px"]);

  // --- 2. Oval Video Movement & Expansion (0.00 -> 0.25) ---
  // Transforms position from the bottom layout up to full-bleed seamlessly
  const videoY = useTransform(scrollYProgress, [0, 0.25], ["0px", "-400px"]); 
  const videoWidth = useTransform(scrollYProgress, [0, 0.25], ["85%", "100%"]);
  const videoHeight = useTransform(scrollYProgress, [0, 0.55], ["48vh", "130vh"]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.25], ["240px", "0px"]);

  // --- 3. Sequential Overlaid Text Animations (0.25 -> 0.85) ---
  const text1Opacity = useTransform(scrollYProgress, [0.25, 0.32, 0.42], [0, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.22, 0.32, 0.42], ["40px", "0px", "-40px"]);

  const text2Opacity = useTransform(scrollYProgress, [0.45, 0.52, 0.62], [0, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.42, 0.52, 0.62], ["40px", "0px", "-40px"]);

  const text3Opacity = useTransform(scrollYProgress, [0.65, 0.72, 0.82], [0, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.62, 0.72, 0.82], ["40px", "0px", "-40px"]);

  // --- 4. Section Exit Stage (0.88 -> 1.00) ---
  const stickyY = useTransform(scrollYProgress, [0.88, 1], ["0vh", "0vh"]);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <motion.div
        style={{ y: stickyY }}
        className="relative sticky top-0 flex h-[135vh] w-full flex-col items-center justify-start overflow-hidden px-4 pt-28"
      >
        
        {/* 1. Top Heading Container */}
        {/* pt-6 ensures a clean, intentional gap underneath your fixed navbar layout */}
        <motion.div
          style={{ opacity: topHeadingOpacity, y: topHeadingY }}
          className="relative z-20 mx-auto max-w-5xl text-center mt-20 select-none"
        >
          {/* Decorative badges */}
          <span className="absolute left-[16%] top-[-4px] rounded-md bg-[#f5c77c] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#1e1c1a]">
            Shaped by Confidence
          </span>

          <h1 className="font-serif text-[52px] leading-[0.95] tracking-[-0.05em] text-[#1e1c1a] md:text-[80px]">
            Built for Women Ready to
            <br />
            Level Up
          </h1>

          <span className="absolute right-[10%] top-[90px] rounded-md bg-[#c0846b] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1e1c1a]">
            Built to Empower.
          </span>

          <span className="absolute bottom-[-14px] left-[4%] rounded-md bg-white px-4 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1e1c1a] shadow-sm">
            Collective
          </span>
        </motion.div>

        {/* 2. Oval Video Container */}
        <motion.div
          style={{
            y: videoY,
            width: videoWidth,
            height: videoHeight,
            borderRadius: videoRadius,
          }}
          className="relative z-10 overflow-hidden shadow-sm origin-top mt-15 mb-[-150px]"
        >
          <video
            src="https://framerusercontent.com/assets/gdWI7cVwY4SoFk1YRU2JfZLC8.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://framerusercontent.com/images/l7QEXORKC4L6leE4alk9Ikd7g.jpg?width=1018&height=432"
            className="h-full w-full object-cover object-center"
          />

          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-[#1e1c1a]/30" />

          {/* Sequential Text Overlay 1 */}
          <motion.div
            style={{ y: text1Y, opacity: text1Opacity }}
            className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
          >
            <span className="mb-5 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
              Where Your Transformation Begins
            </span>
            <h2 className="max-w-4xl font-serif text-[42px] leading-[1.05] text-white md:text-[76px]">
              Guiding you back to confidence, strength & balance.
            </h2>
          </motion.div>

          {/* Sequential Text Overlay 2 */}
          <motion.div
            style={{ y: text2Y, opacity: text2Opacity }}
            className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
          >
            <span className="mb-5 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
              What I Now Know
            </span>
            <h2 className="max-w-4xl font-serif text-[42px] leading-[1.05] text-white md:text-[76px]">
              Healing begins the moment you choose yourself.
            </h2>
          </motion.div>

          {/* Sequential Text Overlay 3 */}
          <motion.div
            style={{ y: text3Y, opacity: text3Opacity }}
            className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
          >
            <span className="mb-5 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
              Why This Matters to Me
            </span>
            <h2 className="max-w-4xl font-serif text-[42px] leading-[1.05] text-white md:text-[76px]">
              because becoming her is possible for every woman.
            </h2>
          </motion.div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-10 z-20 mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-4 px-4 text-center md:bottom-16">
          <p className="max-w-3xl text-sm leading-7 text-[#1e1c1a] md:text-base">
            A movement helping women feel as powerful as they look.
          </p>

          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
            <a
              href="#"
              className="rounded-full bg-[#9d9287] px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#867f76]"
            >
              Join The Team
            </a>
            <a
              href="#transformations"
              className="rounded-full border border-[#d8d0c8] bg-[#f4f1ee] px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#1e1c1a] transition hover:bg-[#e8e1da]"
            >
              Transformations
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;