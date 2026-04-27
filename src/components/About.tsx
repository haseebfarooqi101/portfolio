"use client";
import { motion } from "motion/react";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "40+" },
  { label: "Happy Clients", value: "25+" },
  { label: "GitHub Repos", value: "60+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
            Who I Am
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar / illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl card-glow"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
            >
              <div
                className="absolute inset-2 rounded-2xl flex items-center justify-center text-8xl"
                style={{ backgroundColor: "var(--card)" }}
              >
                👨‍💻
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Front-End Developer based in{" "}
              <span className="gradient-text">Islamabad, Pakistan</span>
            </h3>
            <p className="opacity-70 leading-relaxed mb-4" style={{ color: "var(--fg)" }}>
              I&apos;m a passionate front-end developer with a craze of  building
              modern, responsive web applications. I specialize in React, Next.js, and
              TypeScript/Tailwind, with a strong eye for design and user experience.
            </p>
            <p className="opacity-70 leading-relaxed mb-8" style={{ color: "var(--fg)" }}>
              When I&apos;m not coding, you&apos;ll find me exploring new design trends,
              contributing to open-source projects, or hiking in the mountains.
            </p>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Download Resume
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v8M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border card-glow"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            >
              <p className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm opacity-60" style={{ color: "var(--fg)" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
