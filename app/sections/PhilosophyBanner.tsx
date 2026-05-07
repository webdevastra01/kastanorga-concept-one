"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowDown } from "lucide-react";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
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
      delayChildren: 0.3,
    },
  },
};

export default function PhilosophyBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative w-full overflow-hidden bg-[#0a0e1a] py-32 md:py-40 lg:py-52"
    >
      {/* Ambient background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <motion.div
          style={{ y: y1 }}
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#023779]/20 blur-[120px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-[#cd2927]/10 blur-[120px]"
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8"
      >
        {/* Label */}
        <motion.div variants={fadeInUp(0)} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/60 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#cd2927]" />
            Our Purpose
          </span>
        </motion.div>

        {/* Main statement */}
        <motion.h2
          variants={fadeInUp(0.15)}
          className="font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Kastanorga exists to make{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-white">communication</span>
            <motion.span
              className="absolute -bottom-2 left-0 h-3 w-full rounded-sm bg-[#cd2927]/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ originX: 0 }}
            />
          </span>{" "}
          easier across borders and cultures —{" "}
          <span className="text-white/40">
            turning knowledge into connection.
          </span>
        </motion.h2>

        {/* Supporting line */}
        <motion.p
          variants={fadeInUp(0.3)}
          className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/40 md:text-xl"
        >
          We believe that when people truly understand one another, barriers
          dissolve and possibilities emerge. Every translation is a bridge.
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          variants={fadeInUp(0.4)}
          className="mx-auto mt-16 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
            <ArrowDown
              className="h-3.5 w-3.5 text-white/30"
              strokeWidth={1.5}
            />
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
