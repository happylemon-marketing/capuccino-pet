"use client";

import { useMemo, useState } from "react";
import {
  SPECIES,
  SPECIES_LIST,
  SpeciesId,
  calculate,
  monthsBetween,
} from "@/lib/hamster-data";

type Mode = "meses" | "fecha";

export default function Calculator() {
  const [species, setSpecies] = useState<SpeciesId>("ruso");
  const [mode, setMode] = useState<Mode>("meses");
  const [months, setMonths] = useState<number>(6);
  const [birth, setBirth] = useState<string>("");

  const monthsValue = useMemo(() => {
    if (mode === "meses") return months;
    if (!birth) return 0;
    const d = new Date(birth);
    if (Number.isNaN(d.getTime())) return 0;
    return Math.max(0, monthsBetween(d, new Date()));
  }, [mode, months, birth]);

  const result = useMemo(
    () => calculate(monthsValue, species),
    [monthsValue, species]
  );

  const max = Math.max(48, SPECIES[species].lifespanMonths.max + 6);

  return (
    <div className="rounded-[28px] p-5 sm:p-6 card-shadow bg-[color:var(--card)]">
      <div className="grid gap-5">
        <div className="text-center rounded-2xl bg-gradient-to-br from-[color:var(--hope-soft)] via-[color:var(--mary-soft)] to-[color:var(--hope-soft)] px-4 py-5">
          <div className="tightest text-[76px] sm:text-[92px] font-semibold leading-[0.9] text-[color:var(--hope)]">
            {result.humanYears}
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--hope)] mt-2 opacity-80">
            Años humanos
          </div>
          <div className="text-[13px] text-[color:var(--ink-soft)] mt-3">
            <span className="text-[color:var(--ink)] font-medium">
              {result.stageLabel}
            </span>
            <span className="text-[color:var(--ink-mute)] mx-1.5">·</span>
            <span>{result.pctLived}% de vida típica</span>
          </div>
        </div>

        <div className="h-[6px] rounded-full bg-[color:var(--mary-soft)] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[color:var(--mary)] to-[color:var(--hope)] transition-all duration-500"
            style={{ width: `${Math.min(100, result.pctLived)}%` }}
          />
        </div>

        <div className="grid gap-2">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--hope)] opacity-80">
            Elige tu hámster
          </p>
          <div className="grid grid-cols-5 gap-2">
            {SPECIES_LIST.map((s) => {
              const active = species === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSpecies(s.id)}
                  className={`group flex flex-col items-center gap-1.5 rounded-2xl p-1.5 transition ${
                    active
                      ? "bg-[color:var(--hope-soft)] ring-2 ring-[color:var(--hope)]"
                      : "bg-[color:var(--line-soft)] hover:bg-[color:var(--hope-soft)]"
                  }`}
                  aria-pressed={active}
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image}
                      alt={s.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span
                    className={`text-[10px] leading-tight text-center transition ${
                      active
                        ? "text-[color:var(--hope)] font-semibold"
                        : "text-[color:var(--ink-soft)]"
                    }`}
                  >
                    {s.shortName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--hope)] opacity-80">
              Edad
            </p>
            <div className="flex gap-1 p-0.5 rounded-full bg-[color:var(--line-soft)]">
              <button
                type="button"
                onClick={() => setMode("meses")}
                className={`px-3 py-1 rounded-full text-[11px] transition font-medium ${
                  mode === "meses"
                    ? "bg-[color:var(--hope)] text-white shadow-[0_1px_2px_rgba(248,111,3,0.35)]"
                    : "text-[color:var(--ink-mute)]"
                }`}
              >
                Meses
              </button>
              <button
                type="button"
                onClick={() => setMode("fecha")}
                className={`px-3 py-1 rounded-full text-[11px] transition font-medium ${
                  mode === "fecha"
                    ? "bg-[color:var(--hope)] text-white shadow-[0_1px_2px_rgba(248,111,3,0.35)]"
                    : "text-[color:var(--ink-mute)]"
                }`}
              >
                Fecha
              </button>
            </div>
          </div>

          {mode === "meses" ? (
            <div className="grid gap-2 rounded-2xl bg-[color:var(--line-soft)] px-4 py-3">
              <div className="flex items-baseline justify-between">
                <span className="tightest text-2xl font-semibold text-[color:var(--hope)]">
                  {months}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink-mute)]">
                  meses
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={max}
                step={1}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full accent-[color:var(--hope)]"
                aria-label="Edad en meses"
              />
            </div>
          ) : (
            <input
              type="date"
              value={birth}
              max={new Date().toISOString().slice(0, 10)}
              onChange={(e) => setBirth(e.target.value)}
              className="border border-[color:var(--line)] rounded-xl px-3 py-2.5 bg-[color:var(--line-soft)] text-[color:var(--ink)] text-[14px] w-full focus:outline-none focus:border-[color:var(--hope)] focus:bg-white transition"
              aria-label="Fecha de nacimiento"
            />
          )}
        </div>
      </div>
    </div>
  );
}
