"use client";

import React, { useMemo } from 'react';
import { Button } from "@/components/ui/button";

interface ComingSoonViewProps {
  onBack: () => void;
}

export const ComingSoonView: React.FC<ComingSoonViewProps> = ({ onBack }) => {
  // Generate random stars for the background
  const stars = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 4 + 2}s`,
    }));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-[#0a0812] overflow-hidden text-center">
      {/* Background stars and atmospheric glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]" />
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

      <div className="z-10 max-w-2xl flex flex-col items-center space-y-12 animate-in fade-in zoom-in duration-1000">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="font-serif-elegant text-6xl md:text-8xl font-bold tracking-[0.15em] leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-cyan-300 uppercase">
            Paper<br />Will Be<br />Available<br />Soon
          </h1>
        </div>

        {/* Gradient Separator */}
        <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60" />

        {/* Description */}
        <div className="space-y-2">
          <p className="font-body text-lg md:text-xl text-white/60 font-light tracking-wide leading-relaxed">
            A new chapter in focused study is being written.<br />
            Stay tuned for something quietly extraordinary.
          </p>
        </div>

        {/* Back Button */}
        <div className="pt-8">
          <Button 
            onClick={onBack}
            variant="ghost"
            className="h-14 px-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 font-serif-elegant tracking-[0.3em] transition-all duration-500 group"
          >
            <span className="mr-3 transition-transform group-hover:-translate-x-1">←</span> BACK
          </Button>
        </div>
      </div>
    </div>
  );
};
