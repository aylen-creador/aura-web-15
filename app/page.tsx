"use client";
import { invitations } from "@/data/invitations";
import MusicButton from "@/components/MusicButton";
import Countdown from "@/components/Countdown";
import EventInfo from "@/components/EventInfo";
import DressCode from "@/components/DressCode";
import Gallery from "@/components/Gallery";
import Gifts from "@/components/Gifts";
import RSVP from "@/components/RSVP";
import Closing from "@/components/Closing";
import ScrollReveal from "@/components/ScrollReveal";
const invitation = invitations.gabriela;
export default function Home() {
  return (
    <main
  className="min-h-screen text-[#3d3037]"
  style={{ backgroundColor: invitation.theme.background }}
>
      <audio id="music" src={invitation.music} loop />
      <MusicButton />
      


      {/* PORTADA */}
  <section
  className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative bg-cover bg-center"
  style={{ backgroundImage: `url('${invitation.coverImage}')` }}
>
  
  <div className="absolute inset-0 bg-black/30" />

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf7f8] to-transparent" />

  <div className="relative z-10 text-white">

    {/* MIS 15 AÑOS */}
    <p className="uppercase tracking-[0.35em] text-sm mb-6 animate-[fadeInDown_1s_ease-out_forwards] opacity-0">
      {invitation.eventType}
    </p>

    {/* NOMBRE */}
    <h1 className="text-7xl md:text-9xl font-serif font-medium tracking-wide animate-[fadeInUp_1.2s_ease-out_0.3s_forwards] opacity-0">
  {invitation.name}
</h1>

    {/* FECHA */}
    <p className="mt-6 text-lg tracking-widest animate-[fadeInUp_1.2s_ease-out_0.6s_forwards] opacity-0">
      {invitation.date}
    </p>

    {/* DESLIZÁ */}
    <p className="mt-12 text-xs uppercase tracking-[0.35em] opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
      Deslizá para descubrir
    </p>

  </div>

</section>


{/* FRASE */}
<section
  id="invitacion"
  className="min-h-[85vh] flex items-center justify-center text-center px-8 bg-[#F8F0FB] pt-1"
>
  <div className="max-w-2xl">
    <ScrollReveal> 

    <div className="text-4xl md:text-5xl font-serif font-medium leading-[1.35] text-[#3d3037]">

      <p>
        Érase una vez un día muy especial...
      </p>

      <p className="mt-8">
        y quiero que seas parte de él.
      </p>

    </div>

    <div className="w-12 h-px bg-[#3d3037]/30 mx-auto mt-12" />
    </ScrollReveal>

  </div>
</section>


      {/* CUENTA REGRESIVA */}
      <ScrollReveal>
  <Countdown />
</ScrollReveal>


      {/* FIESTA */}
      <ScrollReveal>
      <EventInfo />
      </ScrollReveal>


      {/* DRESS CODE */}
      <ScrollReveal>
      <DressCode invitation={invitation} />
      </ScrollReveal>


      {/* GALERÍA */}
      <ScrollReveal>
      <Gallery />
      </ScrollReveal>


      {/* REGALOS */}
      <ScrollReveal>
      <Gifts />
      </ScrollReveal>


      {/* RSVP */}
      <ScrollReveal>
      <RSVP />
      </ScrollReveal>

      {/* CIERRE */}
      <ScrollReveal>
      <Closing />
      </ScrollReveal>

    </main>
  );
}
