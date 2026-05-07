"use client";

import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const navigation = {
  services: [
    { name: "Document Translation", href: "#services" },
    { name: "Business Communication", href: "#services" },
    { name: "Localization", href: "#services" },
    { name: "Proofreading & Editing", href: "#services" },
    { name: "Cultural Adaptation", href: "#services" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Languages", href: "#languages" },
    { name: "FAQ", href: "#faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Confidentiality", href: "#" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:hello@kastanorga.com",
      icon: <Mail className="h-5 w-5" strokeWidth={1.5} />,
    },
  ],
};

export default function Footer() {
  return (
    <div className="relative w-full border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="xl:grid xl:grid-cols-12 xl:gap-8"
        >
          {/* Brand Column */}
          <div className="space-y-6 xl:col-span-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Kastanorga"
                width={180}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>

            {/* Mission Statement */}
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              Helping people truly understand each other through clear
              translation and communication.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-2">
              <a
                href="mailto:hello@kastanorga.com"
                className="group flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-[#023779]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-[#023779]/10">
                  <Mail
                    className="h-4 w-4 text-slate-400 transition-colors group-hover:text-[#023779]"
                    strokeWidth={1.5}
                  />
                </div>
                hello@kastanorga.com
              </a>
              <div className="group flex items-center gap-3 text-sm text-slate-500">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                  <MapPin
                    className="h-4 w-4 text-slate-400"
                    strokeWidth={1.5}
                  />
                </div>
                Serving clients across Europe
              </div>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-6 xl:col-start-7 xl:mt-0">
            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#023779]">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-500 transition-colors duration-200 hover:text-[#023779]"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#023779]">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-500 transition-colors duration-200 hover:text-[#023779]"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#023779]">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-500 transition-colors duration-200 hover:text-[#023779]"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Language Pills */}
          <div className="mt-12 xl:col-span-12 xl:mt-16">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Languages
              </span>
              {["English", "Français", "Nederlands"].map((lang) => (
                <span
                  key={lang}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  <Globe className="mr-1.5 h-3 w-3 text-[#023779]" />
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Kastanorga. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition-all duration-200 hover:border-[#023779]/20 hover:bg-[#023779]/5 hover:text-[#023779]"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
