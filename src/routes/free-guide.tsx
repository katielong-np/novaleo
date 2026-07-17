import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, FileText, CheckCircle2, ChevronRight, Activity, FlaskConical, ShieldAlert } from "lucide-react";
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
    <div className="relative overflow-hidden bg-background">
      {/* Decorative blurred blobs */}
      <div className="absolute top-[-10%] left-[-10%] h-96 w-96 rounded-full bg-secondary/30 blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-5%] h-80 w-80 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      
      {/* Main Grid Content */}
      <section className="relative z-10 container-prose pt-16 pb-24 px-4 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Title, Description, and Opt-in Form */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div>
            <div className="inline-flex items-center rounded-full border border-secondary/50 bg-secondary/10 px-4 py-1.5 mb-6 shadow-sm backdrop-blur-sm">
              <span className="text-sm font-medium tracking-wide text-primary uppercase">
                Free Functional Health Guide
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display text-primary leading-[1.1] tracking-tight">
              What Your Labs <br className="hidden md:block" />
              <em className="text-secondary not-italic bg-gradient-to-r from-secondary to-gold bg-clip-text text-transparent">Aren't</em> Telling You
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              A guide for women who keep being told their labs are <span className="font-semibold italic text-primary">"normal"</span> but know deep down that something is wrong. Written by Katie Long, NP-C.
            </p>
          </div>

          {/* Premium Form Box */}
          <div className="relative group max-w-xl">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-secondary/30 via-primary/10 to-gold/30 opacity-70 blur-lg transition-all duration-500 group-hover:opacity-100" />
            
            <div className="relative bg-card/90 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 shadow-xl">
              {!submitted ? (
                <div className="animate-in fade-in duration-500 w-full">
                  <h2 className="text-2xl font-display text-primary mb-3">Download Your Copy</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    Enter your name and email below to download the PDF guide and discover the root-cause tests that actually explain your symptoms.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-xs font-semibold text-primary uppercase tracking-wider ml-1">First Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-border/80 bg-background/50 px-4 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all shadow-sm"
                          placeholder="Jane"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-xs font-semibold text-primary uppercase tracking-wider ml-1">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-border/80 bg-background/50 px-4 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all shadow-sm"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="group relative w-full flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white rounded-xl font-semibold shadow-xl shadow-primary/20 transition-all hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 border border-white/10 overflow-hidden mt-4"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      <span className="relative z-10 tracking-wide text-sm">Download</span>
                      <ArrowRight className="relative z-10 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="text-[10px] text-muted-foreground/85 text-center mt-3">
                      We respect your privacy. Opt-out at any time.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="flex flex-col items-center py-4 animate-in zoom-in-95 duration-500 text-center">
                  <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3 shadow-inner">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-display text-primary mb-2">Ready for Download</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Your PDF guide is prepared. Click the button below to start your download.
                  </p>
                  <a 
                    href="/what-your-labs-arent-telling-you.pdf" 
                    download 
                    className="group relative w-full flex items-center justify-center gap-2 py-3 px-6 bg-secondary text-primary rounded-xl font-semibold shadow-xl shadow-secondary/30 transition-all hover:shadow-2xl hover:-translate-y-0.5 border border-white/20 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    <span className="relative z-10 tracking-wide text-sm">Download PDF</span>
                    <FileText className="relative z-10 h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: 3D Ebook Mock-up */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 animate-in fade-in slide-in-from-right duration-700 delay-200">
          <div className="relative group max-w-sm sm:max-w-md">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-secondary/30 via-transparent to-gold/30 opacity-70 blur-xl group-hover:opacity-90 transition-opacity duration-500" />
            <img 
              src={ebookMockup} 
              alt="What Your Labs Aren't Telling You Ebook Mockup" 
              className="relative rounded-3xl shadow-2xl border border-white/10 object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Benefits and Author Details */}
      <section className="relative z-10 container-prose pb-32 px-4 grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 space-y-12">
          <h2 className="text-3xl md:text-4xl font-display text-primary">What's inside the guide?</h2>
          
          <div className="space-y-8">
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
              <div key={i} className="flex gap-5 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/30 to-background border border-secondary/20 text-primary shrink-0 shadow-sm transition-transform group-hover:scale-105 duration-300">
                  <feature.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-display text-primary mb-1 group-hover:text-secondary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          {/* Author Bio */}
          <div className="relative overflow-hidden bg-primary rounded-[2rem] p-8 border border-primary-foreground/10 text-primary-foreground shadow-2xl">
            <div className="absolute top-0 right-0 h-48 w-48 bg-gradient-to-bl from-secondary/20 to-transparent rounded-bl-full pointer-events-none" />
            
            <h3 className="text-xs font-semibold tracking-widest uppercase text-secondary mb-6">About the Author</h3>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
              <img 
                src={kathrynImage} 
                alt="Katie Long, NP-C" 
                className="w-24 h-24 rounded-full object-cover border-2 border-background/20 shadow-lg shrink-0"
              />
              <div>
                <p className="text-2xl font-display mb-1">Katie Long, NP-C</p>
                <p className="text-xs font-semibold tracking-wide text-secondary/80 mb-3 uppercase">NP-C</p>
                <p className="text-xs text-primary-foreground/80 leading-relaxed font-light">
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
