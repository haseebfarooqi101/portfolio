"use client";
import { motion } from "motion/react";
import { Download } from "lucide-react";

const techStack = [
  {
    name: "Next.js",
    svg: <svg viewBox="0 0 180 180" fill="currentColor" className="w-6 h-6"><path d="M87.3 0C39.1 0 0 39.1 0 87.3s39.1 87.3 87.3 87.3 87.3-39.1 87.3-87.3S135.5 0 87.3 0zm39.4 156.3L60.5 72.4v60.2H48.3V54.3h13.6l61.5 78.6V54.3h12.2v101.5c-2.9.4-5.9.5-8.9.5z"/></svg>,
  },
  {
    name: "React",
    color: "#61DAFB",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{color:"#61DAFB"}}><path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.12.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.468zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.468a23.357 23.357 0 0 0-1.364-3.578l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.12c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z"/></svg>,
  },
  {
    name: "TypeScript",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{color:"#3178C6"}}><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>,
  },
  {
    name: "Tailwind",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{color:"#06B6D4"}}><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>,
  },
  {
    name: "Redux",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{color:"#764ABC"}}><path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 0 0-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 0 1-.42-1.543C-.868 14.408-.416 18.752 1.932 20.805c1.753 1.498 4.315 2.247 6.997 2.247.868 0 1.723-.09 2.577-.27 5.498-1.049 9.688-4.315 11.007-9.098l.045-.135c.42.135.899.21 1.378.21 1.049 0 2.023-.42 2.742-1.154.72-.734 1.094-1.724 1.049-2.757-.09-2.023-1.784-3.641-3.822-3.641h-.06c-2.098.045-3.747 1.784-3.702 3.882.03.479.135.944.315 1.348-1.318 1.979-3.297 3.357-5.648 4.047l-.18.045z"/></svg>,
  },
  {
    name: "Node.js",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{color:"#339933"}}><path d="M11.998 24a2.04 2.04 0 0 1-1.015-.27l-3.223-1.906c-.482-.269-.246-.365-.087-.42.642-.224.772-.274 1.457-.663.072-.042.166-.026.24.017l2.477 1.47c.089.048.215.048.297 0l9.654-5.576c.09-.051.147-.154.147-.26V7.609c0-.109-.057-.211-.149-.265l-9.651-5.568c-.089-.051-.208-.051-.295 0L2.25 7.344c-.094.054-.152.159-.152.265v11.15c0 .107.058.208.148.26l2.646 1.528c1.436.718 2.316-.128 2.316-.98V8.504c0-.156.125-.28.281-.28h1.228c.154 0 .28.124.28.28v11.063c0 1.92-1.046 3.022-2.866 3.022-.56 0-1.001 0-2.228-.607L1.15 20.484A2.042 2.042 0 0 1 .12 18.718V7.609c0-.72.384-1.39 1.006-1.749L10.78.289a2.09 2.09 0 0 1 2.04 0l9.654 5.571A2.04 2.04 0 0 1 23.48 7.61v11.108a2.04 2.04 0 0 1-1.006 1.749l-9.654 5.571a2.04 2.04 0 0 1-1.022.27z"/></svg>,
  },
  {
    name: "Git",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{color:"#F05032"}}><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>,
  },
  {
    name: "Figma",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{color:"#F24E1E"}}><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>,
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">About</p>
          <div className="divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6" style={{ color: "var(--fg)" }}>
            Building things for the web, with care.
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            I&apos;m a front-end developer with a craze for crafting modern web
            applications. I work with a modern tech stack, creating responsive designs with a strong focus
            on performance, accessibility, and clean code.
          </p>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
            I care deeply about the details — from pixel-perfect layouts to smooth
            interactions. When I&apos;m not coding, I&apos;m exploring design systems,
            contributing to open source, or hiking.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all hover:opacity-70"
            style={{ backgroundColor: "var(--fg)", color: "var(--bg)", borderColor: "var(--fg)" }}
          >
            <Download size={14} />
            Download Resume
          </a>
        </motion.div>

        {/* Tech stack icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 pt-10 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="section-label mb-6">Tech I work with</p>
          <div className="flex flex-wrap gap-4 items-center">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="flex flex-col items-center gap-1.5 group cursor-default"
              >
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-xl border transition-colors"
                  style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                >
                  {tech.svg}
                </div>
                <span
                  className="text-xs opacity-0 group-hover:opacity-60 transition-opacity"
                  style={{ color: "var(--fg)" }}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
