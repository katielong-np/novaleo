import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, FileText, CheckCircle2, Star, Sparkles } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/novaleo-logo.webp";
import ebookMockup from '@/assets/ebook-mockup.jpg';

export const Route = createFileRoute("/free-guide")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://novaweightandwellness.com/free-guide" },
    ],
    meta: [
      { title: "Free Guide: What Your Labs Aren't Telling You | Novaleo" },
      {
        name: "description",
        content:
          "Download our free functional health guide for women who keep being told their labs are normal but know something is wrong.",
      },
    ],
  }),
  component: FreeGuide,
});

function FreeGuide() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative overflow-hidden bg-background min-h-screen flex flex-col justify-between">
      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes custom-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes custom-pulse-glow {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50% { opacity: 0.22; transform: scale(1.05); }
        }
        @keyframes shimmer-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-custom-float {
          animation: custom-float 7s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: custom-pulse-glow 6s ease-in-out infinite;
        }
        .shimmer-btn::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%);
        }
        .shimmer-btn:hover::after {
          animation: shimmer-slide 1.5s infinite;
        }
      `}</style>

      {/* Dynamic Background Art */}
      <div className="absolute top-[-10dvh] left-[-10dvw] h-[45dvh] w-[45dvw] rounded-full bg-secondary/15 blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-[-10dvh] right-[-10dvw] h-[40dvh] w-[40dvw] rounded-full bg-gold/10 blur-[110px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
      
      {/* Minimal Header with Logo */}
      <header className="relative z-10 w-full pt-8 px-6 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/">
          <img
            src={logo}
            alt="Novaleo Weight & Wellness"
            className="h-12 w-auto bg-white rounded-md px-3 py-1.5 shadow-sm border border-border/20"
          />
        </a>
      </header>

      {/* Main Grid Content */}
      <main className="relative z-10 flex-1 flex items-center">
        <section className="container-prose py-12 px-4 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Title, Description, and Opt-in Form */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-gold fill-gold" />
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                  Free Functional Health Guide
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display text-primary leading-[1.1] tracking-tight">
                What Your Labs <br />
                <em className="text-secondary not-italic bg-gradient-to-r from-secondary via-gold to-secondary bg-[length:200%_auto] bg-clip-text text-transparent">Aren't</em> Telling You
              </h1>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl font-light">
                A comprehensive clinical guide for women who keep being told their labs are <span className="font-semibold italic text-primary">"normal"</span> but still feel completely exhausted.
              </p>

              {/* Star Ratings */}
              <div className="flex items-center gap-2 pt-1 text-xs text-foreground/80">
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">5/5 rating</span>
                <span className="text-muted-foreground/40">•</span>
                <span className="text-muted-foreground">Trusted by 500+ Women</span>
              </div>
            </div>

            {/* Premium Form Box */}
            <div className="relative group max-w-xl">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-secondary/40 via-primary/10 to-gold/40 opacity-70 blur-xl transition-all duration-500 group-hover:opacity-85" />
              
              <div className="relative bg-card/90 backdrop-blur-xl border border-white/30 rounded-[2rem] p-7 md:p-8 shadow-xl">
                {!submitted ? (
                  <div className="animate-in fade-in duration-500 w-full space-y-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-display text-primary">Download Your Copy</h2>
                      <p className="text-muted-foreground mt-1 leading-relaxed text-xs">
                        Get instant access to the exact diagnostic steps and markers standard doctors miss.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label htmlFor="name" className="text-[10px] font-bold text-primary/80 uppercase tracking-widest ml-1">First Name</label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-lg border border-border/60 bg-background/55 px-3 py-2.5 text-xs placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-all shadow-inner focus:bg-background"
                            placeholder="Jane"
                          />
                        </div>
                        
                        <div className="space-y-1">
                          <label htmlFor="email" className="text-[10px] font-bold text-primary/80 uppercase tracking-widest ml-1">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full rounded-lg border border-border/60 bg-background/55 px-3 py-2.5 text-xs placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-all shadow-inner focus:bg-background"
                            placeholder="jane@example.com"
                          />
                        </div>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="shimmer-btn relative w-full flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white rounded-lg font-semibold shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 border border-white/10 overflow-hidden transition-all duration-300 mt-2"
                      >
                        <span className="relative z-10 tracking-wider text-sm font-sans">Download Free Guide</span>
                        <ArrowRight className="relative z-10 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="flex flex-col items-center py-4 animate-in zoom-in-95 duration-500 text-center">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 rounded-full animate-pulse" />
                      <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center shadow-lg border border-white/20">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-display text-primary mb-1">Check Your Download</h3>
                    <p className="text-muted-foreground mb-6 text-xs max-w-sm">
                      Thank you, {formData.name}! Your free guide is ready. Click below to download.
                    </p>
                    <a 
                      href="/what-your-labs-arent-telling-you.pdf" 
                      download 
                      className="shimmer-btn relative w-full flex items-center justify-center gap-2 py-3 px-6 bg-secondary text-primary rounded-lg font-semibold shadow-lg shadow-secondary/20 hover:shadow-xl hover:-translate-y-0.5 border border-white/20 overflow-hidden transition-all duration-300"
                    >
                      <span className="relative z-10 tracking-wider text-sm">Download PDF Guide</span>
                      <FileText className="relative z-10 h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Tablet Mock-up with Ambient Glow */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative group max-w-xs sm:max-w-sm animate-custom-float">
              {/* Backlight */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-secondary/40 via-gold/25 to-primary/10 blur-[40px] opacity-75 group-hover:opacity-95 transition-opacity duration-700" />
              
              <img 
                src={ebookMockup} 
                alt="What Your Labs Aren't Telling You Ebook Mockup" 
                className="relative rounded-2xl shadow-xl border border-white/20 object-contain transform transition-all duration-700 group-hover:scale-[1.02] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 w-full py-6 text-center text-[10px] text-muted-foreground/60">
        <p>© {new Date().getFullYear()} Novaleo Weight & Wellness. All rights reserved. | <a href="/privacy-policy" className="hover:underline">Privacy Policy</a></p>
      </footer>
    </div>
  );
}
