"use client";

import { motion } from "framer-motion";
import {
  FileText,
  MessageSquare,
  Globe,
  PenTool,
  Users,
  ArrowUpRight,
} from "lucide-react";

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
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const services = [
  {
    icon: FileText,
    title: "Document Translation",
    description:
      "Professional translation for business, legal, academic, and personal documents. Every word handled with precision and confidentiality.",
    color: "#023779",
    bgAccent: "from-[#023779]/5 to-[#023779]/2",
    borderHover: "hover:border-[#023779]/30",
  },
  {
    icon: MessageSquare,
    title: "Business Communication",
    description:
      "Clear multilingual communication for international clients, partners, and stakeholders. Bridge language gaps in professional contexts.",
    color: "#cd2927",
    bgAccent: "from-[#cd2927]/5 to-[#cd2927]/2",
    borderHover: "hover:border-[#cd2927]/30",
  },
  {
    icon: Globe,
    title: "Localization",
    description:
      "Adapt content naturally for French, Dutch, and English-speaking audiences. Culture-aware translation that feels native, not foreign.",
    color: "#023779",
    bgAccent: "from-[#023779]/5 to-[#023779]/2",
    borderHover: "hover:border-[#023779]/30",
  },
  {
    icon: PenTool,
    title: "Proofreading & Editing",
    description:
      "Ensure clarity, grammar, tone, and accuracy. Polish existing translations or original content to professional standards.",
    color: "#cd2927",
    bgAccent: "from-[#cd2927]/5 to-[#cd2927]/2",
    borderHover: "hover:border-[#cd2927]/30",
  },
  {
    icon: Users,
    title: "Cultural Adaptation",
    description:
      "Translation that respects context, nuance, and meaning. Go beyond words to preserve intent, emotion, and cultural relevance.",
    color: "#023779",
    bgAccent: "from-[#023779]/5 to-[#023779]/2",
    borderHover: "hover:border-[#023779]/30",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-white py-24 md:py-32 lg:py-40"
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
            <span className="inline-flex items-center gap-2 rounded-full border border-[#023779]/15 bg-[#fafafa] px-4 py-1.5 text-sm font-medium text-[#023779]">
              <Globe className="h-3.5 w-3.5" />
              What We Offer
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp(0.1)}
            className="font-serif text-4xl font-bold tracking-tight text-[#1a1a2e] md:text-5xl lg:text-6xl"
          >
            Services Built for <span className="text-[#023779]">Clarity</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp(0.2)}
            className="mt-6 text-lg leading-relaxed text-gray-500 md:text-xl"
          >
            Professional translation and communication services tailored to help
            you connect across English, French, and Dutch — with precision,
            cultural awareness, and human understanding.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp(0.1 * index)}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className={cn(
                "group relative flex flex-col rounded-2xl border border-gray-200/80 bg-white p-8 transition-all duration-300",
                "hover:shadow-xl hover:shadow-[#023779]/5",
                service.borderHover,
              )}
            >
              {/* Subtle gradient background on hover */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  service.bgAccent,
                )}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: `${service.color}08`,
                    borderColor: `${service.color}20`,
                  }}
                >
                  <service.icon
                    className="h-5 w-5 transition-colors duration-300"
                    style={{ color: service.color }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#023779]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>

                {/* CTA Link */}
                <div className="mt-6 flex items-center gap-1 text-sm font-medium transition-all duration-300 group-hover:gap-2">
                  <span
                    className="transition-colors duration-300"
                    style={{ color: service.color }}
                  >
                    Learn more
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: service.color }}
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Corner accent on hover */}
              <div
                className="absolute right-0 top-0 h-24 w-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at top right, ${service.color}10, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.4)}
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#023779] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#023779]/20 transition-all duration-300 hover:bg-[#023779]/90 hover:shadow-xl hover:shadow-[#023779]/25"
          >
            Request a Translation
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-[#023779]/20 hover:bg-[#fafafa] hover:text-[#023779]"
          >
            See How It Works
          </a>
        </motion.div>
      </div>
      {/* ─── Bottom Fade ────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}

// Utility for cleaner class merging
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
