const featured = [
  {
    icon: "✦",
    title: "Limpeza de Pele",
    description:
      "Tratamento profundo que remove impurezas, desobstrui poros e revitaliza a pele, deixando-a luminosa e saudável.",
    tag: "Facial",
  },
  {
    icon: "◇",
    title: "Botox & Preenchimento",
    description:
      "Procedimentos minimamente invasivos aplicados com segurança biomédica para suavizar linhas e restaurar o volume natural do rosto.",
    tag: "Facial",
  },
  {
    icon: "✧",
    title: "Drenagem Linfática",
    description:
      "Massagem suave que estimula o sistema linfático, reduz inchaço, celulite e promove sensação de leveza e bem-estar.",
    tag: "Corporal",
  },
];

function TagBadge({ tag }: { tag: string }) {
  if (tag === "Facial") {
    return (
      <span
        className="font-[family-name:var(--font-lato)] text-xs tracking-widest uppercase px-3 py-1"
        style={{
          color: "var(--campestre)",
          border: "1px solid var(--campestre-light)",
          background: "#f4f8f2",
        }}
      >
        {tag}
      </span>
    );
  }
  return (
    <span
      className="font-[family-name:var(--font-lato)] text-xs tracking-widest uppercase px-3 py-1"
      style={{
        color: "var(--marsala)",
        border: "1px solid var(--rose-quartz)",
        background: "var(--rose-quartz)",
      }}
    >
      {tag}
    </span>
  );
}

export default function ServicosPreview() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
            O que oferecemos
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[var(--charcoal)] mb-4">
            Procedimentos em Destaque
          </h2>
          <div className="gold-divider" />
          <p className="font-[family-name:var(--font-lato)] text-[var(--taupe)] max-w-lg mx-auto mt-6 leading-relaxed">
            Cada protocolo é personalizado e conduzido com rigor técnico
            biomédico, unindo ciência e cuidado para resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-white transition-all duration-500 hover:shadow-lg border border-[var(--cream)] hover:border-[var(--rose-quartz-deep)]"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl font-light text-[var(--gold)]">
                  {service.icon}
                </span>
                <TagBadge tag={service.tag} />
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--charcoal)] mb-3">
                {service.title}
              </h3>
              <p className="font-[family-name:var(--font-lato)] text-sm text-[var(--taupe)] leading-relaxed">
                {service.description}
              </p>
              <div
                className="mt-6 w-0 group-hover:w-12 h-px transition-all duration-500"
                style={{ background: "var(--marsala)" }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/servicos"
            className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-10 py-4 inline-block border border-[var(--marsala)] text-[var(--marsala)] hover:bg-[var(--marsala)] hover:text-white transition-all duration-300"
          >
            Ver todos os serviços
          </a>
        </div>
      </div>
    </section>
  );
}
