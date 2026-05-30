import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["About", "Offerings", "Journal", "Contact"];

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-b-[32px] rounded-t-none bg-[#ffffff]/90 px-6 py-3 shadow-sm backdrop-blur-md">
        <a href="#" className="font-serif text-3xl font-semibold text-[#1e1c1a]">
          &Fold
        </a>

        <div className="hidden items-center gap-12 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1e1c1a] transition hover:text-[#9d9287]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden rounded-full bg-[#9d9287] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#ffffff] transition hover:bg-[#867f76] md:inline-flex"
          >
            Get &Fold
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd] bg-white text-xl text-[#1e1c1a] transition hover:border-[#9d9287] md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute inset-x-0 top-full z-40 bg-white/95 shadow-lg backdrop-blur-md md:hidden">
          <div className="space-y-2 px-6 py-5">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block rounded-3xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#1e1c1a] transition hover:bg-[#f4f1ee]"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="block rounded-full bg-[#9d9287] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.15em] text-[#ffffff] transition hover:bg-[#867f76]"
            >
              Get &Fold
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
