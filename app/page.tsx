import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AtendimentoDestaque from "./components/AtendimentoDestaque";
import ServicosPreview from "./components/ServicosPreview";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Clínica Dahlia | Estética Avançada",
  description:
    "Procedimentos estéticos faciais e corporais realizados por biomédica especializada. Ciência e elegância para elevar sua autoestima com segurança e resultados reais.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Visão geral do estúdio */}
        <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
                  Bem-vinda ao studio
                </p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-[var(--charcoal)] mb-4 leading-tight">
                  Um espaço feito<br />
                  <span className="italic" style={{ color: "var(--marsala)" }}>
                    para você florescer
                  </span>
                </h2>
                <div className="w-12 h-px mb-8" style={{ background: "var(--gold)" }} />
                <p className="font-[family-name:var(--font-lato)] text-[var(--taupe)] leading-relaxed mb-6">
                  A Clínica Dahlia é um espaço dedicado à estética avançada com embasamento
                  científico. Aqui, cada protocolo nasce do encontro entre biomedicina e
                  cuidado genuíno — para que você saia não apenas mais bonita, mas mais
                  confiante.
                </p>
                <p className="font-[family-name:var(--font-lato)] text-[var(--taupe)] leading-relaxed">
                  Atendimentos personalizados, ambiente acolhedor e uma profissional
                  biomédica especializada que acompanha cada etapa do seu tratamento
                  com atenção e segurança.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: "✦",
                    title: "Biomedicina como base",
                    desc: "Todos os procedimentos são conduzidos com rigor clínico e embasamento científico.",
                  },
                  {
                    icon: "◇",
                    title: "Protocolos personalizados",
                    desc: "Cada atendimento é planejado de acordo com as necessidades únicas da sua pele e corpo.",
                  },
                  {
                    icon: "○",
                    title: "Ambiente seguro e acolhedor",
                    desc: "Um espaço pensado para que você se sinta confortável e cuidada do início ao fim.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span
                      className="text-xl mt-1 flex-shrink-0"
                      style={{ color: "var(--gold)" }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-[family-name:var(--font-lato)] text-sm font-semibold tracking-wide text-[var(--charcoal)] mb-1">
                        {item.title}
                      </p>
                      <p className="font-[family-name:var(--font-lato)] text-sm text-[var(--taupe)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-4">
                  <a
                    href="/sobre"
                    className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase inline-flex items-center gap-2 text-[var(--marsala)] hover:gap-4 transition-all duration-300"
                  >
                    Conheça nossa história
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AtendimentoDestaque />
        <ServicosPreview />

        {/* CTA final */}
        <section
          className="py-20 px-6 text-center"
          style={{
            background: "linear-gradient(160deg, #FDF8F7 0%, #F9EBE9 45%, #EDE5D8 100%)",
          }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
              Dê o primeiro passo
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[var(--charcoal)] mb-6 leading-tight">
              Pronta para revelar a melhor<br />
              <span className="italic" style={{ color: "var(--marsala)" }}>
                versão de você?
              </span>
            </h2>
            <div className="gold-divider mb-8" />
            <p className="font-[family-name:var(--font-lato)] text-[var(--taupe)] leading-relaxed mb-10">
              Agende uma avaliação e descubra o protocolo ideal para os seus objetivos.
              Atendimento presencial e em domicílio disponível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-10 py-4 text-white transition-all duration-300 hover:opacity-90"
                style={{ background: "var(--marsala)" }}
              >
                Agendar Consulta
              </a>
              <a
                href="/servicos"
                className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-10 py-4 border border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-white transition-all duration-300"
              >
                Ver Serviços
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
