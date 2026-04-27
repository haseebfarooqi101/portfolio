"use client";
import { motion } from "motion/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: "var(--accent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: "var(--accent2)" }}
      />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.p
          {...fadeUp(0.1)}
          className="text-sm font-semibold tracking-widest uppercase mb-4 opacity-60"
          style={{ color: "var(--accent)" }}
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          {...fadeUp(0.25)}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Muhamamd Haseeb Faroqoi</span>
        </motion.h1>

        <motion.h2
          {...fadeUp(0.4)}
          className="text-xl sm:text-2xl font-medium opacity-70 mb-8"
          style={{ color: "var(--fg)" }}
        >
          Front-End Developer &amp; UI/UX Enthusiast
        </motion.h2>

        <motion.p
          {...fadeUp(0.55)}
          className="text-base sm:text-lg opacity-60 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--fg)" }}
        >
          I craft beautiful, performant web experiences using modern technologies.
          Passionate about clean code, accessibility, and pixel-perfect design.
        </motion.p>

        <motion.div
          {...fadeUp(0.7)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-full font-semibold text-white text-sm"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(108,99,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold text-sm border"
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(108,99,255,0.1)" }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--fg)" }}>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
