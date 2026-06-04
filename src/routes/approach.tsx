import { createFileRoute, Link } from "@tanstack/react-router";
import labs from "@/assets/approach-labs.jpg";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach  From Exhausted to Energized | Novaleo" },
      { name: "description", content: "How we move you from exhausted to energized: free discovery call, $97 root-cause intake, personalized plan, and care that finally listens." },
      { property: "og:title", content: "Our Approach | Novaleo Weight & Wellness" },
      { property: "og:description", content: "The simple 4-step path from feeling dismissed to feeling like yourself again." },
    ],
  }),
  component: Approach,
});

const steps = [
  {
    n: "01",
    t: "Choose your starting point",
    d: "Not everyone needs the same first step. You can book a free discovery call, start with a Root-Cause Intake, or apply directly for one of our personalized programs.",
  },
  {
    n: "02",
    t: "Root-Cause Review",
    d: "We review your symptoms, health history, lifestyle, and available labs to understand what may be driving fatigue, brain fog, weight resistance, hormone shifts, or metabolic changes.",
  },
  {
    n: "03",
    t: "Build your personalized plan",
    d: "We look at your symptoms, labs, lifestyle, stress, sleep, nutrition, hormones, metabolism, and real-life demands to identify the best starting point.",
  },
  {
    n: "04",
    t: "Guided Support",
    d: "Whether your plan begins with foundational work or a deeper program, you'll have a structured roadmap designed around your body. For clients enrolled in a program, we continue with structured support, education, adjustments, and accountability so your plan can evolve with you.",
  },
];

function Approach() {
  return (
    <>
      <section className="container-prose pt-8 pb-12">
        <div className="eyebrow mb-5">Our Approach · Simple Next Steps</div>
        <h1 className="text-5xl md:text-7xl max-w-3xl leading-[1.02]">
          How we get you from <em className="text-secondary not-italic">exhausted</em> to energized.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Conventional medicine is designed to diagnose and treat disease. Functional medicine is
          designed to find and fix the root cause before it becomes disease  by looking at patterns,
          connections, and the full picture of your hormones, metabolism, nutrition, stress, and sleep.
        </p>
      </section>

      <section className="container-prose pb-24">
        <img src={labs} alt="Lab analysis" width={1400} height={1000} loading="lazy"
             className="w-full rounded-2xl shadow-xl aspect-[16/7] object-cover" />
      </section>

      <section className="container-prose pb-24">
        <SectionHeading
          eyebrow="The process"
          title="Four simple steps. One personalized path."
        />
        <div className="mt-14 grid gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 md:p-10 grid md:grid-cols-12 gap-6">
              <div className="md:col-span-2 font-display text-5xl text-secondary">{s.n}</div>
              <div className="md:col-span-4">
                <h3 className="text-2xl">{s.t}</h3>
              </div>
              <p className="md:col-span-6 text-foreground/80 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/60 border-y border-border">
        <div className="container-prose py-20">
          <SectionHeading
            eyebrow="What makes this different"
            title="We look at patterns, not just numbers."
            intro='"Normal" lab ranges are based on averages from the general population  not on optimal health. There is a big difference between "not sick" and "thriving." We use functional lab analysis to look at your results through a different lens and identify patterns that standard testing often misses.'
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { t: "Nutrition", d: "Personalized, anti-inflammatory, sustainable  not another rigid plan." },
              { t: "Sleep", d: "The foundation of hormones, metabolism, and recovery." },
              { t: "Movement", d: "The right kind, at the right dose, for your physiology." },
              { t: "Stress & nervous system", d: "Regulation strategies that actually fit your day." },
              { t: "Hormones & metabolism", d: "Mapped and treated as one connected system." },
            ].map((p) => (
              <div key={p.t} className="rounded-xl bg-background border border-border p-6">
                <div className="h-1 w-8 bg-secondary rounded-full mb-4" />
                <h3 className="text-xl">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-24 text-center">
        <h2 className="text-4xl md:text-5xl">Start where you are.</h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          The process begins with a single 15-minute conversation. No cost. No commitment.
        </p>
        <Link to="/contact" className="btn-gold mt-8 inline-flex">Book discovery call</Link>
      </section>
    </>
  );
}
