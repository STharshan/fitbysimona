import React, { useState } from "react";

const Gallery = () => {
  const images = [
    { src: "/im1.webp", type: "h" },
    { src: "/im2.webp", type: "v" },
    { src: "/im3.webp", type: "h" },
    { src: "/im4.webp", type: "v" },
    { src: "/im5.webp", type: "h" },
    { src: "/im6.webp", type: "v" },
    { src: "/im7.webp", type: "h" },
    { src: "/im8.webp", type: "v" },
    { src: "/im9.webp", type: "h" },
    { src: "/im10.webp", type: "v" },
    { src: "/im11.webp", type: "h" },
    { src: "/im12.webp", type: "v" },
    { src: "/im13.webp", type: "h" },
    { src: "/im14.webp", type: "v" },
    { src: "/im15.webp", type: "h" },
    { src: "/im16.webp", type: "v" },
    { src: "/im17.webp", type: "h" },
    { src: "/im18.webp", type: "v" },
    { src: "/im19.webp", type: "h" },
    { src: "/im20.webp", type: "v" },
    { src: "/im21.webp", type: "h" },
    { src: "/im22.webp", type: "v" },
    { src: "/im23.webp", type: "h" },
    { src: "/im24.webp", type: "v" },
    { src: "/im25.webp", type: "h" },
    { src: "/im26.webp", type: "v" },
    { src: "/im27.webp", type: "h" },
    { src: "/im28.webp", type: "v" },
    { src: "/im29.webp", type: "h" },
    { src: "/im30.webp", type: "v" },
    { src: "/im31.webp", type: "h" },
    { src: "/im32.webp", type: "v" },
    { src: "/im33.webp", type: "h" },
    { src: "/im34.webp", type: "v" },
    { src: "/im35.webp", type: "h" },
    { src: "/im36.webp", type: "v" },
    { src: "/im37.webp", type: "h" },
    { src: "/im38.webp", type: "v" },
    { src: "/im39.webp", type: "h" },
    { src: "/im40.webp", type: "v" },
    { src: "/im41.webp", type: "h" },
    { src: "/im42.webp", type: "v" },
    { src: "/im43.webp", type: "h" },
  ];

  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-6 auto-rows-[250px] md:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImage(img.src)}
              className={`cursor-pointer overflow-hidden rounded-2xl shadow-lg ${
                img.type === "v" ? "row-span-2" : "row-span-1"
              }`}
            >
              <img
                src={img.src}
                alt={`gallery-${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN POPUP / MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
          onClick={() => setActiveImage(null)}
        >
          {/* Close Button at Top Right */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-3 right-6 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image Box */}
          <div 
            className="relative max-h-screen max-w-screen flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt="popup fullscreen"
              className="max-h-[95vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;