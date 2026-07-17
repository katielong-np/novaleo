import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, FileText, CheckCircle2, ChevronRight, Activity, FlaskConical, ShieldAlert, Star, Sparkles } from "lucide-react";
import { useState } from "react";
import kathrynImage from '@/assets/hero-kathryn.webp';
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
    <div className="relative overflow-hidden bg-background min-h-screen">
      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes custom-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1.5deg); }
        }
        @keyframes custom-pulse-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.28; transform: scale(1.08); }
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
      <div className="absolute top-[-15dvh] left-[-15dvw] h-[55dvh] w-[55dvw] rounded-full bg-secondary/20 blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '0s' }} />
      <div className="absolute top-[35dvh] right-[-10dvw] h-[45dvh] w-[45dvw] rounded-full bg-gold/15 blur-[135px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
      <div className="absolute bottom-[-10dvh] left-[20dvw] h-[40dvh] w-[40dvw] rounded-full bg-primary/10 blur-[110px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.2s' }} />
      
      {/* Main Grid Content */}
      <section className="relative z-10 container-prose pt-20 pb-28 px-4 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Title, Description, and Opt-in Form */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-10 animate-in fade-in slide-in-from-left duration-700">
          <div className="space-y-6">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2 shadow-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-gold fill-gold" />
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                Free Functional Health Guide
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display text-primary leading-[1.05] tracking-tight">
              What Your Labs <br />
              <em className="text-secondary not-italic bg-gradient-to-r from-secondary via-gold to-secondary bg-[length:200%_auto] bg-clip-text text-transparent">Aren't</em> Telling You
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-light">
              A comprehensive clinical guide for women who keep being told their labs are <span className="font-semibold italic text-primary">"normal"</span> but still feel completely exhausted.
            </p>

            {/* Micro star ratings banner */}
            <div className="flex items-center gap-2 pt-2 text-sm text-foreground/80">
              <div className="flex gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-medium">5/5 rating</span>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-muted-foreground">Trusted by 500+ Michigan & Wisconsin Women</span>
            </div>
          </div>

          {/* Premium Form Box */}
          <div className="relative group max-w-xl">
            {/* Flowing ambient border behind the form */}
            <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-br from-secondary/50 via-primary/20 to-gold/50 opacity-80 blur-2xl transition-all duration-700 group-hover:opacity-100 group-hover:blur-3xl" />
            
            <div className="relative bg-card/85 backdrop-blur-2xl border border-white/40 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
              {!submitted ? (
                <div className="animate-in fade-in duration-500 w-full space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display text-primary">Download Your Copy</h2>
                    <p className="text-muted-foreground mt-2 leading-relaxed text-sm">
                      Get instant access to the exact diagnostic steps and markers standard doctors miss.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-bold text-primary/80 uppercase tracking-widest ml-1">First Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-border/60 bg-background/45 px-4 py-3 text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all shadow-inner focus:bg-background"
                          placeholder="Jane"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-primary/80 uppercase tracking-widest ml-1">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-border/60 bg-background/45 px-4 py-3 text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all shadow-inner focus:bg-background"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="shimmer-btn relative w-full flex items-center justify-center gap-2 py-4 px-6 bg-primary text-white rounded-xl font-semibold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 border border-white/10 overflow-hidden transition-all duration-300 mt-6"
                    >
                      <span className="relative z-10 tracking-wider text-base font-sans">Download Free Guide</span>
                      <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    
                    <p className="text-[10px] text-muted-foreground/70 text-center mt-3">
                      🔒 Your data is fully encrypted and will never be shared.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="flex flex-col items-center py-6 animate-in zoom-in-95 duration-500 text-center">
                  <div className="relative mb-5">
                    <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 rounded-full animate-pulse" />
                    <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center shadow-lg border border-white/20">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-display text-primary mb-2">Check Your Download</h3>
                  <p className="text-muted-foreground mb-8 text-sm max-w-sm">
                    Thank you, {formData.name}! Your free guide is ready. Click below to download the PDF.
                  </p>
                  <a 
                    href="/what-your-labs-arent-telling-you.pdf" 
                    download 
                    className="shimmer-btn relative w-full flex items-center justify-center gap-2 py-4 px-6 bg-secondary text-primary rounded-xl font-semibold shadow-xl shadow-secondary/30 hover:shadow-2xl hover:-translate-y-0.5 border border-white/20 overflow-hidden transition-all duration-300"
                  >
                    <span className="relative z-10 tracking-wider text-base">Download PDF Guide</span>
                    <FileText className="relative z-10 h-5 w-5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: 3D Ebook Mock-up with Ambient Backlighting */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 animate-in fade-in slide-in-from-right duration-700 delay-200">
          <div className="relative group max-w-sm sm:max-w-md animate-custom-float">
            {/* Radiant gold glow behind the tablet */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-secondary/50 via-gold/30 to-primary/20 blur-[60px] opacity-75 group-hover:opacity-100 transition-opacity duration-700" />
            
            <img 
              src={ebookMockup} 
              alt="What Your Labs Aren't Telling You Ebook Mockup" 
              className="relative rounded-3xl shadow-2xl border border-white/20 object-contain transform transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-1 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </section>

      {/* Benefits and Author Details */}
      <section className="relative z-10 container-prose pb-36 px-4 grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">What you'll uncover</span>
            <h2 className="text-4xl md:text-5xl font-display text-primary leading-tight">Key Insights & Takeaways</h2>
          </div>
          
          <div className="grid gap-6">
            {[
              { 
                icon: Activity,
                title: "The Explanation Gap", 
                desc: "Why your labs keep coming back 'normal' when you clearly are not, and why the standard reference ranges are failing you." 
              },
              { 
                icon: FlaskConical,
                title: "The 5 Missing Tests", 
                desc: "Discover the DUTCH test, GI-MAP, and metabolic profiles that finally make your experience legible." 
              },
              { 
                icon: ShieldAlert,
                title: "Safety Before Strategy", 
                desc: "Why jumping straight into a strict protocol usually backfires, and the correct sequence to heal your body safely." 
              }
            ].map((feature, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-md hover:border-secondary/40 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/30 to-background border border-secondary/20 text-primary shrink-0 shadow-inner group-hover:scale-110 group-hover:bg-secondary/40 transition-all duration-300">
                  <feature.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-display text-primary mb-2 group-hover:text-secondary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          {/* Author Bio */}
          <div className="relative overflow-hidden bg-primary rounded-[2.5rem] p-10 border border-primary-foreground/10 text-primary-foreground shadow-2xl">
            <div className="absolute top-0 right-0 h-64 w-64 bg-gradient-to-bl from-secondary/20 to-transparent rounded-bl-full pointer-events-none" />
            
            <h3 className="text-xs font-bold tracking-widest uppercase text-secondary mb-8">About the Author</h3>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start relative z-10">
              <img 
                src={kathrynImage} 
                alt="Katie Long, NP-C" 
                className="w-28 h-28 rounded-full object-cover border-4 border-background/20 shadow-xl shrink-0"
              />
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-display leading-none mb-1">Katie Long, NP-C</p>
                  <p className="text-xs font-semibold tracking-wider text-secondary/90 uppercase font-sans">Board-Certified Nurse Practitioner</p>
                </div>
                <p className="text-sm text-primary-foreground/80 leading-relaxed font-light italic">
                  "I didn't come into this work because wellness felt trendy. I came into it through the back door; sick, exhausted, and out of answers. After 15 years in nursing, my body had enough. I became the practitioner I wish I'd had."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
