import { createFileRoute } from '@tanstack/react-router';
import React, { useEffect } from 'react';
import { useBookingModal } from '@/components/BookingModalContext';

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

const PageStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    .blob-shape {
      animation: float 12s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
      50% { transform: translateY(-20px) scale(1.05) rotate(2deg); }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .slide-up {
      animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `}} />
);

const OrganicBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 blob-shape" />
    <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-60 blob-shape" style={{animationDelay: '2s'}} />
  </div>
);

function DiscoveryPage() {
  const { open: openBooking } = useBookingModal();

  useEffect(() => {
    // Automatically open the booking modal when the user navigates to the discovery page
    openBooking();
  }, [openBooking]);

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center relative p-4 md:p-6 text-center">
      <PageStyles />
      <OrganicBackground />
    </div>
  );
}
