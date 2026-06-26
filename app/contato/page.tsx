import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contato | Clínica Dahlia",
  description:
    "Agende seu procedimento estético na Clínica Dahlia. Entre em contato via WhatsApp ou pelo formulário.",
};

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
