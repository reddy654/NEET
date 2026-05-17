
"use client";

import React, { useMemo, useState, useEffect } from 'react';
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
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setCurrentTime(istTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const stars = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.5 + 0.5}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 4 + 2}s`,
    }));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-[#0a0812] overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[100px]" />
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

      <div className="absolute top-6 right-6 z-20">
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="ghost" 
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 p-0 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            >
              <User className="w-3.5 h-3.5 text-white/60" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-[#121018]/90 border-white/10 backdrop-blur-xl rounded-xl w-auto py-2 px-4 shadow-2xl">
            <div className="flex flex-col space-y-0.5">
              <span className="text-[0.35rem] tracking-[0.3em] text-white/30 uppercase font-serif-elegant">Logged in as</span>
              <span className="text-[0.6rem] font-headline font-bold text-white/90 tracking-wider uppercase">{userName}</span>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="z-10 max-w-md flex flex-col items-center space-y-6 animate-in fade-in zoom-in duration-1000 scale-[0.65] md:scale-[0.75]">
        <div className="space-y-2">
          <span className="text-[0.4rem] tracking-[0.8em] text-white/30 uppercase">Welcome, {userName}</span>
          <h1 className="font-serif-elegant text-lg md:text-xl font-bold tracking-[0.2em] leading-[1.6] text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-cyan-200 uppercase">
            Paper Will Be<br />Available Soon
          </h1>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <span className="text-[0.35rem] tracking-[0.5em] text-white/20 uppercase">Current Time (IST)</span>
          <div className="font-headline text-lg md:text-xl font-light tracking-[0.2em] text-white/60 tabular-nums uppercase">
            {currentTime || "00:00:00 AM"}
          </div>
        </div>

        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />

        <div className="space-y-1.5">
          <p className="font-body text-[0.45rem] text-white/30 font-light tracking-[0.4em] leading-relaxed uppercase">
            A new chapter in focused study is being written.<br />
            Stay tuned for something quietly extraordinary.
          </p>
        </div>

        <div className="pt-2">
          <Button 
            onClick={onBack}
            variant="ghost"
            className="h-8 px-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-white/40 text-[0.45rem] font-serif-elegant tracking-[0.3em] transition-all duration-500 group"
          >
            <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> BACK
          </Button>
        </div>
      </div>
    </div>
  );
};
