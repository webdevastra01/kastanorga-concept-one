"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Globe, FileText, Clock, Shield, PenTool } from "lucide-react";

const faqs = [
  {
    id: "languages",
    question: "What languages do you support?",
    answer:
      "Kastanorga specializes in professional translation between English, French, and Dutch. We handle all combinations — English ↔ French, English ↔ Dutch, and French ↔ Dutch — with native-level fluency and cultural precision in every direction.",
    icon: Globe,
  },
  {
    id: "documents",
    question: "What types of documents can you translate?",
    answer:
      "We translate a wide range of materials including business contracts, marketing content, technical manuals, academic papers, website copy, legal documents, emails, and personal correspondence. Every document receives the same level of meticulous attention to detail.",
    icon: FileText,
  },
  {
    id: "timeline",
    question: "How long does translation take?",
    answer:
      "Turnaround depends on document length and complexity. Standard projects are typically completed within 48 hours. Larger or specialized projects receive a clear timeline upfront. Rush services are available when you need exceptional speed without sacrificing quality.",
    icon: Clock,
  },
  {
    id: "confidentiality",
    question: "Is my information confidential?",
    answer:
      "Absolutely. Confidentiality is foundational to our work. All documents are handled with strict privacy protocols. We never share your content with third parties, and we can provide NDAs or confidentiality agreements upon request for sensitive materials.",
    icon: Shield,
  },
  {
    id: "proofreading",
    question: "Do you offer proofreading and editing?",
    answer:
      "Yes. Beyond translation, we provide standalone proofreading and editing services for content already written in English, French, or Dutch. This includes grammar refinement, style consistency, tone calibration, and cultural appropriateness review.",
    icon: PenTool,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative w-full bg-[#fafafa] py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center md:mb-20"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#cd2927]">
            Common Questions
          </span>
          <h2 className="font-serif text-4xl font-medium tracking-tight text-[#023779] md:text-5xl lg:text-6xl">
            Frequently Asked
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            Everything you need to know about working with Kastanorga.
            Can&apos;t find your answer? Reach out directly.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => {
              const Icon = faq.icon;
              return (
                <motion.div key={faq.id} variants={itemVariants}>
                  <AccordionItem
                    value={faq.id}
                    className="rounded-2xl border border-slate-200 bg-white px-6 py-1 shadow-sm transition-all duration-300 hover:border-[#023779]/20 hover:shadow-md data-[state=open]:border-[#023779]/30 data-[state=open]:shadow-md md:px-8"
                  >
                    <AccordionTrigger className="group py-6 text-left hover:no-underline md:py-7">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#023779]/5 text-[#023779] transition-colors duration-300 group-hover:bg-[#023779]/10 group-data-[state=open]:bg-[#023779] group-data-[state=open]:text-white">
                          <Icon className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <span className="text-lg font-medium text-slate-900 transition-colors duration-300 group-hover:text-[#023779] md:text-xl">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-0 md:pb-7">
                      <div className="ml-14 border-l-2 border-[#cd2927]/20 pl-6">
                        <p className="leading-relaxed text-slate-600 md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center md:mt-20"
        >
          <p className="text-slate-400">
            Still have questions?{" "}
            <a
              href="#contact"
              className="font-medium text-[#023779] underline-offset-4 transition-colors duration-200 hover:text-[#cd2927] hover:underline"
            >
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
