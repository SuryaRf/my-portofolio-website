"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Awards", href: "#achievements" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 inset-x-0 z-50 px-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`max-w-3xl mx-auto flex items-center justify-between gap-2 rounded-full border pl-5 pr-2 py-2 transition-shadow duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-md border-zinc-200 shadow-sm shadow-zinc-900/5"
            : "bg-white/60 backdrop-blur-md border-transparent"
        }`}
      >
        <a href="#home" className="font-mono text-sm tracking-tight text-zinc-900">
          srf<span className="text-emerald-600">.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-1.5 rounded-full text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <a
            href="#contact"
            className="hidden sm:inline-flex px-4 py-1.5 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            Say hi
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-zinc-500 hover:text-zinc-900 p-2 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-3xl mx-auto mt-2 rounded-2xl border border-zinc-200 bg-white/95 backdrop-blur-md p-3 flex flex-col"
          >
            {[...navItems, { name: "Contact", href: "#contact" }].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
