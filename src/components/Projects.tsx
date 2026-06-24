"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, GitFork } from "lucide-react";

const categories = ["All", "Next.js", "Full Stack", "HTML/CSS"];

const projects = [
  {
    title: "Netflix Clone",
    description:
      "Pixel-perfect Netflix clone that streams a local MKV library with metadata and trailers pulled from TMDB. Features login, profile selector, hero banner, hover preview cards, and a full video player.",
    tags: ["Next.js", "TypeScript", "Express", "TMDB API", "Tailwind"],
    category: "Full Stack",
    github: "https://github.com/haseebfarooqi101/Netflix-Clone",
    live: "#",
  },
  {
    title: "Academic Portal",
    description:
      "Next.js web app for managing academic workflows. Built with collaborative branching and pull-request-based development.",
    tags: ["Next.js", "JavaScript", "CSS"],
    category: "Next.js",
    github: "https://github.com/haseebfarooqi101/academic-portal",
    live: "#",
  },
  {
    title: "Prime Video Landing",
    description:
      "Responsive pixel-perfect clone of the Amazon Prime Video landing page, built with pure HTML and CSS.",
    tags: ["HTML", "CSS"],
    category: "HTML/CSS",
    github: "https://github.com/haseebfarooqi101/prime-video-landing",
    live: "https://prime-video-landing.vercel.app",
  },
  {
    title: "Portfolio",
    description:
      "This portfolio — built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Redux Toolkit.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Redux", "Framer Motion"],
    category: "Next.js",
    github: "https://github.com/haseebfarooqi101/portfolio",
    live: "#",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 px-6 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Work</p>
          <div className="divider" />
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-1.5 rounded-full text-xs font-medium border transition-all"
              style={{
                backgroundColor: active === cat ? "var(--fg)" : "transparent",
                color: active === cat ? "var(--bg)" : "var(--muted)",
                borderColor: active === cat ? "var(--fg)" : "var(--border)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group p-6 rounded-xl border flex flex-col justify-between transition-colors hover:border-current"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repo for ${project.title}`}
                        className="opacity-30 group-hover:opacity-100 transition-opacity"
                        style={{ color: "var(--fg)" }}
                      >
                        <GitFork size={15} />
                      </a>
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo of ${project.title}`}
                          className="opacity-30 group-hover:opacity-100 transition-opacity"
                          style={{ color: "var(--fg)" }}
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{ backgroundColor: "var(--tag-bg)", color: "var(--tag-fg)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
