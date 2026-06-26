export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 px-6"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: título + textos */}
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

            <p className="font-[family-name:var(--font-lato)] text-[var(--taupe)] leading-relaxed mb-6">
              A Clínica Dahlia nasceu da paixão por proporcionar transformações
              reais aliadas ao cuidado genuíno. Aqui, a biomedicina é a base de
              cada protocolo — porque seu resultado merece ciência, não achismo.
            </p>
            <p className="font-[family-name:var(--font-lato)] text-[var(--taupe)] leading-relaxed">
              Em um ambiente acolhedor e sofisticado, cada atendimento é
              personalizado para revelar sua beleza com saúde, autoestima e
              confiança.
            </p>
          </div>

          {/* Right: card biomédica + CTA */}
          <div className="flex flex-col gap-8 lg:pt-20">
            {/* Biomédica credential card */}
            <div
              className="flex items-start gap-4 p-6"
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
                  className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase font-semibold mb-2"
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

            {/* Ornamento decorativo */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px" style={{ background: "var(--gold-light)" }} />
              <span className="text-xl" style={{ color: "var(--gold)" }}>✦</span>
              <div className="flex-1 h-px" style={{ background: "var(--gold-light)" }} />
            </div>

            <a
              href="/contato"
              className="inline-block font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-8 py-4 text-white transition-all duration-300 hover:opacity-90 text-center"
              style={{ background: "var(--marsala)" }}
            >
              Agendar Consulta
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
