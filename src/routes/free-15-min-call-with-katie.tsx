import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import BookingVariantA from '@/components/BookingVariantA';

export const Route = createFileRoute('/free-15-min-call-with-katie')({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://novaweightandwellness.com/free-15-min-call-with-katie" },
    ],
    meta: [
      { title: "Book a Free Discovery Call | Novaleo Weight & Wellness" },
      {
        name: "description",
        content:
          "Schedule your complimentary 15-minute discovery call with Kathryn Long, NP-C. Available via telehealth in Michigan and Wisconsin.",
      },
      { property: "og:title", content: "Book a Free Discovery Call | Novaleo" },
      {
        property: "og:description",
        content: "Schedule your complimentary 15-minute discovery call with Kathryn Long, NP-C.",
      },
      { property: "og:url", content: "https://novaweightandwellness.com/free-15-min-call-with-katie" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image.webp" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Book a Free Discovery Call | Novaleo" },
      { name: "twitter:description", content: "Schedule your complimentary 15-minute discovery call with Kathryn Long, NP-C." },
      { name: "twitter:image", content: "https://novaweightandwellness.com/og-image.webp" },
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
    <main className="min-h-screen flex flex-col items-center justify-start md:justify-center relative p-0 md:p-8 bg-white">
      <h1 className="sr-only">Book a Free Discovery Call</h1>
      <div className={`w-full max-w-2xl mx-auto relative z-10 flex flex-col min-h-screen md:min-h-0 bg-white`}>
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
    </main>
  );
}
