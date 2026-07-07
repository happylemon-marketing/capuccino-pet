import Image from "next/image";
import Calculator from "@/components/Calculator";
import { JsonLd } from "@/components/JsonLd";
import { SeoContent } from "@/components/SeoContent";

const CAPUCCINO = {
  name: "Capuccino",
  species: "Enano ruso",
  scientific: "Phodopus sungorus",
  months: 18,
  story: "Te extrañaremos, Capuccino.",
  parents: "Tu papá Luis y tu mami Scarlet",
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <main className="flex-1 flex flex-col">
        <section
          className="min-h-[100dvh] flex items-center justify-center px-6 py-10"
          aria-label="Calculadora de edad de hámster"
        >
          <div className="w-full max-w-5xl grid gap-10 md:grid-cols-[1.05fr_1fr] md:gap-14 items-center">
            <div className="text-left md:pr-4 order-1">
              <h1 className="tightest text-[42px] sm:text-[56px] md:text-[64px] leading-[0.98] font-semibold text-[color:var(--ink)]">
                Calculadora
                <br />
                de edad
                <br />
                de{" "}
                <span className="text-[color:var(--bluby)]">hámster</span>.
              </h1>
              <p className="text-[15px] sm:text-[17px] text-[color:var(--ink-soft)] mt-6 leading-[1.55] max-w-sm">
                Cuántos años humanos tiene tu hámster, según su especie.
                Gratis, sin registro, en segundos.
              </p>

              <div className="mt-10 flex items-start gap-4">
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden ring-1 ring-[color:var(--line)] shrink-0 shadow-[0_10px_28px_-10px_rgba(79,127,255,0.4)]">
                  <Image
                    src="/capuccino.webp"
                    alt="Capuccino, hámster amado"
                    width={280}
                    height={280}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid gap-1 pt-1">
                  <p className="text-[12px] text-[color:var(--ink-mute)] leading-[1.5]">
                    En memoria de
                  </p>
                  <p className="text-[20px] font-semibold text-[color:var(--bluby)] leading-[1.2]">
                    {CAPUCCINO.name}
                  </p>
                  <p className="text-[12px] text-[color:var(--ink-soft)] leading-[1.55] max-w-[260px] mt-1">
                    {CAPUCCINO.story}
                  </p>
                  <p className="text-[12px] text-[color:var(--ink-soft)] leading-[1.55] max-w-[260px]">
                    {CAPUCCINO.parents}
                  </p>
                </div>
              </div>

              <p className="mt-8 text-[10px] text-[color:var(--ink-mute)]">
                made with{" "}
                <span className="text-[color:var(--hope)]">♥</span> by{" "}
                <a
                  href="https://happylemon.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--ink-soft)] hover:text-[color:var(--hope)] transition underline decoration-dotted underline-offset-2"
                >
                  Happy Lemon Marketing
                </a>
              </p>

              <p className="mt-6">
                <a
                  href="#saber-mas"
                  className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--ink-mute)] hover:text-[color:var(--bluby)] transition"
                >
                  Saber más ↓
                </a>
              </p>
            </div>

            <div className="order-2 w-full">
              <Calculator />
            </div>
          </div>
        </section>

        <SeoContent />
      </main>
    </>
  );
}
