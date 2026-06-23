import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import BookingVariantA from '@/components/BookingVariantA';

export const Route = createFileRoute('/michigan-discovery-call')({
  head: () => ({
    meta: [
      { title: 'Book a Free Discovery Call — Novaleo Weight & Wellness' },
      {
        name: 'description',
        content:
          'Schedule your complimentary 15-minute discovery call with Kathryn Long, NP-C. Available via telehealth in Michigan.',
      },
    ],
  }),
  component: DiscoveryPage,
});


function DiscoveryPage() {
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', goal: '' });

  const dates = [
    { day: 'Mon', date: '15', month: 'Jun', full: 'June 15, 2026' },
    { day: 'Tue', date: '16', month: 'Jun', full: 'June 16, 2026' },
    { day: 'Wed', date: '17', month: 'Jun', full: 'June 17, 2026' },
    { day: 'Thu', date: '18', month: 'Jun', full: 'June 18, 2026' },
    { day: 'Fri', date: '19', month: 'Jun', full: 'June 19, 2026' },
  ];

  const times = ['9:00 AM', '10:30 AM', '1:00 PM', '2:45 PM', '4:00 PM'];

  const submitBooking = () => {
    setStep(3);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative p-0 md:p-8 bg-white">
      <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col h-[100dvh] md:h-auto md:min-h-0 bg-white">
        <BookingVariantA
          step={step}
          setStep={setStep}
          selectedDate={selectedDate}
          setSelectedDate={(d) => { setSelectedDate(d); setSelectedTime(null); }}
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
