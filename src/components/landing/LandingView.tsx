"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Microscope, Atom, Beaker } from "lucide-react";

interface LandingViewProps {
  onEnter: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onEnter }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-[#121018] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px] animate-pulse delay-700" />

      {/* Subject Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 z-10 w-full max-w-5xl">
        <SubjectCard 
          icon={<Microscope className="w-12 h-12 text-primary" />} 
          title="BIOLOGY" 
          delay="delay-0"
        />
        <SubjectCard 
          icon={<Atom className="w-12 h-12 text-accent" />} 
          title="PHYSICS" 
          delay="delay-150"
        />
        <SubjectCard 
          icon={<Beaker className="w-12 h-12 text-primary" />} 
          title="CHEMISTRY" 
          delay="delay-300"
        />
      </div>

      {/* Main Branding */}
      <div className="text-center z-10 animate-fade-in-up delay-500">
        <h1 className="font-headline text-8xl md:text-[12rem] font-bold tracking-tighter text-gradient leading-none mb-4">
          NEET
        </h1>
        <p className="font-body text-muted-foreground text-xl tracking-widest uppercase mb-12 animate-pulse">
          Your path to medical excellence
        </p>

        <Button 
          onClick={onEnter}
          size="lg"
          className="h-16 px-12 text-xl font-headline font-bold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-primary/50"
        >
          ENTER FLOW
        </Button>
      </div>
    </div>
  );
};

const SubjectCard = ({ icon, title, delay }: { icon: React.ReactNode; title: string; delay: string }) => (
  <div className={`subject-card glass-card rounded-3xl p-8 flex flex-col items-center justify-center min-h-[280px] animate-float ${delay}`}>
    <div className="mb-6 bg-background/50 p-6 rounded-2xl border border-white/5">
      {icon}
    </div>
    <h3 className="font-headline text-2xl font-bold tracking-widest">{title}</h3>
  </div>
);
