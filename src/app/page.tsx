"use client";

import React, { useState, useEffect } from 'react';
import { LandingView } from "@/components/landing/LandingView";
import { OnboardingView } from "@/components/onboarding/OnboardingView";
import { DashboardView } from "@/components/dashboard/DashboardView";

type AppStep = 'landing' | 'onboarding' | 'dashboard';

export default function Home() {
  const [step, setStep] = useState<AppStep>('landing');
  const [userName, setUserName] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedName = localStorage.getItem('neetflow_user_name');
    if (savedName) {
      setUserName(savedName);
      setStep('dashboard');
    }
  }, []);

  const handleEnter = () => {
    setStep('onboarding');
  };

  const handleOnboardingComplete = (name: string) => {
    localStorage.setItem('neetflow_user_name', name);
    setUserName(name);
    setStep('dashboard');
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      {step === 'landing' && (
        <LandingView onEnter={handleEnter} />
      )}
      
      {step === 'onboarding' && (
        <OnboardingView onComplete={handleOnboardingComplete} />
      )}
      
      {step === 'dashboard' && (
        <DashboardView userName={userName} />
      )}
    </main>
  );
}
