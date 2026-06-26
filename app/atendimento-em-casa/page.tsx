import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Atendimento em Casa | Clínica Dahlia",
  description:
    "Receba os procedimentos estéticos da Clínica Dahlia no conforto da sua residência. Mesma qualidade clínica, sem precisar sair de casa.",
};

const procedures = [
  "Limpeza de Pele",
  "Massagem Modeladora",
  "Drenagem Linfática",
  "Peeling Químico",
  "Microagulhamento",
  "Hidratação Facial",
];

const benefits = [
  {
    icon: "◇",
    title: "Conforto e praticidade",
    desc: "Sem deslocamentos, sem espera. Você recebe o atendimento no seu espaço, no seu tempo.",
  },
  {
    icon: "○",
    title: "Privacidade garantida",
    desc: "Atendimento exclusivo e discreto, ideal para quem valoriza a intimidade do próprio ambiente.",
  },
  {
    icon: "✦",
    title: "Padrão clínico completo",
    desc: "Levamos os mesmos equipamentos e protocolos utilizados no studio, sem abrir mão da segurança.",
  },
  {
    icon: "△",
    title: "Flexibilidade de horários",
    desc: "Horários adaptados à sua rotina, incluindo manhãs, tardes e fins de semana.",
  },
  {
    icon: "✧",
    title: "Atendimento personalizado",
    desc: "Cada visita é planejada com foco nas suas necessidades específicas, sem pressa e sem interrupções.",
  },
  {
    icon: "▽",
    title: "Segurança biomédica",
    desc: "Todos os procedimentos são realizados por biomédica habilitada, com total rigor clínico.",
  },
];

export default function AtendimentoEmCasaPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section
          className="pt-32 pb-20 px-6"
          style={{
            background: "linear-gradient(160deg, #FDF8F7 0%, #F9EBE9 45%, #EDE5D8 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center justify-center w-16 h-16 mb-8 mx-auto"
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
              Clínica Dahlia · Diferencial exclusivo
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-[var(--charcoal)] mb-6 leading-tight">
              Estética avançada<br />
              <span className="italic" style={{ color: "var(--marsala)" }}>
                no seu lar
              </span>
            </h1>
            <div className="gold-divider" />
            <p className="font-[family-name:var(--font-lato)] text-base md:text-lg font-light text-[var(--taupe)] max-w-2xl mx-auto mt-6 leading-relaxed">
              Levamos toda a expertise da Clínica Dahlia até você. Mesma qualidade,
              mesmos protocolos clínicos — com o conforto e a privacidade que você merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href={`https://wa.me/5511949759413?text=${encodeURIComponent("Olá! Gostaria de agendar um atendimento em domicílio com a Clínica Dahlia. 🌸")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-10 py-4 text-white transition-all duration-300 hover:opacity-90"
                style={{ background: "var(--marsala)" }}
              >
                Agendar via WhatsApp
              </a>
              <a
                href="/contato"
                className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-10 py-4 border border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-white transition-all duration-300"
              >
                Formulário de contato
              </a>
            </div>
          </div>
        </section>

        {/* Procedimentos disponíveis */}
        <section className="py-20 px-6" style={{ background: "var(--background)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
                O que levamos até você
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[var(--charcoal)] mb-4">
                Procedimentos Disponíveis
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {procedures.map((proc) => (
                <div
                  key={proc}
                  className="flex items-center gap-3 p-5 bg-white border border-[var(--cream)]"
                >
                  <span className="text-lg flex-shrink-0" style={{ color: "var(--gold)" }}>✦</span>
                  <span className="font-[family-name:var(--font-cormorant)] text-lg text-[var(--charcoal)]">
                    {proc}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-[family-name:var(--font-lato)] text-sm text-[var(--taupe)] text-center mt-6">
              Procedimentos sujeitos à avaliação prévia. Entre em contato para verificar disponibilidade.
            </p>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
                Por que escolher
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[var(--charcoal)] mb-4">
                Vantagens do Atendimento Domiciliar
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-1" style={{ color: "var(--gold)" }}>
                    {b.icon}
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--charcoal)] mb-2">
                      {b.title}
                    </p>
                    <p className="font-[family-name:var(--font-lato)] text-sm text-[var(--taupe)] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-20 px-6" style={{ background: "var(--charcoal)" }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
              Simples assim
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-white mb-4">
              Como Funciona
            </h2>
            <div className="w-12 h-px mb-12 mx-auto" style={{ background: "var(--gold)" }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { step: "01", title: "Entre em contato", desc: "Fale via WhatsApp ou pelo formulário para tirar dúvidas e verificar disponibilidade." },
                { step: "02", title: "Agendamos uma visita", desc: "Escolhemos juntos o melhor dia e horário de acordo com a sua rotina." },
                { step: "03", title: "Aproveite em casa", desc: "A profissional chega equipada e pronta. Você só precisa relaxar." },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <span
                    className="font-[family-name:var(--font-cormorant)] text-5xl font-light mb-4"
                    style={{ color: "var(--gold)", opacity: 0.4 }}
                  >
                    {item.step}
                  </span>
                  <p className="font-[family-name:var(--font-cormorant)] text-xl text-white mb-2">
                    {item.title}
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/5511949759413?text=${encodeURIComponent("Olá! Gostaria de agendar um atendimento em domicílio com a Clínica Dahlia. 🌸")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-10 py-4 inline-block text-white transition-all duration-300 hover:opacity-90"
              style={{ background: "var(--marsala)" }}
            >
              Agendar agora
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
