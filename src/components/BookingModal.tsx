import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useRouterState } from '@tanstack/react-router';
import { useBookingModal } from './BookingModalContext';
import BookingVariantA from './BookingVariantA';

export function BookingModal() {
  const { isOpen, close } = useBookingModal();
  const routerState = useRouterState();
  const isDiscoveryPage = routerState.location.pathname.includes('/free-15-min-call-with-katie') || routerState.location.pathname.includes('/michigan-discovery-call');
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', goal: '' });
  const [visible, setVisible] = useState(false);

  // Reset state every time modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setSelectedDate(null);
      setSelectedTime(null);
      setFormData({ name: '', email: '', phone: '', goal: '' });
      // Small delay for enter animation
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isDiscoveryPage) close();
    };
    if (isOpen) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, close, isDiscoveryPage]);

  const dates = [
    { day: 'Mon', date: '15', month: 'Jun', full: 'June 15, 2026' },
    { day: 'Tue', date: '16', month: 'Jun', full: 'June 16, 2026' },
    { day: 'Wed', date: '17', month: 'Jun', full: 'June 17, 2026' },
    { day: 'Thu', date: '18', month: 'Jun', full: 'June 18, 2026' },
    { day: 'Fri', date: '19', month: 'Jun', full: 'June 19, 2026' },
  ];

  const times = ['9:00 AM', '10:30 AM', '1:00 PM', '2:45 PM', '4:00 PM'];

  const handleDateSelect = (d: any) => {
    setSelectedDate(d);
    setSelectedTime(null);
  };

  const submitBooking = () => {
    setStep(3);
  };

  return (
    <div
      className={`${isOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 ${isDiscoveryPage ? 'bg-white' : ''}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-300 ${
            visible ? 'opacity-100' : 'opacity-0'
          } ${isDiscoveryPage ? 'hidden md:block' : ''}`}
          onClick={isDiscoveryPage ? undefined : close}
        />

        {/* Modal container */}
        <div
          className={`relative w-full max-w-2xl overflow-y-auto transition-all duration-500 h-[100dvh] max-h-[100dvh] md:h-auto md:max-h-[90vh] rounded-none md:rounded-3xl bg-white md:bg-transparent ${
            visible
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          {/* Close button */}
          {!isDiscoveryPage && (
            <button
              onClick={close}
              className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center text-primary/60 hover:text-primary hover:bg-white hover:shadow-md transition-all duration-300 hover:scale-110"
              aria-label="Close booking modal"
            >
              <X size={20} />
            </button>
          )}

          <BookingVariantA
            step={step}
            setStep={setStep}
            selectedDate={selectedDate}
            setSelectedDate={handleDateSelect}
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
    </div>
  );
}
