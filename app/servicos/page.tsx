import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Serviços | Clínica Dahlia",
  description:
    "Conheça os procedimentos estéticos faciais e corporais da Clínica Dahlia. Protocolos personalizados com embasamento biomédico.",
};

const services = [
  {
    icon: "✦",
    title: "Limpeza de Pele",
    description:
      "Tratamento profundo que remove impurezas, desobstrui poros e revitaliza a pele, deixando-a luminosa e saudável. Indicado para todos os tipos de pele, com protocolo adaptado às suas necessidades.",
    details: ["Extração de cravos e impurezas", "Hidratação profunda", "Controle de oleosidade", "Luminosidade imediata"],
    tag: "Facial",
    image: "https://picsum.photos/seed/limpezapele/800/500",
    imageAlt: "Procedimento de limpeza de pele facial",
  },
  {
    icon: "◇",
    title: "Botox & Preenchimento",
    description:
      "Procedimentos minimamente invasivos aplicados com segurança biomédica para suavizar linhas de expressão e restaurar o volume natural do rosto. Resultados naturais e precisos.",
    details: ["Aplicação de toxina botulínica", "Preenchimento labial e facial", "Suavização de rugas e linhas", "Resultado natural e harmonioso"],
    tag: "Facial",
    image: "https://picsum.photos/seed/botox/800/500",
    imageAlt: "Procedimento de botox e preenchimento facial",
  },
  {
    icon: "○",
    title: "Peeling Químico",
    description:
      "Renovação celular intensa para tratar manchas, acne e envelhecimento. A esfoliação controlada remove as camadas superficiais da pele, revelando uma textura mais jovem e uniforme.",
    details: ["Clareamento de manchas", "Tratamento de acne e cicatrizes", "Renovação celular acelerada", "Uniformização do tom de pele"],
    tag: "Facial",
    image: "https://picsum.photos/seed/peelingquimico/800/500",
    imageAlt: "Procedimento de peeling químico facial",
  },
  {
    icon: "▽",
    title: "Massagem Modeladora",
    description:
      "Técnica corporal que combina movimentos específicos para definir a silhueta, melhorar a circulação sanguínea e reduzir medidas com eficácia comprovada.",
    details: ["Definição e contorno corporal", "Melhora da circulação", "Redução de medidas", "Firmeza e tonicidade"],
    tag: "Corporal",
    image: "https://picsum.photos/seed/massagemmodeladora/800/500",
    imageAlt: "Massagem modeladora corporal",
  },
  {
    icon: "✧",
    title: "Drenagem Linfática",
    description:
      "Massagem suave e precisa que estimula o sistema linfático, reduzindo inchaço, celulite e retenção de líquidos. Promove sensação de leveza e bem-estar duradouros.",
    details: ["Redução de inchaço e retenção", "Combate à celulite", "Desintoxicação do organismo", "Sensação de leveza e conforto"],
    tag: "Corporal",
    image: "https://picsum.photos/seed/drenagemlinf/800/500",
    imageAlt: "Drenagem linfática corporal",
  },
  {
    icon: "△",
    title: "Microagulhamento",
    description:
      "Técnica de indução de colágeno que estimula a regeneração natural da pele, combatendo cicatrizes de acne, manchas, poros dilatados e sinais do envelhecimento com precisão clínica.",
    details: ["Estimulação de colágeno", "Redução de cicatrizes e manchas", "Minimização de poros", "Rejuvenescimento cutâneo"],
    tag: "Facial",
    image: "https://picsum.photos/seed/microagulhamento/800/500",
    imageAlt: "Procedimento de microagulhamento facial",
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

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero da página */}
        <section
          className="pt-32 pb-16 px-6"
          style={{
            background: "linear-gradient(160deg, #FDF8F7 0%, #F9EBE9 45%, #EDE5D8 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
              Clínica Dahlia
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-[var(--charcoal)] mb-6 leading-tight">
              Nossos<br />
              <span className="italic" style={{ color: "var(--marsala)" }}>
                Procedimentos
              </span>
            </h1>
            <div className="gold-divider" />
            <p className="font-[family-name:var(--font-lato)] text-base font-light text-[var(--taupe)] max-w-2xl mx-auto mt-6 leading-relaxed">
              Cada protocolo é desenvolvido de forma personalizada, com rigor técnico biomédico
              e foco nos seus resultados. Conheça nossos tratamentos faciais e corporais.
            </p>
          </div>
        </section>

        {/* Lista de serviços */}
        <section className="py-16 px-6" style={{ background: "var(--background)" }}>
          <div className="max-w-6xl mx-auto space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Imagem */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div
                      className="absolute top-4 left-4"
                    >
                      <TagBadge tag={service.tag} />
                    </div>
                  </div>
                </div>

                {/* Texto */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-3xl font-light mb-4 block" style={{ color: "var(--gold)" }}>
                    {service.icon}
                  </span>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[var(--charcoal)] mb-4">
                    {service.title}
                  </h2>
                  <div className="w-10 h-px mb-6" style={{ background: "var(--gold)" }} />
                  <p className="font-[family-name:var(--font-lato)] text-[var(--taupe)] leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3">
                        <span className="text-sm flex-shrink-0" style={{ color: "var(--marsala)" }}>✦</span>
                        <span className="font-[family-name:var(--font-lato)] text-sm text-[var(--taupe)]">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contato"
                    className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-8 py-3 inline-block border border-[var(--marsala)] text-[var(--marsala)] hover:bg-[var(--marsala)] hover:text-white transition-all duration-300"
                  >
                    Agendar este procedimento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section
          className="py-20 px-6 text-center"
          style={{ background: "var(--cream)" }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
              Dúvidas?
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[var(--charcoal)] mb-6 leading-tight">
              Não sabe qual procedimento<br />
              <span className="italic" style={{ color: "var(--marsala)" }}>é ideal para você?</span>
            </h2>
            <p className="font-[family-name:var(--font-lato)] text-[var(--taupe)] leading-relaxed mb-8">
              Entre em contato e agende uma avaliação. A profissional vai entender
              seus objetivos e indicar o protocolo mais adequado.
            </p>
            <a
              href="/contato"
              className="font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase px-10 py-4 inline-block text-white transition-all duration-300 hover:opacity-90"
              style={{ background: "var(--marsala)" }}
            >
              Falar com a especialista
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
