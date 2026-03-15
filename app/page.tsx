"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, MapPin, Camera, Zap } from "lucide-react";
import Image from "next/image";

const LAUNCH_DATE = new Date("2026-04-06T00:00:00Z");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="countdown-card rounded-lg px-4 py-3 sm:px-5 sm:py-4 flex flex-col items-center gap-1 min-w-[70px] sm:min-w-[82px]"
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span className="text-3xl sm:text-5xl font-bold tabular-nums text-gold-gradient leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span
        className="text-[10px] uppercase tracking-[0.25em] font-semibold mt-1"
        style={{ color: "rgb(201 163 71 / 0.5)" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808] px-4 pt-8 pb-20 scanlines">
      {/* Background */}
      <div className="absolute inset-0 bg-tactical pointer-events-none" />
      <div className="absolute inset-0 bg-gold-glow pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t border-l pointer-events-none" style={{ borderColor: "rgb(201 163 71 / 0.2)" }} />
      <div className="absolute top-0 right-0 w-24 h-24 border-t border-r pointer-events-none" style={{ borderColor: "rgb(201 163 71 / 0.2)" }} />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l pointer-events-none" style={{ borderColor: "rgb(201 163 71 / 0.2)" }} />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r pointer-events-none" style={{ borderColor: "rgb(201 163 71 / 0.2)" }} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full gap-5 sm:gap-7">

        {/* Logo — negative margin compensates for whitespace baked into the PNG */}
        <motion.div
          className="animate-float logo-breathe -mb-6 sm:-mb-8"
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <Image
            src="/logo.png"
            alt="Mlumbi Security Services logo"
            width={220}
            height={220}
            className="object-contain w-40 h-40 sm:w-56 sm:h-56"
            priority
          />
        </motion.div>

        {/* Eyebrow badge */}
        <motion.div custom={1} initial="hidden" animate="show" variants={fadeUp}>
          <span
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-semibold rounded-sm px-4 py-1.5"
            style={{
              color: "rgb(201 163 71 / 0.8)",
              border: "1px solid rgb(201 163 71 / 0.25)",
              background: "rgb(201 163 71 / 0.05)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#c9a347" }}
            />
            Launching 6 April 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div custom={2} initial="hidden" animate="show" variants={fadeUp} className="space-y-2">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-widest uppercase text-gold-gradient leading-none">
            Mlumbi
          </h1>
          <p className="text-lg sm:text-xl font-semibold tracking-widest uppercase text-gold-gradient">
            Security Services (Pty) Ltd
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="divider-gold w-48" />

        {/* Description */}
        <motion.p
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          style={{ color: "rgb(232 228 216 / 0.55)" }}
          className="text-base sm:text-lg leading-relaxed max-w-lg"
        >
          Tactical armed security you can trust. From armed guards and mobile patrols
          to 24/7 CCTV surveillance — we protect your people, property, and assets with
          precision and discipline.
        </motion.p>

        {/* Countdown */}
        {mounted && (
          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3"
          >
            <CountdownUnit value={timeLeft.days}    label="Days"    />
            <CountdownUnit value={timeLeft.hours}   label="Hours"   />
            <CountdownUnit value={timeLeft.minutes} label="Minutes" />
            <CountdownUnit value={timeLeft.seconds} label="Seconds" />
          </motion.div>
        )}

        {/* Service pills */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-2"
        >
          {[
            { icon: Shield, label: "Armed Guards"      },
            { icon: MapPin, label: "Mobile Patrols"    },
            { icon: Camera, label: "CCTV Surveillance" },
            { icon: Zap,    label: "Rapid Response"    },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider rounded-sm px-3 py-1.5 transition-colors"
              style={{
                color: "rgb(201 163 71 / 0.6)",
                border: "1px solid rgb(201 163 71 / 0.15)",
                background: "rgb(201 163 71 / 0.04)",
              }}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 inset-x-0 flex justify-center px-4"
      >
        <a
          href="https://zenscend.co"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs transition-colors"
          style={{ color: "rgb(232 228 216 / 0.2)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "rgb(201 163 71 / 0.5)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgb(232 228 216 / 0.2)")}
        >
          Powered by <span className="font-semibold">Zenscend</span>
        </a>
      </motion.footer>
    </main>
  );
}
