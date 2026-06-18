"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceLabels: Record<string, string> = {
      limpeza: "Limpeza de Pele",
      botox: "Botox & Preenchimento",
      peeling: "Peeling Químico",
      modeladora: "Massagem Modeladora",
      drenagem: "Drenagem Linfática",
      microagulhamento: "Microagulhamento",
      outro: "Outro",
    };

    const texto = [
      "Olá! Gostaria de agendar um procedimento na Clínica Dahlia. 🌸",
      "",
      `*Nome:* ${form.name}`,
      form.phone ? `*Telefone:* ${form.phone}` : null,
      form.email ? `*E-mail:* ${form.email}` : null,
      form.service ? `*Serviço:* ${serviceLabels[form.service] ?? form.service}` : null,
      form.message ? `*Mensagem:* ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/5511949759413?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  const inputClass =
    "w-full font-[family-name:var(--font-lato)] text-sm text-white bg-transparent py-3 px-0 focus:outline-none transition-colors placeholder:text-white/40"
  const inputStyle = {
    borderBottom: "1px solid rgba(201,169,110,0.3)",
  };

  return (
    <section
      id="contato"
      className="py-24 px-6"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
              Fale conosco
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-white mb-4 leading-tight">
              Agende sua <br />
              <span className="italic" style={{ color: "var(--rose-quartz)" }}>
                consulta
              </span>
            </h2>
            <div className="w-12 h-px mb-8" style={{ background: "var(--gold)" }} />
            <p className="font-[family-name:var(--font-lato)] text-white/60 leading-relaxed mb-12">
              Entre em contato e nossa equipe responderá para confirmar o melhor
              horário. Atendimento realizado por biomédica especializada.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-lg mt-0.5" style={{ color: "var(--gold)" }}>✦</span>
                <div>
                  <p className="font-[family-name:var(--font-lato)] text-xs tracking-widest uppercase text-[var(--gold)] mb-1">
                    Endereço
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-lg mt-0.5" style={{ color: "var(--gold)" }}>◇</span>
                <div>
                  <p className="font-[family-name:var(--font-lato)] text-xs tracking-widest uppercase text-[var(--gold)] mb-1">
                    Horário
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-white/70 text-sm">
                    Qua: 9h às 14h
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-lg mt-0.5" style={{ color: "var(--gold)" }}>○</span>
                <div>
                  <p className="font-[family-name:var(--font-lato)] text-xs tracking-widest uppercase text-[var(--gold)] mb-1">
                    Contato
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-white/70 text-sm">
                    (11) 94975-9413
                  </p>
                </div>
              </div>
            </div>

            {/* Biomédica note */}
            <div
              className="mt-10 p-4 rounded-sm flex items-center gap-3"
              style={{
                background: "rgba(247,202,201,0.08)",
                border: "1px solid rgba(247,202,201,0.2)",
              }}
            >
              <span style={{ color: "var(--rose-quartz)" }} className="text-sm">✦</span>
              <p className="font-[family-name:var(--font-lato)] text-xs tracking-wide text-white/50">
                Todos os procedimentos são realizados por{" "}
                <span style={{ color: "var(--rose-quartz)" }} className="font-semibold">
                  biomédica especializada e habilitada
                </span>
                , com total segurança clínica.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <span className="text-5xl mb-6" style={{ color: "var(--rose-quartz)" }}>✦</span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-white mb-4">
                  Mensagem enviada!
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-white/60 text-sm">
                  Em breve nossa equipe entrará em contato com você.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <input
                    type="text"
                    placeholder="Nome completo"
                    required
                    className={inputClass}
                    style={inputStyle}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Telefone / WhatsApp"
                    className={inputClass}
                    style={inputStyle}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  className={inputClass}
                  style={inputStyle}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <select
                  className={`${inputClass} cursor-pointer`}
                  style={{ ...inputStyle, background: "transparent" }}
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="" disabled className="bg-[#2C2C2C]">
                    Serviço desejado
                  </option>
                  <option value="limpeza" className="bg-[#2C2C2C]">Limpeza de Pele</option>
                  <option value="botox" className="bg-[#2C2C2C]">Botox & Preenchimento</option>
                  <option value="peeling" className="bg-[#2C2C2C]">Peeling Químico</option>
                  <option value="modeladora" className="bg-[#2C2C2C]">Massagem Modeladora</option>
                  <option value="drenagem" className="bg-[#2C2C2C]">Drenagem Linfática</option>
                  <option value="microagulhamento" className="bg-[#2C2C2C]">Microagulhamento</option>
                  <option value="outro" className="bg-[#2C2C2C]">Outro</option>
                </select>

                <textarea
                  placeholder="Mensagem (opcional)"
                  rows={3}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />

                <button
                  type="submit"
                  className="w-full font-[family-name:var(--font-lato)] text-sm tracking-widest uppercase py-4 text-white transition-all duration-300 hover:opacity-90"
                  style={{ background: "var(--marsala)" }}
                >
                  Enviar Solicitação
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
