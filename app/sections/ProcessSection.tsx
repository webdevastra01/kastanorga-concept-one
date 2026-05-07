"use client";

import { motion } from "framer-motion";
import {
  Upload,
  Languages,
  Send,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Submit Your Content",
    description:
      "Upload documents or explain your needs. Share files, context, and any specific requirements — we'll review everything within hours.",
    color: "#023779",
    bgGradient: "from-[#023779]/8 to-[#023779]/3",
  },
  {
    number: "02",
    icon: Languages,
    title: "Translation & Review",
    description:
      "Careful multilingual translation and refinement. Native-level expertise meets cultural awareness for output that reads naturally.",
    color: "#cd2927",
    bgGradient: "from-[#cd2927]/8 to-[#cd2927]/3",
  },
  {
    number: "03",
    icon: Send,
    title: "Delivery",
    description:
      "Receive polished, accurate communication ready for use. Formatted, reviewed, and delivered on time — every time.",
    color: "#023779",
    bgGradient: "from-[#023779]/8 to-[#023779]/3",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative w-full overflow-hidden bg-white py-24 md:py-32 lg:py-40"
    >
      {/* Top subtle divider */}
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
            <span className="inline-flex items-center gap-2 rounded-full border border-[#023779]/15 bg-[#fafafa] px-4 py-1.5 text-sm font-medium text-[#023779] shadow-sm">
              <CheckCircle2 className="h-3.5 w-3.5" />
              How It Works
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp(0.1)}
            className="font-serif text-4xl font-bold tracking-tight text-[#1a1a2e] md:text-5xl lg:text-6xl"
          >
            Simple <span className="text-[#023779]">3-Step</span> Process
          </motion.h2>

          <motion.p
            variants={fadeInUp(0.2)}
            className="mt-6 text-lg leading-relaxed text-gray-500 md:text-xl"
          >
            From first contact to final delivery, we've streamlined every step
            so you can focus on what matters — your message.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="relative mt-20"
        >
          {/* Connecting line - desktop only */}
          <div className="absolute left-1/2 top-[88px] hidden h-0.5 w-[calc(66.666%-4rem)] -translate-x-1/2 lg:block">
            <div className="h-full w-full bg-gradient-to-r from-[#023779]/20 via-[#cd2927]/20 to-[#023779]/20" />
          </div>

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp(0.15 * index)}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step indicator with icon */}
                <motion.div
                  variants={scaleIn(0.1 * index)}
                  className="relative z-10"
                >
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 bg-white shadow-lg shadow-[#023779]/5 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#023779]/10"
                    style={{ borderColor: `${step.color}25` }}
                  >
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}12, ${step.color}05)`,
                      }}
                    >
                      <step.icon
                        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: step.color }}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div
                    className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow-sm"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="mt-8 max-w-sm">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] transition-colors duration-300 group-hover:text-[#023779] md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500 md:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector arrow */}
                {index < steps.length - 1 && (
                  <div className="mt-6 flex items-center justify-center lg:hidden">
                    <ArrowRight
                      className="h-5 w-5 text-gray-300"
                      strokeWidth={1.5}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.4)}
          className="mt-20 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#023779] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#023779]/20 transition-all duration-300 hover:bg-[#023779]/90 hover:shadow-xl hover:shadow-[#023779]/25"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
          <a
            href="#faq"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-[#023779]/20 hover:bg-[#fafafa] hover:text-[#023779]"
          >
            Have Questions?
          </a>
        </motion.div>
      </div>
    </section>
  );
}
