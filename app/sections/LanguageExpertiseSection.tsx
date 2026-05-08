"use client";

import { motion } from "framer-motion";
import { Globe, ArrowUpRight } from "lucide-react";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
});

const languages = [
  {
    code: "EN",
    name: "English",
    native: "English",
    description:
      "Clear, precise communication for global business, legal, and academic contexts. Native-level fluency with professional tone control.",
    stats: ["Business & Legal", "Academic", "Technical"],
    color: "#023779",
    bgGradient: "from-[#023779]/6 via-[#023779]/3 to-transparent",
    accentColor: "#023779",
    flagColors: ["#023779", "#ffffff", "#cd2927"],
    culturalNote: "Clarity & Precision",
  },
  {
    code: "FR",
    name: "Français",
    native: "French",
    description:
      "Elegant, nuanced translation preserving the sophistication of French expression. From formal correspondence to creative content.",
    stats: ["Formal & Creative", "Literary", "Commercial"],
    color: "#cd2927",
    bgGradient: "from-[#cd2927]/6 via-[#cd2927]/3 to-transparent",
    accentColor: "#cd2927",
    flagColors: ["#023779", "#ffffff", "#cd2927"],
    culturalNote: "Elegance & Nuance",
  },
  {
    code: "NL",
    name: "Nederlands",
    native: "Dutch",
    description:
      "Direct, culturally-attuned Dutch communication. Expert handling of Belgian and Netherlands variants with regional sensitivity.",
    stats: ["BE & NL Variants", "Business", "Legal"],
    color: "#023779",
    bgGradient: "from-[#023779]/6 via-[#023779]/3 to-transparent",
    accentColor: "#023779",
    flagColors: ["#cd2927", "#ffffff", "#023779"],
    culturalNote: "Directness & Warmth",
  },
];

export default function LanguageExpertiseSection() {
  return (
    <section
      id="languages"
      className="relative w-full overflow-hidden bg-[#fafafa] py-24 md:py-32 lg:py-40"
    >
      {/* Subtle top divider */}
      <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#023779]/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeInUp(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#023779]/15 bg-white px-4 py-1.5 text-sm font-medium text-[#023779] shadow-sm">
              <Globe className="h-3.5 w-3.5" />
              Language Specialization
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp(0.1)}
            className="font-serif text-4xl font-bold tracking-tight text-[#1a1a2e] md:text-5xl lg:text-6xl"
          >
            Expertise in <span className="text-[#023779]">Three</span> Languages
          </motion.h2>

          <motion.p
            variants={fadeInUp(0.2)}
            className="mt-6 text-lg leading-relaxed text-gray-500 md:text-xl"
          >
            Deep cultural fluency across English, French, and Dutch — ensuring
            your message resonates authentically in every language.
          </motion.p>
        </motion.div>

        {/* Language Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8"
        >
          {languages.map((lang, index) => (
            <motion.div
              key={lang.code}
              variants={scaleIn(0.12 * index)}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white transition-all duration-500 hover:border-gray-300 hover:shadow-2xl hover:shadow-[#023779]/8"
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${lang.color}08, ${lang.color}02)`,
                }}
              />

              {/* Top accent bar */}
              <div
                className="h-1.5 w-full transition-all duration-500 group-hover:h-2"
                style={{ backgroundColor: lang.color }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-1 flex-col p-8 md:p-10">
                {/* Header row */}
                <div className="flex items-start justify-between">
                  <div>
                    {/* Language code badge */}
                    <div
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: lang.color }}
                    >
                      {lang.code}
                    </div>
                  </div>

                  {/* Minimal flag indicator */}
                  {/* <div className="flex gap-0.5 overflow-hidden rounded-sm opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                    {lang.flagColors.map((color, i) => (
                      <div
                        key={i}
                        className="h-5 w-1.5"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div> */}
                </div>

                {/* Language name */}
                <div className="mt-6">
                  <h3 className="font-serif text-3xl font-bold text-[#1a1a2e] md:text-4xl">
                    {lang.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium tracking-wide text-gray-400 uppercase">
                    {lang.native}
                  </p>
                </div>

                {/* Cultural note */}
                <div
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: `${lang.color}10`,
                    color: lang.color,
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  {lang.culturalNote}
                </div>

                {/* Description */}
                <p className="mt-6 text-sm leading-relaxed text-gray-500 md:text-base">
                  {lang.description}
                </p>

                {/* Stats / specialties */}
                <div className="mt-auto pt-8">
                  <div className="flex flex-wrap gap-2">
                    {lang.stats.map((stat) => (
                      <span
                        key={stat}
                        className="rounded-lg border border-gray-200/80 bg-[#fafafa] px-3 py-1.5 text-xs font-medium text-gray-600 transition-all duration-300 group-hover:border-[#023779]/15 group-hover:bg-white"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom action */}
                <div className="mt-6 flex items-center gap-1 text-sm font-medium transition-all duration-300 group-hover:gap-2">
                  <span
                    className="transition-colors duration-300"
                    style={{ color: lang.color }}
                  >
                    Request {lang.native} translation
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: lang.color }}
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Decorative corner */}
              <div
                className="absolute bottom-0 right-0 h-32 w-32 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ backgroundColor: lang.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.3)}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-400">
            All translations reviewed by native speakers with domain expertise
          </p>
        </motion.div>
      </div>
    </section>
  );
}
