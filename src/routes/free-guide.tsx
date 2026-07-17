import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";
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
      // Here you would typically send the lead to your CRM or webhook
      // e.g. fetch('YOUR_WEBHOOK_URL', { method: 'POST', body: JSON.stringify(formData) })
      setSubmitted(true);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="container-prose pt-12 pb-12 text-center">
        <div className="eyebrow mb-5">Free Functional Health Guide</div>
        <h1 className="text-4xl md:text-6xl max-w-4xl mx-auto leading-[1.05]">
          What Your Labs <em className="text-secondary not-italic">Aren't</em> Telling You
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A guide for women who keep being told their labs are normal but know something is wrong.
          Written by Katie Long, NP-C.
        </p>
      </section>

      {/* Main Content & Opt-In */}
      <section className="container-prose pb-24 grid lg:grid-cols-2 gap-12 items-start">
        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl sticky top-8">
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 text-secondary">
              <FileText className="h-8 w-8" />
            </div>
            
            {!submitted ? (
              <>
                <h2 className="text-3xl font-medium">Download Your Guide</h2>
                <p className="text-muted-foreground mt-3 mb-8">
                  Enter your name and email below to get instant access to the PDF guide and discover the root-cause tests that actually explain your symptoms.
                </p>
                <form onSubmit={handleSubmit} className="w-full space-y-4 text-left">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">First Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn-gold w-full flex justify-center items-center mt-6"
                  >
                    Send Me The Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <p className="text-[11px] text-muted-foreground text-center mt-3">
                    By requesting this guide, you agree to receive email communications from Novaleo Weight & Wellness. You can unsubscribe at any time.
                  </p>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center py-6 animate-in fade-in duration-500">
                <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">You're all set!</h3>
                <p className="text-muted-foreground mb-8">
                  Click the button below to download your copy of the guide.
                </p>
                <a 
                  href="/what-your-labs-arent-telling-you.pdf" 
                  download 
                  className="btn-gold w-full text-center flex justify-center items-center"
                >
                  Download PDF <FileText className="ml-2 h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        </div>
        
        <div className="space-y-12">
           <ul className="space-y-8">
            {[
              { 
                title: "The Explanation Gap", 
                desc: "Why your labs keep coming back 'normal' when you clearly are not, and why the standard reference ranges are failing you." 
              },
              { 
                title: "The 5 Missing Tests", 
                desc: "Discover the DUTCH test, GI-MAP, and metabolic profiles that finally make your experience legible." 
              },
              { 
                title: "Safety Before Strategy", 
                desc: "Why jumping straight into a strict protocol usually backfires, and the correct sequence to heal your body." 
              }
            ].map((feature, i) => (
              <li key={i} className="flex gap-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-secondary shrink-0 font-display text-2xl">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 mt-12">
            <h3 className="text-2xl font-display text-primary mb-6">About the Author</h3>
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <img 
                src={kathrynImage} 
                alt="Katie Long, NP-C" 
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div>
                <p className="text-lg font-semibold text-foreground">Katie Long, NP-C</p>
                <p className="text-sm font-medium text-secondary mb-3">Board-Certified Nurse Practitioner</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I didn't come into this work because wellness felt trendy. I came into it through the back door; sick, exhausted, and out of answers. After 15 years in nursing, my body had enough. Now, I support women who are exhausted from trying to figure it out on their own. I became the practitioner I wish I'd had.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
