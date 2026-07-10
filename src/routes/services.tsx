import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://novaweightandwellness.com/services" },
    ],
    meta: [
      { title: "Book a Visit | Novaleo Weight & Wellness Services" },
      {
        name: "description",
        content:
          "Schedule your visit with Novaleo Weight & Wellness. Choose a Discovery Call, Root Cause Intake, Lab Panel, Follow-up, or the Root Cause Restoration Program.",
      },
      { property: "og:title", content: "Book a Visit | Novaleo Weight & Wellness" },
      {
        property: "og:description",
        content: "Choose a Discovery Call, Root Cause Intake, Lab Panel, or Executive Partnership and book online.",
      },
      { property: "og:url", content: "https://novaweightandwellness.com/services" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image.webp" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Book a Visit | Novaleo Weight & Wellness Services" },
      { name: "twitter:description", content: "Choose a Discovery Call, Root Cause Intake, Lab Panel, or Executive Partnership and book online." },
      { name: "twitter:image", content: "https://novaweightandwellness.com/og-image.webp" },
    ],
  }),
  component: SchedulerPage,
});

type Service = {
  id: string;
  name: string;
  duration: string;
  price: string;
  highlight?: string;
  description: React.ReactNode;
  bookUrl: string;
};

const BOOK_BASE =
  "https://www.optimantra.com/optimus/patient/patientaccess/practsNslots?pid=ZW1nazRycGdvZWxwQjA2eEpiOE5kQT09&lid=UlNxTzY0a0dyR1hJNGJsSkR2NDF5UT09&sid=";

