"use client";

import { useEffect, useState } from "react";

export function RepairProgress() {
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((current) => (current >= 100 ? 5 : current + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl border-2 border-primary/20 bg-surface-container p-md">
      <div className="mb-xs flex items-end justify-between">
        <span className="font-label-bold text-primary">
          Suivi de votre réparation en temps réel
        </span>
        <span className="font-headline-md text-primary">{progress}%</span>
      </div>
      <div className="h-4 w-full overflow-hidden rounded-full border border-outline-variant bg-surface-container-highest">
        <div
          className="relative h-full bg-secondary-container transition-all duration-1000 ease-in-out"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </div>
      <div className="mt-2 flex justify-between text-label-sm font-medium opacity-60">
        <span>Réception</span>
        <span>En cours</span>
        <span>Finalisation</span>
        <span>Prêt !</span>
      </div>
    </div>
  );
}
