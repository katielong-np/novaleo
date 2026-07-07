import { Link, createFileRoute } from "@tanstack/react-router";
import { useBookingModal } from "@/components/BookingModalContext";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://novaweightandwellness.com/contact" },
    ],
    meta: [
      { title: "Contact Novaleo Weight & Wellness | Book a Free Call" },
      {
        name: "description",
        content:
          "Book a free 15-minute Google Meet discovery call with Kathryn Long, NP-C. Telehealth functional medicine for women in Michigan & Wisconsin.",
      },
      { property: "og:title", content: "Contact Novaleo Weight & Wellness | Book a Free Call" },
      {
        property: "og:description",
        content: "Free 15-minute discovery call. No cost, no commitment. Telehealth functional medicine for women in Michigan & Wisconsin.",
      },
      { property: "og:url", content: "https://novaweightandwellness.com/contact" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image.webp" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Novaleo Weight & Wellness | Book a Free Call" },
      { name: "twitter:description", content: "Book a free 15-minute Google Meet discovery call with Kathryn Long, NP-C." },
      { name: "twitter:image", content: "https://novaweightandwellness.com/og-image.webp" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { open: openBooking } = useBookingModal();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ContactPage",
                "name": "Contact Novaleo Weight & Wellness",
                "description": "Book a free 15-minute discovery call.",
                "url": "https://novaweightandwellness.com/contact"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
              {
                "@type": "Question",
                "name": "How is this different from seeing my regular doctor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Conventional medicine is designed to diagnose and treat disease. Functional medicine is designed to find and fix the root cause before it becomes disease. Where your doctor may say 'everything is normal' — I look at patterns, connections, and the full picture of your hormones, metabolism, nutrition, stress, and sleep."
                }
              },
              {
                "@type": "Question",
                "name": "My labs always come back normal. Can you still help me?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely — this is the most common situation I see. 'Normal' ranges are based on averages, not optimal health. There's a big difference between 'not sick' and 'thriving.' Functional lab analysis identifies patterns that standard testing often misses."
                }
              },
              {
                "@type": "Question",
                "name": "What happens after the free discovery call?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You'll have a clear understanding of how my process works and whether it's the right fit for you. If you decide to move forward, the next step is the Root-Cause Intake & Clinical Strategy session at $97. Zero pressure — you decide what happens next."
                }
              },
              {
                "@type": "Question",
                "name": "What happens during the $97 Root-Cause Intake?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A comprehensive 60-minute clinical assessment where we go deep — full health history, current symptoms, lifestyle, nutrition, stress, sleep patterns, and any prior labs. You'll leave with clarity on what's driving your symptoms and a personalized starting plan."
                }
              },
              {
                "@type": "Question",
                "name": "I've tried everything. Why would this be any different?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Because most approaches treat symptoms — not causes. Functional medicine starts by asking why and works backwards from there. When you address the actual root cause, the results are sustainable instead of temporary."
                }
              },
              {
                "@type": "Question",
                "name": "Is the free call really free? What's the catch?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There is no catch. The 15-minute discovery call is completely free with no obligation to book anything after. I only work with clients I genuinely believe I can help."
                }
              },
              {
                "@type": "Question",
                "name": "Do you take insurance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, we take FSA/HSA, credit, and debit card only."
                }
              },
              {
                "@type": "Question",
                "name": "What is your refund policy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Due to the digital and service-based nature of our programs, consultations, educational materials, and wellness services, all sales are final and no refunds will be issued."
                }
              }
            ]
              }
            ]
          })
        }}
      />
      <section className="container-prose pt-8 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">Contact · No cost. No commitment.</div>
            <h1 className="text-5xl md:text-6xl leading-[1.05]">
              Book your free <em className="text-secondary not-italic">15-minute</em> discovery call.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Not sure if functional medicine is right for you? Let's talk. This call is designed to
              answer your questions not to sell you anything. A relaxed, judgment-free Google Meet
              conversation with Kathryn.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/free-15-min-call-with-katie" className="btn-gold">
                Book Free 15-Min Call
              </Link>
              <a
                href="https://www.optimantra.com/optimus/patient/patientaccess/practsNslots?sid=OFREc0ROeWQyL0kvdE9OaU5GRlVOQT09&pid=ZW1nazRycGdvZWxwQjA2eEpiOE5kQT09&lid=UlNxTzY0a0dyR1hJNGJsSkR2NDF5UT09"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Book $97 Root-Cause Intake
              </a>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-foreground/85">
              {[
                "Review your main health concerns and symptoms",
                "Discuss what you've tried and why it hasn't worked",
                "Learn how the functional medicine process works",
                "Understand what the initial evaluation includes",
                "Hear pricing and what to expect",
                "Decide together if this is the right fit",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary/50 text-primary shrink-0">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-border bg-card/60 p-8 shadow-sm h-full">
              <h2 className="text-2xl font-display text-primary mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Phone</h3>
                  <a href="tel:+116168014648" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    1-616-801-4648
                  </a>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Email</h3>
                  <a href="mailto:Katie@novaweightandwellness.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors break-all">
                    Katie@novaweightandwellness.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Location</h3>
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    1805 Leonard St NE<br />
                    Grand Rapids, MI 49505
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground italic">
                    Telehealth services available for all residents of Michigan and Wisconsin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground italic max-w-2xl">
          This is an informational, non-clinical conversation. No medical advice is given on this
          call.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/60 border-y border-border">
        <div className="container-prose py-20">
          <div className="eyebrow mb-4">Got questions? We've got answers.</div>
          <h2 className="text-4xl md:text-5xl max-w-2xl">Frequently asked questions.</h2>
          <div className="mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How is this different from seeing my regular doctor?",
                  a: "Conventional medicine is designed to diagnose and treat disease. Functional medicine is designed to find and fix the root cause before it becomes disease. Where your doctor may say 'everything is normal'  I look at patterns, connections, and the full picture of your hormones, metabolism, nutrition, stress, and sleep.",
                },
                {
                  q: "My labs always come back normal. Can you still help me?",
                  a: "Absolutely  this is the most common situation I see. 'Normal' ranges are based on averages, not optimal health. There's a big difference between 'not sick' and 'thriving.' Functional lab analysis identifies patterns that standard testing often misses.",
                },
                {
                  q: "What happens after the free discovery call?",
                  a: "You'll have a clear understanding of how my process works and whether it's the right fit for you. If you decide to move forward, the next step is the Root-Cause Intake & Clinical Strategy session at $97. Zero pressure  you decide what happens next.",
                },
                {
                  q: "What happens during the $97 Root-Cause Intake?",
                  a: "A comprehensive 60-minute clinical assessment where we go deep  full health history, current symptoms, lifestyle, nutrition, stress, sleep patterns, and any prior labs. You'll leave with clarity on what's driving your symptoms and a personalized starting plan.",
                },
                {
                  q: "I've tried everything. Why would this be any different?",
                  a: "Because most approaches treat symptoms  not causes. Functional medicine starts by asking why and works backwards from there. When you address the actual root cause, the results are sustainable instead of temporary.",
                },
                {
                  q: "Is the free call really free? What's the catch?",
                  a: "There is no catch. The 15-minute discovery call is completely free with no obligation to book anything after. I only work with clients I genuinely believe I can help.",
                },
                {
                  q: "Do you take insurance?",
                  a: "No, we take FSA/HSA, credit, and debit card only.",
                },
                {
                  q: "What is your refund policy?",
                  a: [
                    "Due to the digital and service-based nature of our programs, consultations, educational materials, and wellness services, all sales are final and no refunds will be issued.",
                    "By purchasing a service, digital product, consultation, or wellness program through Novaleo Weight & Wellness, you acknowledge and agree to this policy prior to checkout.",
                    "If you experience a technical issue accessing purchased materials, please contact us and we will make reasonable efforts to assist you.",
                    "Reservation deposits, completed consultations, digital downloads, personalized wellness plans, and services already rendered are nonrefundable.",
                  ],
                },
              ].map((f, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-display text-xl text-primary hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed text-sm space-y-3">
                    {Array.isArray(f.a) ? f.a.map((para, i) => <p key={i}>{para}</p>) : <p>{f.a}</p>}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
