"use client";
import { motion, AnimatePresence } from "motion/react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleTheme } from "@/store/slices/themeSlice";
import { toggleNav, closeNav } from "@/store/slices/navSlice";

const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((s) => s.theme.isDark);
  const isOpen = useAppSelector((s) => s.nav.isOpen);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)", borderColor: "var(--border)" }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          &lt;DevPortfolio /&gt;
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <motion.a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: "var(--fg)" }}
                whileHover={{ y: -2 }}
                onClick={() => dispatch(closeNav())}
              >
                {link}
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <motion.button
            onClick={() => dispatch(toggleTheme())}
            className="w-9 h-9 rounded-full flex items-center justify-center border"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {isDark ? "☀️" : "🌙"}
          </motion.button>

          {/* Hamburger */}
          <motion.button
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
            onClick={() => dispatch(toggleNav())}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="block h-0.5 w-6 rounded"
              style={{ backgroundColor: "var(--fg)" }}
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-6 rounded"
              style={{ backgroundColor: "var(--fg)" }}
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-6 rounded"
              style={{ backgroundColor: "var(--fg)" }}
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block text-base font-medium opacity-80 hover:opacity-100"
                    style={{ color: "var(--fg)" }}
                    onClick={() => dispatch(closeNav())}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
