import { createFileRoute, Link } from "@tanstack/react-router";
import { useBookingModal } from "@/components/BookingModalContext";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://novaweightandwellness.com/conditions" },
    ],
    meta: [
      { title: "What We Treat  Conditions | Novaleo Functional Medicine" },
      {
        name: "description",
        content:
          "Fatigue, brain fog, hormone imbalance, weight resistance, thyroid, gut & metabolic issues  root-cause care via telehealth in MI & WI.",
      },
      { property: "og:title", content: "What We Treat | Novaleo" },
      {
        property: "og:description",
        content: "Conditions Novaleo's functional medicine practice addresses.",
      },
    ],
  }),
  component: Conditions,
});

const conditions = [
  {
    t: "Persistent fatigue",
    d: "Tired despite sleep, coffee, and 'normal' labs. We look for the upstream drivers  mitochondrial, thyroid, adrenal, nutrient.",
  },
  {
    t: "Brain fog & focus loss",
    d: "Word recall, concentration, and mental clarity issues  often hormonal, metabolic, or inflammatory in origin.",
  },
  {
    t: "Weight resistance",
    d: "The scale won't move despite the right effort. Usually a sign of metabolic, hormonal, or insulin signaling dysfunction.",
  },
  {
    t: "Perimenopause & menopause",
    d: "Sleep loss, mood shifts, weight changes, irregular cycles. Comprehensive support  hormones, nutrition, lifestyle.",
  },
  {
    t: "Thyroid dysfunction",
    d: "When TSH is 'normal' but symptoms aren't. Full thyroid mapping including Free T3/T4, antibodies, and conversion.",
  },
  {
    t: "Hormone imbalance",
    d: "Testosterone, estrogen, progesterone, cortisol  assessed and treated as a connected system.",
  },
  {
    t: "Metabolic & insulin resistance",
    d: "Pre-diabetes, stubborn belly weight, energy crashes. Restore metabolic flexibility through testing-driven protocols.",
  },
  {
    t: "Gut & digestive issues",
    d: "Bloating, reflux, IBS-style symptoms, food sensitivities  addressed through targeted gut testing and protocols.",
  },
  {
    t: "Sleep disruption",
    d: "Insomnia, early waking, unrefreshing sleep  uncovering the hormonal, metabolic, and nervous system contributors.",
  },
  {
    t: "Stress, burnout & mood",
    d: "Working with HPA axis dysfunction, neurotransmitter balance, and nervous system regulation.",
  },
  {
    t: "Autoimmune support",
    d: "Hashimoto's, RA, and other autoimmune conditions  addressing root drivers alongside conventional care.",
  },
  {
    t: "Inflammation",
    d: "Chronic inflammation underlies most chronic disease. We test for it and reduce it strategically.",
  },
];

function Conditions() {
  const { open: openBooking } = useBookingModal();

  return (
    <>
      <section className="container-prose pt-8 pb-12">
        <div className="eyebrow mb-5">What We Treat</div>
        <h1 className="text-5xl md:text-7xl max-w-3xl leading-[1.02]">
          The symptoms most often dismissed taken{" "}
          <em className="text-secondary not-italic">seriously</em>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Most of our patients arrive with the same story: "I know something is wrong, but every
          test comes back normal." Here are the patterns we see and address most.
        </p>
      </section>

      <section className="container-prose pb-24">
        <h2 className="text-3xl md:text-4xl mb-8">Conditions we specialize in</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {conditions.slice(0, 3).map((c) => (
            <article
              key={c.t}
              className="rounded-xl border border-border bg-card p-6 hover:border-secondary transition-colors"
            >
              <div className="h-1 w-8 bg-secondary rounded-full mb-4" />
              <h3 className="text-xl">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </article>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8">Other conditions we treat</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {conditions.slice(3).map((c) => (
            <article
              key={c.t}
              className="rounded-xl border border-border bg-card p-6 hover:border-secondary transition-colors"
            >
              <div className="h-1 w-8 bg-secondary rounded-full mb-4" />
              <h3 className="text-xl">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/30">
        <div className="container-prose py-20 text-center">
          <h2 className="text-4xl md:text-5xl">Don't see your concern? Ask us.</h2>
          <p className="mt-4 text-primary/80 max-w-xl mx-auto">
            We'll tell you honestly whether functional medicine is the right path for your case.
          </p>
          <Link to="/free-15-min-call-with-katie"  className="btn-primary mt-7 inline-flex">
            Book Free 15-Min Call
          </Link>
        </div>
      </section>
    </>
  );
}
