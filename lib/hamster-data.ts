export type SpeciesId =
  | "sirio"
  | "roborovski"
  | "ruso"
  | "chino"
  | "campbell";

export type Species = {
  id: SpeciesId;
  name: string;
  shortName: string;
  scientific: string;
  image: string;
  lifespanMonths: { min: number; typical: number; max: number };
  adultAtMonths: number;
  seniorAtMonths: number;
  note: string;
};

export const SPECIES: Record<SpeciesId, Species> = {
  sirio: {
    id: "sirio",
    name: "Sirio (dorado)",
    shortName: "Sirio",
    scientific: "Mesocricetus auratus",
    image: "/hamsters/sirio.png",
    lifespanMonths: { min: 24, typical: 30, max: 42 },
    adultAtMonths: 3,
    seniorAtMonths: 18,
    note: "El más común. Vive de 2 a 3 años en promedio.",
  },
  roborovski: {
    id: "roborovski",
    name: "Roborovski",
    shortName: "Roborovski",
    scientific: "Phodopus roborovskii",
    image: "/hamsters/roborovski.png",
    lifespanMonths: { min: 30, typical: 40, max: 48 },
    adultAtMonths: 2,
    seniorAtMonths: 24,
    note: "El más longevo entre los enanos. Hasta 3.5 años.",
  },
  ruso: {
    id: "ruso",
    name: "Enano ruso (Winter White)",
    shortName: "Enano ruso",
    scientific: "Phodopus sungorus",
    image: "/hamsters/ruso.png",
    lifespanMonths: { min: 18, typical: 22, max: 30 },
    adultAtMonths: 2,
    seniorAtMonths: 15,
    note: "Enano de invierno. 1.5 a 2 años de vida típica.",
  },
  chino: {
    id: "chino",
    name: "Chino",
    shortName: "Chino",
    scientific: "Cricetulus griseus",
    image: "/hamsters/chino.png",
    lifespanMonths: { min: 24, typical: 30, max: 36 },
    adultAtMonths: 3,
    seniorAtMonths: 18,
    note: "Cola visible, ágil. 2 a 3 años.",
  },
  campbell: {
    id: "campbell",
    name: "Campbell",
    shortName: "Campbell",
    scientific: "Phodopus campbelli",
    image: "/hamsters/campbell.png",
    lifespanMonths: { min: 18, typical: 24, max: 30 },
    adultAtMonths: 2,
    seniorAtMonths: 15,
    note: "A menudo confundido con el ruso. 1.5 a 2 años.",
  },
};

export const SPECIES_LIST: Species[] = Object.values(SPECIES);

export type LifeStage = "bebe" | "joven" | "adulto" | "senior" | "anciano";

export type Result = {
  humanYears: number;
  stage: LifeStage;
  stageLabel: string;
  stageDescription: string;
  pctLived: number;
  species: Species;
};

const HUMAN_REF_YEARS = 80;

export function calculate(monthsOld: number, speciesId: SpeciesId): Result {
  const species = SPECIES[speciesId];
  const life = species.lifespanMonths.typical;

  const humanYears = piecewiseHumanAge(monthsOld, species);
  const pctLived = Math.min(100, Math.round((monthsOld / life) * 100));

  let stage: LifeStage;
  let stageLabel: string;
  let stageDescription: string;

  if (monthsOld < 1) {
    stage = "bebe";
    stageLabel = "Bebé";
    stageDescription = "Todavía dependiente. Aprendiendo del mundo.";
  } else if (monthsOld < species.adultAtMonths) {
    stage = "joven";
    stageLabel = "Joven";
    stageDescription = "Curioso, explorador, en plena energía.";
  } else if (monthsOld < species.seniorAtMonths) {
    stage = "adulto";
    stageLabel = "Adulto";
    stageDescription = "En su mejor momento. Rutinas asentadas.";
  } else if (monthsOld < life) {
    stage = "senior";
    stageLabel = "Anciano";
    stageDescription = "Sabio y tranquilo. Merece descanso y cariño.";
  } else {
    stage = "anciano";
    stageLabel = "Longevo excepcional";
    stageDescription = "Ha vivido más allá del promedio de su especie.";
  }

  return {
    humanYears: Math.round(humanYears),
    stage,
    stageLabel,
    stageDescription,
    pctLived,
    species,
  };
}

function piecewiseHumanAge(months: number, species: Species): number {
  const life = species.lifespanMonths.typical;
  if (months <= 0) return 0;

  const babyEndM = 1;
  const youngEndM = species.adultAtMonths;
  const seniorStartM = species.seniorAtMonths;

  const babyEndH = 6;
  const youngEndH = 20;
  const seniorStartH = 55;
  const lifeEndH = HUMAN_REF_YEARS;

  if (months <= babyEndM) {
    return lerp(months, 0, babyEndM, 0, babyEndH);
  }
  if (months <= youngEndM) {
    return lerp(months, babyEndM, youngEndM, babyEndH, youngEndH);
  }
  if (months <= seniorStartM) {
    return lerp(months, youngEndM, seniorStartM, youngEndH, seniorStartH);
  }
  if (months <= life) {
    return lerp(months, seniorStartM, life, seniorStartH, lifeEndH);
  }
  const extra = months - life;
  return lifeEndH + extra * ((lifeEndH - seniorStartH) / (life - seniorStartM));
}

function lerp(x: number, x0: number, x1: number, y0: number, y1: number): number {
  const t = (x - x0) / (x1 - x0);
  return y0 + t * (y1 - y0);
}

export function monthsBetween(from: Date, to: Date): number {
  const ms = to.getTime() - from.getTime();
  const days = ms / (1000 * 60 * 60 * 24);
  return days / 30.4375;
}
