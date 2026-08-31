export default function Gallery() {
  const photos = [
    "/images/portada.png",
    "/images/mesadulce.png",
    "/images/vestido.png",
    "/images/detalle.png",
    "/images/salon.png",
  ];

  return (
    <section className="py-24 px-6 bg-[#F8F0FB]">

      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-sm mb-4">
          Recuerdos
        </p>

        <h2 className="text-5xl font-serif">
          Mis momentos
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">

        {photos.map((photo, index) => (
          <div
            key={photo}
            className={`
              overflow-hidden rounded-xl
              ${index === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""}
            `}
          >
            <img
              src={photo}
              alt={`Recuerdo ${index + 1}`}
              className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}

      </div>

    </section>
  );
}