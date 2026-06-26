import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Sobre | Clínica Dahlia",
  description:
    "Conheça a Clínica Dahlia e a profissional biomédica especializada por trás de cada procedimento estético.",
};

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}
