export default function EventInfo() {
  return (
    <section className="py-24 px-6 bg-[#F8F0FB] text-center">

      <p className="uppercase tracking-[0.3em] text-sm mb-4">
        El gran día
      </p>

      <h2 className="text-5xl font-serif mb-16">
        Celebramos
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

        {/* CEREMONIA */}
          <div className="border border-[#e8dfe3] rounded-2xl p-10 bg-white">

          <div className="text-3xl mb-6">
            ♡
          </div>

          <p className="uppercase tracking-[0.25em] text-xs">
            Ceremonia
          </p>

          <h3 className="text-3xl font-serif mt-4">
            20:00 hs
          </h3>

          <p className="mt-6 font-medium">
            Nuestra Señora del Pilar
          </p>

          <p className="text-sm mt-2 text-gray-500">
            Paso de los Libres 695 · Pilar
          </p>

          <a
  href="https://maps.app.goo.gl/2XvgnvKYZCKAEB988"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 px-7 py-3 border border-[#3d3037] rounded-full uppercase tracking-widest text-xs hover:bg-[#3d3037] hover:text-white transition"
>
  Cómo llegar
</a>

        </div>


        {/* FIESTA */}
        <div className="border border-[#e8dfe3] rounded-2xl p-10 bg-white">

          <div className="text-3xl mb-6">
            ✨
          </div>

          <p className="uppercase tracking-[0.25em] text-xs">
            Fiesta
          </p>

          <h3 className="text-3xl font-serif mt-4">
            21:00 hs
          </h3>

          <p className="mt-6 font-medium">
            Salón El Dorado - Eventos
          </p>

          <p className="text-sm mt-2 text-gray-500">
            Vasco Da Gama 122 · Pilar
          </p>
          

         <a
  href="https://maps.app.goo.gl/r3msZsbiMsArgU8Q7"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 px-7 py-3 border border-[#3d3037] rounded-full uppercase tracking-widest text-xs hover:bg-[#3d3037] hover:text-white transition"
>
  Cómo llegar
</a>

        </div>

      </div>

    </section>
  );
}