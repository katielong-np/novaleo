import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, FileText, CheckCircle2, ChevronRight, Activity, FlaskConical, ShieldAlert } from "lucide-react";
import { useState } from "react";
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
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-prose text-center px-4">
          <div className="inline-flex items-center rounded-full border border-secondary/50 bg-secondary/10 px-4 py-1.5 mb-8 shadow-sm backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="text-sm font-medium tracking-wide text-primary uppercase">
              Free Functional Health Guide
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display text-primary max-w-4xl mx-auto leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            What Your Labs <br className="hidden md:block" />
            <em className="text-secondary not-italic bg-gradient-to-r from-secondary to-gold bg-clip-text text-transparent">Aren't</em> Telling You
          </h1>
          
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            A guide for women who keep being told their labs are <span className="font-semibold italic text-primary">"normal"</span> but know deep down that something is wrong.
          </p>
        </div>
      </section>

      {/* Main Content & Opt-In */}
      <section className="relative z-10 container-prose pb-32 px-4 grid lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Form / Card */}
        <div className="lg:col-span-5 order-2 lg:order-1 relative group">
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-secondary/40 via-primary/20 to-gold/40 opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:duration-200" />
          
          <div className="relative bg-card/90 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 md:p-10 shadow-2xl sticky top-24 transition-all duration-500">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-secondary/20 transform -translate-y-4">
                <FileText className="h-10 w-10 text-secondary" strokeWidth={1.5} />
              </div>
              
              {!submitted ? (
                <div className="animate-in fade-in duration-500 w-full">
                  <h2 className="text-3xl font-display text-primary mb-4">Get Instant Access</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                    Enter your details below to download the PDF guide and discover the root-cause tests that actually explain your symptoms.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="w-full space-y-5 text-left">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-semibold text-primary uppercase tracking-wider ml-1">First Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-border/80 bg-background/50 px-4 py-3.5 text-base placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all shadow-sm"
                        placeholder="Jane"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-primary uppercase tracking-wider ml-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-border/80 bg-background/50 px-4 py-3.5 text-base placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all shadow-sm"
                        placeholder="jane@example.com"
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      className="group relative w-full flex items-center justify-center gap-2 py-4 px-6 bg-primary text-white rounded-xl font-semibold shadow-xl shadow-primary/20 transition-all hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 border border-white/10 overflow-hidden mt-8"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      <span className="relative z-10 tracking-wide text-[15px]">Send Me The Guide</span>
                      <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="text-[11px] text-muted-foreground/80 text-center mt-5 leading-tight px-2">
                      We respect your inbox. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="flex flex-col items-center py-8 animate-in zoom-in-95 duration-500">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 rounded-full" />
                    <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-display text-primary mb-3">You're all set!</h3>
                  <p className="text-muted-foreground mb-10 text-center px-4 leading-relaxed">
                    Your guide is ready. Click below to start reading.
                  </p>
                  <a 
                    href="/what-your-labs-arent-telling-you.pdf" 
                    download 
                    className="group relative w-full flex items-center justify-center gap-2 py-4 px-6 bg-secondary text-primary rounded-xl font-semibold shadow-xl shadow-secondary/30 transition-all hover:shadow-2xl hover:-translate-y-0.5 border border-white/20 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    <span className="relative z-10 tracking-wide text-[15px]">Download PDF</span>
                    <FileText className="relative z-10 h-5 w-5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Right Column: Copy & Bio */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center space-y-16">
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-10">What's inside the guide?</h2>
            
            <div className="space-y-10">
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
                <div key={i} className="flex gap-6 group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/30 to-background border border-secondary/20 text-primary shrink-0 shadow-sm transition-transform group-hover:scale-110 group-hover:shadow-md duration-300">
                    <feature.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-primary mb-2 group-hover:text-secondary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-border/60" />

          {/* Author Bio */}
          <div className="relative overflow-hidden bg-primary rounded-[2.5rem] p-10 border border-primary-foreground/10 text-primary-foreground shadow-2xl">
            <div className="absolute top-0 right-0 h-64 w-64 bg-gradient-to-bl from-secondary/20 to-transparent rounded-bl-full pointer-events-none" />
            
            <h3 className="text-sm font-semibold tracking-widest uppercase text-secondary mb-8">About the Author</h3>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start relative z-10">
              <div className="relative shrink-0 group">
                <div className="absolute inset-0 bg-secondary blur-md rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                <img 
                  src={kathrynImage} 
                  alt="Katie Long, NP-C" 
                  className="relative w-36 h-36 rounded-full object-cover border-4 border-background/20 shadow-xl"
                />
              </div>
              <div>
                <p className="text-3xl font-display mb-1">Katie Long, NP-C</p>
                <p className="text-sm font-semibold tracking-wide text-secondary/80 mb-5 uppercase">Board-Certified Nurse Practitioner</p>
                <p className="text-base text-primary-foreground/80 leading-relaxed font-light">
                  "I didn't come into this work because wellness felt trendy. I came into it through the back door; sick, exhausted, and out of answers. After 15 years in nursing, my body had enough. Now, I support women who are exhausted from trying to figure it out on their own. I became the practitioner I wish I'd had."
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
