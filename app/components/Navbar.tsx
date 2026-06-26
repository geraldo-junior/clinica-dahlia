"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Atend. em Casa", href: "/atendimento-em-casa" },
  { label: "Sobre", href: "/sobre" },
];

function Logo() {
  const [logoError, setLogoError] = useState(false);

  return (
    <Link href="/" className="flex items-center gap-3">
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
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

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

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-[var(--marsala)]"
                  : "text-[var(--taupe)] hover:text-[var(--marsala)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-6 py-2 border border-[var(--marsala)] text-[var(--marsala)] hover:bg-[var(--marsala)] hover:text-white transition-all duration-300"
          >
            Agendar
          </Link>
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
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase transition-colors ${
                isActive(link.href)
                  ? "text-[var(--marsala)]"
                  : "text-[var(--taupe)] hover:text-[var(--marsala)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-6 py-2 border border-[var(--marsala)] text-[var(--marsala)] text-center hover:bg-[var(--marsala)] hover:text-white transition-all duration-300"
          >
            Agendar
          </Link>
        </div>
      )}
    </header>
  );
}
