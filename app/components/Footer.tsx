export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{
        background: "var(--charcoal)",
        borderColor: "rgba(201,169,110,0.2)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start leading-none">
          <span className="font-[family-name:var(--font-cormorant)] text-xl font-semibold tracking-widest text-white uppercase">
            Clínica Dahlia{" "}
            <span style={{ color: "var(--gold)" }}>✦</span>
          </span>
          <span
            className="font-[family-name:var(--font-lato)] text-[8px] tracking-[0.35em] uppercase mt-1"
            style={{ color: "var(--marsala-light)" }}
          >
            Estética Avançada
          </span>
        </div>

        <p className="font-[family-name:var(--font-lato)] text-xs text-white/40 tracking-widest text-center">
          © {new Date().getFullYear()} Clínica Dahlia. Todos os direitos reservados.
        </p>

        <div className="flex gap-6">
          {["Instagram", "WhatsApp", "Facebook"].map((social) => (
            <a
              key={social}
              href="#"
              className="font-[family-name:var(--font-lato)] text-xs tracking-widest uppercase text-white/40 hover:text-[var(--rose-quartz)] transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
