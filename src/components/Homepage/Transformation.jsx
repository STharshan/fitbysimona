import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { transformationImages as images } from "./image";

export default function MethodInAction() {
  const [active, setActive] = useState(1);

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setActive((prev) =>
      prev === images.length - 1 ? images.length - 1 : prev + 1
    );
  };

  return (
    <section className="w-full overflow-hidden bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tight text-[#1e1c1a] md:text-6xl">
          See The Method In Action
        </h2>

        <div className="relative mx-auto flex w-full max-w-[1200px] items-center justify-center">
          <button
            onClick={prevSlide}
            disabled={active === 0}
            className={`absolute left-[24%] z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e1da] bg-white text-[#1e1c1a] shadow-xl transition-all active:scale-95 md:left-[27%] ${
              active === 0 ? "cursor-not-allowed opacity-30" : "opacity-100"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="relative flex h-[600px] w-full items-center justify-center [perspective:2000px]">
            {images.map((image, index) => {
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
                  <div className="relative h-full w-full overflow-hidden rounded-[24px] shadow-2xl">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="h-full w-full object-cover"
                    />

                    <div
                      className={`absolute inset-0 transition-colors duration-700 ${
                        isActive ? "bg-black/10" : "bg-white/40"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            disabled={active === images.length - 1}
            className={`absolute right-[24%] z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e1da] bg-white text-[#1e1c1a] shadow-xl transition-all active:scale-95 md:right-[27%] ${
              active === images.length - 1
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
