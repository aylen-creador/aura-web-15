import { invitations } from "@/data/invitations";

const invitation = invitations.valentina;
export default function Closing() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-white text-dark gray">

    

      <p className="uppercase tracking-[0.3em] text-xs mb-1">
        Gracias por acompañarme
      </p>

      <p className="text-3xl mb-1">
        ♡
      </p>

      <h2 className="text-6xl md:text-7xl font-serif">
  {invitation.name}
</h2>

      <p className="mt-6 text-sm tracking-widest">
  {invitation.eventType}
</p>

      <div className="w-16 h-px bg-white/40 my-10" />

      <p className="text-xs tracking-widest uppercase opacity-60">
  {invitation.date}
</p>

    </section>
  );
}