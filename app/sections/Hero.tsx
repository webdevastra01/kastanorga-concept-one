"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  FileText,
  Globe,
  Languages,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// ─── Types ─────────────────────────────────────────────────────────
interface HeroProps {
  lang?: "en" | "fr" | "nl";
}

// ─── Content Data ──────────────────────────────────────────────────
const CONTENT = {
  en: {
    headline: "Clear Translation. Meaningful Connection.",
    subheadline:
      "Professional English, French, and Dutch translation services built on precision, clarity, and cultural understanding.",
    ctaPrimary: "Request Translation",
    ctaSecondary: "Book Consultation",
    badge: "Trusted by professionals across Europe",
  },
  fr: {
    headline: "Traduction Claire. Connexion Authentique.",
    subheadline:
      "Services de traduction professionnels en anglais, français et néerlandais, fondés sur la précision, la clarté et la compréhension culturelle.",
    ctaPrimary: "Demander une Traduction",
    ctaSecondary: "Réserver une Consultation",
    badge: "Approuvé par des professionnels à travers l'Europe",
  },
  nl: {
    headline: "Heldere Vertaling. Betekenisvolle Connectie.",
    subheadline:
      "Professionele vertaaldiensten in het Engels, Frans en Nederlands, gebaseerd op precisie, duidelijkheid en cultureel inzicht.",
    ctaPrimary: "Vertaling Aanvragen",
    ctaSecondary: "Consultatie Boeken",
    badge: "Vertrouwd door professionals in heel Europa",
  },
};

// ─── Floating Card Data ────────────────────────────────────────────
const FLOATING_CARDS = [
  {
    icon: Languages,
    label: "3 Languages",
    sublabel: "EN · FR · NL",
    color: "#cd2927",
    delay: 0,
    x: -200,
    y: -90,
  },
  {
    icon: Shield,
    label: "Confidential",
    sublabel: "Secure & Private",
    color: "#023779",
    delay: 0.2,
    x: 220,
    y: -50,
  },
  {
    icon: Zap,
    label: "Fast Delivery",
    sublabel: "48h Turnaround",
    color: "#cd2927",
    delay: 0.4,
    x: -180,
    y: 130,
  },
  {
    icon: Sparkles,
    label: "Human Quality",
    sublabel: "Expert Linguists",
    color: "#023779",
    delay: 0.6,
    x: 200,
    y: 110,
  },
];

// ─── Component ─────────────────────────────────────────────────────
export default function Hero({ lang = "en" }: HeroProps) {
  const content = CONTENT[lang];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Smooth scroll handler
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* ─── Background Grid Pattern ────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #023779 1px, transparent 1px),
              linear-gradient(to bottom, #023779 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ─── Abstract Gradient Orbs ─────────────────────────────── */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-[#023779]/5 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full bg-[#cd2927]/5 blur-3xl"
      />

      {/* ─── Main Content ───────────────────────────────────────── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[calc(100vh-5rem)] pt-24 pb-16">
          {/* ─── Left Column: Copy ──────────────────────────────── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#023779]/5 border border-[#023779]/10 text-sm font-medium text-[#023779]">
                <Globe className="w-4 h-4" strokeWidth={1.5} />
                {content.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-neutral-900 leading-[1.08]"
            >
              Clear{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Translation</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-[#cd2927]/10 origin-left rounded-sm"
                />
              </span>
              <br />
              <span className="text-neutral-500">Meaningful</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Connection.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-[#023779]/10 origin-left rounded-sm"
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-xl"
            >
              {content.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="
                  group text-base font-semibold
                  bg-[#023779] hover:bg-[#023779]/90
                  text-white shadow-lg shadow-[#023779]/20
                  transition-all duration-300
                  hover:shadow-xl hover:shadow-[#023779]/25 hover:-translate-y-0.5
                  px-8 py-6 h-auto
                "
                asChild
              >
                <a href="#cta" onClick={(e) => handleScroll(e, "#cta")}>
                  <FileText className="w-5 h-5 mr-2" strokeWidth={1.5} />
                  {content.ctaPrimary}
                  <ArrowRight
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="
                  group text-base font-semibold
                  border-neutral-200 hover:border-neutral-300
                  text-neutral-700 hover:text-neutral-900
                  bg-white hover:bg-neutral-50
                  transition-all duration-300
                  hover:-translate-y-0.5
                  px-8 py-6 h-auto
                "
                asChild
              >
                <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
                  <Calendar className="w-5 h-5 mr-2" strokeWidth={1.5} />
                  {content.ctaSecondary}
                </a>
              </Button>
            </motion.div>
          </div>

          {/* ─── Right Column: Visual ───────────────────────────── */}
          <div className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
            {/* Main Globe Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full"
            >
              <div className="relative w-full aspect-square max-w-[420px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[680px] xl:max-w-[760px] mx-auto lg:mx-0 lg:ml-auto">
                <Image
                  src="/globe.png"
                  alt="Global translation network connecting English, French, and Dutch"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Glow behind globe */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-[75%] h-[75%] rounded-full bg-[#023779]/5 blur-3xl" />
              </div>
            </motion.div>

            {/* Floating Cards */}
            {FLOATING_CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    x: card.x * 0.5,
                    y: card.y * 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: card.x,
                    y: card.y,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6 + card.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute hidden lg:block"
                  style={{ left: "50%", top: "50%" }}
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="
                      flex items-center gap-3 px-4 py-3
                      bg-white rounded-xl
                      border border-neutral-100
                      shadow-lg shadow-neutral-900/5
                      hover:shadow-xl hover:shadow-neutral-900/10
                      transition-shadow duration-300
                    "
                  >
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded-lg"
                      style={{ backgroundColor: `${card.color}10` }}
                    >
                      <Icon
                        className="w-4.5 h-4.5"
                        style={{ color: card.color }}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900 leading-tight">
                        {card.label}
                      </p>
                      <p className="text-xs text-neutral-400 leading-tight mt-0.5">
                        {card.sublabel}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Language Pills (decorative) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
            >
              {["English", "Français", "Nederlands"].map((langLabel, i) => (
                <motion.span
                  key={langLabel}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                  className="
                    px-3 py-1.5 text-xs font-medium
                    bg-white/80 backdrop-blur-sm
                    border border-neutral-200/60
                    rounded-full text-neutral-600
                    shadow-sm
                  "
                >
                  {langLabel}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ─── Bottom Fade ────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}
