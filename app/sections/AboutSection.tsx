"use client";

import { motion } from "framer-motion";
import { BookOpen, Heart, Globe, Sparkles } from "lucide-react";
import Image from "next/image";

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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const values = [
  {
    icon: BookOpen,
    title: "Lifelong Learning",
    description: "Every word carries years of cultural wisdom",
  },
  {
    icon: Heart,
    title: "Human Connection",
    description: "Bridging hearts, not just languages",
  },
  {
    icon: Globe,
    title: "Cultural Depth",
    description: "Understanding context beyond literal meaning",
  },
  {
    icon: Sparkles,
    title: "Meaningful Clarity",
    description: "Transforming knowledge into shared understanding",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#fafafa] py-24 md:py-32 lg:py-40"
    >
      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(#023779 1px, transparent 1px), linear-gradient(90deg, #023779 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Image Composition */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Main image container */}
            <motion.div
              variants={fadeInUp(0)}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#f0f4f8] to-[#e8eef5] shadow-2xl shadow-[#023779]/10"
            >
              <Image
                src="/about.jpg"
                alt="Two people connected through language — a bridge of letters symbolizing human communication and understanding"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Soft gradient overlays for depth and text safety */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa]/40 via-transparent to-[#fafafa]/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#fafafa]/30 via-transparent to-transparent" />
            </motion.div>

            {/* Decorative corner frame accents */}
            <div className="absolute -left-3 -top-3 h-20 w-20 border-l-2 border-t-2 border-[#023779]/20 rounded-tl-xl" />
            <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b-2 border-r-2 border-[#cd2927]/20 rounded-br-xl" />

            {/* Floating accent card */}
            <motion.div
              variants={fadeInUp(0.3)}
              className="absolute -bottom-6 -right-6 hidden rounded-xl border border-[#023779]/10 bg-white p-5 shadow-xl shadow-[#023779]/5 md:block lg:-right-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#cd2927]/10">
                  <Sparkles className="h-5 w-5 text-[#cd2927]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#023779]">
                    Founded on Passion
                  </p>
                  <p className="text-xs text-gray-500">
                    For the art of language
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col"
          >
            {/* Section label */}
            <motion.div variants={fadeInUp(0)} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#023779]/15 bg-white px-4 py-1.5 text-sm font-medium text-[#023779] shadow-sm">
                <BookOpen className="h-3.5 w-3.5" />
                Our Story
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeInUp(0.1)}
              className="font-serif text-4xl font-bold tracking-tight text-[#1a1a2e] md:text-5xl lg:text-6xl"
            >
              Built From a{" "}
              <span className="relative inline-block">
                Love
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-[#cd2927]/30"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q50,0 100,8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </span>{" "}
              for Language
            </motion.h2>

            {/* Body text */}
            <motion.div variants={fadeInUp(0.2)} className="mt-8 space-y-5">
              <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
                Kastanorga was born from a simple belief: that translation is
                not merely about converting words from one language to another,
                but about preserving the soul of human connection.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
                With every project, we transform knowledge into understanding
                and wisdom into shared experience. We believe that when people
                truly comprehend one another — beyond literal meaning, beyond
                cultural barriers — something profound happens. Ideas flow.
                Trust builds. Relationships deepen.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
                Our work spans English, French, and Dutch, but our mission is
                universal: to help people truly understand each other through
                clear, precise, and culturally-aware communication.
              </p>
            </motion.div>

            {/* Values grid */}
            <motion.div
              variants={fadeInUp(0.3)}
              className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp(0.1 * index)}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="group flex items-start gap-4 rounded-xl border border-gray-200/60 bg-white p-4 transition-all duration-300 hover:border-[#023779]/20 hover:shadow-lg hover:shadow-[#023779]/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#023779]/5 transition-colors group-hover:bg-[#023779]/10">
                    <value.icon
                      className="h-5 w-5 text-[#023779] transition-colors group-hover:text-[#cd2927]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e]">
                      {value.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-gray-500">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
