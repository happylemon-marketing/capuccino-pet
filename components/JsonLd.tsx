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
        "Calcula la edad de tu hámster en años humanos según su especie.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo calculo la edad de mi hámster en años humanos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Divides los meses de vida de tu hámster entre la esperanza de vida típica de su especie y multiplicas por la vida humana promedio (unos 80 años). En capuccino.pet ajustamos la curva por etapas: los primeros meses equivalen a mucho más que los últimos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto vive un hámster?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende de la especie. Sirio 2-3 años, roborovski hasta 3.5, enano ruso 1.5-2, chino 2-3, campbell 1.5-2. La genética y los cuidados influyen mucho.",
          },
        },
        {
          "@type": "Question",
          name: "¿A qué edad un hámster es viejo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En general, un hámster entra a la vejez cuando ha cumplido cerca del 70-75% de la esperanza de vida típica de su especie: unos 15 meses en un enano ruso, 18 meses en un sirio.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué hámster vive más?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El roborovski es el más longevo entre los enanos, con hasta 3.5 años. Entre los sirios bien cuidados, alcanzar 3 años es posible.",
          },
        },
      ],
    },
    {
      "@type": "CreativeWork",
      name: "En memoria de Capuccino",
      about: "Hámster enano ruso",
      description:
        "Este sitio está dedicado a Capuccino, un hámster enano ruso que vivió 18 meses.",
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
