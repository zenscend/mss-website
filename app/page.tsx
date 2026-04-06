"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield, UserCheck, MapPin, Camera, KeyRound, Zap,
  Phone, Mail, MapPinned, ArrowRight, CheckCircle, Loader2,
} from "lucide-react";
import Image from "next/image";
import Navigation from "@/components/Navigation";

// ─── helpers ────────────────────────────────────────────────────────────────

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.7, ease },
  };
}

// ─── data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Shield,
    title: "Armed Guards",
    desc: "Highly trained armed officers deployed to protect high-value assets, personnel, and premises. Fully licensed and PSIRA-compliant.",
  },
  {
    icon: UserCheck,
    title: "Unarmed Guards",
    desc: "Professional, uniformed security personnel providing a visible deterrent for retail, corporate, residential, and event environments.",
  },
  {
    icon: MapPin,
    title: "Mobile Patrols",
    desc: "Regular scheduled and random vehicle patrols covering your perimeter and surrounding area — day and night.",
  },
  {
    icon: Camera,
    title: "CCTV Surveillance",
    desc: "Installation, monitoring, and management of high-definition camera systems with 24/7 live oversight and recording.",
  },
  {
    icon: KeyRound,
    title: "Access Control",
    desc: "Biometric, card, and PIN-based access management systems to ensure only authorised personnel enter your premises.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    desc: "Armed response teams on standby, ready to deploy within minutes to any alarm activation or security threat.",
  },
];

const STATS = [
  { value: "24/7", label: "Around-the-Clock Cover" },
  { value: "100%", label: "PSIRA Compliant" }
];

const WHY = [
  "Fully licensed and PSIRA-registered officers",
  "Rigorous vetting and ongoing training",
  "Tailored security plans for every client",
  "Transparent reporting and accountability",
  "Local knowledge, national standards",
];

