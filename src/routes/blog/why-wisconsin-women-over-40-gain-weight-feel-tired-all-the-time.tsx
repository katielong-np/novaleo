import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import heroImg from '@/assets/blog/wisconsin-hero-fatigue.jpg';
import winterImg from '@/assets/blog/wisconsin-winter-landscape.jpg';
import telehealthImg from '@/assets/blog/wisconsin-telehealth.jpg';
import labsImg from '@/assets/blog/wisconsin-lab-results.jpg';
import weightImg from '@/assets/blog/wisconsin-weight-frustration.jpg';
import nutritionImg from '@/assets/blog/wisconsin-nutrition.jpg';
import hormoneImg from '@/assets/blog/wisconsin-hormone-symptoms.jpg';
import { Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';

export const Route = createFileRoute(
  '/blog/why-wisconsin-women-over-40-gain-weight-feel-tired-all-the-time',
)({
  head: () => ({
    meta: [
      {
        title:
          'Why Am I So Tired and Gaining Weight After 40? Wisconsin Women | Novaleo',
      },
      {
        name: 'description',
        content:
          "Wisconsin women over 40: struggling with weight gain, exhaustion, and brain fog? Learn why your labs say 'normal' but you feel terrible, and what functional medicine can do.",
      },
      {
        property: 'og:title',
        content:
          'Why Am I So Tired and Gaining Weight After 40? A Wisconsin Woman\'s Guide',
      },
      {
        property: 'og:description',
        content:
          "Wisconsin women over 40: struggling with weight gain, exhaustion, and brain fog? Learn why your labs say 'normal' but you feel terrible.",
      },
      {
        property: 'og:url',
        content: 'https://novaweightandwellness.com/blog/why-wisconsin-women-over-40-gain-weight-feel-tired-all-the-time',
      },
      {
        property: 'og:image',
        content: 'https://novaweightandwellness.com/og-image.webp',
      },
      { property: 'og:type', content: 'article' },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Why Am I So Tired and Gaining Weight After 40? Wisconsin Women | Novaleo" },
      { name: "twitter:description", content: "Wisconsin women over 40: learn why your labs say 'normal' but you feel terrible, and what functional medicine can do." },
      { name: "twitter:image", content: "https://novaweightandwellness.com/og-image.webp" },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://novaweightandwellness.com/blog/why-wisconsin-women-over-40-gain-weight-feel-tired-all-the-time',
      },
    ],
  }),
  component: WisconsinArticlePage,
});

const tocItems = [
  { id: 'the-january-morning', label: 'The January Morning That Breaks You' },
  { id: 'this-is-not-in-your-head', label: 'This Is Not in Your Head' },
  {
    id: 'why-normal-labs-miss-everything',
    label: "Why 'Normal' Labs Miss Everything",
  },
  {
    id: 'five-root-causes-wisconsin-women',
    label: '5 Root Causes Wisconsin Women Overlook',
  },
  {
    id: 'why-wisconsin-makes-it-harder',
    label: 'Why Living in Wisconsin Makes It Harder',
  },
  {
    id: 'functional-medicine-different-approach',
    label: 'How Functional Medicine Works Differently',
  },
  {
    id: 'what-wisconsin-women-experience',
    label: 'What Wisconsin Women Experience with Us',
  },
  {
    id: 'your-first-conversation',
    label: 'Your First Conversation',
  },
  {
    id: 'telehealth-across-wisconsin',
    label: 'Telehealth Across All of Wisconsin',
  },
  { id: 'your-next-step', label: 'Your Next Step' },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Why Am I So Tired and Gaining Weight After 40? A Wisconsin Woman\'s Guide',
  author: {
    '@type': 'Person',
    name: 'Kathryn Long, NP-C',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Novaleo Weight & Wellness',
  },
  datePublished: '2025-07-11',
  dateModified: '2025-07-11',
  url: 'https://novaweightandwellness.com/blog/why-wisconsin-women-over-40-gain-weight-feel-tired-all-the-time',
  image: 'https://novaweightandwellness.com/og-image.webp',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://novaweightandwellness.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://novaweightandwellness.com/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Why Am I So Tired and Gaining Weight After 40?',
      item: 'https://novaweightandwellness.com/blog/why-wisconsin-women-over-40-gain-weight-feel-tired-all-the-time',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why am I gaining weight after 40 even though I eat healthy and exercise?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Weight gain after 40 is often driven by hormonal shifts during perimenopause, insulin resistance, thyroid dysfunction, chronic inflammation, and nutrient deficiencies. These root causes are frequently missed by standard lab tests that only screen for disease rather than optimal function.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do I feel so tired all the time in my 40s?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Persistent fatigue in your 40s is commonly caused by declining progesterone levels, suboptimal thyroid function, vitamin D deficiency (especially in Wisconsin), blood sugar instability, and chronic low-grade inflammation. These issues often coexist and compound each other.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do telehealth functional medicine in Wisconsin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Novaleo Weight and Wellness is licensed to provide telehealth functional medicine consultations throughout Wisconsin. Lab work can be completed at any Quest Diagnostics or Labcorp location in the state, and all appointments are conducted via secure, HIPAA-compliant video.',
      },
    },
  ],
};

