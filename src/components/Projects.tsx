"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const categories = ["All", "React", "Next.js", "Full Stack"];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce app with cart, auth, and payment integration built with Next.js and Stripe.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    category: "Next.js",
    emoji: "🛒",
    github: "#",
    live: "#",
    color: "#6c63ff",
  },
  {
    title: "Task Management App",
    description: "Drag-and-drop Kanban board with real-time updates, Redux state management, and dark mode.",
    tags: ["React", "Redux", "Framer Motion", "Firebase"],
    category: "React",
    emoji: "📋",
    github: "#",
    live: "#",
    color: "#ff6584",
  },
  {
    title: "Developer Blog",
    description: "MDX-powered blog with syntax highlighting, SEO optimization, and a custom CMS dashboard.",
    tags: ["Next.js", "MDX", "Tailwind", "Vercel"],
    category: "Next.js",
    emoji: "✍️",
    github: "#",
    live: "#",
    color: "#43e97b",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard with charts, real-time data, and responsive layout for social media metrics.",
    tags: ["React", "Chart.js", "REST API", "Tailwind"],
    category: "React",
    emoji: "📊",
    github: "#",
    live: "#",
    color: "#f7971e",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with rooms, direct messages, file sharing, and end-to-end encryption.",
    tags: ["Next.js", "Socket.io", "Node.js", "MongoDB"],
    category: "Full Stack",
    emoji: "💬",
    github: "#",
    live: "#",
    color: "#4facfe",
  },
  {
    title: "Portfolio Generator",
    description: "A SaaS tool that lets developers generate beautiful portfolio sites from a JSON config file.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    category: "Full Stack",
    emoji: "🚀",
    github: "#",
    live: "#",
    color: "#a18cd1",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
            My Work
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium border transition-colors"
              style={{
                borderColor: active === cat ? "var(--accent)" : "var(--border)",
                backgroundColor: active === cat ? "var(--accent)" : "var(--card)",
                color: active === cat ? "#fff" : "var(--fg)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group rounded-2xl border overflow-hidden card-glow flex flex-col"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                {/* Card header */}
                <div
                  className="h-40 flex items-center justify-center text-6xl relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
                >
                  <motion.span
                    className="text-6xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {project.emoji}
                  </motion.span>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg mb-2" style={{ color: "var(--fg)" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-60 leading-relaxed mb-4 flex-1" style={{ color: "var(--fg)" }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md font-medium"
                        style={{ backgroundColor: `${project.color}22`, color: project.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      className="flex-1 text-center py-2 rounded-lg text-sm font-medium border"
                      style={{ borderColor: "var(--border)", color: "var(--fg)" }}
                      whileHover={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex-1 text-center py-2 rounded-lg text-sm font-medium text-white"
                      style={{ backgroundColor: project.color }}
                      whileHover={{ scale: 1.03, opacity: 0.9 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
