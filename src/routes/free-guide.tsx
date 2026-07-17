import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, FileText, CheckCircle2, Star, Sparkles, Download } from "lucide-react";
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
    <div className="relative overflow-hidden bg-background min-h-screen flex flex-col justify-center">
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
      
      {/* Main Grid Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center min-h-screen">
        <section className="container-prose py-12 px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full max-w-7xl mx-auto">
          
          {/* Left Column: Title, Description, and Opt-in Form */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-10 animate-in fade-in slide-in-from-left duration-700">
            
            <div className="space-y-6">
              {/* Enlarged Logo */}
              <a href="/" className="inline-block mb-4">
                <img
                  src={logo}
                  alt="Novaleo Weight & Wellness"
                  className="h-16 md:h-20 w-auto"
                />
              </a>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-gold fill-gold" />
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                  Free Functional Health Guide
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display text-primary leading-[1.1] tracking-tight">
                What Your Labs <br />
                <em className="text-secondary not-italic bg-gradient-to-r from-secondary via-gold to-secondary bg-[length:200%_auto] bg-clip-text text-transparent">Aren't</em> Telling You
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-light">
                A comprehensive clinical guide for women who keep being told their labs are <span className="font-semibold italic text-primary">"normal"</span> but still feel completely exhausted.
              </p>

              {/* Star Ratings */}
              <div className="flex items-center gap-2 pt-2 text-sm text-foreground/80">
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">5/5 rating</span>
                <span className="text-muted-foreground/40">•</span>
                <span className="text-muted-foreground">Trusted by 500+ Women</span>
              </div>
            </div>

            {/* Seamless Inline Form (No Bulky Card) */}
            <div className="max-w-2xl w-full pt-4">
              {!submitted ? (
                <div className="animate-in fade-in duration-500 w-full space-y-4">
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
                    <div className="flex-1 w-full relative">
                       <input
                         type="text"
                         id="name"
                         required
                         value={formData.name}
                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                         className="w-full rounded-full border border-border/80 bg-background/80 px-6 py-4 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all shadow-sm backdrop-blur-md"
                         placeholder="First Name"
                       />
                    </div>
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
                  <p className="text-[10px] text-muted-foreground/60 ml-2 mt-2 font-medium">Your information is secure and will never be shared.</p>
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
                        Thank you, {formData.name}. Click below to access your guide.
                      </p>
                    </div>
                  </div>
                  
                  <a 
                    href="/what-your-labs-arent-telling-you.pdf" 
                    download 
                    className="shimmer-btn relative inline-flex items-center justify-center gap-2 py-3.5 px-8 bg-secondary text-primary rounded-full font-semibold shadow-lg shadow-secondary/20 hover:shadow-xl hover:-translate-y-0.5 border border-white/20 overflow-hidden transition-all duration-300"
                  >
                    <span className="relative z-10 tracking-wider text-sm">Download PDF Guide</span>
                    <Download className="relative z-10 h-4 w-4" />
                  </a>
                </div>
              )}
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
      </main>
    </div>
  );
}
