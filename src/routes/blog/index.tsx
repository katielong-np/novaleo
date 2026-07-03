import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/blog/hero-fatigued-woman.jpg";
import { Clock, ArrowRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/blog/")(  {
  head: () => ({
    links: [
      { rel: "canonical", href: "https://novaweightandwellness.com/blog" },
    ],
    meta: [
      {
        title:
          "Blog | Novaleo Weight & Wellness | Functional Medicine Insights for Michigan Women",
      },
      {
        name: "description",
        content:
          "Expert articles on functional medicine, hormone health, weight resistance, and metabolic wellness for women in Michigan and Wisconsin. Written by Kathryn Long, NP-C.",
      },
      {
        property: "og:title",
        content:
          "Blog | Novaleo Weight & Wellness",
      },
      {
        property: "og:description",
        content:
          "Expert functional medicine insights for women in their 40s and 50s. Hormone health, metabolic wellness, and root-cause solutions.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://novaweightandwellness.com/og-image.webp",
      },
    ],
  }),
  component: BlogIndex,
});

const articles = [
  {
    slug: "why-michigan-women-over-40-cant-lose-weight-feel-exhausted",
    title:
      "Why Can't I Lose Weight in My 40s? The Hidden Causes of Fatigue",
    excerpt:
      "Struggling with weight gain, fatigue, and brain fog in your 40s or 50s? Learn why your doctor's 'normal' labs might be missing the real problem, and what functional medicine can do about it.",
    image: heroImg,
    imageAlt:
      "Professional woman experiencing afternoon fatigue at her desk",
    category: "Functional Medicine",
    date: "July 3, 2025",
    readTime: "22 min read",
    author: "Kathryn Long, NP-C",
  },
];

function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Novaleo Weight & Wellness Blog",
            description:
              "Expert articles on functional medicine, hormone health, and metabolic wellness for women in Michigan.",
            url: "https://novaweightandwellness.com/blog",
            publisher: {
              "@type": "Organization",
              name: "Novaleo Weight & Wellness",
              url: "https://novaweightandwellness.com",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-prose text-center">
          <div
            className="eyebrow mb-4 text-secondary"
            style={{ opacity: 1 }}
          >
            Novaleo Blog
          </div>
          <h1 className="text-4xl md:text-6xl text-primary-foreground leading-tight">
            Insights for Women Who Want{" "}
            <em className="not-italic text-secondary">Real Answers</em>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Expert articles on functional medicine, hormones, metabolic health,
            and root-cause wellness. Written by Kathryn Long, NP-C for
            professional women in Michigan and Wisconsin.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container-prose">
          <div className="grid gap-10 md:gap-12">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}` as any}
                className="group grid md:grid-cols-2 gap-8 items-center bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-10 md:pl-2">
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <h2 className="mt-4 text-2xl md:text-3xl leading-snug text-primary group-hover:text-secondary transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold group-hover:text-secondary transition-colors">
                    Read Article{" "}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/60 border-y border-border py-16 md:py-20">
        <div className="container-prose text-center">
          <h2 className="text-3xl md:text-4xl text-primary">
            Ready to Find Real Answers?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            If you're a Michigan or Wisconsin woman struggling with fatigue,
            weight resistance, or hormonal symptoms, let's talk. Your free
            15-minute discovery call is the first step.
          </p>
          <div className="mt-8">
            <Link
              to="/free-15-min-call-with-katie"
              className="btn-gold text-base"
            >
              Book Your Free 15-Min Call{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
