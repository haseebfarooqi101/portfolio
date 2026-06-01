"use client";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";
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
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight"
          style={{ color: "var(--fg)" }}
        >
          M Haseeb Farooqi
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm transition-opacity hover:opacity-60"
                style={{ color: "var(--muted)" }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.button
            onClick={() => dispatch(toggleTheme())}
            className="w-8 h-8 flex items-center justify-center rounded-md border"
            style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </motion.button>

          <motion.button
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-md border"
            style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            onClick={() => dispatch(toggleNav())}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={14} /> : <Menu size={14} />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm"
                    style={{ color: "var(--muted)" }}
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
