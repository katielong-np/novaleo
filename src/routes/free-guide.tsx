import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, FileText } from "lucide-react";

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
  return (
    <>
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

      <section className="container-prose pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 text-secondary">
              <FileText className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-medium">Download Your Guide</h2>
            <p className="text-muted-foreground mt-3 mb-8">
              Get instant access to the PDF guide and discover the root-cause tests that actually explain your symptoms.
            </p>
            
            {/* If you have a GoHighLevel or Mailchimp form, embed it here. For now, providing direct download. */}
            <a 
              href="/what-your-labs-arent-telling-you.pdf" 
              download 
              className="btn-gold w-full text-center flex justify-center items-center"
            >
              Download PDF Directly <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            
            <p className="text-xs text-muted-foreground mt-6 text-balance">
              Note: The PDF file needs to be uploaded to the public folder as 'what-your-labs-arent-telling-you.pdf'. You can also replace this button with your LeadConnector opt-in form widget.
            </p>
          </div>
        </div>
        
        <div>
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
        </div>
      </section>
    </>
  );
}
