export function JsonLd() {
  const graph = [
    {
      "@type": "WebApplication",
      name: "Calculadora de edad de hámster",
      url: "https://capuccino.pet",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      inLanguage: "es",
      description:
        "Calcula la edad de tu hámster en años humanos según su especie. Sirio, roborovski, enano ruso, chino y campbell.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo calculo la edad de mi hámster en años humanos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Divides los meses de vida de tu hámster entre la esperanza de vida típica de su especie y multiplicas por la vida humana promedio (80 años). En capuccino.pet usamos una curva por etapas: el primer mes equivale a 6 años humanos, los primeros tres meses cubren la infancia y adolescencia, y de ahí en adelante cada mes se estira más lento hasta el final de su vida típica.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto vive un hámster en promedio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende de la especie. Sirio: 2 a 3 años. Roborovski: hasta 3.5 años. Enano ruso (Winter White): 1.5 a 2 años. Chino: 2 a 3 años. Campbell: 1.5 a 2 años. La genética, la dieta y el cariño con el que fue cuidado influyen mucho más que la especie por sí sola.",
          },
        },
        {
          "@type": "Question",
          name: "¿A qué edad se considera viejo a un hámster?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cuando ha cumplido cerca del 70-75 % de la esperanza de vida típica de su especie. En números: 15 meses en un enano ruso o campbell, 18 meses en un sirio o chino, 24 meses en un roborovski. A partir de ahí conviene bajarle el ejercicio intenso, cuidar la temperatura y ofrecerle comida más blanda.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué hámster vive más tiempo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El roborovski es el más longevo, con hasta 3.5 años en cautiverio bien cuidado. Entre los sirios, alcanzar 3 años es posible con buena genética y cuidados excelentes. Los enanos rusos y campbell viven menos, típicamente 1.5-2 años.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuántos años humanos tiene un hámster de 6 meses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende de su especie. Un sirio de 6 meses equivale a unos 24 años humanos. Un enano ruso o campbell, a unos 29 años. Un roborovski, a unos 18 años. Todos están en su etapa adulta joven.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuántos años humanos tiene un hámster de 1 año?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En un sirio, un año equivale a unos 32 años humanos. En un enano ruso o campbell, unos 40 años porque su vida total es más corta. En un roborovski, unos 27 años. En un chino, unos 32 años.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuántos años humanos tiene un hámster de 2 años?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un sirio de 2 años ronda los 55 años humanos y ya se acerca a la vejez. Un enano ruso o campbell de 2 años equivale a unos 78 años humanos: ha llegado al final de su esperanza típica. Un roborovski de 2 años está en los 46 años humanos, todavía adulto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo saber la edad exacta de un hámster que adopté?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rara vez con exactitud. Se estima por tamaño, actividad, estado del pelaje y agilidad. Un hámster de tienda suele tener entre 4 y 8 semanas al momento de la compra. Si el pelaje está brillante, los movimientos son rápidos y el peso es adecuado, probablemente sea joven. Si notas pelaje ralo, cataratas o menor actividad, es probable que ya sea senior.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuáles son las etapas de vida de un hámster?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cuatro etapas. Bebé (0 a 1 mes): dependiente, ojos abiertos hacia el día 14, empieza a comer sólidos. Joven (1 a 3 meses): curiosidad al máximo, ya es sexualmente maduro. Adulto (3 meses hasta el 70 % de su vida típica): rutinas asentadas, personalidad definida. Anciano (último 25-30 % de su vida): duerme más, baja actividad, puede perder pelo o peso.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es normal que mi hámster duerma mucho durante el día?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Los hámsters son animales nocturnos y crepusculares: duermen de día y se activan al atardecer y en la noche. Si notas letargo durante la noche, apetito bajo, pérdida de peso o pelaje opaco, consulta con un veterinario de exóticos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo saber si mi hámster está envejeciendo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Señales típicas: duerme más horas, pasa menos tiempo en la rueda, se mueve más lento, el pelaje se vuelve ralo o pierde brillo, puede perder peso, y en algunos casos aparecen cataratas o tumores. No todos los hámsters envejecen igual: unos siguen activos hasta el final, otros bajan el ritmo con meses de anticipación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo cuidar a un hámster anciano?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prioriza descanso y comodidad. Ofrécele comida blanda o hidratada (pellets remojados, papilla de bebé sin azúcar, verdura en trozos pequeños). Mantén la temperatura estable entre 18 y 24 grados. Reduce alturas y obstáculos en la jaula para evitar caídas. Limpia la jaula con más frecuencia porque su sistema inmune es más frágil. Visita al veterinario si notas cambios bruscos.",
          },
        },
      ],
    },
    {
      "@type": "CreativeWork",
      name: "En memoria de Capuccino",
      about: "Hámster amado",
      description:
        "Este sitio memorial está dedicado a Capuccino, un hámster muy amado por Luis y Scarlet. La calculadora existe para que otros dueños puedan entender el tiempo que comparten con su hámster.",
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
