import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useBookingModal } from "@/components/BookingModalContext";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing  Novaleo Weight & Wellness" },
      {
        name: "description",
        content:
          "Root Cause Discovery Call, Root Cause Lab Panel, Executive Longevity Partnership, and follow-up care  functional medicine telehealth for women in MI & WI.",
      },
      { property: "og:title", content: "Services | Novaleo Weight & Wellness" },
      {
        property: "og:description",
        content: "Personalized functional medicine programs with Kathryn Long, NP-C.",
      },
    ],
  }),
  component: Services,
});

const programs = [
  {
    name: "Root Cause Discovery Call",
    tag: "Start here · FREE",
    price: "15 minutes",
    desc: "A short no-cost consult  a space to ask questions, get clarity, and determine your next step. For new and current clients alike.",
    bullets: [
      "Support in deciding which service is right for you",
      "Clarity before you book your intake or continue care",
      "Program guidance and next steps",
      "Answers to your questions",
    ],
    cta: "Book Discovery Call",
    note: "Or skip the discovery call and schedule the Root Cause Intake to start feeling like yourself again.",
  },
  {
    name: "Root Cause Lab Panel",
    tag: "Comprehensive baseline",
    price: "Written insights included",
    desc: "Novaleo's signature panel  trusted by our own providers  tests nutrients, inflammation, energy, and metabolism markers to uncover potential root causes and optimize your health. An excellent baseline panel.",
    bullets: [
      "Nutrients: Vitamin D, B12, Ferritin, Zinc, RBC Magnesium",
      "Full Thyroid: TSH, Free T3, Free T4, TPO antibodies",
      "Lipid panel: Total cholesterol, HDL, LDL, Triglycerides, Lp(a)",
      "Blood sugar: Fasting Glucose, HbA1c, Fasting Insulin",
      "Liver: Hepatic Function Panel, GGT",
      "Inflammation: hs-CRP, Homocysteine",
      "Labs ordered through Rupa · requires overnight fasting",
      "Results & practitioner insights in ~2 weeks",
    ],
    cta: "Order my lab panel",
    note: "Enroll in The Executive Longevity Partnership within 30 days and your lab panel investment is applied as credit toward the program.",
  },
  {
    name: "The Executive Longevity Partnership",
    tag: "Signature program · Limited to 4 clients",
    price: "6 months",
    desc: "An executive-level collaboration that enhances metabolic, hormonal, and cognitive performance for high-performing women in their 40s and 50s. Data-informed strategy, not another generic plan.",
    bullets: [
      "Bi-monthly consultations with your healthcare provider",
      "48-hour response time for inquiries",
      "Comprehensive biomarker analysis and metabolic tracking",
      "Provider-led strategy, nutrition guidance, and coaching support",
      "Monthly data reviews and strategy refinements",
      "Personalized supplement recommendations",
      "Renewal available with a 25% loyalty discount",
    ],
    cta: "Apply for the partnership",
    note: "Ideal for professionals, executives, entrepreneurs, and busy mothers seeking bespoke health strategy  not standard care.",
  },
  {
    name: "Active Client Program Follow-Up Visit",
    tag: "Enrolled clients only",
    price: "Included · 30–60 min",
    desc: "Focused follow-up to review progress, symptom changes, lab interpretation, treatment plan adjustments, and next-step root-cause strategy.",
    bullets: [
      "30 min  standard follow-up",
      "45 min  complex labs or supplement review",
      "60 min  comprehensive reassessment",
      "Supplement and nutrition review",
      "Treatment plan adjustments",
    ],
    cta: "Schedule follow-up",
  },
];

const objectives = [
  { t: "Resilience", d: "Faster recovery and sustainable performance under real-life demands." },
  { t: "Clarity", d: "Boost cognition, focus, and mental sharpness." },
  { t: "Longevity", d: "Move your biological and metabolic markers in the right direction." },
  { t: "Customization", d: "A personalized framework for enduring energy and resilience." },
];

