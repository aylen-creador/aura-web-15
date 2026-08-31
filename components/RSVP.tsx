export default function RSVP() {
  const phone = "5491122628041";

  const message = encodeURIComponent(
    "Hola! Quiero confirmar mi asistencia a los 15 de Valentina. 💜"
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className="py-24 px-6 text-center bg-[#F8F0FB]">

      <p className="uppercase tracking-[0.3em] text-sm mb-4">
        Confirmación
      </p>

      <h2 className="text-5xl font-serif mb-6">
        ¿Nos acompañás?
      </h2>

      <p className="max-w-md mx-auto text-sm leading-7 text-gray-500 mb-10">
        Confirmá tu asistencia antes del 10 de marzo.
        ¡Te esperamos para celebrar juntos!
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 rounded-full bg-[#3d3037] text-white uppercase tracking-widest text-xs hover:scale-105 transition-transform"
      >
        Confirmar asistencia
      </a>

    </section>
  );
}