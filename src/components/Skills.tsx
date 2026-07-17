"use client";
import { motion } from "motion/react";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "HTML & CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "State & Tooling",
    skills: ["Redux Toolkit", "Git & GitHub", "Figma", "Webpack", "Vite", "ESLint"],
  },
  {
    category: "Backend & Others",
    skills: ["Node.js", "Vercel", "Firebase"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 border-t"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Skills</p>
          <div className="divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--fg)" }}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border"
                    style={{
                      backgroundColor: "var(--tag-bg)",
                      color: "var(--tag-fg)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
