import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-kathryn.jpg";
import labs from "@/assets/approach-labs.jpg";
import telehealth from "@/assets/telehealth.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ArrowRight,
  Battery,
  Brain,
  Flame,
  Scale,
  Sparkles,
  Star,
  Stethoscope,
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novaleo Weight & Wellness  Functional Medicine for Women in MI & WI" },
      {
        name: "description",
        content:
          "Exhausted but your labs are 'normal'? Kathryn Long, NP-C helps professional women in MI & WI uncover the root cause of fatigue, brain fog, hormones & weight resistance. Free 15-min discovery call.",
      },
      { property: "og:title", content: "Novaleo Weight & Wellness" },
      {
        property: "og:description",
        content: "Root-cause functional medicine via telehealth for women in their 40s & 50s.",
      },
    ],
  }),
  component: Home,
});

const symptoms = [
  { icon: Battery, label: "Exhausted all the time" },
  { icon: Brain, label: "Brain fog you can't shake" },
  { icon: Flame, label: "Hormonal chaos" },
  { icon: Scale, label: "Weight that won't budge" },
  { icon: Stethoscope, label: "Labs always 'normal'" },
  { icon: Sparkles, label: "Something feels off" },
];

const familiar = [
  {
    q: "I'm exhausted all the time but my doctor says everything looks normal.",
    a: " Sound familiar?",
  },
  {
    q: "I have brain fog so bad I can't focus at work. I used to be sharp.",
    a: " You're not losing your mind.",
  },
  {
    q: "I'm gaining weight despite doing everything right. No one can explain why.",
    a: " It's not willpower. It's hormones.",
  },
  {
    q: "I feel like something is off but no one is listening or digging deeper.",
    a: " I will listen. And dig deeper.",
  },
];