const services: Service[] = [
  {
    id: "discovery",
    name: "Root Cause Discovery Call",
    duration: "15 Min",
    price: "Free",
    highlight: "Start here",
    description: (
      <>
        <p>
          A short no-cost consult a space to ask questions, get clarity, and determine your next
          step, whether you're a new or current client.
        </p>
        <p className="mt-3 font-medium text-foreground">What's included:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Support in deciding which service is right for you</li>
          <li>Clarity before you book your intake or continue care</li>
          <li>Program guidance and next steps</li>
          <li>Answers to your questions</li>
        </ul>
        <p className="mt-3 italic">
          Or skip the Discovery Call and schedule the Root Cause Intake to start feeling like
          yourself again.
        </p>
      </>
    ),
    bookUrl: BOOK_BASE + "WER4b0E4SngvZFdtcTdsd1NYek8xZz09",
  },
  {
    id: "intake",
    name: "Root Cause Intake | 60-Minute Clarity Session",
    duration: "60 Min",
    price: "$97",
    highlight: "Most booked",
    description: (
      <>
        <p>
          A comprehensive clinical assessment where we go deep full health history, current
          symptoms, lifestyle, nutrition, stress, sleep patterns, and any prior labs. You'll leave
          with clarity on what's driving your symptoms and a personalized starting plan.
        </p>
      </>
    ),
    bookUrl: BOOK_BASE + "OFREc0ROeWQyL0kvdE9OaU5GRlVOQT09",
  },
  {
    id: "lab-panel",
    name: "Root Cause Lab Panel",
    duration: "10 Min",
    price: "$454",
    description: (
      <>
        <p>Includes written insights on your results. Novaleo's signature panel.</p>
        <p className="mt-3 font-medium text-foreground">Markers tested:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Nutrients: Vitamin D, B12, Ferritin, Zinc, RBC Magnesium</li>
          <li>Full Thyroid: TSH, Free T3, Free T4, TPO Antibodies</li>
          <li>Lipid panel & Lipoprotein(a)</li>
          <li>Blood sugar: Fasting Glucose, HbA1c, Fasting Insulin</li>
          <li>Liver: Hepatic Function Panel, GGT</li>
          <li>Inflammation: hs-CRP, Homocysteine</li>
        </ul>
        <p className="mt-3 text-xs italic">
          Labs ordered through Rupa. Requires overnight fasting. Results typically ready ~2 weeks
          post-draw. Credit toward The Root Cause Restoration Program if enrolled within 30 days.
        </p>
      </>
    ),
    bookUrl: BOOK_BASE + "NnN1aEdEajVUdWpIZTZObUZPN1dNUT09",
  },
  {
    id: "executive",
    name: "The Root Cause Restoration Program",
    duration: "6-Month Program",
    price: "$3,995",
    highlight: "No More Starting Over",
    description: (
      <>
        <p>
          For women 35 to 55 who feel like their body has changed. Tired even after sleep. Foggy
          at work. Dealing with hormone shifts, cravings or crashes, and stubborn weight that
          won't budge. You keep getting told your labs are "normal," and you're left frustrated,
          wondering why you can't figure it out.
        </p>
        <p className="mt-3">
          This 6-month program replaces guessing with clarity. We look at the full picture, your
          symptoms, patterns, and deeper root causes, then build a personalized plan that helps
          your body restore steady energy, reduce inflammation, and get your metabolism responding
          again. The goal isn't perfection. It's understanding your body and never "starting over
          every Monday" again.
        </p>
        <p className="mt-3 font-medium text-foreground">Your care plan focuses on 4 non-negotiables:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Nutrition + blood sugar stability (steady energy, fewer crashes, calmer cravings)</li>
          <li>Sleep + circadian rhythm (better sleep, clearer thinking, easier mornings)</li>
          <li>Stress + nervous system regulation (less wired-and-tired, more calm and steady)</li>
          <li>Movement + metabolic strength (strength and insulin sensitivity without punishing workouts)</li>
        </ul>
        <p className="mt-3 font-medium text-foreground">Includes:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Bi-monthly consultations with a healthcare provider</li>
          <li>48-hour response time for inquiries</li>
          <li>Comprehensive biomarker analysis and metabolic tracking</li>
          <li>Monthly data reviews and strategy refinements</li>
          <li>Supplement recommendations and nutrition guidance</li>
        </ul>
        <p className="mt-3 text-xs italic">
          Intentionally limited to four clients at a time. Renew with a 25% loyalty discount.
        </p>
      </>
    ),
    bookUrl: BOOK_BASE + "dE11cnIweUNZVlh3TlFiaXVnVjJSdz09",
  },
  {
    id: "follow-up",
    name: "Root Cause Follow-up",
    duration: "30 Min",
    price: "Included",
    description: (
      <>
        <p className="text-xs uppercase tracking-wide text-secondary font-semibold">
          For enrolled clients only
        </p>
        <p className="mt-2">
          Follow-up visit focused on progress review, symptom changes, lab interpretation, treatment
          plan adjustments, supplement and nutrition review, and next-step root-cause strategy.
        </p>
        <p className="mt-3 font-medium text-foreground">Duration:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>30 min standard follow-up</li>
          <li>45 min complex labs/supplements</li>
          <li>60 min comprehensive reassessment</li>
        </ul>
      </>
    ),
    bookUrl: BOOK_BASE + "ZjlKd29HWVpIWEM5ai95S3cvWWdLUT09",
  },
];

function SchedulerPage() {
  return (
    <>
      <section className="container-prose pt-8 pb-12">
        <div className="max-w-3xl">
          <div className="eyebrow mb-5">Services & Pricing</div>
          <h1 className="text-5xl md:text-6xl leading-[1.05]">
            Book your visit with <em className="text-secondary not-italic">Novaleo</em>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Select the reason that fits your needs weight, hormones, metabolism, energy, or a full
            root-cause workup. Each option opens our secure Optimantra booking page in a new tab.
          </p>
        </div>
      </section>

      <section className="container-prose pb-24">
        <div className="grid gap-6">
          {services.map((s) => (
            <article
              key={s.id}
              className="rounded-2xl border border-border bg-card/60 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    {s.highlight && <span className="eyebrow text-secondary">{s.highlight}</span>}
                  </div>
                  <h2 className="mt-1 font-display text-2xl md:text-3xl text-primary leading-snug">
                    {s.name}
                  </h2>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-foreground/70">
                      {s.duration}
                    </span>
                  </div>
                  <div className="mt-5 text-sm text-foreground/80 leading-relaxed">
                    {s.description}
                  </div>
                </div>

                <div className="md:w-fit md:flex-shrink-0">
                  <a
                    href={s.bookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full justify-center inline-flex"
                  >
                    Book {s.name}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground italic max-w-2xl">
          Booking is handled securely through Optimantra. Telehealth services are available across
          Michigan and Wisconsin. No insurance we accept FSA/HSA, credit, and debit card.
        </p>
      </section>
    </>
  );
}
