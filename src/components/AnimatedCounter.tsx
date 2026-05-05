"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
}

export function AnimatedCounter({ end, suffix = "", duration = 1500, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
        setDone(true);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  // Format numbers with comma separators
  const formatted = count.toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-heading text-accent mb-2">
        {formatted}
        <span className="text-2xl">{suffix}</span>
      </p>
      <div
        className={`h-0.5 bg-accent mx-auto mb-3 transition-all duration-700 ease-out ${
          done ? "w-12" : "w-0"
        }`}
      />
      <p className="text-sm font-medium text-foreground">{label}</p>
    </div>
  );
}
