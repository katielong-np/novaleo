import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import PaidClaritySession from '@/components/PaidClaritySession';

export const Route = createFileRoute('/clarity-session')({
  head: () => ({
    meta: [
      { title: 'Book a Clarity Session — Novaleo Weight & Wellness' },
      {
        name: 'description',
        content:
          'Schedule your $47 30-minute Clarity Session with Kathryn Long, NP-C. Available via telehealth in Michigan and Wisconsin.',
      },
    ],
  }),
  component: ClaritySessionPage,
});

const PageStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    .blob-shape {
      animation: float 12s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
      50% { transform: translateY(-20px) scale(1.05) rotate(2deg); }
    }
  `}} />
);

const OrganicBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#FDFBF7]">
    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 blob-shape" />
    <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-60 blob-shape" style={{animationDelay: '2s'}} />
  </div>
);

function ClaritySessionPage() {
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', goal: '' });

  const dates = [
    { day: 'Mon', date: '15', month: 'Jun', full: 'June 15, 2026' },
  ];
  const times = ['9:00 AM'];

  const submitBooking = () => {
    setStep(3);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center relative p-0 md:p-6">
      <PageStyles />
      <OrganicBackground />
      
      <div className="relative w-full max-w-2xl overflow-y-auto h-[100dvh] max-h-[100dvh] md:h-auto md:max-h-[90vh] rounded-none md:rounded-3xl bg-white md:bg-transparent shadow-2xl">
        <PaidClaritySession
          step={step}
          setStep={setStep}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          formData={formData}
          setFormData={setFormData}
          dates={dates}
          times={times}
          submitBooking={submitBooking}
        />
      </div>
    </div>
  );
}
