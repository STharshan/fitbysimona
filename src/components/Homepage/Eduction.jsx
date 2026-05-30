import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const videos = [
  {
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=900",
  },
  {
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=900",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=900",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=900",
  },
];

export default function MethodInAction() {
  // active 1 na initial load la 3 images show aagum
  const [active, setActive] = useState(1);

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setActive((prev) =>
      prev === videos.length - 1 ? videos.length - 1 : prev + 1
    );
  };

  return (
    <section className="w-full overflow-hidden bg-[#ffffff] py-10">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tight text-[#1e1c1a] md:text-6xl">
          See The Method In Action
        </h2>

        <div className="relative mx-auto flex w-full max-w-[1200px] items-center justify-center">
          <button
            onClick={prevSlide}
            disabled={active === 0}
            className={`absolute left-[24%] z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e1da] bg-[#ffffff] text-[#1e1c1a] shadow-xl transition-all active:scale-95 md:left-[27%] ${
              active === 0 ? "cursor-not-allowed opacity-30" : "opacity-100"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="relative flex h-[600px] w-full items-center justify-center [perspective:2000px]">
            {videos.map((item, index) => {
              const position = index - active;
              const isActive = position === 0;
              const isVisible =
                position === 0 || position === 1 || position === -1;

              return (
                <div
                  key={index}
                  className="absolute h-[540px] w-[320px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] sm:w-[360px]"
                  style={{
                    transform: `
                      translateX(${position * 380}px)
                      scale(${isActive ? 1 : 0.82})
                      rotateY(${position * -18}deg)
                    `,
                    opacity: isActive ? 1 : isVisible ? 0.4 : 0,
                    zIndex: isActive ? 30 : 10 - Math.abs(position),
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-[#1e1c1a] shadow-2xl">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />

                    <div
                      className={`absolute inset-0 transition-colors duration-700 ${
                        isActive ? "bg-[#1e1c1a]/10" : "bg-[#ffffff]/40"
                      }`}
                    />

                    <button className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffffff] shadow-2xl">
                      <Play
                        size={22}
                        fill="#1e1c1a"
                        className="ml-0.5 text-[#1e1c1a]"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            disabled={active === videos.length - 1}
            className={`absolute right-[24%] z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e1da] bg-[#ffffff] text-[#1e1c1a] shadow-xl transition-all active:scale-95 md:right-[27%] ${
              active === videos.length - 1
                ? "cursor-not-allowed opacity-30"
                : "opacity-100"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}