function Services() {
  const { open: openBooking } = useBookingModal();

  return (
    <>
      <section className="container-prose pt-8 pb-12">
        <div className="eyebrow mb-5">Services & Pricing</div>
        <h1 className="text-5xl md:text-7xl max-w-3xl leading-[1.02]">
          Personalized care paths from <em className="text-secondary not-italic">free</em> to fully
          partnered.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Talk first, test deeply, or partner long-term. Every option is built around finding the
          root cause not chasing symptoms. Michigan and Wisconsin only.
        </p>
      </section>

      <section className="container-prose pb-24 grid md:grid-cols-2 gap-6">
        {programs.map((p) => (
          <article
            key={p.name}
            className="rounded-2xl bg-card border border-border p-8 flex flex-col"
          >
            <div>
              <div className="eyebrow mb-2">{p.tag}</div>
              <h2 className="text-3xl leading-tight">{p.name}</h2>
            </div>
            <div className="mt-4 text-xl font-display text-primary">{p.price}</div>
            <p className="mt-4 text-foreground/80 leading-relaxed">{p.desc}</p>
            <ul className="mt-6 space-y-3 flex-1">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary/50 text-primary shrink-0">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {p.note && (
              <p className="mt-6 text-xs italic text-muted-foreground border-l-2 border-secondary pl-3">
                {p.note}
              </p>
            )}
            {p.cta === "Book Discovery Call" ? (
              <button onClick={openBooking} className="btn-gold mt-8 self-start text-sm">
                {p.cta}
              </button>
            ) : (
              <Link to="/contact" className="btn-gold mt-8 self-start text-sm">
                {p.cta}
              </Link>
            )}
          </article>
        ))}
      </section>

      {/* PROGRAM SPOTLIGHT */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow text-secondary mb-3" style={{ opacity: 1 }}>
              Program spotlight
            </div>
            <h2 className="text-4xl md:text-5xl text-primary-foreground leading-tight">
              The Executive Longevity Partnership.
            </h2>
            <p className="mt-5 text-primary-foreground/75 leading-relaxed">
              A six-month executive-level collaboration for high-performing women who are tired of
              feeling foggy, fatigued, bloated, hormonally off, or metabolically stuck and want a
              deeper, data-informed strategy instead of another generic plan.
            </p>
            <p className="mt-5 text-primary-foreground/75 leading-relaxed">
              Intentionally limited to{" "}
              <span className="text-secondary font-semibold">four clients at a time</span> so each
              one receives the level of attention, review, and strategy required for true
              personalization.
            </p>
            <a href="https://www.optimantra.com/optimus/patient/patientaccess/practsNslots?pid=ZW1nazRycGdvZWxwQjA2eEpiOE5kQT09&lid=UlNxTzY0a0dyR1hJNGJsSkR2NDF5UT09&sid=dE11cnIweUNZVlh3TlFiaXVnVjJSdz09" target="_blank" rel="noopener noreferrer" className="btn-gold mt-8 inline-flex">
              Apply for the partnership
            </a>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {objectives.map((o) => (
              <div
                key={o.t}
                className="rounded-2xl bg-primary-foreground/[0.04] border border-primary-foreground/10 p-6"
              >
                <div className="h-1 w-8 bg-secondary rounded-full mb-4" />
                <h3 className="text-xl text-primary-foreground">{o.t}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75 leading-relaxed">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section className="container-prose py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Ideal for" title="Women who want strategy, not a script." />
          </div>
          <div className="lg:col-span-7 space-y-4">
            {[
              "Professionals, executives, and entrepreneurs",
              "Busy mothers balancing multiple roles",
              "Individuals seeking bespoke health strategy  not standard care",
              "Anyone tired of feeling foggy, fatigued, bloated, or metabolically stuck",
            ].map((p) => (
              <div
                key={p}
                className="flex gap-3 text-lg text-foreground/85 border-l-2 border-secondary pl-4"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 border-y border-border">
        <div className="container-prose py-20">
          <SectionHeading
            align="center"
            eyebrow="Not sure which fits?"
            title="That's exactly what the free Discovery Call is for."
            intro="A relaxed 15-minute conversation to help you decide what makes sense  even if it isn't with us. Michigan and Wisconsin only."
          />
          <div className="mt-8 flex justify-center">
            <button onClick={openBooking} className="btn-gold">
              Book Discovery Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
