const footerLinks = [
  { label: "Online Coaching", href: "#services" },
  { label: "Transformation Plans", href: "#packages" },
  { label: "Client Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e1da] bg-[#f4f1ee]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:items-start">
        <div>
          <p className="font-serif text-3xl font-semibold text-[#1e1c1a]">
            Fit by Simona
          </p>
          <p className="mt-4 max-w-md text-base leading-7 text-[#867f76]">
            Personal coaching designed to help women build confidence,
            consistency, and lasting results with support that fits real life.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1e1c1a]">
            Explore
          </p>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-base text-[#867f76] transition hover:text-[#1e1c1a]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1e1c1a]">
            Contact
          </p>
          <p className="mt-5 text-base leading-7 text-[#867f76]">
            Ready to start your coaching journey?
          </p>
          <a
            href="#packages"
            className="mt-5 inline-flex rounded-full bg-[#9d9287] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#867f76]"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="border-t border-[#e8e1da]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-[#867f76] md:flex-row md:items-center md:justify-between">
          <p>(c) 2026 Fit by Simona. All rights reserved.</p>
          <div className="flex flex-col gap-2 md:items-end">
            <p>Built for women ready to level up.</p>
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#1e1c1a]"
            >
              Powered by Ansely
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