// ─── sections ────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808] px-4 pt-24 pb-20 scanlines"
    >
      <div className="absolute inset-0 bg-tactical pointer-events-none" />
      <div className="absolute inset-0 bg-gold-glow pointer-events-none" />
      <div className="corner-accent-tl pointer-events-none" />
      <div className="corner-accent-tr pointer-events-none" />
      <div className="corner-accent-bl pointer-events-none" />
      <div className="corner-accent-br pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full gap-6">
        {/* Logo */}
        <motion.div
          className="animate-float logo-breathe -mb-4 sm:-mb-6"
          {...fadeUp(0)}
        >
          <Image
            src="/logo.png"
            alt="Mlumbi Security Services"
            width={220}
            height={220}
            className="object-contain w-36 h-36 sm:w-52 sm:h-52"
            priority
          />
        </motion.div>

        {/* Badge */}
        <motion.div {...fadeUp(0.08)}>
          <span
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-semibold rounded-sm px-4 py-1.5"
            style={{
              color: "rgb(201 163 71 / 0.8)",
              border: "1px solid rgb(201 163 71 / 0.25)",
              background: "rgb(201 163 71 / 0.05)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a347] animate-pulse" />
            PSIRA Registered · Armed &amp; Unarmed Security
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div {...fadeUp(0.16)} className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-widest uppercase text-gold-gradient leading-tight">
            Mlumbi
          </h1>
          <p className="text-base sm:text-xl font-semibold tracking-widest uppercase text-gold-gradient">
            Security Services (Pty) Ltd
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="divider-gold w-40" />

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.24)}
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: "rgb(232 228 216 / 0.55)" }}
        >
          Tactical. Disciplined. Relentless. We protect your people, property,
          and assets with professional armed guards, mobile patrols, CCTV
          surveillance, and access control — around the clock.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.3)} className="flex flex-wrap justify-center gap-3 mt-2">
          <a href="#services" className="btn-gold">Our Services</a>
          <a href="#contact" className="btn-outline">Get a Quote</a>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 px-4 bg-[#060606]">
      <div className="absolute inset-0 bg-gold-glow-center pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-14 space-y-3">
          <p
            className="text-[11px] uppercase tracking-[0.25em] font-semibold"
            style={{ color: "rgb(201 163 71 / 0.6)" }}
          >
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gold-gradient">
            Our Services
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp(i * 0.07)}
              className="service-card rounded-sm p-6 flex flex-col gap-4"
            >
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                style={{
                  background: "rgb(201 163 71 / 0.08)",
                  border: "1px solid rgb(201 163 71 / 0.2)",
                }}
              >
                <Icon className="w-5 h-5" style={{ color: "#c9a347" }} />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#e8e4d8" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgb(232 228 216 / 0.45)" }}>
                  {desc}
                </p>
              </div>
              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold transition-colors"
                style={{ color: "rgb(201 163 71 / 0.5)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c9a347")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgb(201 163 71 / 0.5)")}
              >
                Enquire <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 bg-[#080808]">
      <div className="absolute inset-0 bg-tactical pointer-events-none opacity-60" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div className="space-y-6">
          <motion.p {...fadeUp()} className="text-[11px] uppercase tracking-[0.25em] font-semibold" style={{ color: "rgb(201 163 71 / 0.6)" }}>
            Who We Are
          </motion.p>
          <motion.h2 {...fadeUp(0.06)} className="text-3xl sm:text-4xl font-bold text-gold-gradient leading-tight">
            Built on Trust,<br />Driven by Discipline
          </motion.h2>
          <div className="divider-gold w-24" />
          <motion.p {...fadeUp(0.1)} className="text-sm sm:text-base leading-relaxed" style={{ color: "rgb(232 228 216 / 0.5)" }}>
            Mlumbi Security Services (Pty) Ltd is a South African private security company
            committed to delivering reliable, professional, and affordable security solutions.
            We serve residential estates, commercial properties, industrial sites, retail
            environments, and special events with the same level of discipline and dedication.
          </motion.p>
          <motion.p {...fadeUp(0.14)} className="text-sm sm:text-base leading-relaxed" style={{ color: "rgb(232 228 216 / 0.5)" }}>
            Every officer we deploy is rigorously vetted, trained, and PSIRA-registered.
            We believe security is not just about presence — it's about accountability,
            communication, and results.
          </motion.p>

          {/* Why list */}
          <motion.ul {...fadeUp(0.18)} className="space-y-2.5 pt-2">
            {WHY.map(item => (
              <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgb(232 228 216 / 0.55)" }}>
                <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#c9a347" }} />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div {...fadeUp(0.22)}>
            <a href="#contact" className="btn-gold inline-block">Work With Us</a>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              {...fadeUp(i * 0.08)}
              className="service-card rounded-sm p-6 flex flex-col items-center justify-center text-center gap-1 aspect-square"
            >
              <span className="text-2xl sm:text-3xl font-black text-gold-gradient leading-none">
                {value}
              </span>
              <span className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "rgb(201 163 71 / 0.45)" }}>
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm]       = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus]   = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 bg-[#060606]">
      <div className="absolute inset-0 bg-gold-glow-center pointer-events-none opacity-60" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Info */}
        <div className="space-y-6">
          <motion.p {...fadeUp()} className="text-[11px] uppercase tracking-[0.25em] font-semibold" style={{ color: "rgb(201 163 71 / 0.6)" }}>
            Get In Touch
          </motion.p>
          <motion.h2 {...fadeUp(0.06)} className="text-3xl sm:text-4xl font-bold text-gold-gradient">
            Request a Quote
          </motion.h2>
          <div className="divider-gold w-24" />
          <motion.p {...fadeUp(0.1)} className="text-sm sm:text-base leading-relaxed" style={{ color: "rgb(232 228 216 / 0.5)" }}>
            Tell us about your security needs and we&apos;ll put together a tailored
            solution. We respond within 24 hours.
          </motion.p>

          <motion.ul {...fadeUp(0.14)} className="space-y-4 pt-4">
            {[
              { icon: Phone,     text: "+27 72 530 2580"},
              { icon: Mail,      text: "info@mlumbisecurity.co.za"},
              { icon: MapPinned, text: "Germiston, Gauteng"},
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm" style={{ color: "rgb(232 228 216 / 0.55)" }}>
                <Icon className="w-4 h-4 shrink-0" style={{ color: "#c9a347" }} />
                {text}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Form */}
        <motion.form {...fadeUp(0.1)} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-widest mb-1.5 font-semibold" style={{ color: "rgb(201 163 71 / 0.5)" }}>
                Name
              </label>
              <input
                className="input-gold"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest mb-1.5 font-semibold" style={{ color: "rgb(201 163 71 / 0.5)" }}>
                Phone
              </label>
              <input
                className="input-gold"
                name="phone"
                type="tel"
                placeholder="+27"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest mb-1.5 font-semibold" style={{ color: "rgb(201 163 71 / 0.5)" }}>
              Email
            </label>
            <input
              className="input-gold"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest mb-1.5 font-semibold" style={{ color: "rgb(201 163 71 / 0.5)" }}>
              Message
            </label>
            <textarea
              className="input-gold resize-none"
              name="message"
              rows={5}
              placeholder="Describe your security requirements..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          {status === "sent" ? (
            <div
              className="flex items-center gap-2 text-sm py-3 px-4 rounded-sm"
              style={{ background: "rgb(201 163 71 / 0.08)", border: "1px solid rgb(201 163 71 / 0.25)", color: "#c9a347" }}
            >
              <CheckCircle className="w-4 h-4" />
              Message received — we&apos;ll be in touch shortly.
            </div>
          ) : status === "error" ? (
            <div
              className="flex items-center gap-2 text-sm py-3 px-4 rounded-sm"
              style={{ background: "rgb(220 38 38 / 0.08)", border: "1px solid rgb(220 38 38 / 0.25)", color: "#f87171" }}
            >
              Something went wrong — please try again or contact us directly.
            </div>
          ) : (
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-gold w-full flex items-center justify-center gap-2"
              style={status === "sending" ? { opacity: 0.6, cursor: "not-allowed" } : {}}
            >
              {status === "sending" ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
              ) : (
                "Send Message"
              )}
            </button>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="relative py-10 px-4"
      style={{ borderTop: "1px solid rgb(201 163 71 / 0.12)", background: "#080808" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Name */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gold-gradient">Mlumbi Security Services</p>
          <p className="text-[10px] uppercase tracking-widest" style={{ color: "rgb(201 163 71 / 0.35)" }}>
            (Pty) Ltd · PSIRA Registered
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex gap-5">
          {["Home", "Services", "About", "Contact"].map(label => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-[10px] uppercase tracking-widest transition-colors"
              style={{ color: "rgb(232 228 216 / 0.3)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c9a347")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgb(232 228 216 / 0.3)")}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Powered by */}
        <a
          href="https://zenscend.co"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] uppercase tracking-widest transition-colors"
          style={{ color: "rgb(232 228 216 / 0.2)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "rgb(201 163 71 / 0.5)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgb(232 228 216 / 0.2)")}
        >
          Powered by <span className="font-semibold">Zenscend</span>
        </a>
      </div>

      <p suppressHydrationWarning className="text-center mt-6 text-[10px] uppercase tracking-widest" style={{ color: "rgb(232 228 216 / 0.15)" }}>
        © {new Date().getFullYear()} Mlumbi Security Services (Pty) Ltd. All rights reserved.
      </p>
    </footer>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
