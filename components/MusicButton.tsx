"use client";

import { useEffect, useState } from "react";

export default function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("music") as HTMLAudioElement | null;

    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = document.getElementById("music") as HTMLAudioElement | null;

    if (!audio) return;

    if (audio.paused) {
      await audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <button
      onClick={toggleMusic}
      aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      className={`
        fixed top-6 right-6 z-50
        w-12 h-12
        rounded-full
        flex items-center justify-center
        backdrop-blur-md
        bg-white/80
        border border-white/60
        shadow-lg
        transition-all duration-500
        hover:scale-110
        ${!isPlaying ? "animate-musicPulse" : ""}
      `}
    >
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform duration-700
          text-black
          ${isPlaying ? "animate-spin-slow" : ""}
        `}
      >
        <path d="M9 18V5l10-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="16" cy="16" r="3" />
      </svg>
    </button>
  );
}