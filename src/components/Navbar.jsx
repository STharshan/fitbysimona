import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Plans", href: "#packages" },
  { label: "Process", href: "#services" },
  { label: "Results", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-3">
      <nav className="mx-auto flex max-w-[1120px] items-center justify-between rounded-b-[36px] rounded-t-none border border-[#ece7e1] bg-[#ffffff]/95 px-8 py-4 shadow-[0_8px_24px_rgba(30,28,26,0.06)] backdrop-blur-md">
        <a
          href="#home"
          className="font-serif text-[34px] font-semibold leading-none tracking-[-0.04em] text-[#1e1c1a] md:text-[46px]"
        >
          Fit by Simona
        </a>

        <div className="hidden items-center gap-12 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#1e1c1a] transition hover:text-[#9d9287]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#packages"
            className="hidden rounded-full bg-[#a59786] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ffffff] transition hover:bg-[#8f8273] lg:inline-flex"
          >
            Apply Now
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd] bg-white text-[#1e1c1a] transition hover:border-[#9d9287] lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute inset-x-4 top-full z-40 mx-auto mt-2 max-w-[1120px] rounded-[28px] border border-[#ece7e1] bg-white/95 shadow-lg backdrop-blur-md lg:hidden">
          <div className="space-y-2 px-6 py-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-3xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#1e1c1a] transition hover:bg-[#f4f1ee]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#packages"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-[#a59786] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.15em] text-[#ffffff] transition hover:bg-[#8f8273]"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
