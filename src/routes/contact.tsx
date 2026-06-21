import { createFileRoute } from "@tanstack/react-router";
import { useBookingModal } from "@/components/BookingModalContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Free Discovery Call  Novaleo Weight & Wellness" },
      {
        name: "description",
        content:
          "Book a free 15-minute Google Meet discovery call with Kathryn Long, NP-C. Telehealth functional medicine for women in Michigan & Wisconsin.",
      },
      { property: "og:title", content: "Contact Novaleo Weight & Wellness" },
      {
        property: "og:description",
        content: "Free 15-minute discovery call. No cost, no commitment.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { open: openBooking } = useBookingModal();

  return (
    <>
      <section className="container-prose pt-8 pb-16">
        <div className="max-w-2xl">
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
            <button
              onClick={openBooking}
              className="btn-gold"
            >
              Book My $47 Clarity Session
            </button>
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
            ].map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-secondary">→</span>
                {p}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="eyebrow mb-1">Call or text</dt>
              <dd>
                <a href="tel:16168014648" className="text-primary hover:text-secondary font-medium">
                  1-616-801-4648
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Email</dt>
              <dd>
                <a
                  href="mailto:katie@novaweightandwellness.com"
                  className="text-primary hover:text-secondary font-medium"
                >
                  katie@novaweightandwellness.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Care areas</dt>
              <dd className="text-foreground/85">Telehealth across Michigan &amp; Wisconsin</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Hours</dt>
              <dd className="text-foreground/85">Monday – Friday · 7:00 AM – 6:00 PM</dd>
            </div>
          </dl>

          <p className="mt-8 text-xs text-muted-foreground italic">
            This is an informational, non-clinical conversation. No medical advice is given on this
            call.
          </p>
        </div>
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
