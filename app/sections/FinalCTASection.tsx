"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, FileText, Sparkles } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden py-24 md:py-32 lg:py-40"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#023779] via-[#023779] to-[#01214d]" />

      {/* Ambient Glow Effects */}
      <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-[#cd2927]/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#cd2927]/5 blur-[100px]" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-[#cd2927]" />
          <span className="text-sm font-medium text-white/90">
            Start your project today
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Ready to Communicate{" "}
          <span className="relative inline-block">
            Clearly
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8C50 2 150 2 198 8"
                stroke="#cd2927"
                strokeWidth="4"
                strokeLinecap="round"
                className="opacity-80"
              />
            </svg>
          </span>{" "}
          Across Languages?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
        >
          Join professionals across Europe who trust Kastanorga for precise,
          culturally-aware translation between English, French, and Dutch.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="group relative h-14 overflow-hidden rounded-xl bg-[#cd2927] px-8 text-base font-semibold text-white shadow-lg shadow-[#cd2927]/25 transition-all duration-300 hover:bg-[#b82422] hover:shadow-xl hover:shadow-[#cd2927]/30 active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FileText className="h-5 w-5" strokeWidth={1.5} />
              Start a Translation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group h-14 rounded-xl border-2 border-white/30 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10 active:scale-[0.98]"
          >
            <span className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
              Contact Kastanorga
            </span>
          </Button>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>48h Response Time</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Confidential & Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Human-Quality Translation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
