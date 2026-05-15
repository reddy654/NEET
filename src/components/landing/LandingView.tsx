
"use client";

import React, { useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

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
      size: `${Math.random() * 3 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 4 + 2}s`,
    }));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between py-24 px-6 bg-[#0a0812] overflow-hidden">
      {/* Background stars and atmospheric glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1a152e]/50 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[30%] bg-gradient-to-t from-cyan-900/20 to-transparent" />
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

      {/* Back Button (Placeholder for Landing) */}
      <div className="absolute top-8 left-8 z-20">
        <Button variant="ghost" className="text-white/40 hover:text-white/100 hover:bg-white/5 gap-2" disabled>
          <ArrowLeft className="w-4 h-4" />
          BACK
        </Button>
      </div>

      {/* Top Header */}
      <div className="z-10 flex flex-col items-center space-y-2 animate-in fade-in slide-in-from-top-4 duration-1000">
        <span className="font-body text-[0.65rem] tracking-[0.8em] text-white/50 uppercase">
          A Study Companion
        </span>
        <h1 className="font-serif-elegant text-8xl md:text-9xl font-bold tracking-[0.1em] text-gradient-white">
          NEET
        </h1>
        <span className="font-serif-elegant text-sm md:text-lg tracking-[1.2em] text-white/70 uppercase pt-2">
          Paper
        </span>
      </div>

      {/* Middle Section: Subject Stack */}
      <div className="z-10 relative flex flex-col items-center -space-y-4 pt-12 animate-in fade-in zoom-in duration-1000 delay-300">
        <div className="book-card bg-rose-900/80 -rotate-[2deg] hover:-rotate-1 z-30 translate-x-2">
          Chemistry
        </div>
        <div className="book-card bg-sky-900/80 rotate-[1deg] hover:rotate-0 z-20 -translate-x-1">
          Physics
        </div>
        <div className="book-card bg-green-900/80 -rotate-[3deg] hover:-rotate-1 z-10 translate-y-1">
          Biology
        </div>
      </div>

      {/* Bottom Action */}
      <div className="z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
        <Button 
          onClick={onEnter}
          className="glow-button h-16 w-64 md:w-72 rounded-full text-lg font-serif-elegant tracking-[0.5em] text-black font-bold"
        >
          ENTER
        </Button>
      </div>
    </div>
  );
};
