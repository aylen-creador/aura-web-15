import { invitations } from "@/data/invitations";

const invitation = invitations.valentina;
export default function RSVP() {
  const phone = invitation.rsvp.phone;

  const message = encodeURIComponent(
    invitation.rsvp.message
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
        Confirmá tu asistencia antes del {invitation.rsvp.deadline}.
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