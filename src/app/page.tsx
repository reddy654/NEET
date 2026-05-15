
"use client";

import React, { useState, useEffect } from 'react';
import { LandingView } from "@/components/landing/LandingView";
import { OnboardingView } from "@/components/onboarding/OnboardingView";
import { ComingSoonView } from "@/components/coming-soon/ComingSoonView";

type AppStep = 'landing' | 'onboarding' | 'coming-soon';

export default function Home() {
  const [step, setStep] = useState<AppStep>('landing');
  const [userName, setUserName] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Persist session: if name exists, skip onboarding
    const savedName = localStorage.getItem('neetflow_user_name');
    if (savedName) {
      setUserName(savedName);
      setStep('coming-soon');
    }
  }, []);

  const handleEnter = () => {
    setStep('onboarding');
  };

  const handleBack = () => {
    if (step === 'coming-soon') {
      setStep('onboarding');
    } else if (step === 'onboarding') {
      setStep('landing');
    }
  };

  const handleOnboardingComplete = (name: string) => {
    localStorage.setItem('neetflow_user_name', name);
    setUserName(name);
    setStep('coming-soon');
  };

  // Prevent hydration mismatch by only rendering after mount
  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      {step === 'landing' && (
        <LandingView onEnter={handleEnter} />
      )}
      
      {step === 'onboarding' && (
        <OnboardingView onComplete={handleOnboardingComplete} onBack={handleBack} />
      )}
      
      {step === 'coming-soon' && (
        <ComingSoonView onBack={handleBack} />
      )}
    </main>
  );
}
