export default function LegalPageLayout({ title, updatedOn, children }) {
  return (
    <main className="min-h-screen bg-[#f7f4f1] px-4 pb-20 pt-36 md:pt-40">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-[#e8e1da] bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9d9287]">
          Legal
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#1e1c1a] md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-[#867f76]">Last updated: {updatedOn}</p>
        <div className="mt-10 space-y-8 text-base leading-8 text-[#5f574f]">
          {children}
        </div>
      </div>
    </main>
  );
}
