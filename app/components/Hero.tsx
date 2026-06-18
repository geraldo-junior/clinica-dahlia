export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FDF8F7 0%, #F9EBE9 45%, #EDE5D8 100%)",
      }}
    >
      {/* Ornamental rings */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ border: "1px solid var(--marsala)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full"
          style={{ border: "1px solid var(--gold)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[920px] rounded-full"
          style={{ border: "1px solid var(--rose-quartz-deep)" }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
          Clínica Dahlia · Estética Avançada
        </p>

        <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light text-[var(--charcoal)] leading-tight mb-6">
          Onde a ciência<br />
          <span className="italic" style={{ color: "var(--marsala)" }}>
            encontra a beleza
          </span>
        </h1>

        <div className="gold-divider" />

        <p className="font-[family-name:var(--font-lato)] text-base md:text-lg font-light text-[var(--taupe)] max-w-2xl mx-auto mt-6 mb-10 leading-relaxed">
          Procedimentos estéticos faciais e corporais realizados com precisão
          biomédica — para elevar sua autoestima com segurança, elegância e
          resultados que revelam a melhor versão de você.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#servicos"
            className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-10 py-4 text-white transition-all duration-300 hover:opacity-90"
            style={{ background: "var(--marsala)" }}
          >
            Nossos Serviços
          </a>
          <a
            href="#contato"
            className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-10 py-4 border border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-white transition-all duration-300"
          >
            Agendar Consulta
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-[family-name:var(--font-lato)] text-xs tracking-widest uppercase text-[var(--taupe)]">
          Role
        </span>
        <div
          className="w-px h-12 animate-pulse"
          style={{ background: "var(--marsala)" }}
        />
      </div>
    </section>
  );
}
