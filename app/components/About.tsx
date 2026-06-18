const stats = [
  { value: "8+", label: "Anos de experiência" },
  { value: "3k+", label: "Clientes atendidas" },
  { value: "98%", label: "Satisfação" },
  { value: "15+", label: "Tratamentos" },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 px-6"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
              Nossa história
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[var(--charcoal)] mb-4 leading-tight">
              Beleza com <br />
              <span className="italic" style={{ color: "var(--marsala)" }}>
                embasamento científico
              </span>
            </h2>
            <div className="w-12 h-px mb-8" style={{ background: "var(--gold)" }} />

            {/* Biomédica credential card */}
            <div
              className="flex items-start gap-4 p-5 mb-6 rounded-sm"
              style={{
                background: "var(--rose-quartz)",
                borderLeft: "3px solid var(--marsala)",
              }}
            >
              <span className="text-xl mt-0.5" style={{ color: "var(--marsala)" }}>
                ✦
              </span>
              <div>
                <p
                  className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase font-semibold mb-1"
                  style={{ color: "var(--marsala)" }}
                >
                  Biomédica Especializada
                </p>
                <p className="font-[family-name:var(--font-lato)] text-sm leading-relaxed text-[var(--charcoal)]">
                  Todos os procedimentos são realizados por biomédica habilitada,
                  garantindo segurança clínica e resultados com respaldo científico
                  em cada etapa do tratamento.
                </p>
              </div>
            </div>

            <p className="font-[family-name:var(--font-lato)] text-[var(--taupe)] leading-relaxed mb-6">
              A Clínica Dahlia nasceu da paixão por proporcionar transformações
              reais aliadas ao cuidado genuíno. Aqui, a biomedicina é a base de
              cada protocolo — porque seu resultado merece ciência, não achismo.
            </p>
            <p className="font-[family-name:var(--font-lato)] text-[var(--taupe)] leading-relaxed mb-8">
              Em um ambiente acolhedor e sofisticado, cada atendimento é
              personalizado para revelar sua beleza com saúde, autoestima e
              confiança.
            </p>

            <a
              href="#contato"
              className="inline-block font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-8 py-3 text-white transition-all duration-300 hover:opacity-90 text-center"
              style={{ background: "var(--marsala)" }}
            >
              Conheça a clínica
            </a>
          </div>

          {/* Stats */}
          <div>
            <div className="grid grid-cols-2 gap-px" style={{ background: "var(--campestre-light)" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="p-10 text-center" style={{ background: "white" }}>
                  <div
                    className="font-[family-name:var(--font-cormorant)] text-5xl font-light mb-2"
                    style={{ color: "var(--marsala)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-[family-name:var(--font-lato)] text-xs tracking-widest uppercase text-[var(--taupe)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
