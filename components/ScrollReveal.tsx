"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ScrollReveal({
  children,
  className = "",
}: ScrollRevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-[1200ms] ease-out
        ${
          visible
  ? "opacity-100 translate-y-0 scale-100"
  : "opacity-0 translate-y-20 scale-[0.96]"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}