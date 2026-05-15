
"use client";

import React, { useMemo } from 'react';
import { Button } from "@/components/ui/button";

interface LandingViewProps {
  onEnter: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onEnter }) => {
  // Generate random stars for the background
  const stars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 0.5}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 4 + 2}s`,
    }));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between py-32 md:py-40 px-6 bg-[#0a0812] overflow-hidden">
      {/* Background stars and atmospheric glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1a152e]/50 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[30%] bg-gradient-to-t from-cyan-900/10 to-transparent" />
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

      {/* Top Header */}
      <div className="z-10 flex flex-col items-center space-y-2 animate-in fade-in slide-in-from-top-4 duration-1000">
        <span className="font-body text-[0.4rem] md:text-[0.5rem] tracking-[0.8em] text-white/30 uppercase">
          A Study Companion
        </span>
        <h1 className="font-serif-elegant text-4xl md:text-5xl font-bold tracking-[0.15em] text-gradient-white">
          NEET
        </h1>
        <span className="font-serif-elegant text-[8px] md:text-[10px] tracking-[1.2em] text-white/50 uppercase pt-1">
          Paper
        </span>
      </div>

      {/* Middle Section: Subject Stack with Animations */}
      <div className="z-10 relative flex flex-col items-center -space-y-4 pt-12 animate-in fade-in zoom-in duration-1000 delay-300 scale-75 md:scale-90">
        <div className="book-card bg-rose-950/90 -rotate-[2deg] hover:-rotate-1 z-30 translate-x-2 animate-float">
          Chemistry
        </div>
        <div className="book-card bg-sky-950/90 rotate-[1deg] hover:rotate-0 z-20 -translate-x-1 animate-float-slow">
          Physics
        </div>
        <div className="book-card bg-emerald-950/90 -rotate-[3deg] hover:-rotate-1 z-10 translate-y-1 animate-float">
          Biology
        </div>
      </div>

      {/* Bottom Action */}
      <div className="z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
        <Button 
          onClick={onEnter}
          className="glow-button h-11 w-48 md:h-12 md:w-56 rounded-full text-xs md:text-sm font-serif-elegant tracking-[0.4em] text-black font-bold uppercase"
        >
          ENTER
        </Button>
      </div>
    </div>
  );
};
