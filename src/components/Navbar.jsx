const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-b-[32px] rounded-t-none bg-[#ffffff]/90 px-8 py-3 shadow-sm backdrop-blur-md">
        <a href="#" className="font-serif text-3xl font-semibold text-[#1e1c1a]">
          &Fold
        </a>

        <div className="hidden items-center gap-12 md:flex">
          {["About", "Offerings", "Journal", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1e1c1a] transition hover:text-[#9d9287]"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="rounded-full bg-[#9d9287] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#ffffff] transition hover:bg-[#867f76]"
        >
          Get &Fold
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
