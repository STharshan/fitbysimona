import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-[#f7f4f1] px-4 pt-28">
      <div className="mx-auto max-w-3xl rounded-[32px] border border-[#e8e1da] bg-white p-10 text-center shadow-sm md:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9d9287]">
          404 Error
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-[#1e1c1a] md:text-7xl">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#867f76] md:text-lg">
          The page you are looking for does not exist, may have moved, or is no
          longer available.
        </p>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#9a9188] md:text-base">
          You can return to the homepage, explore our coaching plans, or go
          back to the previous page and try again.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex rounded-full bg-[#9d9287] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#867f76]"
          >
            Back to Home
          </Link>
          <a
            href="#packages"
            className="inline-flex rounded-full border border-[#d8d0c8] bg-[#f4f1ee] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1e1c1a] transition hover:bg-[#e8e1da]"
          >
            View Plans
          </a>
        </div>
      </div>
    </section>
  );
}
