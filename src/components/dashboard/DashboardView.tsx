
"use client";

import React, { useEffect, useState } from 'react';
import { Sparkles, BookOpen, Clock, Trophy, RefreshCcw, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateStudySpark, type GenerateStudySparkOutput } from "@/ai/flows/ai-study-spark-tool";

interface DashboardViewProps {
  userName: string;
  onBack: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ userName, onBack }) => {
  const [spark, setSpark] = useState<GenerateStudySparkOutput | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchSpark = async () => {
    setLoading(true);
    try {
      const result = await generateStudySpark({});
      setSpark(result);
    } catch (error) {
      console.error("Failed to generate spark:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpark();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-[#121018] animate-in fade-in slide-in-from-bottom-8 duration-1000 relative">
      {/* Back Button */}
      <div className="absolute top-8 left-8 z-20">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="text-white/60 hover:text-white hover:bg-white/5 gap-2 font-headline tracking-widest text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          EXIT TO START
        </Button>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 pt-12">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
            WELCOME <span className="text-primary uppercase">NEET CHAMP</span> <span className="text-accent uppercase">{userName}</span>
          </h1>
          <p className="font-body text-xl text-muted-foreground/80 max-w-2xl mx-auto">
            Your personalized command center for medical success. Stay focused, stay driven.
          </p>
        </div>

        {/* AI Study Spark Card */}
        <Card className="glass-card rounded-[2rem] border-primary/20 overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Sparkles className="w-24 h-24 text-primary" />
          </div>
          
          <CardContent className="p-10 md:p-14 space-y-8 relative z-10">
            <div className="flex items-center gap-3 text-primary mb-2">
              <Sparkles className="w-6 h-6 animate-pulse" />
              <span className="font-headline font-bold tracking-widest uppercase">Daily Study Spark</span>
            </div>

            {loading ? (
              <div className="space-y-6 animate-pulse">
                <div className="h-8 bg-white/5 rounded-lg w-3/4" />
                <div className="h-32 bg-white/5 rounded-2xl w-full" />
              </div>
            ) : spark ? (
              <div className="space-y-8">
                <blockquote className="font-headline text-3xl md:text-4xl font-medium leading-tight">
                  "{spark.motivation}"
                </blockquote>
                
                <div className="p-6 rounded-2xl bg-background/40 border border-white/5 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-accent mb-3 font-headline font-semibold uppercase text-sm tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    Subject Tip: {spark.subjectUsed}
                  </div>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {spark.proTip}
                  </p>
                </div>
              </div>
            ) : (
              <p>Failed to load spark. Try again.</p>
            )}

            <Button 
              variant="outline" 
              onClick={fetchSpark} 
              disabled={loading}
              className="rounded-full border-primary/30 hover:bg-primary/10 transition-all gap-2"
            >
              <RefreshCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              New Inspiration
            </Button>
          </CardContent>
        </Card>

        {/* Coming Soon Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickStat icon={<Clock className="w-6 h-6" />} label="Exam Timer" value="Unavailable" />
          <QuickStat icon={<BookOpen className="w-6 h-6" />} label="Question Bank" value="Coming Soon" />
          <QuickStat icon={<Trophy className="w-6 h-6" />} label="Mock Tests" value="Locked" />
        </div>

        <div className="text-center py-20 animate-bounce">
          <p className="font-headline text-2xl font-bold text-accent tracking-widest uppercase opacity-70">
            Papers will be available soon. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};

const QuickStat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center space-y-3">
    <div className="bg-primary/10 p-4 rounded-2xl text-primary mb-2">
      {icon}
    </div>
    <span className="text-muted-foreground uppercase text-xs font-bold tracking-widest">{label}</span>
    <span className="text-xl font-headline font-bold">{value}</span>
  </div>
);
