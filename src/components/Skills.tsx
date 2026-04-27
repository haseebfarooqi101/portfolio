"use client";
import { motion } from "motion/react";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML & CSS", level: 98 },
    ],
  },
  {
    category: "State & Tools",
    skills: [
      { name: "Redux Toolkit", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "Framer Motion", level: 80 },
      { name: "Figma", level: 75 },
    ],
  },
  {
    category: "Backend & Others",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "PostgreSQL", level: 65 },
      { name: "Docker", level: 60 },
    ],
  },
];

const techIcons = [
  { name: "React", emoji: "⚛️" },
  { name: "Next.js", emoji: "▲" },
  { name: "TypeScript", emoji: "🔷" },
  { name: "Tailwind", emoji: "🎨" },
  { name: "Redux", emoji: "🔴" },
  { name: "Node.js", emoji: "🟢" },
  { name: "Git", emoji: "🐙" },
  { name: "Figma", emoji: "🖌️" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4" style={{ backgroundColor: "color-mix(in srgb, var(--card) 50%, transparent)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
            What I Know
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold">Skills & Technologies</h2>
        </motion.div>

        {/* Tech icon pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--fg)" }}
            >
              <span>{tech.emoji}</span>
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill bars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="p-6 rounded-2xl border card-glow"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            >
              <h3 className="font-bold text-lg mb-5 gradient-text">{group.category}</h3>
              <div className="flex flex-col gap-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: "var(--fg)" }} className="opacity-80">{skill.name}</span>
                      <span style={{ color: "var(--accent)" }} className="font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--border)" }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, var(--accent), var(--accent2))" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: gi * 0.15 + si * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
