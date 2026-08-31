"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2027-03-20T20:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-dark gray px-6 py-24 text-center">

      <div className="w-full max-w-5xl">

        <p className="uppercase tracking-[0.35em] text-xs text-[#3d3037]/60 mb-5">
          La cuenta regresiva comenzó
        </p>

        <h2 className="text-3xl md:text-4xl font-serif text-[#3d3037] mb-16">
          Faltan...
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4">

          {items.map((item, index) => (
            <div
              key={item.label}
              className="relative"
            >

              <p className="text-6xl md:text-7xl font-serif text-[#3d3037] tracking-tight">
                {String(item.value).padStart(2, "0")}
              </p>

              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#3d3037]/50">
                {item.label}
              </p>

              {index < items.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-[#3d3037]/20 text-2xl">
                  ·
                </span>
              )}

            </div>
          ))}

        </div>

        <div className="w-16 h-px bg-[#3d3037]/20 mx-auto mt-16 mb-8" />

        <p className="text-sm tracking-[0.2em] uppercase text-[#3d3037]/60">
          Para el gran día
        </p>

      </div>

    </section>
  );
}