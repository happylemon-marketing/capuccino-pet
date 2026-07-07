import { SPECIES_LIST } from "@/lib/hamster-data";

export function SeoContent() {
  return (
    <section
      id="saber-mas"
      className="border-t border-[color:var(--line)] bg-[color:var(--bone)]/50 backdrop-blur-sm py-16 sm:py-24"
      aria-label="Información sobre edad y cuidado de hámsters"
    >
      <div className="mx-auto max-w-2xl px-6">
        <header className="mb-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--hope)] mb-3">
            Todo sobre la edad de tu hámster
          </p>
          <h2 className="tightest text-[32px] sm:text-[40px] leading-[1.05] font-semibold text-[color:var(--ink)]">
            Cuánto vive y cómo envejece
            <br />
            un <span className="text-[color:var(--hope)]">hámster</span>.
          </h2>
          <p className="text-[15px] text-[color:var(--ink-soft)] mt-5 leading-[1.6]">
            Los hámsters viven poco comparados con otras mascotas, pero
            cada mes cuenta como varios años humanos. Aquí explicamos las
            equivalencias por especie, las etapas de vida y qué esperar
            en cada una.
          </p>
        </header>

        <div className="space-y-3">
          <AccordionSection title="Esperanza de vida por especie">
            <div className="space-y-4">
              <p>
                No todos los hámsters viven lo mismo. La especie es el factor
                más importante, seguida de la genética, la dieta y la calidad
                del cuidado. Estos son los promedios en cautiverio bien
                cuidado:
              </p>
              <div className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
                {SPECIES_LIST.map((s) => (
                  <article
                    key={s.id}
                    className="py-4 grid grid-cols-[1fr_auto] items-start gap-4"
                  >
                    <div>
                      <h3 className="text-[15px] font-semibold text-[color:var(--ink)]">
                        {s.name}
                      </h3>
                      <p className="text-[12px] italic text-[color:var(--ink-mute)] mt-0.5">
                        {s.scientific}
                      </p>
                      <p className="text-[13px] text-[color:var(--ink-soft)] mt-2 leading-[1.55]">
                        {s.note}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="tightest text-[22px] font-semibold text-[color:var(--hope)] leading-none">
                        {(s.lifespanMonths.typical / 12).toFixed(1)}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-mute)] mt-1">
                        años
                      </div>
                      <div className="text-[11px] text-[color:var(--ink-mute)] mt-1">
                        {s.lifespanMonths.min}–{s.lifespanMonths.max} m
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <p>
                <strong className="text-[color:var(--ink)]">
                  El hámster sirio
                </strong>{" "}
                (también llamado dorado o teddy bear) es el más común como
                mascota. Vive de 2 a 3 años y puede llegar a 3.5 en casos
                excepcionales. Es el más grande y el más manejable.
              </p>
              <p>
                <strong className="text-[color:var(--ink)]">
                  El hámster roborovski
                </strong>{" "}
                es el más pequeño y el más longevo entre los enanos. En
                condiciones óptimas alcanza 3.5 años. Es también el más
                activo: puede recorrer varios kilómetros en su rueda cada
                noche.
              </p>
              <p>
                <strong className="text-[color:var(--ink)]">
                  El enano ruso (Winter White)
                </strong>{" "}
                y el campbell son los que viven menos: 1.5 a 2 años. Son
                primos cercanos y se confunden fácilmente en las tiendas de
                mascotas. El Winter White cambia su pelaje a blanco en
                invierno cuando hay poca luz.
              </p>
              <p>
                <strong className="text-[color:var(--ink)]">
                  El hámster chino
                </strong>{" "}
                es el único con cola visible (unos 2 cm). Es más ágil y
                trepador que sus primos y vive de 2 a 3 años.
              </p>
            </div>
          </AccordionSection>

          <AccordionSection title="Cómo se calcula la edad en años humanos">
            <div className="space-y-4">
              <p>
                Los hámsters no envejecen de forma lineal. Sus primeros
                meses concentran la infancia y adolescencia. Al mes ya
                exploran solos, a los dos meses son sexualmente maduros y
                a los tres son adultos jóvenes con personalidad definida.
              </p>
              <p>
                Por eso usamos una curva por etapas, no una simple
                multiplicación. El modelo funciona así:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-[color:var(--hope)]">
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Mes 0-1 (bebé):
                  </strong>{" "}
                  cada semana equivale a poco más de un año humano. El
                  primer mes completo cuenta como unos 6 años.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Mes 1-3 (joven):
                  </strong>{" "}
                  la curva se acelera. Se pasa de los 6 a los 20 años
                  humanos, cubriendo pubertad y adolescencia.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Mes 3 hasta la vejez (adulto):
                  </strong>{" "}
                  el ritmo se estabiliza. Cada mes suma varios años pero
                  de forma más pausada. Va de los 20 a los 55 años humanos.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Última etapa (senior):
                  </strong>{" "}
                  el hámster llega a la vejez cuando ha vivido el 70-75 %
                  de su esperanza típica. El tramo final va de los 55 a
                  los 80 años humanos.
                </li>
              </ul>
              <p>
                El punto de referencia son 80 años humanos, que es la
                esperanza de vida promedio de una persona. Este modelo es
                una aproximación honesta: la genética, la dieta, el
                estrés y los cuidados mueven la aguja más que cualquier
                fórmula matemática.
              </p>
              <p>
                Por ejemplo, un hámster sirio de 6 meses equivale a unos
                24 años humanos. Un enano ruso de 6 meses, a unos 29
                años, porque su vida total es más corta y cada mes vale
                más. Un roborovski de 6 meses ronda los 18 años, porque
                vive más y su reloj biológico va más lento.
              </p>
            </div>
          </AccordionSection>

          <AccordionSection title="Las 4 etapas de vida de un hámster">
            <div className="space-y-4">
              <p>
                Igual que las personas, los hámsters pasan por etapas
                claras. Reconocer en qué etapa está tu hámster ayuda a
                ajustar su dieta, su ambiente y las expectativas de
                comportamiento.
              </p>
              <div className="grid gap-3">
                <StageCard
                  label="Bebé"
                  range="0 – 1 mes"
                  body="Nace sin pelo, ciego y sordo. Al día 5-7 le sale el pelaje. Al día 14 abre los ojos. Empieza a comer sólidos hacia la tercera semana y se separa de la madre alrededor del día 21-28. Todavía es muy frágil."
                />
                <StageCard
                  label="Joven"
                  range="1 – 3 meses"
                  body="Curiosidad al máximo, exploración constante, mucha rueda. Ya es sexualmente maduro (por eso conviene separar machos y hembras). Es la mejor etapa para acostumbrarlo a tu mano y crear vínculo. Come mucho y crece rápido."
                />
                <StageCard
                  label="Adulto"
                  range="3 meses – 70 % de vida"
                  body="Rutinas asentadas, personalidad clara: tímido, curioso, gruñón o cariñoso. Peso estable. La mejor etapa para convivir con él. Puede aprender a reconocer tu voz y el sonido del contenedor de la comida."
                />
                <StageCard
                  label="Anciano"
                  range="70 % – 100 % de vida"
                  body="Duerme más, se mueve más lento, puede perder pelo o desarrollar cataratas. Merece descanso, comida blanda, temperatura estable y una jaula sin obstáculos altos. Necesita más cariño y menos manipulación brusca."
                />
              </div>
              <p>
                No todos los hámsters siguen el mismo ritmo. Hay sirios que
                mantienen actividad casi hasta el final, y enanos rusos
                que empiezan a envejecer a los 12 meses. Observa a tu
                hámster: él te dice en qué etapa está.
              </p>
            </div>
          </AccordionSection>

          <AccordionSection title="Cuidados según la edad">
            <div className="space-y-4">
              <p>
                Un hámster joven, un adulto y un anciano necesitan cosas
                distintas. Estas son las recomendaciones básicas por
                etapa:
              </p>
              <div>
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">
                  Hámster joven (0-3 meses)
                </h4>
                <p>
                  Dieta rica en proteína para su crecimiento: mezcla
                  comercial de calidad con semillas, más un poco de pollo
                  cocido o huevo duro una vez por semana. Jaula amplia
                  con rueda de al menos 20 cm (sirio) o 16 cm (enano),
                  sin barrotes en el piso para no lastimar sus patas.
                  Manipulación gradual: primero deja que se acerque a tu
                  mano, luego tómalo pocos minutos al día.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">
                  Hámster adulto (3 meses – vejez)
                </h4>
                <p>
                  Mantén su rutina estable. Los cambios bruscos (jaula,
                  comida, ubicación) le estresan mucho. Dieta balanceada:
                  mezcla de semillas comercial, verduras (zanahoria,
                  brócoli, pepino) en pequeñas cantidades, evita frutas
                  cítricas y dulces. La rueda es esencial: sin ella
                  desarrolla estrés y sobrepeso. Limpieza de jaula cada
                  7-10 días.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">
                  Hámster anciano
                </h4>
                <p>
                  Comida más blanda: pellets remojados en agua tibia,
                  papilla de bebé sin azúcar, verduras cortadas en trozos
                  pequeños. Temperatura estable entre 18-24 grados: el
                  frío y los cambios bruscos son peligrosos. Elimina
                  obstáculos altos de la jaula para evitar caídas.
                  Manipulación suave y corta. Vigila su peso: pérdida
                  brusca es señal de alarma. Consulta a un veterinario
                  de exóticos si notas letargo persistente, respiración
                  ruidosa o secreciones.
                </p>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection title="Señales de que tu hámster está envejeciendo">
            <div className="space-y-4">
              <p>
                Los hámsters envejecen rápido. Un mes de cambio en ellos
                equivale a varios años en un humano. Reconocer las señales
                a tiempo te permite ajustar sus cuidados y disfrutar sus
                últimos meses con más calidad.
              </p>
              <p>Señales que suelen aparecer entre los 15 y 18 meses:</p>
              <ul className="space-y-2 pl-5 list-disc marker:text-[color:var(--hope)]">
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Duerme más:
                  </strong>{" "}
                  pasa de 6-8 horas activas por noche a 3-4. Ver menos
                  actividad al atardecer es una señal.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Menos rueda:
                  </strong>{" "}
                  ya no corre horas seguidas. Prefiere dormir en el nido.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Pelaje ralo o sin brillo:
                  </strong>{" "}
                  el pelo se ve más opaco, aparecen zonas peladas
                  especialmente en la espalda o alrededor de los ojos.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Pérdida de peso:
                  </strong>{" "}
                  come lo mismo o menos, y se siente más ligero al
                  tomarlo. Ojo con esto: puede indicar problemas
                  digestivos o dentales.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Cataratas:
                  </strong>{" "}
                  los ojos empiezan a verse blanquecinos u opacos. No
                  duele pero afecta su visión.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Movimientos más lentos:
                  </strong>{" "}
                  camina más rígido, le cuesta subir a la rueda o al
                  segundo piso de la jaula.
                </li>
              </ul>
              <p>
                Todas estas señales son parte natural del envejecimiento.
                Lo que sí requiere veterinario: sangre en la orina,
                respiración con silbidos, bultos que crecen rápido, o
                letargo total durante varios días.
              </p>
            </div>
          </AccordionSection>

          <AccordionSection title="Cómo estimar la edad de un hámster adoptado">
            <div className="space-y-4">
              <p>
                Si adoptaste un hámster sin fecha de nacimiento, se puede
                estimar su edad observando cuatro cosas:
              </p>
              <ol className="space-y-3 pl-5 list-decimal marker:text-[color:var(--hope)] marker:font-semibold">
                <li>
                  <strong className="text-[color:var(--ink)]">Tamaño.</strong>{" "}
                  Un hámster joven de tienda mide unos 5-7 cm en sirios y
                  3-4 cm en enanos. Los adultos llegan a 15-18 cm (sirio)
                  o 8-10 cm (enanos).
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Estado del pelaje.
                  </strong>{" "}
                  Pelaje brillante y denso indica juventud o adultez
                  temprana. Pelaje opaco, ralo o con zonas peladas
                  sugiere vejez.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">
                    Nivel de actividad.
                  </strong>{" "}
                  Los jóvenes son hiperactivos y curiosos. Los adultos
                  tienen rutinas claras. Los ancianos duermen mucho más y
                  usan poco la rueda.
                </li>
                <li>
                  <strong className="text-[color:var(--ink)]">Ojos.</strong>{" "}
                  Ojos brillantes y bien abiertos: joven o adulto. Ojos
                  velados o entrecerrados: probablemente senior.
                </li>
              </ol>
              <p>
                Si lo compraste en una tienda, casi seguro tenía entre 4 y
                8 semanas al momento de la venta. A esa edad ya están
                destetados y son autosuficientes pero todavía muy
                pequeños. La mayoría de los hámsters vendidos en tiendas
                son sirios o enanos rusos-campbell.
              </p>
            </div>
          </AccordionSection>

          <AccordionSection title="Preguntas frecuentes">
            <div className="space-y-6">
              <FaqEntry
                q="¿Cuántos años humanos tiene mi hámster?"
                a="Usa la calculadora de arriba: selecciona la especie e ingresa la edad en meses. En segundos verás la edad en años humanos y la etapa de vida en la que está."
              />
              <FaqEntry
                q="¿Los hámsters saben que están envejeciendo?"
                a="No en el sentido humano. Pero sí perciben que su cuerpo cambia: menos energía, más ganas de dormir, cambios en el apetito. Los buenos cuidadores ajustan el ambiente para que la vejez sea cómoda."
              />
              <FaqEntry
                q="¿Cuánto vive un hámster con buenos cuidados?"
                a="En el rango alto de su especie o incluso por encima. Un sirio bien cuidado puede alcanzar 3 años, un roborovski 3.5. Los factores clave son dieta variada, jaula amplia, rueda de tamaño correcto, temperatura estable y bajo estrés."
              />
              <FaqEntry
                q="¿Qué hámster es mejor si es la primera vez?"
                a="El sirio. Es el más grande, el más fácil de manejar, el que menos muerde si se acostumbra bien a la mano y el que vive un poco más entre las opciones habituales. Los enanos son más rápidos, más frágiles y más difíciles de sostener."
              />
              <FaqEntry
                q="¿Se puede alargar la vida de un hámster?"
                a="Se puede acercar al máximo de su especie: dieta balanceada sin exceso de semillas grasas, jaula amplia con enriquecimiento (túneles, escondites, arena de baño), rueda del tamaño correcto sin barrotes, temperatura estable, revisiones veterinarias si algo cambia. Lo que no se puede: superar el techo genético de su especie."
              />
              <FaqEntry
                q="¿Es normal que mi hámster viejo pierda pelo?"
                a="Sí, hasta cierto punto. Los ancianos pierden brillo y densidad de pelaje. Si hay zonas peladas grandes, enrojecimiento o costras, es problema de piel o parásitos y necesita veterinario."
              />
              <FaqEntry
                q="¿Cómo despedirse de un hámster que se va?"
                a="Con calma y presencia. En los últimos días, mantén su jaula tibia y tranquila, ofrécele su comida favorita en pequeñas cantidades, háblale suave, tómalo con cuidado si le gustaba el contacto. Los hámsters mueren generalmente mientras duermen. Muchos dueños encuentran consuelo en dejar algo dedicado a su memoria, como este mismo sitio."
              />
            </div>
          </AccordionSection>
        </div>

        <p className="mt-14 text-center text-[12px] text-[color:var(--ink-mute)] leading-[1.6] max-w-md mx-auto">
          Este contenido tiene fines informativos generales. Ante cualquier
          duda de salud de tu hámster, consulta con un veterinario
          especialista en animales exóticos.
        </p>
      </div>
    </section>
  );
}

function AccordionSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-2xl bg-[color:var(--card)] border border-[color:var(--line)] overflow-hidden">
      <summary className="flex items-center justify-between cursor-pointer list-none px-5 py-4 text-[15px] font-semibold text-[color:var(--ink)] hover:bg-[color:var(--hope-soft)]/40 transition">
        <span>{title}</span>
        <span className="text-[color:var(--hope)] text-2xl leading-none group-open:rotate-45 transition-transform duration-200 shrink-0 ml-3">
          +
        </span>
      </summary>
      <div className="px-5 pb-6 pt-2 text-[14px] text-[color:var(--ink-soft)] leading-[1.7]">
        {children}
      </div>
    </details>
  );
}

function StageCard({
  label,
  range,
  body,
}: {
  label: string;
  range: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-[color:var(--line)] p-4 bg-[color:var(--bone)]/60">
      <div className="flex items-baseline justify-between mb-1.5">
        <h4 className="font-semibold text-[color:var(--ink)]">{label}</h4>
        <span className="text-[11px] text-[color:var(--hope)] uppercase tracking-[0.15em] font-medium">
          {range}
        </span>
      </div>
      <p className="text-[13px] text-[color:var(--ink-soft)] leading-[1.6]">
        {body}
      </p>
    </div>
  );
}

function FaqEntry({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <p className="font-semibold text-[color:var(--ink)] mb-1.5 text-[14px]">
        {q}
      </p>
      <p className="text-[14px] text-[color:var(--ink-soft)] leading-[1.65]">
        {a}
      </p>
    </div>
  );
}
