
"use client";

import React, { useMemo } from 'react';
import { Button } from "@/components/ui/button";

interface LandingViewProps {
  onEnter: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onEnter }) => {
  const stars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.5 + 0.5}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 4 + 2}s`,
    }));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between py-24 md:py-32 px-6 bg-[#0a0812] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1a152e]/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[20%] bg-gradient-to-t from-cyan-900/10 to-transparent" />
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              '--delay': star.delay,
              '--duration': star.duration,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="z-10 flex flex-col items-center space-y-2 animate-in fade-in slide-in-from-top-4 duration-1000 scale-[0.8]">
        <span className="font-body text-[0.3rem] md:text-[0.35rem] tracking-[0.8em] text-white/30 uppercase">
          A Study Companion
        </span>
        <h1 className="font-serif-elegant text-2xl md:text-3xl font-bold tracking-[0.2em] text-gradient-white">
          NEET
        </h1>
        <span className="font-serif-elegant text-[5px] md:text-[6px] tracking-[1.2em] text-white/50 uppercase pt-1">
          Paper
        </span>
      </div>

      <div className="z-10 relative flex flex-col items-center -space-y-3 pt-8 animate-in fade-in zoom-in duration-1000 delay-300 scale-[0.5] md:scale-[0.6]">
        <div className="book-card bg-rose-950/90 -rotate-[2deg] z-30 translate-x-2 animate-float">
          Chemistry
        </div>
        <div className="book-card bg-sky-950/90 rotate-[1deg] z-20 -translate-x-1 animate-float-slow">
          Physics
        </div>
        <div className="book-card bg-emerald-950/90 -rotate-[3deg] z-10 translate-y-1 animate-float">
          Biology
        </div>
      </div>

      <div className="z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 scale-90 md:scale-[0.85]">
        <Button 
          onClick={onEnter}
          className="glow-button h-9 w-36 md:h-10 md:w-44 rounded-full text-[0.55rem] md:text-[0.65rem] font-serif-elegant tracking-[0.4em] text-black font-bold uppercase"
        >
          ENTER
        </Button>
      </div>
    </div>
  );
};
