import { createFileRoute, Link } from "@tanstack/react-router";
import clinician from "@/assets/clinician.webp";
import { SectionHeading } from "@/components/SectionHeading";
import { useBookingModal } from "@/components/BookingModalContext";

export const Route = createFileRoute("/about")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://novaweightandwellness.com/about" },
    ],
    meta: [
      { title: "About Kathryn Long, NP-C | Novaleo Weight & Wellness" },
      {
        name: "description",
        content:
          "Meet Kathryn Long, NP-C — board-certified nurse practitioner specializing in hormones, metabolic health & weight resistance for women over 40.",
      },
      { property: "og:title", content: "About Kathryn Long, NP-C | Novaleo Weight & Wellness" },
      {
        property: "og:description",
        content:
          "Functional medicine for professional women in MI & WI, led by Kathryn Long, NP-C. Get to the root cause of your symptoms.",
      },
      { property: "og:url", content: "https://novaweightandwellness.com/about" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image.webp" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Kathryn Long, NP-C | Novaleo Weight & Wellness" },
      { name: "twitter:description", content: "Functional medicine for professional women in MI & WI, led by Kathryn Long, NP-C." },
      { name: "twitter:image", content: "https://novaweightandwellness.com/og-image.webp" },
    ],
  }),
  component: About,
});

function About() {
  const { open: openBooking } = useBookingModal();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kathryn Long",
            "honorificSuffix": "NP-C",
            "jobTitle": "Board-Certified Nurse Practitioner",
            "description": "Board-certified nurse practitioner with 20+ years in healthcare, specializing in hormones, metabolic health, and weight resistance for women in midlife.",
            "url": "https://novaweightandwellness.com/about",
            "image": "https://novaweightandwellness.com/og-image.webp",
            "worksFor": {
              "@type": "MedicalBusiness",
              "name": "Novaleo Weight & Wellness",
              "url": "https://novaweightandwellness.com"
            },
            "knowsAbout": [
              "Functional Medicine",
              "Hormone Optimization",
              "Metabolic Health",
              "Weight Management",
              "Thyroid Dysfunction",
              "Perimenopause",
              "Menopause"
            ],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Professional Certification",
                "name": "Board-Certified Nurse Practitioner (NP-C)"
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Professional Certification",
                "name": "Certified in Medical Weight Management"
              }
            ]
          })
        }}
      />
      <section className="container-prose pt-8 pb-12">
        <div className="eyebrow mb-5">About the Provider</div>
        <h1 className="text-5xl md:text-7xl max-w-3xl leading-[1.02]">
          Meet <em className="text-secondary not-italic">Kathryn Long</em>
          <span className="text-2xl md:text-3xl align-baseline">, NP-C.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Board-Certified Nurse Practitioner · Hormone Specialist · Certified in Medical Weight
          Management · 20+ years in healthcare.
        </p>
      </section>

      <section className="container-prose pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <img
            src={clinician}
            alt="Kathryn Long, NP-C  founder of Novaleo Weight & Wellness"
            width={1000}
            height={1200}
            loading="lazy"
            className="rounded-2xl shadow-xl aspect-[4/5] object-cover w-full"
          />
          <div className="mt-5">
            <div className="font-display text-2xl text-primary">Kathryn Long, NP-C</div>
            <div className="text-sm text-muted-foreground">
              Founder · Board-Certified Nurse Practitioner
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="My story" title="I know what it's like to feel unheard." />
          <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed text-lg">
            <p>
              For years, I battled relentless fatigue and brain fog, only to be told by doctors that
              everything was "fine." That dismissal became my turning point.
            </p>
            <p>
              I dove into functional medicine to find the answers I was denied uncovering how
              stress, nutrition, and metabolic health intersect. Now, I partner with women in
              midlife to solve the root causes of their symptoms.
            </p>
            <p>
              Through personalized nutrition and whole-person care, I help you move past the
              "something is off" feeling and back into a life of confidence and vitality.
            </p>
            <p className="text-primary font-display text-xl"> Kathryn Long, NP-C</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              {
                k: "Credentials",
                v: "Board-Certified Nurse Practitioner (NP-C), Certified in Medical Weight Management.",
              },
              {
                k: "Experience",
                v: "20+ years in clinical healthcare, with deep specialization in hormones and metabolic health.",
              },
              {
                k: "Who I serve",
                v: "Professional women in their 40s and 50s navigating fatigue, hormones, and weight resistance.",
              },
              {
                k: "How I practice",
                v: "100% telehealth across Michigan and Wisconsin  care that meets your real schedule.",
              },
            ].map((b) => (
              <div key={b.k} className="border-l-2 border-secondary pl-4">
                <div className="eyebrow mb-2">{b.k}</div>
                <p className="text-foreground/85">{b.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 border-y border-border">
        <div className="container-prose py-20 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Our Vision</div>
            <h2 className="text-4xl md:text-5xl leading-tight">
              A second act defined by <em className="text-secondary not-italic">vitality</em>, not
              exhaustion.
            </h2>
          </div>
          <div className="lg:col-span-7 text-lg text-foreground/85 leading-relaxed space-y-5">
            <p>
              At Novaleo Weight &amp; Wellness, our vision is to empower professional women to lead
              their second act with clarity and confidence.
            </p>
            <p>
              We envision a world where midlife is not defined by exhaustion, but by optimized
              health and the freedom to thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="eyebrow mb-4 text-center">What I stand for</div>
        <h2 className="text-4xl md:text-5xl text-center max-w-2xl mx-auto">
          Care built on values, not volume.
        </h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Honesty", "Respect", "Patient First", "Integrity", "Excellence"].map((v) => (
            <div key={v} className="rounded-xl border border-border bg-card py-8 text-center">
              <div className="h-1 w-8 bg-secondary rounded-full mx-auto mb-4" />
              <div className="font-display text-xl text-primary">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-20 text-center">
          <h2 className="text-4xl md:text-5xl text-primary-foreground">
            Let's start with a conversation.
          </h2>
          <p className="mt-4 text-primary-foreground/75 max-w-xl mx-auto">
            A relaxed, judgment-free 15-minute Google Meet call with Kathryn. Zero cost, zero
            pressure.
          </p>
          <Link to="/free-15-min-call-with-katie"  className="btn-gold mt-7 inline-flex">
            Book Free 15-Min Call
          </Link>
        </div>
      </section>
    </>
  );
}
