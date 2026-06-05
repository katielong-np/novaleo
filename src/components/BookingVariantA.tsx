import React, { useState, useEffect } from 'react';
import {
  MapPin,
  AlertCircle,
  ChevronLeft,
} from 'lucide-react';
import Cal, { getCalApi } from "@calcom/embed-react";

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
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [showIneligible, setShowIneligible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
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
        className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ animation: mounted ? 'spa-pulse-glow 6s ease-in-out infinite' : 'none' }}
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-white/10">
          <div
            className="h-full transition-all duration-700 ease-out"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #D4AF37, #F0D060, #D4AF37)',
              backgroundSize: '200% auto',
              animation: 'spa-shimmer 3s linear infinite',
            }}
          />
        </div>

        <div className="flex flex-col lg:flex-row min-h-[520px]">
          {/* Left decorative panel */}
          <div className={`relative lg:w-[42%] overflow-hidden bg-gradient-to-br from-primary via-[oklch(0.25_0.08_230)] to-[oklch(0.22_0.07_200)] px-8 py-10 lg:py-14 flex flex-col justify-center ${step >= 1 ? 'order-2 lg:order-1' : 'order-1'}`}>
            {/* Organic shapes */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-[0.06]"
              style={{
                background: 'radial-gradient(circle, rgba(212,175,55,0.8), transparent 70%)',
                animation: 'spa-float 16s ease-in-out infinite',
              }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-[0.05]"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)',
                animation: 'spa-float-2 20s ease-in-out infinite',
              }}
            />
            <div
              className="absolute top-1/2 right-0 w-32 h-32 rounded-full opacity-[0.04]"
              style={{
                background: 'radial-gradient(circle, rgba(212,175,55,0.6), transparent 70%)',
                animation: 'spa-float 14s ease-in-out infinite 3s',
              }}
            />
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.1] mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
                <span className="text-xs font-medium tracking-wider uppercase text-white/70 font-sans">
                  Complimentary · 15 min
                </span>
              </div>

              <h2 className="font-display text-3xl lg:text-4xl font-normal text-white/95 leading-[1.15] mb-5 tracking-tight">
                Your journey to{' '}
                <span
                  className="italic"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  wellness
                </span>{' '}
                starts here
              </h2>

              <p className="text-white/50 text-sm leading-relaxed max-w-xs font-sans">
                A private conversation about your health goals — no cost, no commitment, just clarity.
              </p>

              {/* Step indicators removed for Cal.com integration */}
            </div>
          </div>

          {/* Right booking form panel */}
          <div className={`flex-1 bg-white/60 backdrop-blur-xl relative overflow-hidden ${step === 0 ? 'px-6 py-8 md:px-10 md:py-10 lg:px-12' : 'p-0'} ${step >= 1 ? 'order-1 lg:order-2' : 'order-2'}`}>
            {/* Subtle glass texture */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.4) 100%)',
              }}
            />

            <div className="relative z-10 h-full">

              {/* STEP 0: State Gate */}
              {step === 0 && (
                <div className="spa-animate-in" style={{ opacity: 0 }}>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={16} className="text-primary/50" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 font-sans">
                      Before we begin
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-primary mb-2 tracking-tight font-normal">
                    Where are you located?
                  </h3>
                  <p className="text-sm text-primary/40 mb-6 font-sans">
                    We currently serve patients in Michigan and Wisconsin via telehealth.
                  </p>

                  {/* Quick select for MI & WI */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {allowedStates.map((state) => (
                      <button
                        key={state}
                        onClick={() => handleStateSelect(state)}
                        className={`group relative flex items-center gap-3 py-4 px-5 rounded-2xl border-2 transition-all duration-300 font-sans
                          ${selectedState === state && !showIneligible
                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                            : 'bg-white/70 border-primary/[0.06] hover:border-primary/20 hover:shadow-md hover:-translate-y-1 text-primary'}`}
                      >
                        <MapPin size={18} className={selectedState === state && !showIneligible ? 'text-secondary' : 'text-primary/30'} />
                        <span className="text-base font-medium">{state}</span>
                      </button>
                    ))}
                  </div>

                  {/* Dropdown for other states */}
                  <div className="relative mb-6">
                    <select
                      value={selectedState && !allowedStates.includes(selectedState) ? selectedState : ''}
                      onChange={(e) => {
                        if (e.target.value) handleStateSelect(e.target.value);
                      }}
                      className="w-full appearance-none px-4 py-3 bg-white/70 border border-primary/[0.06] rounded-xl text-sm text-primary/60 focus:outline-none focus:border-primary/20 transition-all cursor-pointer font-sans"
                    >
                      <option value="">I'm in a different state...</option>
                      {allStates.filter(s => !allowedStates.includes(s)).map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    <ChevronLeft size={16} className="absolute right-3 top-1/2 -translate-y-1/2 -rotate-90 text-primary/30 pointer-events-none" />
                  </div>

                  {/* Ineligible message */}
                  {showIneligible && (
                    <div className="spa-animate-in rounded-2xl bg-amber-50/80 border border-amber-200/60 p-5 mb-4" style={{ opacity: 0 }}>
                      <div className="flex items-start gap-3">
                        <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-amber-800 mb-1 font-sans">
                            We're not available in {selectedState} yet
                          </p>
                          <p className="text-xs text-amber-700/70 leading-relaxed font-sans">
                            Novaleo currently provides telehealth services exclusively in Michigan and Wisconsin. 
                            We're working on expanding — check back soon or{' '}
                            <a href="/contact" className="underline font-medium hover:text-amber-800 transition-colors">
                              contact us
                            </a>{' '}
                            to be notified when we're in your state.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Cal.com Embed - always mounted to preload, hidden until step >= 1 */}
              <div 
                className={`h-full min-h-[500px] w-full transition-opacity duration-500 ${
                  step >= 1 ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 -z-10 pointer-events-none'
                }`}
              >
                <Cal 
                  namespace="15min"
                  calLink="katie-long-np/15min"
                  style={{width:"100%",height:"100%",overflow:"scroll",borderRadius:"0px"}}
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
