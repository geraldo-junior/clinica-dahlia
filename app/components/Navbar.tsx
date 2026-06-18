"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#home" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

function Logo() {
  const [logoError, setLogoError] = useState(false);

  return (
    <a href="#home" className="flex items-center gap-3">
      {!logoError && (
        <Image
          src="/logo.png"
          alt="Clínica Dahlia"
          width={130}
          height={52}
          className="h-12 w-auto object-contain"
          onError={() => setLogoError(true)}
        />
      )}
      {logoError && (
        <div className="flex flex-col leading-none">
          <span className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-[0.2em] text-[var(--charcoal)] uppercase">
            Dahlia
          </span>
          <span className="font-[family-name:var(--font-lato)] text-[8px] tracking-[0.35em] uppercase text-[var(--marsala)]">
            Estética Avançada
          </span>
        </div>
      )}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase text-[var(--taupe)] hover:text-[var(--marsala)] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-6 py-2 border border-[var(--marsala)] text-[var(--marsala)] hover:bg-[var(--marsala)] hover:text-white transition-all duration-300"
          >
            Agendar
          </a>
        </nav>

        <button
          className="md:hidden text-[var(--charcoal)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--cream)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase text-[var(--taupe)] hover:text-[var(--marsala)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-6 py-2 border border-[var(--marsala)] text-[var(--marsala)] text-center hover:bg-[var(--marsala)] hover:text-white transition-all duration-300"
          >
            Agendar
          </a>
        </div>
      )}
    </header>
  );
}
