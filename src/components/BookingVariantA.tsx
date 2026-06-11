import React, { useState, useEffect } from 'react';
import {
  MapPin,
  AlertCircle,
  ChevronLeft,
  CalendarDays,
  BadgeCheck
} from 'lucide-react';
import Cal, { getCalApi } from "@calcom/embed-react";
import kathrynImage from '@/assets/hero-kathryn.webp';


interface BookingWidgetProps {
  step: number;
  setStep: (step: number) => void;
  selectedDate: any;
  setSelectedDate: (date: any) => void;
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
  formData: { name: string; email: string; phone: string; goal: string };
  setFormData: (data: any) => void;
  dates: Array<{ day: string; date: string; month: string; full: string }>;
  times: string[];
  submitBooking: () => void;
}

// Steps: 0 = state gate, 1 = date/time, 2 = form, 3 = success

export default function BookingVariantA({
  step,
  setStep,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  formData,
  setFormData,
  dates,
  times,
  submitBooking,
}: BookingWidgetProps) {
  const [mounted, setMounted] = useState(false);
  const [successAnim, setSuccessAnim] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const reviews = [
    { text: "Katie genuinely listens. For the first time in years, I feel heard and I'm finally seeing results with my fatigue and weight.", name: "Sarah M." },
    { text: "A life-changing experience! Katie helped me balance my hormones when everyone else said my labs were 'normal'.", name: "Jessica R." },
    { text: "Professional, deeply knowledgeable, and incredibly compassionate. I finally have my energy back and feel like myself again!", name: "Emily T." }
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

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
      cal("on", {
        action: "bookingSuccessful",
        callback: (e) => {
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Schedule');
          }
        }
      });
    })();
  }, []);

  const allowedStates = ['Michigan', 'Wisconsin'];
  const allStates = [
    'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
    'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
    'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
    'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
    'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
    'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
    'Virginia','Washington','West Virginia','Wisconsin','Wyoming'
  ];

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    if (allowedStates.includes(state)) {
      setShowIneligible(false);
      setStep(1);
    } else {
      setShowIneligible(true);
    }
  };

  const progress = step === 0 ? 10 : step === 1 ? 40 : step === 2 ? 70 : 100;

  return (
    <>
      <style>{`
        @keyframes spa-float {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(10px, -15px) rotate(3deg) scale(1.03); }
          66% { transform: translate(-8px, 8px) rotate(-2deg) scale(0.97); }
        }
        @keyframes spa-float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-12px, 12px) rotate(-4deg); }
        }
        @keyframes spa-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes spa-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spa-check-draw {
          0% { stroke-dashoffset: 100; transform: scale(0.5); opacity: 0; }
          50% { opacity: 1; transform: scale(1.1); }
          100% { stroke-dashoffset: 0; transform: scale(1); opacity: 1; }
        }
        @keyframes spa-ring-expand {
          0% { transform: scale(0.3); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: scale(1); opacity: 0; }
        }
        @keyframes spa-pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(45, 106, 100, 0.15); }
          50% { box-shadow: 0 0 40px rgba(45, 106, 100, 0.3); }
        }
        .spa-animate-in {
          animation: spa-fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .spa-stagger-1 { animation-delay: 50ms; }
        .spa-stagger-2 { animation-delay: 120ms; }
        .spa-stagger-3 { animation-delay: 200ms; }
        .spa-stagger-4 { animation-delay: 280ms; }
      `}</style>

      <div
        className={`relative overflow-hidden shadow-2xl transition-all duration-700 h-full min-h-[100dvh] md:min-h-0 rounded-none md:rounded-3xl flex flex-col ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ animation: mounted ? 'spa-pulse-glow 6s ease-in-out infinite' : 'none' }}
      >

        <div className="flex flex-col flex-1 min-h-0 md:min-h-[520px]">
          {/* Booking form panel */}
          <div className={`flex-1 min-h-0 relative overflow-hidden flex flex-col ${step === 0 ? 'bg-white/60 backdrop-blur-xl px-6 py-8 md:px-10 md:py-10 lg:px-12' : 'bg-white p-0'}`}>
            {/* Subtle glass texture - only on state gate step */}
            {step === 0 && (
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.4) 100%)',
                }}
              />
            )}

            <div className="relative z-10 flex flex-col flex-1 min-h-0 h-full">

              {/* STEP 0: Bio Layout */}
              {step === 0 && (
                <div className="spa-animate-in" style={{ opacity: 0 }}>
                  <div className="flex flex-col items-center text-center pb-4 max-w-lg mx-auto">
                    <div className="relative mb-5 mt-2 inline-block">
                        <img 
                          src={kathrynImage} 
                          alt="Kathryn Long, NP-C" 
                          className="w-28 h-28 rounded-full border-[3px] border-white object-cover shadow-lg" 
                        />
                        <div className="absolute bottom-1.5 right-1.5 bg-white rounded-full shadow-sm" style={{ padding: '1px' }}>
                          <BadgeCheck className="w-6 h-6 text-[#0095F6]" fill="currentColor" stroke="white" strokeWidth={1.5} />
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 font-sans">
                          Taking New Patients
                        </span>
                      </div>

                      <h3 className="font-display text-2xl text-primary mb-3 tracking-tight font-normal leading-tight">
                        Stop Guessing. Let's Find the Root Cause of Your Symptoms
                      </h3>
                      
                      <p className="text-sm text-primary/70 leading-relaxed font-sans mb-8 px-2">
                        Hi, I'm Katie Long, NP-C! I specialize in root-cause functional medicine, women's wellness, perimenopause, and medical weight loss for patients in Michigan and Wisconsin. Let's find real solutions tailored to your body.
                      </p>

                      <button
                        onClick={() => setStep(1)}
                        className="group relative w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-primary text-white rounded-2xl font-semibold font-sans shadow-xl shadow-primary/20 transition-all hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 mb-8 border border-white/10 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                        <CalendarDays size={20} className="text-[#F0D060] relative z-10" />
                        <span className="text-[15px] tracking-wide relative z-10">Book Your Free 15-Min Call</span>
                      </button>

                      <div className="w-full bg-gradient-to-br from-[#1E2738] to-[#2A374F] rounded-2xl p-6 text-left relative overflow-hidden min-h-[180px] flex items-center shadow-2xl shadow-primary/30 border border-white/10">
                        <div className="absolute -top-6 -left-2 text-8xl text-white/5 font-serif leading-none">"</div>
                        <div 
                          key={reviewIndex} 
                          className="spa-animate-in relative z-10 w-full"
                          style={{ animation: 'spa-fade-up 0.5s ease-out forwards' }}
                        >
                          <div className="flex items-center gap-1 mb-3 pl-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-[#F0D060]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-sm text-white/95 italic font-sans pl-1 leading-relaxed mb-5">
                            "{reviews[reviewIndex].text}"
                          </p>
                          <div className="flex items-center gap-3 pl-1">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0D060] flex items-center justify-center text-[#1E2738] font-bold text-sm shadow-md">
                              {reviews[reviewIndex].name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white font-sans">{reviews[reviewIndex].name}</p>
                              <div className="flex items-center gap-1">
                                <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <p className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">Verified Patient</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
              )}

              {/* Cal.com Embed - always mounted at full size; opacity-only transition eliminates flicker */}
              <div 
                className={`transition-opacity duration-300 ${
                  step >= 1
                    ? 'relative z-10 flex-1 min-h-0 flex flex-col w-full opacity-100'
                    : 'absolute inset-0 z-0 opacity-0 pointer-events-none'
                }`}
              >
                <Cal 
                  namespace="15min"
                  calLink="katie-long-np/15min"
                  style={{width:"100%",height:"100%",overflow:"scroll"}}
                  config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