function WisconsinArticlePage() {
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <main className="bg-background min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="container-prose pt-6 pb-4"
      >
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            className="text-foreground/60 truncate max-w-[200px] md:max-w-none"
            aria-current="page"
          >
            Why Am I So Tired and Gaining Weight After 40?
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="container-prose pb-8">
        <span className="eyebrow text-secondary mb-4 inline-block">
          Functional Medicine for Wisconsin Women
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6">
          Why Am I So Tired and Gaining Weight After 40? A Wisconsin Woman's Guide to Getting Real Answers
        </h1>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span>By Kathryn Long, NP-C</span>
            <span aria-hidden="true">|</span>
            <time dateTime="2025-07-11">July 11, 2025</time>
            <span aria-hidden="true">|</span>
            <span>24 min read</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-foreground/60 mr-1">Share:</span>
            <a 
              href="https://www.facebook.com/sharer/sharer.php?u=https://novaweightandwellness.com/blog/why-wisconsin-women-over-40-gain-weight-feel-tired-all-the-time" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a 
              href="https://twitter.com/intent/tweet?url=https://novaweightandwellness.com/blog/why-wisconsin-women-over-40-gain-weight-feel-tired-all-the-time&text=Why%20Am%20I%20So%20Tired%20and%20Gaining%20Weight%20After%2040?%20A%20Wisconsin%20Woman's%20Guide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a 
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://novaweightandwellness.com/blog/why-wisconsin-women-over-40-gain-weight-feel-tired-all-the-time&title=Why%20Am%20I%20So%20Tired%20and%20Gaining%20Weight%20After%2040?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <button 
              onClick={() => {
                navigator.clipboard.writeText('https://novaweightandwellness.com/blog/why-wisconsin-women-over-40-gain-weight-feel-tired-all-the-time');
                alert('Link copied to clipboard!');
              }}
              className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Copy link"
            >
              <Link2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="container-prose pb-10">
        <img
          src={heroImg}
          alt="Wisconsin woman experiencing afternoon fatigue and brain fog while working at her home desk during a grey winter day"
          className="rounded-2xl shadow-lg w-full object-cover max-h-[500px]"
          width={1200}
          height={500}
        />
      </div>

      {/* Mobile TOC */}
      <div className="container-prose lg:hidden mb-8">
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="w-full flex items-center justify-between bg-primary/5 border border-primary/10 rounded-xl px-5 py-4 text-left"
          aria-expanded={tocOpen}
          aria-controls="mobile-toc"
        >
          <span className="font-display text-primary font-semibold">
            Table of Contents
          </span>
          <svg
            className={`w-5 h-5 text-primary transition-transform duration-300 ${tocOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {tocOpen && (
          <nav
            id="mobile-toc"
            className="mt-2 bg-primary/5 border border-primary/10 rounded-xl px-5 py-4"
          >
            <ol className="space-y-3">
              {tocItems.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                    onClick={() => setTocOpen(false)}
                  >
                    <span className="text-secondary font-semibold mr-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>

      {/* Two-Column Layout: Article + Sidebar TOC */}
      <div className="container-prose">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          {/* Main Article Content */}
          <article className="min-w-0">
            {/* ========== Section 1: The January Morning ========== */}
            <section id="the-january-morning">
              <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
                The January Morning That Breaks You
              </h2>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                It's 6:15 AM in Waukesha. Your alarm went off ten minutes ago.
                You haven't moved. The room is pitch dark because the sun won't
                be up for another hour, and even when it does show up, it'll
                hide behind that flat, grey Wisconsin sky that settles in around
                November and doesn't leave until April.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                You slept eight hours. You should feel rested. Instead, you
                feel like you've been hit by a Kwik Trip semi. Your body aches.
                Your head feels stuffed with cotton. You're already dreading
                the day, and it hasn't started yet.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Maybe you're a nurse at Froedtert. Maybe you run a classroom
                full of fourth graders in Appleton. Maybe you manage accounts
                at a firm on Water Street in Milwaukee, or you're juggling
                three kids and a remote job from your dining table in Brookfield.
                Whatever your life looks like, it has one thing in common with
                thousands of other Wisconsin women over 40: you are bone-tired,
                your clothes don't fit the way they used to, and no one can
                tell you why.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                You've tried everything. You did Whole30 after Thanksgiving.
                You signed up for that gym off Highway 41. You stopped eating
                after 7 PM. You walked the Oak Leaf Trail three times a week
                all summer. And the scale hasn't budged. Or worse, it's
                actually gone up.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Your doctor ran bloodwork. Everything came back "normal." And
                you sat in that exam room, feeling dismissed, wondering if
                this is just what your 40s are supposed to feel like.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                It's not. And I'm going to spend the next twenty minutes
                explaining exactly why your body is doing this, why conventional
                testing keeps missing it, and what you can do about it. Right
                now. From wherever you are in Wisconsin.
              </p>
            </section>

            {/* ========== Section 2: This Is Not in Your Head ========== */}
            <section id="this-is-not-in-your-head">
              <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
                This Is Not in Your Head
              </h2>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Let's start with the most important thing you need to hear
                today. What you are feeling is real. It is measurable. It is
                physiological. And it is not your fault.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                The fatigue that makes 2 PM feel like midnight. The belly fat
                that appeared out of nowhere and won't leave no matter what
                you eat. The brain fog that makes you lose words in the middle
                of a sentence. The mood swings that have you crying in your
                car after a perfectly normal Tuesday. The sleep that never
                feels deep enough, even when you get plenty of it.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                These are not signs of weakness. They are not "just stress."
                They are not the inevitable cost of being a busy woman. They
                are your body's alarm system telling you that something has
                shifted at the biochemical level, and that shift needs
                attention.
              </p>

              <img
                src={hormoneImg}
                alt="A Wisconsin woman in her mid-40s sitting on the edge of her bed, exhausted and overwhelmed by hormone-related fatigue and sleep disruption"
                className="rounded-2xl shadow-lg w-full my-8"
                width={800}
                height={533}
                loading="lazy"
              />

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Research from the North American Menopause Society shows that
                perimenopause, the transitional phase before menopause, can
                begin as early as age 35 and stretch over 10 to 15 years. That
                means a 39-year-old woman in Eau Claire and a 53-year-old woman
                in Kenosha might both be deep in the same hormonal upheaval,
                just at different stages.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                During perimenopause, your hormones don't decline in a nice,
                clean slope. They spike and crash unpredictably, sometimes
                within the same week. One day your estrogen surges. The next,
                it plummets. Your progesterone drops steadily while everything
                else fluctuates around it. These shifts ripple through your
                thyroid, your blood sugar regulation, your cortisol levels,
                your neurotransmitter balance, and your metabolism.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Approximately 1.3 million American women enter menopause every
                year. That is roughly 6,000 women per day. And the vast
                majority of them will deal with weight gain, fatigue, brain
                fog, mood disruption, sleep problems, and joint pain that
                significantly change the quality of their daily lives.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Here's the part that makes me frustrated as a healthcare
                provider with more than 20 years of experience: most of these
                women will visit their doctor, describe every one of these
                symptoms, and walk out with a suggestion to "exercise more" or
                "reduce stress" or "it's just part of getting older." They
                leave the office feeling more defeated than when they arrived.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                You deserve more than that. You deserve a thorough
                investigation. And those answers are out there. They're just
                not where conventional medicine usually looks.
              </p>
            </section>

            {/* ========== Section 3: Why Normal Labs Miss Everything ========== */}
            <section id="why-normal-labs-miss-everything">
              <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
                Why Your Doctor's "Normal" Labs Miss Everything
              </h2>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                I want to be very clear about something before we go further.
                Your doctor is not the problem. Most primary care physicians
                are good, caring people who genuinely want to help. The issue
                is the system they work inside. It was built to identify
                disease, not to optimize health. And that difference is exactly
                where your symptoms are hiding.
              </p>

              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                The TSH Problem
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Take thyroid function as a clear example. The standard lab
                reference range for TSH (thyroid-stimulating hormone) runs from
                0.5 to 4.5 mIU/L. If your number falls anywhere in that
                window, your chart gets stamped "normal."
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                But here's what functional medicine practitioners understand:
                the range where most people actually feel well is between 1.0
                and 2.0 mIU/L. A woman sitting at 3.9 will be told she's
                perfectly fine by conventional standards. Meanwhile, she may be
                living with textbook hypothyroid symptoms: stubborn weight
                gain, crushing fatigue, thinning hair, constipation, cold
                hands, dry skin, and depressed mood.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                And TSH alone only tells part of the story. A complete thyroid
                picture requires Free T4, Free T3, Reverse T3, and thyroid
                antibodies (TPO and Thyroglobulin). Most standard panels only
                test TSH, maybe Free T4. That's like trying to figure out
                what's wrong with your car by only checking whether there's
                gas in the tank.
              </p>

              <img
                src={labsImg}
                alt="A woman reviewing detailed blood test lab results, representing the comprehensive testing needed beyond standard panels"
                className="rounded-2xl shadow-lg w-full my-8"
                width={800}
                height={533}
                loading="lazy"
              />

              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                The 13-Minute Appointment
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                There's also a structural problem. The average primary care
                visit in the United States lasts between 13 and 16 minutes.
                In that window, your provider has to review your chart, listen
                to your concerns, perform any needed examination, make
                clinical decisions, document everything for billing, and
                handle whatever else you walked in with.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Thirteen minutes is not enough time to draw a line between
                your exhaustion, your weight plateau, your sleep disruption,
                your digestive issues, your hair loss, your mood changes, and
                your family history. It is absolutely not enough time to
                investigate the complex hormonal, metabolic, and inflammatory
                patterns that are almost always at work in women over 40.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                This isn't a failure of your physician. It's a failure of the
                healthcare system itself. Functional medicine was designed to
                fill exactly this gap: to take the time that conventional care
                cannot take and to order the tests that conventional insurance
                rarely covers.
              </p>
            </section>

            {/* ===== Inline CTA 1 ===== */}
            <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-8 my-12">
              <p className="font-display text-xl text-primary mb-3">
                Tired of hearing "your labs look normal" when you know
                something is off?
              </p>
              <p className="text-foreground/70 mb-5">
                Start with a free 15-minute discovery call. No pressure, no
                commitment, no sales pitch. Just a real conversation about
                what you're experiencing and whether functional medicine might
                be the missing piece.
              </p>
              <Link to="/free-15-min-call-with-katie" className="btn-gold">
                Book Your Free 15-Minute Call
              </Link>
            </div>

            {/* ========== Section 4: 5 Root Causes ========== */}
            <section id="five-root-causes-wisconsin-women">
              <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
                The 5 Root Causes Wisconsin Women Over 40 Keep Missing
              </h2>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                When we run comprehensive lab panels and take the time to
                build a complete health history, five patterns show up again
                and again among Wisconsin women in their 40s and 50s. These
                are the root causes that standard medical visits consistently
                overlook, and they are almost always the real reasons your
                body feels like it turned on you overnight.
              </p>

              {/* Root Cause 1 */}
              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                1. Perimenopause Starting Earlier Than You Expected
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Most women associate menopause with age 50 or 51, and that is
                roughly when periods stop for good. But the hormonal transition
                that leads up to that point, perimenopause, can begin in your
                late 30s. By the time you notice symptoms, the shift may have
                been underway for years.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Progesterone is usually the first hormone to fall. And
                progesterone is your calming hormone. It helps you sleep
                soundly, keeps your mood on an even keel, tamps down anxiety,
                and buffers the stimulating effects of estrogen. When
                progesterone drops but estrogen stays level (or even rises),
                you land in a state called estrogen dominance.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Estrogen dominance brings water retention, bloating, tender
                breasts, heavier periods, mood swings, weight gain in the hips
                and thighs, and a vague but persistent feeling that something
                is wrong. Because routine bloodwork does not include
                progesterone or estradiol testing, many women live with
                estrogen dominance for years and never know it.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                For Wisconsin women already running flat-out between work,
                family, and the relentless logistics of daily life, the impact
                compounds fast. You're living on adrenaline. Take away the
                progesterone buffer, and your nervous system has no cushion
                left. That's why small stressors now feel massive and why
                your emotional resilience seems to have disappeared overnight.
              </p>

              {/* Root Cause 2 */}
              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                2. Thyroid Dysfunction Hiding Behind "Normal" Results
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                The American Thyroid Association estimates that up to 60
                percent of people with thyroid disease don't know they have
                it. Women are five to eight times more likely than men to
                develop thyroid problems, and risk climbs significantly after
                age 40.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Subclinical hypothyroidism, where your TSH is elevated but
                still inside the conventional "normal" range, is remarkably
                common. Symptoms include unexplained weight gain (especially
                weight that won't budge no matter what you do), fatigue,
                brain fog, dry skin, thinning hair, constipation, sensitivity
                to cold, and elevated cholesterol.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Those symptoms sound familiar because they overlap heavily
                with perimenopause. That's exactly why so many women end up
                in a diagnostic gray zone. Their doctor assumes it's "just
                hormones" or "just aging," and the thyroid issue goes
                unidentified for years. A full thyroid panel (TSH, Free T4,
                Free T3, Reverse T3, TPO antibodies, Thyroglobulin antibodies)
                catches what a basic TSH screen completely misses.
              </p>

              {/* Root Cause 3 */}
              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                3. Insulin Resistance Running Silently
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Insulin resistance is one of the most underdiagnosed conditions
                in women over 40, and it is the primary driver of the stubborn
                belly fat that so many women fight against. When your cells
                stop responding properly to insulin, your body compensates by
                producing more of it. Elevated insulin tells your body to store
                fat, especially around the midsection, and makes it nearly
                impossible to burn stored fat for energy.
              </p>

              <img
                src={weightImg}
                alt="A frustrated Wisconsin woman in her 40s standing on a scale, experiencing the weight loss resistance that comes with insulin resistance and hormonal shifts"
                className="rounded-2xl shadow-lg w-full my-8"
                width={800}
                height={533}
                loading="lazy"
              />

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                The CDC estimates that approximately 96 million American adults
                have prediabetes, and more than 80 percent of them are unaware.
                Standard bloodwork checks fasting glucose and possibly
                hemoglobin A1c, but both of those markers can look "normal"
                long after insulin resistance has already taken hold. A fasting
                insulin test, which is inexpensive and straightforward, is one
                of the most valuable and most frequently skipped tests in
                conventional medicine.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                If you're craving carbs and sugar by 3 PM, if you get shaky
                or irritable when you skip a meal, if you crash hard after
                eating, or if the weight around your waist just keeps creeping
                up despite eating less, insulin resistance is very likely part
                of the picture. The encouraging news is that it responds
                extremely well to the right interventions when caught early.
              </p>

              {/* Root Cause 4 */}
              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                4. Chronic Inflammation You Can't See or Feel
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Chronic, low-grade inflammation is the invisible thread
                connecting many of the conditions that overwhelm women after
                40. Unlike acute inflammation (a swollen knee, a sore throat),
                chronic inflammation operates below the radar. You can't see
                it directly or point to a single symptom. But it affects your
                metabolism, your hormones, your cognitive function, your
                joints, your gut, and your mood.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Key markers like hs-CRP (high-sensitivity C-reactive protein),
                homocysteine, and ferritin can reveal systemic inflammation
                years before it develops into a diagnosable disease. But these
                markers are rarely part of routine bloodwork. They get ordered
                only when a doctor is already looking for something specific.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Wisconsin's long winters and lifestyle rhythms can push your
                inflammatory load higher. Less daylight means less movement.
                Colder months shift diets toward heavier, processed comfort
                foods. Reduced sun exposure compounds vitamin D deficiency.
                Poor sleep, elevated stress, and hormonal instability all
                layer on top. The result is a perfect setup for chronic
                inflammation that never shows up on a standard blood panel.
              </p>

              {/* Root Cause 5 */}
              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                5. Nutrient Deficiencies That Amplify Everything
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Your body requires specific nutrients in adequate amounts to
                manufacture hormones, regulate metabolism, control
                inflammation, produce neurotransmitters, and maintain energy.
                When those nutrients run low, every other system starts to
                break down. And this root cause is particularly significant
                for women living in Wisconsin.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                <strong>Vitamin D</strong> is the most critical example.
                Wisconsin sits between the 42nd and 47th parallels north. From
                roughly November through February, the sun's angle is too low
                for your skin to produce any meaningful vitamin D, no matter
                how long you spend outside. Researchers have described vitamin
                D deficiency as "endemic" among Wisconsin residents. Low
                vitamin D is linked to fatigue, depression, weakened immunity,
                weight gain, increased inflammation, and impaired thyroid
                function.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                <strong>Magnesium</strong> is another nutrient that most women
                are deficient in without knowing it. Magnesium supports over
                300 enzymatic reactions in your body, including those involved
                in energy production, muscle recovery, sleep regulation, and
                stress response. Low magnesium shows up as anxiety, insomnia,
                muscle cramps, headaches, and blood sugar swings.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                <strong>B12, iron, and ferritin</strong> round out the list of
                commonly missed deficiencies. B12 deficiency causes fatigue,
                brain fog, tingling, and mood changes. Low ferritin (your iron
                storage marker) produces exhaustion, hair loss, and exercise
                intolerance even when your hemoglobin reads "normal." Every
                one of these is testable. Every one of them is treatable. And
                every one of them gets overlooked in standard care.
              </p>
            </section>

            {/* ========== Section 5: Why Wisconsin Makes It Harder ========== */}
            <section id="why-wisconsin-makes-it-harder">
              <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
                Why Living in Wisconsin Makes It Harder
              </h2>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Everything we've talked about so far applies to women across
                the country. But there are specific factors that make Wisconsin
                women particularly susceptible to these overlapping health
                challenges. Understanding these factors isn't about placing
                blame. It's about context. And context is everything when it
                comes to finding solutions that actually work.
              </p>

              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                The Vitamin D Drought
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Wisconsin averages approximately 176 cloudy days per year,
                putting it among the cloudiest states in the country. From
                November through March, the combination of short days, low
                sun angle, and persistent cloud cover means your body produces
                virtually zero vitamin D through sun exposure. Even during
                summer months, many women spend the bulk of their daylight
                hours inside offices, hospital floors, classrooms, and cars.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Vitamin D acts more like a hormone than a vitamin. It
                influences thyroid function, immune regulation, mood
                stability, bone density, and metabolic health. Chronic vitamin
                D deficiency creates a cascading effect that makes every other
                root cause we've discussed worse. It's not a minor
                inconvenience. It's a foundational health issue that most
                Wisconsin women live with and never address.
              </p>

              <img
                src={winterImg}
                alt="A moody Wisconsin winter landscape with snow-covered dairy farmland and grey skies, illustrating the long dark winters that contribute to vitamin D deficiency and seasonal health challenges"
                className="rounded-2xl shadow-lg w-full my-8"
                width={800}
                height={533}
                loading="lazy"
              />

              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                Seasonal Affective Disorder and Mood
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Wisconsin's northern latitude and extended dark winters put
                residents at elevated risk for Seasonal Affective Disorder
                (SAD). Research has consistently ranked Wisconsin among the
                states most affected by seasonal depression, and SAD impacts
                women at significantly higher rates than men.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                The symptoms of SAD overlap heavily with perimenopause
                symptoms and thyroid dysfunction: low energy, difficulty
                concentrating, changes in sleep and appetite, weight gain,
                and a pervasive feeling of heaviness. When you layer SAD on
                top of hormonal shifts and nutrient depletion, it becomes
                nearly impossible to untangle what's causing what without
                comprehensive testing.
              </p>

              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                The Dairy State Diet
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Wisconsin is America's Dairyland, and that title comes with a
                food culture built around cheese, butter, cream-based soups,
                casseroles, bratwurst, Friday fish fries, and craft beer. These
                are deeply rooted traditions, and there is genuine joy in
                sharing them with family and community. Nobody is asking you to
                give up a Friday fish fry in Door County.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                But from a metabolic standpoint, the typical Wisconsin comfort
                food pattern is heavy on refined carbohydrates, saturated fats,
                and pro-inflammatory ingredients. When these dietary patterns
                become the baseline, especially during the six-month stretch
                of cold weather, they compound insulin resistance, feed
                chronic inflammation, and worsen nutrient depletion. Awareness
                doesn't mean guilt. It means understanding the terrain so you
                can navigate it.
              </p>

              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                High-Stress Professional Life
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Wisconsin's major metro areas, Milwaukee, Madison, Green Bay,
                Appleton, Racine, and Kenosha, are home to large populations
                of professional women working in healthcare, education,
                insurance, manufacturing, agriculture, technology, and state
                government. These are demanding, high-accountability roles
                with long hours and limited margin for downtime.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Chronic professional stress drives up cortisol production.
                Elevated cortisol directly opposes progesterone, disrupts
                insulin signaling, promotes abdominal fat storage, impairs
                thyroid hormone conversion, and feeds inflammation. For women
                already navigating hormonal transitions, sustained cortisol
                elevation accelerates every problem and makes recovery slower.
              </p>

              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                Limited Access to Specialized Care
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Functional medicine providers remain rare in Wisconsin,
                especially outside of Milwaukee and Madison. If you live in
                Wausau, Stevens Point, La Crosse, Eau Claire, Superior, or any
                of the smaller communities across the state, your options for
                specialized hormone and metabolic care have historically been
                extremely limited. Many women have simply accepted the status
                quo because they didn't know another option existed.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                This is precisely why telehealth has changed the landscape so
                dramatically. It eliminates the geographic barrier and makes
                expert functional medicine accessible whether you're in
                downtown Milwaukee, suburban Brookfield, rural Viroqua, or a
                small lake town in the Northwoods. Your zip code should never
                determine the quality of care you receive.
              </p>
            </section>

            {/* ===== Inline CTA 2 ===== */}
            <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-8 my-12">
              <p className="font-display text-xl text-primary mb-3">
                Ready to find out what's really going on?
              </p>
              <p className="text-foreground/70 mb-5">
                The free 15-minute discovery call is designed for women exactly
                like you: smart, proactive, and tired of getting brushed off.
                Let's talk about what you're going through and explore whether
                functional medicine is the right next step.
              </p>
              <Link to="/free-15-min-call-with-katie" className="btn-gold">
                Schedule Your Free Call Today
              </Link>
            </div>

            {/* ========== Section 6: Functional Medicine ========== */}
            <section id="functional-medicine-different-approach">
              <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
                How Functional Medicine Works Differently
              </h2>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                If conventional medicine asks "What disease do you have?"
                functional medicine asks a fundamentally different question:
                "Why is your body doing this?" That shift in thinking changes
                everything. It changes the labs that get ordered. It changes
                the solutions that get recommended. And it changes the
                outcomes you can realistically expect.
              </p>

              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                Root Cause vs. Symptom Management
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                In conventional care, symptoms tend to get treated one at a
                time. Tired? Here's a medication. Can't lose weight? Try this
                diet. Anxious? Consider this prescription. Each symptom gets
                its own separate intervention, and the underlying cause that
                links them all goes unaddressed.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Functional medicine recognizes that your fatigue, your weight
                resistance, your brain fog, your mood swings, and your sleep
                problems are probably not five separate issues. They are more
                likely five expressions of one or two underlying imbalances.
                Address the root cause, and many of those symptoms resolve
                together. That is not a theory. It is what we see happen with
                our patients, consistently.
              </p>

              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                Comprehensive Lab Testing
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                At Novaleo, we order labs that most conventional doctors never
                run. A typical comprehensive panel for us includes:
              </p>

              <ul className="space-y-3 mb-6 pl-1">
                {[
                  'Full thyroid panel (TSH, Free T4, Free T3, Reverse T3, TPO antibodies, Thyroglobulin antibodies)',
                  'Sex hormones (estradiol, progesterone, testosterone, DHEA-S, SHBG)',
                  'Metabolic markers (fasting insulin, fasting glucose, hemoglobin A1c, lipid panel)',
                  'Inflammatory markers (hs-CRP, homocysteine, ESR)',
                  'Nutrient levels (vitamin D, B12, folate, ferritin, iron panel, magnesium RBC)',
                  'Cortisol and adrenal markers',
                  'Complete metabolic panel and CBC with differential',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-lg text-foreground/85"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <img
                src={nutritionImg}
                alt="A balanced plate of anti-inflammatory whole foods including salmon, greens, avocado, and berries, representing the nutritional guidance provided in functional medicine"
                className="rounded-2xl shadow-lg w-full my-8"
                width={800}
                height={533}
                loading="lazy"
              />

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                This level of testing gives us a complete picture of what's
                happening inside your body. Instead of guessing, we can see
                precisely where the imbalances are, how they're connected to
                each other, and what needs to happen to correct them.
              </p>

              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                Personalized Protocols Built for You
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Once we understand your unique biochemistry, we create a
                protocol designed specifically for your body, your lifestyle,
                and your goals. This might include targeted supplementation
                based on actual lab-confirmed deficiencies (not guesswork),
                dietary adjustments tailored to your metabolic profile,
                lifestyle modifications that address your specific stressors,
                and, when appropriate, bioidentical hormone therapy or
                medication.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                No two protocols are the same. A 42-year-old marketing
                director in Madison with early perimenopause and insulin
                resistance needs a completely different plan than a 54-year-old
                school administrator in Oshkosh with Hashimoto's thyroiditis
                and severe vitamin D deficiency. Functional medicine honors
                that individuality.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                At Novaleo, we also prioritize time. Our initial Root Cause
                Clarity Session is a full 60 minutes. Not 13. That time lets
                us listen to your full story, understand the progression of
                your symptoms, explore your health history in depth, and
                connect the dots that have been missed for years.
              </p>
            </section>

            {/* ========== Section 7: What Wisconsin Women Experience ========== */}
            <section id="what-wisconsin-women-experience">
              <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
                What Wisconsin Women Experience with Us
              </h2>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                When women finally receive the comprehensive evaluation they
                deserve, the results speak for themselves. We see it again and
                again: women who spent years hearing that nothing was wrong
                finally discover what was wrong, and then experience
                meaningful improvement once the right interventions are in
                place.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Many of our Wisconsin clients report that within weeks of
                starting their personalized protocol, their energy begins to
                return. Not the jittery, caffeine-fueled energy they'd been
                white-knuckling through the day with, but real, sustained
                vitality that lasts from morning through evening. The
                afternoon crash fades. The morning fog lifts. They feel like
                themselves again for the first time in years.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Weight that seemed permanently stuck starts to shift. Not
                through extreme dieting or punishing workouts, but through
                metabolic optimization. When your thyroid is functioning
                properly, your insulin is balanced, your inflammation is
                managed, and your hormones are supported, your body naturally
                moves toward a healthier set point. The fight against the
                scale becomes less of a battle and more of a steady,
                predictable improvement.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Women describe transformations that go far beyond the number
                on the scale. They talk about sleeping through the night
                again. Feeling emotionally steady. Thinking clearly at work.
                Enjoying hikes at Devil's Lake and walks along the lakefront
                that they'd given up months ago. Reclaiming a confidence they
                thought was gone for good.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                These are not overnight miracles. They are the predictable
                outcomes of identifying the correct root causes, applying
                evidence-based interventions, and supporting your body's own
                ability to heal when given what it needs. It's not magic.
                It's medicine done with precision and patience.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                What strikes me most, after more than 20 years in healthcare,
                is the emotional shift. When a woman finally understands that
                her symptoms are real, measurable, and treatable, the relief
                is profound. The self-doubt melts away. The frustration gives
                way to hope. And that shift in mindset is often just as
                powerful as the lab results themselves.
              </p>
            </section>

            {/* ========== Section 8: Your First Conversation ========== */}
            <section id="your-first-conversation">
              <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
                Your First Conversation Starts Everything
              </h2>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                One of the biggest barriers to pursuing functional medicine is
                simply not knowing where to begin. The unfamiliar creates
                uncertainty, and uncertainty keeps women stuck in a system
                that isn't serving them well.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                At Novaleo, everything starts with a conversation, not a
                commitment. We begin with a free, no-pressure 15-minute
                discovery call where we talk about what you're experiencing.
                You can share your symptoms, the frustration of "normal" lab
                results, and what you actually want for your health going
                forward.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                This is not a sales call. It's a genuine clinical conversation
                to determine whether our functional medicine approach is the
                right fit for your specific situation. We'll answer your
                questions and help you understand how a root-cause
                investigation differs from the conventional care you've been
                receiving.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                If we don't believe we're the best fit for your needs, we'll
                tell you honestly and point you in a better direction. Our
                goal is to help you get answers, not to pressure you into
                anything.
              </p>
            </section>

            {/* ========== Section 9: Telehealth ========== */}
            <section id="telehealth-across-wisconsin">
              <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
                Telehealth Makes Expert Care Accessible Across All of Wisconsin
              </h2>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                The question we hear most often from Wisconsin women is: "I
                don't live near Milwaukee or Madison. Can I still work with
                you?" The answer is an unqualified yes.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Novaleo provides all consultations and follow-up appointments
                through secure, HIPAA-compliant telehealth. That means you
                can access the same quality of functional medicine care
                whether you're in the Third Ward in Milwaukee, a suburb of
                Madison, rural Baraboo, a small town outside Sheboygan, or a
                cabin in Minocqua. All you need is an internet connection and
                a private space.
              </p>

              <img
                src={telehealthImg}
                alt="A Wisconsin woman having a comfortable telehealth consultation from her living room, connecting with her functional medicine provider via video call"
                className="rounded-2xl shadow-lg w-full my-8"
                width={800}
                height={533}
                loading="lazy"
              />

              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                No More Driving Hours for Specialized Care
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Before telehealth, women in places like Eau Claire, Wausau,
                La Crosse, Marshfield, Superior, and Rhinelander had very few
                options for functional medicine. The closest providers were
                often two, three, or four hours away. That meant taking a
                full day off work, arranging childcare, spending money on gas,
                and repeating the entire process for every follow-up visit.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Telehealth removes all of that. You log in from your living
                room, your office, or your parked car during a lunch break.
                Your appointment happens on your schedule, in your space,
                without the logistical burden that made specialized care
                unreachable for so many women.
              </p>

              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                Labs at Your Local Lab, Results Reviewed Together
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Lab work is the one part of the process that happens in person,
                but not at our office. We send your lab orders electronically,
                and you complete your blood draw at any Quest Diagnostics or
                Labcorp location convenient to you. There are dozens of these
                locations across Wisconsin, from Racine to Green Bay, from
                Janesville to Fond du Lac.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                Once your results come in, we review everything together via
                telehealth, taking the time to explain every marker, what it
                means for your health, and how it connects to the symptoms
                you've been living with. This isn't a five-minute phone call
                where a nurse reads you numbers. It's a thorough, educational
                review that helps you understand your own body.
              </p>

              <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
                Also Serving Michigan
              </h3>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                In addition to Wisconsin, Novaleo is also licensed to provide
                telehealth services in Michigan. So if you have friends,
                family, or coworkers across the border dealing with similar
                struggles, we can help them too. Quality functional medicine
                care should never be limited by state lines or geography.
              </p>
            </section>

            {/* ===== Inline CTA 3 ===== */}
            <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-8 my-12">
              <p className="font-display text-xl text-primary mb-3">
                Wherever you are in Wisconsin, expert care is one call away.
              </p>
              <p className="text-foreground/70 mb-5">
                From Superior to Kenosha, from La Crosse to Green Bay, our
                telehealth services bring personalized functional medicine
                directly to you. Start with a free 15-minute call and
                discover what a root-cause approach can do for you.
              </p>
              <Link to="/free-15-min-call-with-katie" className="btn-gold">
                Book Your Free Discovery Call
              </Link>
            </div>

            {/* ========== Section 10: Your Next Step ========== */}
            <section id="your-next-step">
              <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
                Your Next Step
              </h2>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                If you've read this far, there's a good chance you recognized
                yourself on this page. The exhaustion that no amount of sleep
                fixes. The weight that won't respond to effort. The fog that
                makes you feel like you're losing your sharpness. The
                frustration of being told "everything looks normal" when
                absolutely nothing about how you feel is normal.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                I want you to know this: you have not been properly heard yet.
                But you are about to be. The symptoms you've been carrying are
                not a life sentence. They are signals. And those signals point
                to specific, identifiable, treatable root causes that have
                simply been overlooked by a system that wasn't built to find
                them.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                You don't need another diet. You don't need another fitness
                challenge. You don't need to "push through" or "just be
                grateful for what you have." You need someone who will sit
                with you, listen to your full story, run the right tests,
                and build a plan based on what's actually happening inside
                your body.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                That is exactly what we do at Novaleo Weight and Wellness.
                Every day. For women just like you. All across Wisconsin.
              </p>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                The free 15-minute discovery call is the first step. It is
                genuinely free, with no strings attached. You'll speak directly
                with a member of our care team, share what you've been going
                through, and find out if functional medicine is the right path
                forward. No commitment. No pressure. Just a conversation that
                could change the entire direction of your health.
              </p>

              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-10 my-10 text-center">
                <p className="font-display text-2xl md:text-3xl text-primary mb-4">
                  You've waited long enough for answers.
                </p>
                <p className="text-lg text-foreground/70 mb-6 max-w-xl mx-auto">
                  Book your free 15-minute discovery call today and take the
                  first step toward understanding what's really happening
                  inside your body.
                </p>
                <Link
                  to="/free-15-min-call-with-katie"
                  className="btn-gold text-lg px-8 py-4"
                >
                  Book Your Free 15-Minute Call with Katie
                </Link>
              </div>

              <p className="text-lg leading-relaxed text-foreground/85 mb-5">
                A personal note from Katie: I became a nurse practitioner
                because I believe that every person deserves to be heard,
                understood, and genuinely helped. After more than 20 years
                in healthcare, I started Novaleo because I watched too many
                women fall through the cracks of a system that wasn't
                designed for the complexity of their health. If you're
                reading this article and thinking "this sounds exactly like
                me," please reach out. Not because I want to sell you
                something, but because I know from two decades of clinical
                experience that answers exist, and you deserve to find them.
                It would be my privilege to help you on that path.
              </p>
            </section>

            {/* ========== Author Bio ========== */}
            <div className="border border-foreground/10 rounded-2xl p-8 mt-16 mb-12 flex flex-col sm:flex-row gap-6 items-start">
              <div className="shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-display text-primary text-2xl">KL</span>
              </div>
              <div>
                <h3 className="font-display text-xl text-primary mb-1">
                  Kathryn Long, NP-C
                </h3>
                <p className="text-sm text-secondary font-semibold mb-3">
                  Board-Certified Nurse Practitioner
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Katie is the founder of Novaleo Weight and Wellness, a
                  telehealth functional medicine practice serving Wisconsin
                  and Michigan. With over 20 years of experience in
                  healthcare, she specializes in helping women over 40
                  uncover the root causes of weight gain, fatigue, hormonal
                  imbalance, and metabolic dysfunction. Her approach combines
                  comprehensive lab testing, evidence-based protocols, and
                  compassionate patient care to deliver lasting results.
                  Katie is passionate about making quality functional
                  medicine accessible to women across Wisconsin, regardless
                  of where they live.
                </p>
              </div>
            </div>

            {/* ========== Final CTA Section ========== */}
            <section className="bg-primary rounded-2xl p-8 md:p-12 text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Ready to Stop Guessing and Start Healing?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join the growing number of Wisconsin women who have discovered
                what conventional medicine missed. Your free 15-minute
                discovery call is the first step toward answers, clarity, and
                feeling like yourself again.
              </p>
              <Link
                to="/free-15-min-call-with-katie"
                className="btn-gold text-lg px-8 py-4"
              >
                Book Your Free 15-Minute Call
              </Link>
            </section>
          </article>

          {/* ========== Desktop Sidebar TOC ========== */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24">
              <p className="font-display text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                In This Article
              </p>
              <ol className="space-y-3 border-l-2 border-primary/10 pl-4">
                {tocItems.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-foreground/60 hover:text-primary transition-colors block leading-snug"
                    >
                      <span className="text-secondary font-semibold mr-1.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-8 pt-6 border-t border-primary/10">
                <Link
                  to="/free-15-min-call-with-katie"
                  className="btn-primary text-sm w-full text-center block"
                >
                  Free 15-Min Call
                </Link>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    </main>
  );
}
