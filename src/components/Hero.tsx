"use client";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-14"
    >
      <div className="max-w-5xl mx-auto w-full py-24">
        <motion.p {...fadeUp(0.1)} className="section-label mb-6">
          Front-End Developer
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
          style={{ color: "var(--fg)" }}
        >
          M Haseeb
          <br />
          Farooqi
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="text-base sm:text-lg max-w-lg leading-relaxed mb-10"
          style={{ color: "var(--muted)" }}
        >
          I build fast, accessible, and beautifully crafted web experiences.
          Focused on React, Next.js, and thoughtful UI design.
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all hover:opacity-70"
            style={{ backgroundColor: "var(--fg)", color: "var(--bg)", borderColor: "var(--fg)" }}
          >
            View Work
          </a>
          <a
            href="mailto:mhaseebfarooqi2@gmail.com?subject=Project%20Inquiry&body=Hi%20Haseeb%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you.%0A%0A"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all hover:opacity-70"
            style={{ borderColor: "var(--border)", color: "var(--muted)" }}
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.55)} className="flex items-center gap-4">
          {[
            { icon: <GithubIcon />, href: "https://github.com/haseebfarooqi101", label: "GitHub", newTab: true },
            { icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/haseeb-farooqi-733364344", label: "LinkedIn", newTab: true },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.newTab ? "_blank" : undefined}
              rel={s.newTab ? "noopener noreferrer" : undefined}
              className="transition-opacity hover:opacity-50"
              style={{ color: "var(--muted)" }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ color: "var(--border)" }}
      >
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
