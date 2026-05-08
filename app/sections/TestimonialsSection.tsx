"use client";

import { motion } from "framer-motion";
import {
  Quote,
  Star,
  Building2,
  MapPin,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";

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
  hidden: { opacity: 0, scale: 0.95 },
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

// Placeholder testimonials — replace with real ones later
const testimonials = [
  {
    id: 1,
    quote:
      "Kastanorga transformed our legal documents with remarkable precision. The attention to cultural nuance in the French translation saved us from costly misunderstandings.",
    author: "Sarah Mitchell",
    role: "Legal Counsel",
    company: "CrossBorder Legal LLP",
    location: "London, UK",
    rating: 5,
    language: "EN → FR",
    industry: "Legal",
  },
  {
    id: 2,
    quote:
      "Working with Kastanorga felt like having a native speaker on our team. The Dutch localization of our product content was flawless and culturally spot-on.",
    author: "Pieter Van den Berg",
    role: "Marketing Director",
    company: "NordicTech Solutions",
    location: "Amsterdam, NL",
    rating: 5,
    language: "EN → NL",
    industry: "Technology",
  },
  {
    id: 3,
    quote:
      "The professionalism and speed were exceptional. Our business communications in English now carry the same authority as our original French documents.",
    author: "Claire Dubois",
    role: "CEO",
    company: "Dubois & Associates",
    location: "Brussels, BE",
    rating: 5,
    language: "FR → EN",
    industry: "Consulting",
  },
];

const stats = [
  { label: "Clients Served", value: "50+", icon: Building2 },
  { label: "Countries", value: "12", icon: MapPin },
  { label: "Languages", value: "3", icon: Quote },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-white py-24 md:py-32 lg:py-40"
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
            <span className="inline-flex items-center gap-2 rounded-full border border-[#023779]/15 bg-[#fafafa] px-4 py-1.5 text-sm font-medium text-[#023779] shadow-sm">
              <Quote className="h-3.5 w-3.5" />
              Client Stories
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp(0.1)}
            className="font-serif text-4xl font-bold tracking-tight text-[#1a1a2e] md:text-5xl lg:text-6xl"
          >
            Trusted Across <span className="text-[#023779]">Borders</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp(0.2)}
            className="mt-6 text-lg leading-relaxed text-gray-500 md:text-xl"
          >
            From startups to established firms, professionals rely on Kastanorga
            for translations that preserve intent and build trust.
          </motion.p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp(0.1 * index)}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#023779]/5">
                <stat.icon
                  className="h-5 w-5 text-[#023779]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-[#1a1a2e]">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Testimonial — Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16"
        >
          <motion.div
            variants={scaleIn(0)}
            className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gray-200/80 bg-[#fafafa] shadow-xl shadow-[#023779]/5"
          >
            {/* Quote icon background */}
            <div className="absolute -right-8 -top-8 text-[200px] font-serif leading-none text-[#023779]/[0.03] select-none">
              "
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              {/* Navigation */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-8 bg-[#023779]"
                          : "w-1.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-300 hover:border-[#023779]/20 hover:text-[#023779]"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-300 hover:border-[#023779]/20 hover:text-[#023779]"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Active testimonial */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#cd2927] text-[#cd2927]"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-2xl leading-relaxed text-[#1a1a2e] md:text-3xl lg:text-4xl">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    {/* Avatar placeholder */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#023779]/10 to-[#cd2927]/10 text-sm font-bold text-[#023779]">
                      {testimonials[activeIndex].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a1a2e]">
                        {testimonials[activeIndex].author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonials[activeIndex].role},{" "}
                        {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>

                  {/* Meta tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">
                      <MapPin className="h-3 w-3" />
                      {testimonials[activeIndex].location}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-white"
                      style={{ backgroundColor: "#023779" }}
                    >
                      {testimonials[activeIndex].language}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">
                      {testimonials[activeIndex].industry}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid of smaller testimonial previews */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              variants={fadeInUp(0.1 * index)}
              onClick={() => setActiveIndex(index)}
              className={`group relative rounded-2xl border p-6 text-left transition-all duration-300 ${
                index === activeIndex
                  ? "border-[#023779]/20 bg-[#023779]/[0.02] shadow-md"
                  : "border-gray-200/60 bg-white hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#023779]/5">
                  <Quote className="h-4 w-4 text-[#023779]" strokeWidth={1.5} />
                </div>
                {index === activeIndex && (
                  <div className="flex h-2 w-2 rounded-full bg-[#023779]" />
                )}
              </div>
              <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-gray-600">
                "{testimonial.quote}"
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#023779]/10 to-[#cd2927]/10 text-[10px] font-bold text-[#023779]">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="text-xs font-medium text-gray-700">
                  {testimonial.author}
                </span>
                <span className="text-xs text-gray-400">
                  · {testimonial.company}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.3)}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-400">
            Join professionals across Europe who trust Kastanorga with their
            most important communications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
