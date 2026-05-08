"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";

// ─── Types ─────────────────────────────────────────────────────────
interface NavLink {
  label: string;
  href: string;
}

interface Language {
  code: string;
  label: string;
  flag: string;
}

interface HeaderProps {
  className?: string;
  currentLang?: string;
  onLanguageChange?: (lang: string) => void;
}

// ─── Navigation Data ───────────────────────────────────────────────
const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

// ─── Language Data ─────────────────────────────────────────────────
const LANGUAGES: Language[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
];

// ─── Component ─────────────────────────────────────────────────────
export default function Header({
  className = "",
  currentLang = "en",
  onLanguageChange,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState(currentLang);

  // Scroll listener for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLang(currentLang);
  }, [currentLang]);

  // Update activeLang when prop changes
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  // Language change handler
  const handleLanguageChange = (langCode: string) => {
    setActiveLang(langCode);
    setIsLangOpen(false);
    onLanguageChange?.(langCode);
  };

  const currentLanguage =
    LANGUAGES.find((lang) => lang.code === activeLang) || LANGUAGES[0];
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-out
        ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)] border-b border-neutral-100/50"
            : "bg-transparent"
        }
        ${className}
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 sm:h-20 items-center justify-between">
          {/* ─── Logo ─────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Kastanorga Logo"
                width={180}
                height={24}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* ─── Desktop Navigation ───────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                className="
                  relative px-3.5 py-2 text-sm font-medium text-neutral-600
                  hover:text-neutral-900 transition-colors duration-200
                  rounded-md hover:bg-neutral-100/80
                "
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* ─── Desktop: Language + CTAs ─────────────────────────── */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language Switcher */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="relative"
            >
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="
                  flex items-center gap-2 px-3 py-2 text-sm font-medium
                  text-neutral-600 hover:text-neutral-900
                  rounded-md hover:bg-neutral-100/80
                  transition-all duration-200
                "
                aria-expanded={isLangOpen}
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" strokeWidth={1.5} />
                <span className="hidden lg:inline">
                  {currentLanguage.label}
                </span>
                <span className="lg:hidden">{currentLanguage.flag}</span>
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {isLangOpen && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsLangOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
                      className="
                        absolute right-0 top-full mt-2 z-50
                        min-w-[160px]
                        bg-white rounded-xl
                        border border-neutral-200/80
                        shadow-lg shadow-neutral-900/5
                        overflow-hidden
                      "
                    >
                      <div className="py-1.5">
                        {LANGUAGES.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`
                                flex w-full items-center gap-3 px-4 py-2.5
                                text-sm font-medium
                                transition-colors duration-150
                                ${
                                  activeLang === lang.code
                                    ? "bg-[#023779]/5 text-[#023779]"
                                    : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                                }
                            `}
                          >
                            <span className="text-base">{lang.flag}</span>

                            <span>{lang.label}</span>

                            {activeLang === lang.code && (
                              <Check
                                className="ml-auto h-3.5 w-3.5 text-[#023779]"
                                strokeWidth={2.5}
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>

            <div className="w-px h-6 bg-neutral-200 mx-1 hidden lg:block" />

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <Button
                variant="ghost"
                size="lg"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80"
                asChild
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  Contact
                </a>
              </Button>
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Button
                size="lg"
                className="
                  text-sm font-semibold
                  bg-[#023779] hover:bg-[#023779]/90
                  text-white shadow-sm
                  transition-all duration-200
                  hover:shadow-md hover:-translate-y-0.5
                "
                asChild
              >
                <a href="#cta" onClick={(e) => handleNavClick(e, "#cta")}>
                  Get Started
                </a>
              </Button>
            </motion.div>
          </div>

          {/* ─── Mobile Menu ──────────────────────────────────────── */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-neutral-700 hover:bg-neutral-100"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" strokeWidth={1.5} />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full sm:w-80 bg-white border-l border-neutral-100 p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#cd2927] text-white">
                        <Globe className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <span className="text-base font-semibold text-neutral-900">
                        Kastanorga
                      </span>
                    </div>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 text-neutral-500 hover:bg-neutral-100"
                      >
                        <X className="h-5 w-5" strokeWidth={1.5} />
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile Links */}
                  <nav className="flex-1 px-6 py-6">
                    <ul className="space-y-1">
                      {NAV_LINKS.map((link, index) => (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                        >
                          <SheetClose asChild>
                            <a
                              href={link.href}
                              onClick={(e) => handleNavClick(e, link.href)}
                              className="
                                flex items-center py-3 px-3
                                text-base font-medium text-neutral-700
                                hover:text-[#023779] hover:bg-neutral-50
                                rounded-lg transition-colors duration-200
                              "
                            >
                              {link.label}
                            </a>
                          </SheetClose>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  {/* Mobile: Language Switcher */}
                  <div className="px-6 py-4 border-t border-neutral-100">
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
                      Language / Taal / Langue
                    </p>
                    <div className="flex gap-2">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`
                            flex-1 flex items-center justify-center gap-2
                            py-2.5 px-3 rounded-lg text-sm font-medium
                            transition-all duration-200
                            ${
                              activeLang === lang.code
                                ? "bg-[#023779] text-white shadow-sm"
                                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                            }
                          `}
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span className="hidden sm:inline">{lang.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="px-6 py-6 border-t border-neutral-100 space-y-3">
                    <SheetClose asChild>
                      <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, "#contact")}
                        className="
                          flex items-center justify-center w-full py-3
                          text-sm font-medium text-neutral-700
                          border border-neutral-200 rounded-lg
                          hover:bg-neutral-50 transition-colors duration-200
                        "
                      >
                        Contact
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a
                        href="#cta"
                        onClick={(e) => handleNavClick(e, "#cta")}
                        className="
                          flex items-center justify-center w-full py-3
                          text-sm font-semibold text-white
                          bg-[#023779] hover:bg-[#023779]/90
                          rounded-lg shadow-sm
                          transition-all duration-200
                        "
                      >
                        Get Started
                      </a>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
