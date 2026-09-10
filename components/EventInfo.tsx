import { invitations } from "@/data/invitations";

const invitation = invitations.valentina;
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
            {invitation.ceremony.time}
          </h3>

          <p className="mt-6 font-medium">
            {invitation.ceremony.name}
          </p>

          <p className="text-sm mt-2 text-gray-500">
            {invitation.ceremony.address}
          </p>

          <a
  href={invitation.ceremony.mapUrl}
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
            {invitation.party.time}
          </h3>

          <p className="mt-6 font-medium">
            {invitation.party.name}
          </p>

          <p className="text-sm mt-2 text-gray-500">
            {invitation.party.address}
          </p>
          

         <a
  href={invitation.party.mapUrl}
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