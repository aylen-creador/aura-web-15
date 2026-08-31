"use client";

import { useState } from "react";

export default function Gifts() {
  const [showData, setShowData] = useState(false);
  const [copied, setCopied] = useState(false);

  const alias = "VALENTINA.15";

 const copyAlias = async () => {
  try {
    await navigator.clipboard.writeText(alias);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  } catch (error) {
    console.error("No se pudo copiar el alias:", error);
  }
};

  return (
    <section className="py-24 px-6 text-center bg-[#faf7f8]">

      <p className="uppercase tracking-[0.3em] text-sm mb-4">
        Un detalle especial
      </p>

      <h2 className="text-5xl font-serif mb-6">
        Regalos
      </h2>

      <p className="max-w-md mx-auto text-sm leading-7 text-gray-500 mb-10">
        Si querés hacerme un regalo, podés hacerlo a través
        de la siguiente opción.
      </p>

      {!showData ? (
        <button
          onClick={() => setShowData(true)}
          className="px-8 py-3 border border-[#3d3037] rounded-full uppercase tracking-widest text-xs hover:bg-[#3d3037] hover:text-white transition"
        >
          Ver datos
        </button>
      ) : (
        <div className="max-w-sm mx-auto border border-[#e8dfe3] rounded-2xl p-8 bg-white">

          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Alias
          </p>

          <p className="text-xl font-medium mb-6">
            {alias}
          </p>

          <button
            onClick={copyAlias}
            className="px-7 py-3 border border-[#3d3037] rounded-full uppercase tracking-widest text-xs hover:bg-[#3d3037] hover:text-white transition"
          >
            {copied ? "¡Copiado!" : "Copiar alias"}
          </button>

        </div>
      )}

    </section>
  );
}