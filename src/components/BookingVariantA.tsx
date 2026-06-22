import React, { useState, useEffect } from 'react';
import { BadgeCheck, CalendarDays, ChevronLeft, ArrowRight, User, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { WhopCheckoutEmbed } from "@whop/checkout/react";
import kathrynImage from '@/assets/hero-kathryn.webp';
import { useServerFn } from '@tanstack/react-start';
import { getAvailableSlots } from '../lib/cal';

interface BookingWidgetProps {
  step: number;
  setStep: (step: number) => void;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
  formData: { name: string; email: string; goal: string };
  setFormData: (data: any) => void;
  submitBooking: () => void;
}

export default function BookingVariantA({
  step,
  setStep,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  formData,
  setFormData,
}: BookingWidgetProps) {
  const [mounted, setMounted] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const reviews = [
    { text: "A life-changing experience! Katie helped me balance my hormones when everyone else said my labs were 'normal'.", name: "Jessica R." },
    { text: "For years I was told my exhaustion and brain fog were just part of getting older. Katie was the first provider to actually dig deeper and find the root cause.", name: "Michelle T." },
    { text: "I was eating right, but the scale wouldn't budge. After one session with Katie, we found out exactly what my hormones were doing.", name: "Lauren M." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [reviews.length]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [calSlots, setCalSlots] = useState<Record<string, { time: string }[]>>({});
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const fetchSlots = useServerFn(getAvailableSlots);

  useEffect(() => {
    async function loadSlots() {
      setIsLoadingSlots(true);
      const today = new Date();
      // Fetch 60 days of availability
      const futureDate = new Date();
      futureDate.setDate(today.getDate() + 60);
      
      const slots = await fetchSlots({
        data: {
          startDate: today.toISOString().split('T')[0],
          endDate: futureDate.toISOString().split('T')[0],
        }
      });
      setCalSlots(slots);
      setIsLoadingSlots(false);
    }
    loadSlots();
  }, [fetchSlots]);

  const selectedDateStr = selectedDate ? new Date(selectedDate.getTime() - (selectedDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0] : '';
  const availableTimesForDate = calSlots[selectedDateStr] || [];
  
  const availableTimes = availableTimesForDate.map(slot => {
    const d = new Date(slot.time);
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  });

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const isFormValid = formData.name.length > 0 && formData.email.includes('@');

  return (
    <>
      <style>{`
        .spa-pulse-glow { animation: spa-pulse-glow 6s ease-in-out infinite; }
        @keyframes spa-pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(45, 106, 100, 0.15); }
          50% { box-shadow: 0 0 40px rgba(45, 106, 100, 0.3); }
        }
        .spa-animate-in { animation: spa-fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes spa-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Custom styles for DayPicker */
        .rdp {
          --rdp-cell-size: 40px;
          --rdp-accent-color: #2D6A64;
          --rdp-background-color: #E8F0EF;
          margin: 0 !important;
        }
        .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover {
          color: white;
          background-color: var(--rdp-accent-color);
        }
      `}</style>

      <div
        className={`relative overflow-hidden shadow-2xl transition-all duration-700 h-full min-h-[100dvh] md:min-h-[600px] md:h-auto rounded-none md:rounded-3xl flex flex-col ${
          mounted ? 'opacity-100 translate-y-0 spa-pulse-glow' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className={`flex-1 flex flex-col bg-white overflow-y-auto ${step === 0 ? 'bg-white/60 backdrop-blur-xl' : ''}`}>
          
          {/* Subtle glass texture for Step 0 */}
          {step === 0 && (
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.4) 100%)' }}
            />
          )}

          <div className="relative z-10 flex flex-col flex-1 h-full px-6 py-8 md:px-10">
            
            {/* STEP 0: Bio */}
            {step === 0 && (
              <div className="spa-animate-in" style={{ opacity: 0 }}>
                <div className="flex flex-col items-center text-center pb-4 max-w-lg mx-auto">
                  <div className="relative mb-3 mt-2 inline-block">
                    <img 
                      src={kathrynImage} 
                      alt="Kathryn Long, NP-C" 
                      className="w-28 h-28 rounded-full border-[3px] border-white object-cover shadow-lg" 
                    />
                    <div className="absolute bottom-1.5 right-1.5 bg-white rounded-full shadow-sm p-[1px]">
                      <BadgeCheck className="w-6 h-6 text-[#0095F6]" fill="currentColor" stroke="white" strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="text-[13px] font-bold text-primary/80 font-sans mb-4 tracking-wide">
                    Katie Long NP-C ~ Board Certified
                  </p>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 font-sans">
                      A FEW SPOTS OPEN THIS MONTH
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-primary mb-3 tracking-tight font-normal leading-tight px-2">
                    Tired, Foggy, and Gaining Weight But Your Labs Are “Normal”?
                  </h3>
                  
                  <p className="text-[15px] text-primary/80 leading-relaxed font-sans mb-6 px-4 font-medium">
                    There's a reason you feel this way, and it's not in your head. Let's find out what your hormones are actually doing!
                  </p>

                  <div className="w-full text-left mb-8 px-4">
                    <p className="text-sm font-bold text-primary mb-3">What the session is:</p>
                    <ul className="space-y-2">
                      {[
                        "Fully virtual, a secure Google Meet from home",
                        "A comprehensive review of your symptoms and health history",
                        "Personalized hormonal guidance and clear next steps",
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-sm text-primary/80">
                          <span className="text-[#D4AF37] mt-0.5 font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full mb-8">
                    <button
                      onClick={() => setStep(1)}
                      className="group relative w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-primary text-white rounded-2xl font-semibold font-sans shadow-xl shadow-primary/20 transition-all hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 border border-white/10 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      <CalendarDays size={20} className="text-[#F0D060] relative z-10" />
                      <span className="text-[15px] tracking-wide relative z-10">Book My $47 Clarity Session</span>
                    </button>
                    <p className="text-xs text-primary/60 mt-3 font-sans">
                      100% virtual • Secure Google Meet • MI & WI women only.
                    </p>
                  </div>

                  <div className="w-full bg-white rounded-2xl p-6 text-left relative overflow-hidden min-h-[180px] flex items-center shadow-xl shadow-primary/5 border border-primary/[0.08]">
                    <div className="absolute -top-6 -left-2 text-8xl text-primary/[0.03] font-serif leading-none">"</div>
                    <div key={reviewIndex} className="spa-animate-in relative z-10 w-full">
                      <div className="flex items-center gap-1 mb-3 pl-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-primary/80 italic font-sans pl-1 leading-relaxed mb-5">
                        "{reviews[reviewIndex].text}"
                      </p>
                      <div className="flex items-center gap-3 pl-1">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F0D060] flex items-center justify-center text-[#1E2738] font-bold text-sm shadow-md">
                          {reviews[reviewIndex].name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-primary font-sans">{reviews[reviewIndex].name}</p>
                          <div className="flex items-center gap-1">
                            <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <p className="text-[10px] text-primary/50 uppercase tracking-wider font-semibold">Verified Patient</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 1: Custom Calendar & Time Selection */}
            {step === 1 && (
              <div className="spa-animate-in h-full flex flex-col" style={{ opacity: 0 }}>
                <button onClick={() => setStep(0)} className="self-start flex items-center gap-1 text-sm text-primary/60 hover:text-primary mb-6 transition-colors">
                  <ChevronLeft size={16} /> Back
                </button>
                <div className="mb-6">
                  <h3 className="font-display text-2xl text-primary tracking-tight mb-2">Select a Time</h3>
                  <p className="text-primary/60 text-sm">Pick a 15-minute slot that works for you.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 flex-1">
                  <div className="flex justify-center md:justify-start">
                    <DayPicker
                      mode="single"
                      selected={selectedDate || undefined}
                      onSelect={(date) => {
                        setSelectedDate(date || null);
                        setSelectedTime(null);
                      }}
                      disabled={[
                        { before: new Date() },
                        (date) => {
                          const dateStr = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
                          return !calSlots[dateStr] || calSlots[dateStr].length === 0;
                        }
                      ]}
                      className="border border-primary/10 rounded-2xl p-4 shadow-sm"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      {selectedDate ? (
                        <div className="space-y-3">
                          <p className="text-sm font-semibold text-primary mb-4">
                            Available on {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                          </p>
                          {availableTimes.length > 0 ? (
                            <div className="grid grid-cols-2 gap-3">
                              {availableTimes.map((time) => (
                                <button
                                  key={time}
                                  onClick={() => handleTimeSelect(time)}
                                  className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                                    selectedTime === time 
                                      ? 'bg-primary text-white shadow-md border border-primary' 
                                      : 'bg-white border border-primary/15 text-primary hover:border-primary/40 hover:bg-primary/5'
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <div className="text-primary/60 text-sm italic">
                              No slots available on this date.
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center text-primary/40 text-sm italic border border-dashed border-primary/15 rounded-2xl p-8 text-center bg-primary/[0.02]">
                          {isLoadingSlots ? "Loading availability..." : "Please select a date from the calendar to see available times."}
                        </div>
                      )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-primary/10">
                      <button
                        onClick={() => setStep(2)}
                        disabled={!selectedDate || !selectedTime}
                        className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all ${
                          selectedDate && selectedTime
                            ? 'bg-primary text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                            : 'bg-primary/10 text-primary/40 cursor-not-allowed'
                        }`}
                      >
                        Continue <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Intake Details */}
            {step === 2 && (
              <div className="spa-animate-in h-full flex flex-col max-w-md mx-auto w-full" style={{ opacity: 0 }}>
                <button onClick={() => setStep(1)} className="self-start flex items-center gap-1 text-sm text-primary/60 hover:text-primary mb-6 transition-colors">
                  <ChevronLeft size={16} /> Back
                </button>
                <div className="mb-8 text-center">
                  <h3 className="font-display text-2xl text-primary tracking-tight mb-2">Your Details</h3>
                  <p className="text-primary/60 text-sm">Almost there! We just need a few details to finalize your booking.</p>
                </div>

                <div className="space-y-5 flex-1">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <User size={18} className="text-primary/40" />
                      </div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-primary/15 bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="Jane Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Mail size={18} className="text-primary/40" />
                      </div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-primary/15 bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">What is your primary health goal right now?</label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none">
                        <MessageSquare size={18} className="text-primary/40" />
                      </div>
                      <textarea
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        rows={3}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-primary/15 bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                        placeholder="E.g., I want to figure out why I'm always exhausted..."
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary/10">
                  <div className="bg-primary/5 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <div className="mt-0.5">
                      <CalendarDays size={18} className="text-primary/70" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">Session Details</p>
                      <p className="text-xs text-primary/70 mt-1">
                        {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(3)}
                    disabled={!isFormValid}
                    className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all ${
                      isFormValid
                        ? 'bg-primary text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                        : 'bg-primary/10 text-primary/40 cursor-not-allowed'
                    }`}
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Whop Checkout */}
            {step === 3 && (
              <div className="spa-animate-in h-full flex flex-col w-full" style={{ opacity: 0 }}>
                <button onClick={() => setStep(2)} className="self-start flex items-center gap-1 text-sm text-primary/60 hover:text-primary mb-4 transition-colors">
                  <ChevronLeft size={16} /> Back
                </button>
                <div className="flex-1 w-full relative min-h-[500px]">
                  <WhopCheckoutEmbed
                    planId="plan_Gt9JH0LYs0KpR"
                    prefill={{ email: formData.email, name: formData.name }}
                    themeOptions={{ 
                      accentColor: "#2D6A64", 
                      borderRadius: 16 
                    }}
                    onComplete={() => {
                      setStep(4);
                    }}
                  />
                </div>
              </div>
            )}

            {/* STEP 4: Success State */}
            {step === 4 && (
              <div className="spa-animate-in h-full flex flex-col items-center justify-center text-center p-8" style={{ opacity: 0 }}>
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 size={40} className="text-green-500" />
                </div>
                <h3 className="font-display text-3xl text-primary tracking-tight mb-3">You're Booked!</h3>
                <p className="text-primary/80 mb-6 max-w-sm">
                  Your payment was successful and your session is confirmed for <strong>{selectedDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {selectedTime}</strong>.
                </p>
                <p className="text-primary/60 text-sm mb-8 max-w-sm">
                  We've sent a calendar invitation and a Google Meet link to <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="py-3 px-8 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary/20 transition-colors"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
