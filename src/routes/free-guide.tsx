import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, FileText, CheckCircle2, Star, Sparkles, Download, AlertCircle, Microscope, ShieldCheck, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/novaleo-logo.webp";
import ebookMockup from '@/assets/ebook-mockup.jpg';
import kathrynImage from '@/assets/hero-kathryn.webp';

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
  const [formData, setFormData] = useState({ email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative overflow-hidden bg-background min-h-screen flex flex-col">
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
      
      {/* Main Grid Content - Hero */}
      <main className="relative z-10 w-full pt-16 lg:pt-24 pb-12">
        <section className="container-prose px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full max-w-7xl mx-auto">
          
          {/* Left Column: Title, Description, and Opt-in Form */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-in fade-in slide-in-from-left duration-700">
            
            <div className="space-y-6">
              {/* Enlarged Logo */}
              <a href="/" className="inline-block mb-2">
                <img
                  src={logo}
                  alt="Novaleo Weight & Wellness"
                  className="h-16 md:h-20 w-auto"
                />
              </a>

              <h1 className="text-5xl md:text-7xl font-display text-primary leading-[1.1] tracking-tight">
                What Your Labs <br />
                <em className="text-secondary not-italic bg-gradient-to-r from-secondary via-gold to-secondary bg-[length:200%_auto] bg-clip-text text-transparent">Aren't</em> Telling You
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-light">
                A comprehensive clinical guide for women who keep being told their labs are <span className="font-semibold italic text-primary">"normal"</span> but still feel completely exhausted.
              </p>

              {/* Star Ratings & Form Container - Tightly Coupled */}
              <div className="pt-2 space-y-4">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="flex gap-0.5 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">5/5 rating</span>
                  <span className="text-muted-foreground/40">•</span>
                  <span className="text-muted-foreground">Trusted by 500+ Women</span>
                </div>

                {/* Seamless Inline Form */}
                <div className="max-w-lg w-full">
                  {!submitted ? (
                    <div className="animate-in fade-in duration-500 w-full space-y-3">
                      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
                        <div className="flex-1 w-full relative">
                           <input
                             type="email"
                             id="email"
                             required
                             value={formData.email}
                             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                             className="w-full rounded-full border border-border/80 bg-background/80 px-6 py-4 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all shadow-sm backdrop-blur-md"
                             placeholder="Email Address"
                           />
                        </div>
                        
                        <button 
                          type="submit" 
                          className="shimmer-btn relative w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-8 bg-primary text-white rounded-full font-semibold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 border border-white/10 overflow-hidden transition-all duration-300 group"
                        >
                          <span className="relative z-10 tracking-wider text-sm font-sans whitespace-nowrap">Download</span>
                          <Download className="relative z-10 h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
                        </button>
                      </form>
                      <p className="text-[10px] text-muted-foreground/60 ml-3 font-medium">Your information is secure and will never be shared.</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-start py-2 animate-in slide-in-from-bottom-4 fade-in duration-500">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-green-500 blur-md opacity-30 rounded-full animate-pulse" />
                          <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center shadow-lg border border-white/20">
                            <CheckCircle2 className="h-5 w-5" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-display text-primary">Success!</h3>
                          <p className="text-muted-foreground text-sm">
                            Thank you! Click below to access your guide.
                          </p>
                        </div>
                      </div>
                      
                      <a 
                        href="/what-your-labs-arent-telling-you.pdf" 
                        download 
                        className="shimmer-btn relative inline-flex items-center justify-center gap-2 py-4 px-8 bg-primary text-white rounded-full font-semibold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 border border-white/10 overflow-hidden transition-all duration-300 group"
                      >
                        <span className="relative z-10 tracking-wider text-sm font-sans whitespace-nowrap">Download PDF Guide</span>
                        <Download className="relative z-10 h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Book Mock-up with Ambient Glow */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative group max-w-xs sm:max-w-md animate-custom-float">
              {/* Backlight */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-secondary/40 via-gold/25 to-primary/10 blur-[60px] opacity-75 group-hover:opacity-100 transition-opacity duration-700" />
              
              <img 
                src={ebookMockup} 
                alt="What Your Labs Aren't Telling You Ebook Mockup" 
                className="relative rounded-2xl shadow-2xl border border-white/10 object-contain transform transition-all duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce items-center justify-center text-muted-foreground/40">
          <ChevronDown className="h-8 w-8" />
        </div>
      </main>

      {/* Information Sections */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <h2 className="text-3xl md:text-5xl font-display text-primary tracking-tight">
            Inside the <span className="text-secondary italic">Guide</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto font-light">
            Discover why your symptoms are real and what you can do about them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <div className="h-12 w-12 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 text-secondary border border-secondary/30 group-hover:scale-110 transition-transform">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-display text-primary mb-3">What Conventional Labs Miss</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Standard bloodwork is designed to ask "Are you sick yet?" It often misses the slow drift of an imbalanced system—the years where you aren't sick, but aren't well either.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <div className="h-12 w-12 rounded-2xl bg-gold/20 flex items-center justify-center mb-6 text-gold border border-gold/30 group-hover:scale-110 transition-transform">
              <Microscope className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-display text-primary mb-3">A Different Category of Testing</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Functional medicine looks at your body as a single interconnected system. We use advanced testing like the DUTCH test and GI-MAP to uncover hidden dysfunction.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <div className="h-12 w-12 rounded-2xl bg-gold/20 flex items-center justify-center mb-6 text-gold border border-gold/30 group-hover:scale-110 transition-transform">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-display text-primary mb-3">Safety Before Strategy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your body cannot heal in a state of physiological alarm. Learn why stabilizing your nervous system and blood sugar must happen before any deep healing work.
            </p>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 md:py-20 mb-12">
        <div className="relative rounded-[2.5rem] bg-card/60 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background/50 to-gold/10 pointer-events-none" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="order-2 md:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                  Meet Your Guide
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-primary leading-tight">
                Hi, I'm Katie L, FNP-C.
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  I didn't come into this work because wellness felt trendy. I came into it through the back door; sick, exhausted, and out of answers.
                </p>
                <p>
                  In my early 30s, I was running at full speed in the wrong direction. Fifteen years in nursing, navigating a broken medical system. I kept performing capable and fine on the outside while my body absorbed all of it.
                </p>
                <p>
                  I became the practitioner I wish I'd had. Now, I support women who are exhausted from trying to figure it out on their own. You don't need to heal in isolation.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-secondary/40 to-gold/30 blur-[40px] opacity-60" />
                <img 
                  src={kathrynImage} 
                  alt="Katie L, FNP-C" 
                  className="relative h-64 w-64 md:h-80 md:w-80 object-cover rounded-[2rem] border-[6px] border-white/50 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
