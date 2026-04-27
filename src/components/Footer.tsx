"use client";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer
      className="py-8 px-4 border-t text-center"
      style={{ borderColor: "var(--border)" }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm opacity-50"
        style={{ color: "var(--fg)" }}
      >
        © {new Date().getFullYear()} M Haseeb Farooqi. Built with Next.js, Redux Toolkit, Tailwind CSS & Framer Motion.
      </motion.p>
    </footer>
  );
}
