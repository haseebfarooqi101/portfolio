"use client";

export default function Footer() {
  return (
    <footer
      className="py-6 px-6 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} M Haseeb Farooqi
        </p>
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          Built with Next.js · Redux Toolkit · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