const testimonials = [
  {
    text: "Have you ever felt like every single Dr. wasn't listening and dismissed what you were feeling/saying? That was me, frustrated and tired of not getting answers for far too long. Working with Katie has been amazing. I feel like she cares, hears, and actually wants to make me feel great and not just by prescribing a pill. Her team has been super communicative and understanding. I HIGHLY recommend contacting her if any of this sounds familiar to you!",
    name: "Michelle W",
    rating: 5,
  },
  {
    text: "I may have menopause, but IT doesn't have ME! I have so much gratitude for Katie Long, NP and the personalized approach she gives to the care of my health & wellness. With Katie's guidance, I am learning how to listen to my body & it's needs for sleep, nutrition, movement & meditation. We are investigating the root causes that prevent my body from functioning properly. If you are sick & tired of symptoms popping up & treating the symptoms like 'a game of whack-a-mole', make a commitment to prioritize yourself and schedule an appt with Katie. You are worth it!",
    name: "Terri V",
    rating: 5,
  },
  {
    text: "Katie gives such a personalized approach that many of us struggle with! I can't recommend her enough for those of us premenopausal women looking to lose weight safely!",
    name: "Jacqueline H",
    rating: 5,
  },
  {
    text: "Katie has been so fantastic to work with and has helped significantly w/ coming up w/ a treatment plan that works and is beneficial for my lifestyle!",
    name: "Natalie H",
    rating: 5,
  },
  {
    text: "If you're thinking about starting semaglutide or other GLP-1 medications, this is the clinic to go to. The provider is so knowledgeable and truly cares about her patients' long-term metabolic health. Novaleo Weight & Wellness in Michigan makes the process easy, supportive, and safe",
    name: "Tasha M",
    rating: 5,
  },
  {
    text: "I've tried so many programs before and my sister told me about Novaleo Weight & Wellness. The provider really took time to understand my goals and built a plan that actually fits my lifestyle. I've lost weight, but more importantly, I feel healthier and more confident. Easily the best weight loss clinic in Michigan!",
    name: "Nicki M",
    rating: 5,
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-prose pt-8 pb-20 md:pt-8 md:pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">Finally, someone who listens.</div>
            <h1 className="text-5xl md:text-7xl leading-[1.25]">
              You're exhausted. Your labs are{" "}
              <em className="not-italic text-secondary bg-primary px-3 py-1 rounded-md inline-block my-1 leading-tight">
                "normal."
              </em>
              <br />
              But something is still wrong?
            </h1>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              We help professional women in their 40s &amp; 50s break free from chronic fatigue,
              brain fog, and hormonal chaos using functional medicine that actually finds the root
              cause.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">
                Book my free 15-min call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/approach" className="btn-ghost">
                How it works
              </Link>
            </div>
            <ul className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-foreground/80">
              {[
                "Serving Michigan & Wisconsin via telehealth",
                "Board-Certified Nurse Practitioner (NP-C), 20+ years",
                "Specializing in metabolic health, hormones & weight resistance",
                "You'll feel heard from the very first call",
              ].map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-secondary/60 blur-2xl" />
            <img
              src={hero}
              alt="Professional woman in her 40s, calm and energized"
              width={1600}
              height={1280}
              className="relative rounded-3xl shadow-2xl object-cover aspect-[4/5] w-full"
            />
            <div className="absolute -bottom-6 -right-4 bg-card border border-border rounded-2xl shadow-xl p-5 max-w-[16rem]">
              <div className="text-3xl font-display text-primary">15 min</div>
              <p className="text-sm text-muted-foreground mt-1">
                Free Google Meet call. Zero cost, zero pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SYMPTOM BAND */}
      <section className="border-y border-border bg-muted/60">
        <div className="container-prose py-10">
          <p className="eyebrow mb-6">If any of this sounds familiar…</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {symptoms.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/40 text-primary shrink-0">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILIAR QUOTES */}
      <section className="py-24 overflow-hidden">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Do any of these sound familiar?"
            title="You've been dismissed. You deserve better."
            intro="If you're a professional woman in your 40s or 50s who's been told your labs are 'fine' while you're barely making it through the day  I was that woman too. You're not imagining it. And you're not alone."
          />
        </div>
        <Carousel
          opts={{ loop: true, align: "start", watchDrag: false }}
          plugins={[
            AutoScroll({
              speed: 1,
              startDelay: 0,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              direction: "backward",
            }),
          ]}
          className="mt-12"
        >
          <CarouselContent className="-ml-4">
            {[...familiar, ...familiar].map((f, i) => (
              <CarouselItem
                key={`${f.q}-${i}`}
                className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/4"
              >
                <div className="rounded-2xl border border-border bg-card p-7 h-full">
                  <p className="font-display text-xl text-primary italic leading-snug">"{f.q}"</p>
                  <p className="mt-4 text-sm font-semibold tracking-wide text-secondary uppercase">
                    {f.a}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* WHAT IS FUNCTIONAL MEDICINE */}
      <section className="container-prose pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <img
            src={labs}
            alt="Holistic wellness  whole foods, herbs, and mindful living"
            width={1400}
            height={1000}
            loading="lazy"
            className="rounded-2xl shadow-xl aspect-[4/3] object-cover w-full"
          />
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <SectionHeading
            eyebrow="A different kind of medicine"
            title={
              <>
                We look for the <em className="text-secondary not-italic">why</em>, not just the
                what.
              </>
            }
            intro="Conventional care often stops at a prescription pad. Functional medicine treats the whole person  uncovering the biological, hormonal, and lifestyle drivers behind your symptoms  so the root cause is addressed, not just the surface."
          />
          <ul className="mt-8 space-y-4">
            {[
              "Functional lab analysis that goes beyond 'normal' ranges",
              "Personalized nutrition, supplements & lifestyle protocols",
              "Hormone, metabolic, and weight-resistance root-cause analysis",
              "A clinician who actually has time to listen",
            ].map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/approach"
            className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary"
          >
            See how we work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 overflow-hidden">
        <div className="container-prose">
          <SectionHeading
            eyebrow="What our clients say"
            title="Real women. Real results."
            intro="You don't have to take our word for it  here's what clients are saying about their experience with Novaleo."
            align="center"
          />
        </div>
        <Carousel
          opts={{ loop: true, align: "start", watchDrag: false }}
          plugins={[
            AutoScroll({
              speed: 0.8,
              startDelay: 0,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              direction: "backward",
            }),
          ]}
          className="mt-12"
        >
          <CarouselContent className="-ml-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <CarouselItem
                key={`${t.name}-${i}`}
                className="pl-4 basis-[90%] md:basis-1/2 lg:basis-1/3"
              >
                <div className="rounded-2xl border border-border bg-card p-7 h-full flex flex-col">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="mt-4 text-foreground/85 leading-relaxed text-sm flex-1">
                    "{t.text}"
                  </p>
                  <p className="mt-5 text-sm font-semibold tracking-wide text-primary uppercase">
                    {" "}
                    {t.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* SIMPLE NEXT STEPS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="eyebrow text-secondary mb-3" style={{ opacity: 1 }}>
                Simple next steps
              </div>
              <h2 className="text-4xl md:text-5xl text-primary-foreground">
                How we get you from exhausted to energized.
              </h2>
              <p className="mt-4 text-primary-foreground/75 text-lg">
                Four simple steps. One personalized path.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((s) => (
              <div
                key={s.t}
                className="rounded-2xl bg-primary-foreground/[0.04] border border-primary-foreground/10 p-7 hover:border-secondary/60 transition-colors"
              >
                <div className="font-display text-3xl text-secondary mb-3">{s.n}</div>
                <h3 className="text-xl text-primary-foreground leading-tight">{s.t}</h3>
                <p className="mt-3 text-sm text-primary-foreground/75 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-gold">
              Book my free 15-min call
            </Link>
          </div>
        </div>
      </section>

      {/* TELEHEALTH */}
      <section className="container-prose py-24 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={telehealth}
          alt="Telehealth consultation from home"
          width={1400}
          height={1000}
          loading="lazy"
          className="rounded-2xl shadow-xl aspect-[4/3] object-cover w-full"
        />
        <div>
          <SectionHeading
            eyebrow="Telehealth across MI & WI"
            title="Expert care without leaving your day."
            intro="Visits happen securely from your laptop or phone. Labs are drawn locally. A relaxed, judgment-free Google Meet conversation with Kathryn  built for the schedule of a working professional."
          />
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { k: "60 min", v: "Intake visit" },
              { k: "20+ yrs", v: "Clinical experience" },
              { k: "1:1", v: "Clinician access" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-border bg-card py-5">
                <div className="text-2xl font-display text-primary">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-secondary/30">
        <div className="container-prose py-20">
          <div className="text-center">
            <div className="eyebrow mb-4">What I stand for</div>
            <h2 className="text-4xl md:text-5xl">Care built on values, not volume.</h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-5">
            {["Honesty", "Respect", "Patient First", "Integrity", "Excellence"].map((v) => (
              <span
                key={v}
                className="px-5 py-2 rounded-full bg-background border border-primary/15 text-primary font-display text-lg"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose py-24 text-center">
        <div className="eyebrow mb-4">Your next chapter starts here</div>
        <h2 className="text-4xl md:text-5xl max-w-2xl mx-auto">
          Ready to finally feel like yourself again?
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          You've been pushing through on empty long enough. Choose your starting point whether you
          want to talk first or dive straight in, I'm here for you.
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link to="/contact" className="btn-gold">
            Book free 15-min call
          </Link>
          <Link to="/services" className="btn-ghost">
            Book $97 intake
          </Link>
        </div>
      </section>
    </>
  );
}
