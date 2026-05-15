"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface OnboardingViewProps {
  onComplete: (name: string) => void;
}

export const OnboardingView: React.FC<OnboardingViewProps> = ({ onComplete }) => {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#121018] animate-in fade-in zoom-in duration-700">
      <div className="w-full max-w-md glass-card rounded-[2.5rem] p-12 text-center relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <h2 className="font-headline text-4xl font-bold mb-4">Welcome</h2>
          <p className="font-body text-muted-foreground mb-10">Let's personalize your NEET journey. What's your name?</p>
          
          <div className="space-y-6">
            <Input 
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-16 rounded-2xl bg-background/50 border-white/10 text-center text-xl font-body glow-input transition-all duration-300"
              autoFocus
            />
            
            <Button 
              disabled={!name.trim()}
              onClick={() => onComplete(name.trim())}
              className={`w-full h-16 rounded-2xl text-lg font-headline font-bold transition-all duration-500 ${
                name.trim() 
                ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 scale-100 opacity-100" 
                : "bg-muted text-muted-foreground scale-95 opacity-50 cursor-not-allowed"
              }`}
            >
              CONTINUE JOURNEY
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
