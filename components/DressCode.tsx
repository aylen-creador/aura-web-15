import { invitations } from "@/data/invitations";

const invitation = invitations.valentina;
export default function DressCode() {
  return (
    <section className="py-24 px-6 text-center bg-[#faf7f8]">

      <p className="uppercase tracking-[0.3em] text-sm mb-4">
        Dress Code
      </p>

      <h2 className="text-5xl font-serif mb-6">
        {invitation.dressCode.title}
      </h2>

      <p className="max-w-md mx-auto text-sm leading-7 text-gray-500 mb-12">
         {invitation.dressCode.description}
      </p>

      <div className="flex justify-center gap-5">

  {invitation.dressCode.colors.map((item) => (
    <div className="text-center" key={item.name}>
      <div
        className="w-14 h-14 rounded-full mx-auto mb-3"
        style={{ backgroundColor: item.color }}
      />
      <p className="text-xs uppercase tracking-widest">
        {item.name}
      </p>
    </div>
  ))}

</div>

    </section>
  );
}