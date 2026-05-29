import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const images = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop", 
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop", 
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop", 
  },
];

function BookNowBtn() {
  return (
    <button className="bg-[#9d9287] hover:bg-[#867f76] text-[#ffffff] font-medium px-6 py-2.5 sm:px-7 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap">
      Learn more
      <ArrowRight size={16} />
    </button>
  );
}

export default function ServicesSection() {
  const outerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollableHeight = el.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / scrollableHeight, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Split calculations into cleanly defined chronological scrolling phases
  const splitProgress = Math.min(progress / 0.3, 1);
  const cardsProgress = progress > 0.3 ? (progress - 0.3) / 0.7 : 0;
  
  // Slide effect shifts from center outwards on screens wider than mobile breakpoints
  const textTranslateX = typeof window !== 'undefined' && window.innerWidth >= 768 
    ? 25 * (1 - splitProgress) 
    : 0;

  return (
    <section 
      ref={outerRef} 
      id="services" 
      className="relative w-full bg-[#f7f4f1]" 
      style={{ height: "350vh" }}
    >
      {/* Pinned Sticky Box Shell Viewport Wrapper */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden px-4 sm:px-8 md:px-[8%]">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative">
          
          {/* Left Side Content Column */}
          <div 
            className="flex flex-col gap-4 sm:gap-6 will-change-transform transition-all duration-75 ease-out z-10 text-center md:text-left items-center md:items-start"
            style={{
              transform: `translateX(${textTranslateX}vw)`,
            }}
          >
            {/* Soft Sage Leaf Accent Logo */}
            <div className="text-[#c0846b] w-7 h-7 sm:w-8 sm:h-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4M12,18A2,2 0 0,1 10,16A2,2 0 0,1 12,14A2,2 0 0,1 14,16A2,2 0 0,1 12,18Z" />
              </svg>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 max-w-md md:max-w-none">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-serif text-[#1e1c1a] leading-[1.2] md:leading-[1.15] m-0">
                Discover the story of Aluna.
              </h2>
              <p className="text-[#867f76] text-sm sm:text-base leading-relaxed max-w-sm m-0 mx-auto md:mx-0">
                A welcoming space for movement and holistic well being. We help you reconnect with your body, mind, and build balance.
              </p>
            </div>

            <div className="mt-1 sm:mt-2">
              <BookNowBtn />
            </div>
          </div>

          {/* Right Side Cards Stacking Grid Layout Column */}
          <div 
            className="relative w-full flex justify-center items-center"
            style={{ 
              height: "260px", // Shorter height for mobile layout structures
              "--card-height-md": "340px",
              "--card-height-lg": "380px",
              opacity: splitProgress,
              transform: `scale(${0.9 + (splitProgress * 0.1)})`
            }}
            // Standard CSS variables applied inside Tailwind styles configuration to balance heights across sizes cleanly
            className="relative w-full flex justify-center items-center h-[280px] sm:h-[340px] md:h-[360px] lg:h-[380px]"
          >
            {images.map((item, index) => {
              const totalCards = images.length;
              const segment = 1 / totalCards;
              const cardStart = index * segment;
              const cardEnd = (index + 1) * segment;

              let translateY = 0;
              let opacity = 1;
              let rotate = (index - 1) * 3;

              if (cardsProgress > cardStart) {
                const cardActiveProgress = (cardsProgress - cardStart) / (cardEnd - cardStart);
                translateY = cardActiveProgress * -140;
                rotate = rotate - (cardActiveProgress * 12);
                opacity = 1 - cardActiveProgress;
              }

              return (
                <div
                  key={item.id}
                  className="absolute w-[75%] sm:w-[65%] md:w-[85%] h-full rounded-[20px] sm:rounded-[28px] bg-[#ffffff] p-2 sm:p-3 shadow-xl shadow-[#3b2921]/5 border border-[#e8e1da] will-change-transform transition-all duration-75 ease-out"
                  style={{
                    zIndex: totalCards - index,
                    transform: `translateY(${translateY}%) rotate(${rotate}deg)`,
                    opacity: opacity,
                  }}
                >
                  <div className="w-full h-full overflow-hidden rounded-[14px] sm:rounded-[20px]">
                    <img 
                      src={item.img} 
                      alt="Aluna Wellness Session" 
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
