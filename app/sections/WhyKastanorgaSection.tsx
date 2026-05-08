"use client";

import { motion } from "framer-motion";
import { Target, Heart, Shield, Award, Check } from "lucide-react";

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

const reasons = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every word carefully structured for clarity and intent. We don't translate loosely — we engineer meaning with exactness.",
    features: [
      "Context-aware accuracy",
      "Technical terminology mastery",
      "Consistent tone & voice",
    ],
    color: "#023779",
    bgLight: "#023779",
  },
  {
    icon: Heart,
    title: "Human Understanding",
    description:
      "Translation that preserves meaning, not just language. We capture nuance, emotion, and cultural subtext that machines miss.",
    features: [
      "Cultural nuance preservation",
      "Emotional intent intact",
      "Native speaker review",
    ],
    color: "#cd2927",
    bgLight: "#cd2927",
  },
  {
    icon: Award,
    title: "Professionalism",
    description:
      "Reliable communication with premium standards. Deadlines met, formats respected, and quality guaranteed every time.",
    features: [
      "On-time delivery",
      "Format-perfect output",
      "Dedicated project care",
    ],
    color: "#023779",
    bgLight: "#023779",
  },
  {
    icon: Shield,
    title: "Trust & Confidentiality",
    description:
      "Handled with discretion and accuracy. Your documents, data, and business communications remain strictly private.",
    features: [
      "NDA-ready workflows",
      "Secure file handling",
      "Zero data retention",
    ],
    color: "#cd2927",
    bgLight: "#cd2927",
  },
];

export default function WhyKastanorgaSection() {
  return (
    <section
      id="why-kastanorga"
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
              <Award className="h-3.5 w-3.5" />
              The Kastanorga Difference
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp(0.1)}
            className="font-serif text-4xl font-bold tracking-tight text-[#1a1a2e] md:text-5xl lg:text-6xl"
          >
            Why Choose{" "}
            <span className="relative inline-block">
              Kastanorga
              <svg
                className="absolute -bottom-1 left-0 h-2.5 w-full text-[#cd2927]/25"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,0 100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp(0.2)}
            className="mt-6 text-lg leading-relaxed text-gray-500 md:text-xl"
          >
            Generic translators convert words. We transform communication.
            Here`&apos;`s what sets our approach apart.
          </motion.p>
        </motion.div>

        {/* Differentiation Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp(0.1 * index)}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-8 transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:shadow-[#023779]/5 md:p-10"
            >
              <div className="relative z-10 flex flex-col gap-6 md:flex-row md:gap-8">
                {/* Icon Column */}
                <div className="shrink-0">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${reason.color}08`,
                      borderColor: `${reason.color}20`,
                    }}
                  >
                    <reason.icon
                      className="h-6 w-6 transition-colors duration-300"
                      style={{ color: reason.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#023779] md:text-2xl">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-500 md:text-base">
                    {reason.description}
                  </p>

                  {/* Feature bullets */}
                  <ul className="mt-5 space-y-2.5">
                    {reason.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-gray-600"
                      >
                        <div
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${reason.color}12` }}
                        >
                          <Check
                            className="h-3 w-3"
                            style={{ color: reason.color }}
                            strokeWidth={2.5}
                          />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: reason.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
