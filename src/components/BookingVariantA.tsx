import React, { useState, useEffect } from 'react';
import {
  MapPin,
  AlertCircle,
  ChevronLeft,
  CalendarDays,
  BadgeCheck
} from 'lucide-react';

import kathrynImage from '@/assets/hero-kathryn.webp';
import { useRouterState } from '@tanstack/react-router';


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
  const routerState = useRouterState();
  const isMichiganPage = routerState.location.pathname.includes('/michigan-discovery-call');

  const reviews = [
    { text: "Katie genuinely listens. For the first time in years, I feel heard and I'm finally seeing results with my fatigue and weight.", name: "Sarah M." },
    { text: "A life-changing experience! Katie helped me balance my hormones when everyone else said my labs were 'normal'.", name: "Jessica R." },
    { text: "She's not playing whack-a-mole with my symptoms - we're actually getting to the root of it. I may have menopause, but it doesn't have me.", name: "Terri V." }
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
    // Load GoHighLevel embed script for resizing and iframe management
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
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
        className={`relative transition-all duration-700 flex flex-col ${
          !isMichiganPage ? 'overflow-hidden shadow-2xl rounded-none md:rounded-3xl h-full min-h-[100dvh] md:min-h-0' : 'w-full h-full'
        } ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ animation: mounted && !isMichiganPage ? 'spa-pulse-glow 6s ease-in-out infinite' : 'none' }}
      >

        <div className={`flex flex-col ${!isMichiganPage ? 'flex-1 min-h-0 md:min-h-[520px]' : 'h-full w-full'}`}>
          {/* Booking form panel */}
          <div className={`relative flex flex-col ${step === 0 ? `${!isMichiganPage ? 'flex-1 min-h-0 overflow-y-auto' : 'w-full h-full'} overflow-x-hidden ${isMichiganPage ? 'bg-white px-4 pt-4 pb-8 md:px-10 md:py-10' : 'bg-white/60 backdrop-blur-xl px-6 py-8 md:px-10 md:py-10 lg:px-12'}` : `${!isMichiganPage ? 'flex-1 min-h-0 overflow-hidden' : 'w-full'} bg-white p-0`}`}>
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
                      <div className="relative mb-2 mt-0 inline-block">
                        <img 
                          src={kathrynImage} 
                          alt="Kathryn Long, NP-C" 
                          className="w-28 h-28 rounded-full border-[3px] border-white object-cover shadow-lg" 
                        />
                        <div className="absolute bottom-1.5 right-1.5 bg-white rounded-full shadow-sm" style={{ padding: '1px' }}>
                          <BadgeCheck className="w-6 h-6 text-[#0095F6]" fill="currentColor" stroke="white" strokeWidth={1.5} />
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center mb-5">
                        <p className="text-base font-bold text-primary mb-2">Katie Long, NP-C</p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 font-sans">
                            Board Certified &bull; 20+ Years in Healthcare
                          </span>
                        </div>
                      </div>

                      {/* 1. Headline */}
                      <h3 className="font-display text-2xl text-primary mb-6 tracking-tight font-normal leading-tight px-2">
                        Feeling Off, and No One Can Explain It?
                      </h3>

                      {/* 2. Her Symptoms */}
                      <div className="w-full text-left mb-6 px-4">
                        <p className="text-sm font-bold text-primary mb-3">Does this sound like you?</p>
                        <ul className="space-y-2 mb-4">
                          {[
                            "Can't keep up with the kids the way you used to",
                            "Feeling completely exhausted by the time work is done",
                            "Look in the mirror and don't quite recognize yourself",
                            "Quietly avoiding photos",
                          ].map((item, idx) => (
                            <li key={idx} className="flex gap-2 items-start text-sm text-primary/80">
                              <span className="text-[#D4AF37] mt-0.5 font-bold shrink-0">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-primary/80 font-medium leading-relaxed">
                          If you're nodding, that's not in your head - and it's not your fault. Let's figure out what's actually going on.
                        </p>
                      </div>

                      {/* 6. Button */}
                      <div className="w-full mb-8 px-4">
                        <button
                          onClick={() => setStep(1)}
                          className="group relative w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-primary text-white rounded-2xl font-semibold font-sans shadow-xl shadow-primary/20 transition-all hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 border border-white/10 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                          <CalendarDays size={20} className="text-[#F0D060] relative z-10" />
                          <span className="text-[15px] tracking-wide relative z-10">Book Your Free 15-Min Discovery Call</span>
                        </button>
                      </div>

                      {/* Michigan specific bio block right below the button so the button stays high */}
                      {isMichiganPage && (
                        <div className="w-full text-left mb-8 px-4">
                          <div className="bg-primary/[0.03] rounded-2xl p-5 border border-primary/10">
                            <p className="text-sm text-primary/80 leading-relaxed font-sans italic">
                              As a Board-Certified Nurse Practitioner, I saw too many women being told their exhaustion was just a "normal" part of aging. I created this practice to look past the basic labs, uncover the root causes of your fatigue, and help you finally feel like yourself again.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* 5. Proof */}
                      <div className="w-full bg-white rounded-2xl p-6 text-left relative overflow-hidden min-h-[180px] flex items-center shadow-xl shadow-primary/5 border border-primary/[0.08] mb-8">
                        <div className="absolute -top-6 -left-2 text-8xl text-primary/[0.03] font-serif leading-none">"</div>
                        <div 
                          key={reviewIndex} 
                          className="spa-animate-in relative z-10 w-full"
                          style={{ animation: 'spa-fade-up 0.5s ease-out forwards' }}
                        >
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

              {/* Cal.com Embed - always mounted at full size; opacity-only transition eliminates flicker */}
              <div 
                className={`transition-opacity duration-300 ${
                  step >= 1
                    ? `relative z-10 w-full opacity-100 ${!isMichiganPage ? 'flex-1 min-h-0 flex flex-col' : ''}`
                    : 'absolute inset-0 z-0 opacity-0 pointer-events-none'
                }`}
              >
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/anAnbnSPBviBP5NziJy0" 
                  style={{ width: "100%", border: "none", overflow: "hidden", height: "100%" }} 
                  scrolling="no" 
                  id="anAnbnSPBviBP5NziJy0_1782397016762"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
