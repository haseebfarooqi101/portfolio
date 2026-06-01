"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "React", "Next.js", "Full Stack"];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured store with cart, auth, and Stripe payments.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    category: "Next.js",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Drag-and-drop Kanban board with Redux state and real-time sync.",
    tags: ["React", "Redux", "Firebase"],
    category: "React",
    github: "#",
    live: "#",
  },
  {
    title: "Developer Blog",
    description: "MDX-powered blog with syntax highlighting and SEO optimization.",
    tags: ["Next.js", "MDX", "Tailwind"],
    category: "Next.js",
    github: "#",
    live: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time social media metrics with interactive charts.",
    tags: ["React", "Chart.js", "REST API"],
    category: "React",
    github: "#",
    live: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time messaging with rooms, DMs, and file sharing.",
    tags: ["Next.js", "Socket.io", "Node.js", "MongoDB"],
    category: "Full Stack",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Generator",
    description: "SaaS tool to generate portfolio sites from a JSON config.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    category: "Full Stack",
    github: "#",
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
                    <a
                      href={project.live}
                      aria-label={`Open ${project.title}`}
                      className="opacity-30 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--fg)" }}
                    >
                      <ArrowUpRight size={16} />
                    </a>
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
