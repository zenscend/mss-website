"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home",     href: "#home"     },
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

export default function Navigation() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgb(8 8 8 / 0.95)"
            : "rgb(8 8 8 / 0.6)",
          borderBottom: scrolled
            ? "1px solid rgb(201 163 71 / 0.15)"
            : "1px solid transparent",
          backdropFilter: "blur(12px)",
        }}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="Go to top"
          >
            <div className="leading-tight text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-gradient">
                Mlumbi
              </p>
              <p className="text-[9px] uppercase tracking-widest" style={{ color: "rgb(201 163 71 / 0.5)" }}>
                Security Services
              </p>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <li key={label}>
                <button
                  onClick={() => handleNav(href)}
                  className="text-sm uppercase tracking-widest font-medium transition-colors"
                  style={{ color: "rgb(232 228 216 / 0.55)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#c9a347")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgb(232 228 216 / 0.55)")}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNav("#contact")}
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold rounded-sm px-4 py-2 transition-all"
            style={{
              color: "#080808",
              background: "linear-gradient(to right, #e8c46a, #c9a347)",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Get a Quote
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded focus:outline-none"
            style={{ color: "#c9a347" }}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
            style={{
              background: "rgb(8 8 8 / 0.98)",
              borderBottom: "1px solid rgb(201 163 71 / 0.15)",
            }}
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNav(href)}
                    className="w-full text-left py-3 text-sm uppercase tracking-widest font-medium border-b transition-colors"
                    style={{
                      color: "rgb(232 228 216 / 0.6)",
                      borderColor: "rgb(201 163 71 / 0.08)",
                    }}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="pt-3">
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full py-2.5 text-xs uppercase tracking-widest font-semibold rounded-sm"
                  style={{
                    color: "#080808",
                    background: "linear-gradient(to right, #e8c46a, #c9a347)",
                  }}
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
