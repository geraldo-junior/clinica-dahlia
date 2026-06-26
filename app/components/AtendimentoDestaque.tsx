export default function AtendimentoDestaque() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Ícone + texto */}
          <div>
            <div
              className="inline-flex items-center justify-center w-16 h-16 mb-8"
              style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>

            <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
              Diferencial exclusivo
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
              Atendemos onde<br />
              <span className="italic" style={{ color: "var(--rose-quartz)" }}>
                você estiver
              </span>
            </h2>
            <div className="w-12 h-px mb-6" style={{ background: "var(--gold)" }} />
            <p className="font-[family-name:var(--font-lato)] text-white/70 leading-relaxed">
              Levamos toda a expertise da Clínica Dahlia até a sua residência ou
              local de preferência. Conforto, privacidade e o mesmo padrão de
              qualidade clínica — sem que você precise sair de casa.
            </p>
          </div>

          {/* Cards de benefícios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "◇", title: "Conforto total", desc: "Descanse e cuide-se no seu próprio ambiente, sem deslocamentos." },
              { icon: "○", title: "Privacidade", desc: "Atendimento exclusivo e discreto, pensado para o seu bem-estar." },
              { icon: "✦", title: "Mesmo padrão clínico", desc: "Equipamentos e protocolos idênticos ao atendimento presencial." },
              { icon: "△", title: "Agendamento flexível", desc: "Horários adaptados à sua rotina, incluindo fins de semana." },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(201,169,110,0.15)",
                }}
              >
                <span className="text-lg mb-3 block" style={{ color: "var(--gold)" }}>
                  {item.icon}
                </span>
                <p className="font-[family-name:var(--font-lato)] text-xs tracking-widest uppercase text-white/50 mb-1">
                  {item.title}
                </p>
                <p className="font-[family-name:var(--font-lato)] text-sm text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="/atendimento-em-casa"
            className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-10 py-4 text-white transition-all duration-300 hover:opacity-90"
            style={{ background: "var(--marsala)" }}
          >
            Saiba mais
          </a>
          <a
            href="/contato"
            className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-10 py-4 border text-white/70 hover:text-white transition-all duration-300"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            Agendar visita
          </a>
        </div>
      </div>
    </section>
  );
}
