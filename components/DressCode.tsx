export default function DressCode() {
  return (
    <section className="py-24 px-6 text-center bg-[#faf7f8]">

      <p className="uppercase tracking-[0.3em] text-sm mb-4">
        Dress Code
      </p>

      <h2 className="text-5xl font-serif mb-6">
        Elegante
      </h2>

      <p className="max-w-md mx-auto text-sm leading-7 text-gray-500 mb-12">
        Una noche especial merece un look especial.
        Elegí tu estilo y vení a celebrar conmigo.
      </p>

      <div className="flex justify-center gap-5">

        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-[#FFD1DC] mx-auto mb-3" />
          <p className="text-xs uppercase tracking-widest">
            Rosa
          </p>
        </div>

        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-[#E0E0E0] mx-auto mb-3" />
          <p className="text-xs uppercase tracking-widest">
            Gris
          </p>
        </div>

        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-[#000000] mx-auto mb-3" />
          <p className="text-xs uppercase tracking-widest">
            Negro
          </p>
        </div>

      </div>

    </section>
  );
}