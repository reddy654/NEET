
"use client";

import React, { useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ComingSoonViewProps {
  onBack: () => void;
  userName: string;
}

export const ComingSoonView: React.FC<ComingSoonViewProps> = ({ onBack, userName }) => {
  // Generate random stars for the background
  const stars = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 0.5}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 4 + 2}s`,
    }));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-[#0a0812] overflow-hidden text-center">
      {/* Background stars and atmospheric glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/5 rounded-full blur-[120px]" />
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

      {/* Profile Logo - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="ghost" 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 p-0 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            >
              <User className="w-5 h-5 text-white/60" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-[#121018]/90 border-white/10 backdrop-blur-xl rounded-2xl w-auto py-3 px-5 shadow-2xl">
            <div className="flex flex-col space-y-1">
              <span className="text-[0.5rem] tracking-[0.3em] text-white/30 uppercase font-serif-elegant">Logged in as</span>
              <span className="text-sm font-headline font-bold text-white/90 tracking-wider uppercase">{userName}</span>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="z-10 max-w-lg flex flex-col items-center space-y-10 animate-in fade-in zoom-in duration-1000 scale-90 md:scale-100">
        {/* Main Heading - Zoomed Out (Smaller) */}
        <div className="space-y-4">
          <h1 className="font-serif-elegant text-2xl md:text-3xl font-bold tracking-[0.2em] leading-[1.4] text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-cyan-200 uppercase">
            Paper<br />Will Be<br />Available<br />Soon
          </h1>
        </div>

        {/* Gradient Separator */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />

        {/* Description - Zoomed Out (Smaller) */}
        <div className="space-y-2">
          <p className="font-body text-[0.6rem] md:text-[0.7rem] text-white/40 font-light tracking-[0.4em] leading-relaxed uppercase">
            A new chapter in focused study is being written.<br />
            Stay tuned for something quietly extraordinary.
          </p>
        </div>

        {/* Actions */}
        <div className="pt-8 flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={onBack}
            variant="ghost"
            className="h-11 px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-white/40 text-[0.6rem] font-serif-elegant tracking-[0.3em] transition-all duration-500 group"
          >
            <span className="mr-3 transition-transform group-hover:-translate-x-1">←</span> BACK
          </Button>
        </div>
      </div>
    </div>
  );
};
