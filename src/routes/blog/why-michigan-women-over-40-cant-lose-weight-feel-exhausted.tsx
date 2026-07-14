import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogLayout } from "@/components/blog/BlogLayout";

import { useState } from "react";
import heroImg from "@/assets/blog/hero-fatigued-woman.jpg";
import wellnessImg from "@/assets/blog/michigan-wellness.jpg";
import telehealthImg from "@/assets/blog/telehealth-consultation.jpg";
import hormoneImg from "@/assets/blog/hormone-shifts.jpg";
import labsV2Img from "@/assets/blog/comprehensive-labs-v2.jpg";
import frustrationImg from "@/assets/blog/appointment-frustration.jpg";
import nutritionImg from "@/assets/blog/nutrition-balance.jpg";
import labsImg from "@/assets/blog/comprehensive-labs.jpg";

export const Route = createFileRoute(
  "/blog/why-michigan-women-over-40-cant-lose-weight-feel-exhausted",
)({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://novaweightandwellness.com/blog/why-michigan-women-over-40-cant-lose-weight-feel-exhausted",
      },
    ],
    meta: [
      { title: "Why Michigan Women Over 40 Can't Lose Weight & Feel Exhausted | Novaleo" },
      {
        name: "description",
        content:
          "Struggling with fatigue and belly fat? Learn why standard medicine misses the mark and how functional medicine helps Michigan women heal.",
      },
      {
        property: "og:title",
        content: "Why Michigan Women Over 40 Can't Lose Weight & Feel Exhausted",
      },
      {
        property: "og:description",
        content:
          "Struggling with fatigue and belly fat? Learn why standard medicine misses the mark and how functional medicine helps Michigan women heal.",
      },
      {
        property: "og:url",
        content:
          "https://novaweightandwellness.com/blog/why-michigan-women-over-40-cant-lose-weight-feel-exhausted",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogComponent,
});

const tocItems = [
  { id: "the-3-pm-wall", label: "The 3 PM Wall" },
  { id: "youre-not-imagining-it", label: "You're Not Imagining It" },
  {
    id: "why-your-doctor-keeps-saying-normal",
    label: "Why Your Doctor Keeps Saying 'Normal'",
  },
  {
    id: "five-hidden-root-causes",
    label: "5 Hidden Root Causes Michigan Women Miss",
  },
  {
    id: "why-michigan-women-especially-affected",
    label: "Why Michigan Women Are Especially Affected",
  },
  {
    id: "what-functional-medicine-does-differently",
    label: "What Functional Medicine Does Differently",
  },
  {
    id: "real-results-from-michigan-women",
    label: "Real Results from Michigan Women",
  },
  {
    id: "what-to-expect-first-visit",
    label: "What to Expect at Your First Visit",
  },
  {
    id: "telehealth-across-michigan",
    label: "Telehealth Across All of Michigan",
  },
  { id: "your-next-step", label: "Your Next Step" },
];

function BlogComponent() {
  return (
    <BlogLayout
      title="Why Michigan Women Over 40 Can't Lose Weight & Feel Exhausted"
      author="Kathryn Long, NP-C"
      date="2025-09-02"
      readTime="18 min read"
      heroImg={heroImg}
      heroAlt="Michigan woman experiencing fatigue and hormone imbalance"
      tocItems={tocItems}
      slug="why-michigan-women-over-40-cant-lose-weight-feel-exhausted"
      breadcrumbTitle="Why Michigan Women Can't Lose Weight"
    >
      {/* ========== Section 1: The 3 PM Wall ========== */}
      <section id="the-3-pm-wall">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-2 mb-6">
          The 3 PM Wall: When " Pushing Through " Stops Working
        </h2>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          It starts the same way every afternoon . You're sitting at your desk, maybe at a law firm
          in downtown Grand Rapids, or at a nonprofit office near the Detroit riverfront , or at
          your kitchen table in Lansing trying to finish one more email before school pickup. And
          then it hits you.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The fog rolls in. Not Lake Michigan fog, though you'd almost prefer that. This fog settles
          behind your eyes, wraps itself around your thoughts , and makes every word on your screen
          blur into the next. Your coffee stopped working two hours ago. Your willpower is gone. And
          that voice in the back of your head whispers the same thing it said yesterday : "
          Something is wrong with me."
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          You've been doing everything "right." You meal- prepped on Sunday. You forced yourself to
          the gym at 5:30 AM before your commute on I-96. You cut out gluten. You tried keto. You
          downloaded three apps. And yet the scale hasn't moved in months, or worse, it crept up
          another two pounds since last week.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Your jeans don't fit the way they did two years ago. Your face looks puffy in photos. You
          wake up tired after eight hours of sleep. You lose your train of thought mid- sentence in
          meetings . You snap at your kids over nothing and then cry in the bathroom because you
          don't recognize who you're becoming .
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          If this sounds familiar , please know this: you are not alone, you are not lazy, and you
          are not broken. There is a real, physiological explanation for everything you're
          experiencing . And the reason nobody has found it yet has nothing to do with you and
          everything to do with how the medical system is designed .
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This article is going to walk you through exactly why your body seems to be working
          against you, why your labs keep coming back "normal" despite how terrible you feel, and
          what you can actually do about it, starting today, from anywhere in Michigan.
        </p>
      </section>

      {/* ========== Section 2: You're Not Imagining It ========== */}
      <section id="youre-not-imagining-it">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          You're Not Imagining It
        </h2>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Let's get something out of the way right now. What you're feeling is not "just part of
          getting older." It's not "just stress." And it's definitely not in your head. The symptoms
          you are experiencing are your body sending you clear, urgent signals that something has
          shifted at the biochemical level.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Research shows that perimenopause , the transitional period before menopause , can begin
          as early as age 35 and last for 10 to 15 years. That means a 38-year-old woman in Troy and
          a 52-year-old woman in Marquette could both be dealing with the exact same hormonal
          disruptions, just at different stages of the same process.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          During this transition, estrogen and progesterone levels don't decline in a smooth,
          predictable line. They fluctuate wildly, sometimes spiking, sometimes crashing, often
          within the same month. These fluctuations affect your thyroid , your insulin sensitivity ,
          your cortisol rhythm, your neurotransmitters, your sleep architecture, and yes, your
          ability to lose weight.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          According to the North American Menopause Society, approximately 1.3 million women in the
          United States enter menopause each year. That's roughly 6,000 women per day. And the vast
          majority of them will experience symptoms, including weight gain, fatigue , brain fog ,
          mood swings, sleep disruption, and joint pain, that significantly impact their quality of
          life.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Here's the part that frustrates me as a healthcare provider: most of these women will go
          to their doctor, describe these symptoms, and hear some version of "Your labs look fine"
          or "That's just part of aging" or "Have you tried exercising more?" And they'll leave
          feeling dismissed, confused, and more hopeless than when they walked in.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          You deserve better than that. You deserve answers. And those answers exist. They're just
          not where conventional medicine typically looks.
        </p>
      </section>

      {/* ========== Section 3: Why Your Doctor Keeps Saying Normal ========== */}
      <section id="why-your-doctor-keeps-saying-normal">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          Why Your Doctor Keeps Saying "Everything Looks Normal"
        </h2>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Before we go further, let me be clear about something important. Your primary care doctor
          is not the villain here. Most physicians genuinely care about their patients and are
          working within a system that limits what they can do. The issue isn't your doctor's
          intentions. It's the framework they're operating inside.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Conventional medicine uses standard reference ranges for lab work. These ranges are
          designed to identify disease, not to optimize health. There's a massive difference between
          those two goals, and that difference is exactly where your symptoms are hiding.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          The TSH Example: Where "Normal" Gets Dangerous
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Let's look at thyroid function as a clear example. The standard reference range for TSH
          (thyroid-stimulating hormone) in most conventional labs is 0.5 to 4.5 mIU/L. If your
          result falls anywhere within that range, you'll be told your thyroid is "normal."
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          But here's what functional medicine practitioners know: the optimal TSH range, the range
          where most people actually feel their best, is between 1.0 and 2.0 mIU/L. That means a
          woman with a TSH of 3.8 will be told she's "fine" by conventional standards, but she may
          be experiencing significant hypothyroid symptoms, including weight gain, fatigue, cold
          hands, hair thinning, constipation, and depression.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          And TSH alone doesn't tell the whole story. A complete thyroid evaluation should include
          Free T4, Free T3, Reverse T3, and thyroid antibodies (TPO and Thyroglobulin). Most
          conventional panels only test TSH and maybe Free T4. That's like trying to diagnose a car
          problem by only checking the gas gauge while ignoring the engine, transmission, and
          electrical system.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          The Reality of Standard Medical Visits
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          There's also a structural issue. The average primary care appointment in the United States
          lasts between 13 and 16 minutes. In that window, your doctor needs to review your chart,
          ask about your symptoms, perform any necessary examination, make clinical decisions,
          document everything, and address any other concerns you brought in.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          That is not enough time to connect the dots between your fatigue, your weight gain, your
          sleep issues, your digestive problems, your mood changes, and your family history. It's
          certainly not enough time to investigate the complex hormonal, metabolic, and inflammatory
          patterns that are almost always behind these symptoms in women over 40.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This isn't a failure of your doctor. It's a failure of the system. And functional medicine
          exists specifically to fill this gap, to take the time conventional care can't take and to
          run the tests conventional insurance rarely covers.
        </p>

        <img
          src={frustrationImg}
          alt="A relatable woman in her 40s looking exhausted and overwhelmed while reviewing medical paperwork"
          className="rounded-2xl shadow-lg w-full my-8"
          width={800}
          height={533}
          loading="lazy"
        />
      </section>

      {/* ===== Inline CTA 1 ===== */}
      <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-8 my-12">
        <p className="font-display text-xl text-primary mb-3">
          Tired of hearing "your labs look normal" when you know something is off?
        </p>
        <p className="text-foreground/70 mb-5">
          Start with a free 15-minute discovery call. No pressure, no commitment. Just a real
          conversation about what you're experiencing and whether functional medicine might be the
          missing piece.
        </p>
        <Link to="/free-15-min-call-with-katie" className="btn-gold">
          Book Your Free 15-Minute Call
        </Link>
      </div>

      {/* ========== Section 4: The 5 Hidden Root Causes ========== */}
      <section id="five-hidden-root-causes">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          The 5 Hidden Root Causes Michigan Women Miss
        </h2>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          When we dig deeper with comprehensive lab panels and thorough health histories, five
          patterns emerge again and again among Michigan women in their 40s and 50s. These are the
          root causes that conventional medicine frequently overlooks, and they're often the exact
          reasons your body seems to have turned against you.
        </p>

        {/* Root Cause 1 */}
        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          1. Hormone Shifts Happening Earlier Than Expected
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Most women expect menopause to arrive around age 50 or 51, and that's true for the final
          cessation of periods. But perimenopause, the hormonal transition leading up to that point,
          can begin in your late 30s. By the time you notice symptoms, your hormones may have been
          shifting for years.
        </p>

        <img
          src={hormoneImg}
          alt="A thoughtful woman in her late 40s experiencing the subtle but impactful signs of hormone shifts and perimenopause"
          className="rounded-2xl shadow-lg w-full my-8"
          width={800}
          height={533}
          loading="lazy"
        />

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          During perimenopause, progesterone is usually the first hormone to decline. Progesterone
          is your calming hormone. It helps you sleep, keeps your mood stable, reduces anxiety, and
          balances the stimulating effects of estrogen. When progesterone drops but estrogen stays
          the same (or even increases), you end up in a state called estrogen dominance.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Estrogen dominance can cause water retention, bloating, breast tenderness, heavy periods,
          mood swings, weight gain around the hips and thighs, and a general sense of feeling "off."
          And because standard bloodwork doesn't routinely test progesterone or estradiol, many
          women live with estrogen dominance for years without ever knowing it.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          For Michigan women managing careers, families, and the demands of daily life, the impact
          compounds. You're already running on adrenaline. Add a progesterone deficit to the mix and
          your nervous system has no buffer left. That's why small stressors suddenly feel
          overwhelming and why your emotional resilience seems to have vanished overnight.
        </p>

        {/* Root Cause 2 */}
        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          2. Thyroid Dysfunction Hiding in Plain Sight
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          We touched on this earlier, but it deserves a deeper look. The American Thyroid
          Association estimates that up to 60 percent of people with thyroid disease are unaware of
          their condition. Women are five to eight times more likely than men to develop thyroid
          problems, and the risk increases significantly after age 40.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Subclinical hypothyroidism , where your TSH is elevated but still within the conventional
          "normal" range, is remarkably common. Symptoms include unexplained weight gain (especially
          resistance to losing weight despite effort), fatigue, brain fog, dry skin, thinning hair,
          constipation, cold intolerance, and elevated cholesterol.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Sound familiar? It should. These symptoms overlap significantly with perimenopause, which
          is why so many women get caught in a diagnostic no-man's-land. Their doctor assumes it's
          "just hormones" or "just aging," and the thyroid issue goes undiagnosed. A full thyroid
          panel (TSH, Free T4, Free T3, Reverse T3, TPO antibodies, and Thyroglobulin antibodies)
          can identify dysfunction that a basic TSH test completely misses.
        </p>

        {/* Root Cause 3 */}
        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          3. Insulin Resistance and Blood Sugar Chaos
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Insulin resistance is one of the most underdiagnosed conditions in women over 40, and it's
          a primary driver of the stubborn belly fat that so many women struggle with. When your
          cells become resistant to insulin, your body produces more and more insulin to compensate.
          High insulin levels signal your body to store fat, especially around your midsection, and
          make it nearly impossible to burn stored fat for energy.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The Centers for Disease Control and Prevention estimates that approximately 96 million
          American adults have prediabetes, and more than 80 percent of them don't know it. Standard
          bloodwork checks fasting glucose and maybe hemoglobin A1c, but these markers can look
          "normal" while insulin resistance is already well established. A fasting insulin test,
          which costs very little, is one of the most valuable and most frequently skipped tests in
          conventional medicine.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          If you're craving sugar and carbs in the afternoon, if you get irritable or shaky when you
          miss a meal, if you crash hard after eating, or if you're gaining weight around your waist
          despite eating less, insulin resistance is very likely part of the picture. The good news
          is that it's highly responsive to the right interventions, when caught early.
        </p>

        {/* Root Cause 4 */}
        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          4. Chronic Inflammation Running Silently
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Chronic, low-grade inflammation is the common thread connecting many of the conditions
          that plague women over 40. Unlike acute inflammation (a swollen ankle or a sore throat),
          chronic inflammation operates below the surface. You can't see it or feel it directly, but
          it affects everything: your metabolism , your hormones, your brain function, your joints,
          your gut, and your mood.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Key markers like hs-CRP (high-sensitivity C-reactive protein), homocysteine, and ferritin
          can reveal the presence of systemic inflammation long before it manifests as a diagnosable
          disease. Yet these markers are rarely included in routine bloodwork.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Michigan's climate and lifestyle patterns can contribute to inflammatory load. Long
          winters mean less physical activity, more comfort food, less sunshine, and more time
          indoors. Seasonal diet shifts toward heavier, processed foods increase inflammatory
          markers. Add stress, poor sleep, and hormonal fluctuations to the equation, and you have a
          perfect storm for chronic inflammation that conventional testing never detects.
        </p>

        {/* Root Cause 5 */}
        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          5. Nutrient Depletion That Compounds Everything
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This one is huge, and it's especially relevant for Michigan residents. Your body needs
          specific nutrients in adequate amounts to produce hormones, regulate metabolism, manage
          inflammation, support neurotransmitter production, and maintain energy. When those
          nutrients are depleted, every other system starts to struggle.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          <strong>Vitamin D</strong> is the most obvious example. Michigan sits between the 42nd and
          47th parallels, which means that from roughly October through April, the sun's angle is
          too low for your skin to produce meaningful vitamin D. Studies have found that vitamin D
          insufficiency affects the majority of Michigan residents during winter months. Low vitamin
          D is linked to fatigue, depression, weakened immunity, weight gain, and increased
          inflammation.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          <strong>Magnesium</strong> is another critical nutrient that most women are deficient in.
          Magnesium supports over 300 enzymatic reactions in the body, including those involved in
          energy production, muscle function, sleep regulation, and stress response. Low magnesium
          is associated with anxiety, insomnia, muscle cramps, headaches, and blood sugar
          dysregulation.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          <strong>B12, iron, and ferritin</strong> round out the list. B12 deficiency causes
          fatigue, brain fog, numbness, and mood changes. Low ferritin (iron storage) can cause
          exhaustion, hair loss, and exercise intolerance even when your hemoglobin is technically
          "normal." These are all testable, treatable deficiencies that fly under the radar of
          standard care.
        </p>
      </section>

      {/* ========== Section 5: Why Michigan Women Are Especially Affected ========== */}
      <section id="why-michigan-women-especially-affected">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          Why Michigan Women Are Especially Affected
        </h2>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Everything we've discussed so far applies to women across the country. But there are
          specific factors that make Michigan women particularly vulnerable to these overlapping
          health challenges. Understanding these factors isn't about blame. It's about context, and
          context is essential for finding solutions.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          The Vitamin D Crisis
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Michigan averages only about 65 clear days per year, making it one of the cloudiest states
          in the nation. From November through March, the combination of short days, low sun angle,
          and heavy cloud cover means your body produces almost zero vitamin D through sun exposure.
          Even in summer, many women spend most of their daylight hours inside offices, cars, and
          homes.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This isn't a minor issue. Vitamin D functions more like a hormone than a vitamin,
          influencing thyroid function, immune regulation, mood, bone density, and metabolic health.
          Chronic vitamin D deficiency creates a cascading effect that amplifies every other root
          cause we've discussed.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          High-Stress Professional Culture
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Michigan's major metro areas, including Grand Rapids, Detroit, Ann Arbor, Kalamazoo, and
          Lansing, are home to thriving professional communities. Healthcare, automotive, education,
          technology, and manufacturing sectors employ hundreds of thousands of women in demanding,
          high-responsibility roles.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Chronic professional stress elevates cortisol, which directly opposes the effects of
          progesterone, disrupts insulin signaling, promotes fat storage, impairs thyroid
          conversion, and increases inflammation. For women already navigating hormonal transitions,
          sustained cortisol elevation makes everything worse and faster.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Comfort Food Traditions and Seasonal Eating
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Michigan has a rich food culture, and that's a wonderful thing. But long winters naturally
          push our diets toward heavier, carbohydrate-rich comfort foods. Casseroles, baked goods,
          craft beer, and rich restaurant meals become weekly staples from October through April.
          These dietary patterns can worsen insulin resistance, increase inflammation, and
          contribute to nutrient depletion.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Limited Access to Functional Medicine
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Here's the practical challenge: functional medicine providers are still relatively rare in
          Michigan, especially outside of the larger metro areas. If you live in Traverse City,
          Petoskey, the Upper Peninsula, or any of the smaller communities across the state, your
          options for specialized hormone and metabolic care have historically been extremely
          limited.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This is exactly why telehealth has been such a game-changer. It removes the geographic
          barrier entirely and makes expert functional medicine care accessible whether you're in
          Kalamazoo, Mackinaw City, or Iron Mountain. Your zip code should never determine the
          quality of healthcare you receive.
        </p>

        <img
          src={wellnessImg}
          alt="Michigan landscape representing the wellness journey for women across the state, from the Great Lakes shores to bustling metro areas"
          className="rounded-2xl shadow-lg w-full my-8"
          width={800}
          height={533}
          loading="lazy"
        />
      </section>

      {/* ===== Inline CTA 2 ===== */}
      <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-8 my-12">
        <p className="font-display text-xl text-primary mb-3">
          Ready to find out what's really going on?
        </p>
        <p className="text-foreground/70 mb-5">
          The free 15-minute discovery call is designed for women exactly like you: smart,
          proactive, and tired of not getting answers. Let's talk about what you're experiencing and
          explore whether functional medicine is the right fit.
        </p>
        <Link to="/free-15-min-call-with-katie" className="btn-gold">
          Schedule Your Free Call Today
        </Link>
      </div>

      {/* ========== Section 6: What Functional Medicine Does Differently ========== */}
      <section id="what-functional-medicine-does-differently">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          What Functional Medicine Actually Does Differently
        </h2>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          If conventional medicine asks "What disease do you have?" functional medicine asks a
          fundamentally different question: "Why is your body doing this?" That shift in approach
          changes everything, from the labs that get ordered to the solutions that get recommended
          to the outcomes you can expect.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Root Cause vs. Symptom Management
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          In conventional care, symptoms often get treated individually. You're tired? Here's a
          prescription. You can't lose weight? Try this diet. You're anxious? Consider this
          medication. Each symptom gets its own intervention, and the underlying cause that connects
          them all goes unaddressed.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Functional medicine recognizes that your fatigue, weight gain, brain fog, mood swings, and
          sleep problems are probably not five separate issues. They're more likely five expressions
          of one or two underlying imbalances. Find and address the root cause, and many of those
          symptoms resolve together.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Comprehensive Lab Testing
        </h3>

        <img
          src={labsV2Img}
          alt="Female healthcare provider carefully reviewing detailed lab results on a wooden desk"
          className="rounded-2xl shadow-lg w-full my-8"
          width={800}
          height={533}
          loading="lazy"
        />

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          At Novaleo, we run labs that most conventional doctors never order. Our comprehensive
          panel typically includes:
        </p>

        <ul className="space-y-3 mb-6 pl-1">
          {[
            "Full thyroid panel (TSH, Free T4, Free T3, Reverse T3, TPO antibodies, Thyroglobulin antibodies)",
            "Sex hormones (estradiol, progesterone, testosterone, DHEA-S, SHBG)",
            "Metabolic markers (fasting insulin, fasting glucose, hemoglobin A1c, lipid panel)",
            "Inflammatory markers (hs-CRP, homocysteine, ESR)",
            "Nutrient levels (vitamin D, B12, folate, ferritin, iron panel, magnesium RBC)",
            "Cortisol and adrenal markers",
            "Complete metabolic panel and CBC with differential",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-foreground/85">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This level of testing gives us a complete picture of what's happening inside your body.
          Instead of guessing, we can see exactly where the imbalances are, how they're connected,
          and what needs to happen to correct them.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Personalized Protocols
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Once we understand your unique biochemistry, we create a protocol designed specifically
          for you. This might include targeted supplementation based on actual deficiencies (not
          guesswork), dietary adjustments tailored to your metabolic profile, lifestyle
          modifications that address your specific stressors, and, when appropriate, bioidentical
          hormone therapy or medication.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          There is no one-size-fits-all plan. A 43-year-old teacher in Ann Arbor with early
          perimenopause and insulin resistance needs a completely different approach than a
          52-year-old executive in Grand Rapids with Hashimoto's thyroiditis and vitamin D
          deficiency. Functional medicine honors that individuality.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          At Novaleo, we also take the time that the conventional system simply cannot offer. Our
          initial Root Cause Clarity Session is 60 minutes, not 15. That time allows us to listen to
          your full story, understand the timeline of your symptoms, explore your health history in
          depth, and start connecting dots that have been overlooked for years.
        </p>
      </section>

      {/* ========== Section 7: Real Results ========== */}
      <section id="real-results-from-michigan-women">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          Real Results from Michigan Women
        </h2>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          When women finally get the comprehensive evaluation they deserve, the results speak for
          themselves. We see it again and again at Novaleo: women who were told for years that
          nothing was wrong finally discover what was wrong, and then experience meaningful
          improvement once the right interventions are in place.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Many of our Michigan clients report that within weeks of starting their personalized
          protocol, their energy starts to come back. Not the jittery, caffeine-fueled energy they'd
          been relying on, but a genuine, sustained vitality that lasts throughout the day. The 3 PM
          crash fades. The morning fog lifts. They feel like themselves again for the first time in
          years.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Weight that seemed permanently stuck begins to shift. Not through extreme dieting or
          punishing exercise, but through metabolic optimization. When your thyroid is functioning
          properly, your insulin is balanced, your inflammation is managed, and your hormones are
          supported, your body naturally returns to a healthier set point. The fight against the
          scale becomes less of a war and more of a gradual, steady improvement.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Clients like Michelle W., Terri V., and Jacqueline H. have shared their experiences
          publicly, describing transformations that go far beyond the number on the scale. They talk
          about sleeping through the night again, feeling emotionally stable, thinking clearly at
          work, enjoying activities they'd given up, and reclaiming confidence they thought was gone
          for good.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          These aren't overnight miracles. They're the predictable outcomes of identifying the right
          root causes, applying evidence-based interventions, and supporting the body's own capacity
          to heal when given what it needs. It's not magic. It's medicine done with precision and
          patience.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          What strikes me most, after more than 20 years in healthcare, is the emotional
          transformation. When a woman finally understands that her symptoms are real, measurable,
          and treatable, the relief is profound. The self-doubt dissolves. The frustration gives way
          to hope. And that shift in mindset is often just as powerful as the lab results.
        </p>
      </section>

      {/* ========== Section 8: What to Expect ========== */}
      <section id="what-to-expect-first-visit">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          Finding Your Root Cause Starts With a Conversation
        </h2>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          One of the biggest barriers to seeking functional medicine care is simply not knowing
          where to start. The unfamiliar creates uncertainty, and uncertainty keeps women stuck in a
          system that isn't serving them.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          At Novaleo, everything begins with a conversation, not a commitment. We start with a free,
          no-pressure 15-minute discovery call where we talk about what you're experiencing. You
          have the opportunity to share your symptoms, the frustration of "normal" lab results, and
          your health goals.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This isn't a sales pitch. It's a genuine clinical consultation to determine if our
          functional medicine approach is the right fit for your specific situation. We'll answer
          your questions and help you understand how a true root-cause investigation differs from
          the conventional care you've received in the past.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          If we don't think we're the best fit for your needs, we'll tell you honestly and point you
          in a better direction. Our goal is to help you finally get answers, not to pressure you
          into a program.
        </p>
      </section>

      {/* ========== Section 9: Telehealth ========== */}
      <section id="telehealth-across-michigan">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          Telehealth Makes This Accessible Across All of Michigan
        </h2>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          One of the questions we hear most often is: "I don't live near Grand Rapids. Can I still
          work with you?" The answer is a resounding yes.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Novaleo provides all consultations and follow-ups via secure, HIPAA-compliant telehealth.
          That means you can access the same quality of functional medicine care whether you're in
          downtown Detroit, suburban Troy, rural Alpena, or a small town in the Upper Peninsula. All
          you need is an internet connection and a private space for your appointment.
        </p>

        <img
          src={telehealthImg}
          alt="Woman having a comfortable telehealth consultation from her Michigan home, connecting with her functional medicine provider via video call"
          className="rounded-2xl shadow-lg w-full my-8"
          width={800}
          height={533}
          loading="lazy"
        />

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          No More Driving Hours for Specialized Care
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Before telehealth, women in places like Traverse City, Marquette, Sault Ste. Marie, and
          Petoskey had very few options for functional medicine care. The closest providers were
          often two, three, or even four hours away. That meant taking a full day off work,
          arranging childcare, spending money on gas and possibly a hotel, and repeating the whole
          process for every follow-up appointment.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Telehealth eliminates all of that. You log in from your living room, your office, or your
          parked car during your lunch break. Your appointment happens on your schedule, in your
          space, without the logistical headache that used to make specialized care impossible for
          so many women.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Labs at Your Local Lab, Results Reviewed Together
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Lab work is the one part of the process that requires an in-person visit, but not to our
          office. We send your lab orders electronically, and you complete your blood draw at any
          Quest Diagnostics or Labcorp location convenient to you. There are hundreds of these
          locations across Michigan, from Dearborn to Gaylord, from Holland to Midland.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Once your results are in, we review everything together via telehealth, taking the time to
          explain every marker, what it means for your health, and how it connects to the symptoms
          you've been experiencing. This isn't a five-minute phone call with a nurse reading
          numbers. It's a thorough, educational review that empowers you to understand your own
          body.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Also Serving Wisconsin
        </h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          In addition to Michigan, Novaleo is also licensed to provide telehealth services in
          Wisconsin. So if you're across the border in Milwaukee, Madison, Green Bay, or anywhere
          else in the Badger State, we can help you too. Quality functional medicine care should
          never be limited by geography.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          We wrote an in-depth guide specifically for Wisconsin women dealing with these same
          challenges. If that's you, or someone you know, take a look:{" "}
          <Link
            to="/blog/gaining-weight-exhausted-after-40-wisconsin-women"
            className="text-secondary font-semibold hover:underline"
          >
            Gaining Weight and Exhausted After 40? What Every Wisconsin Woman Needs to Know
          </Link>
          .
        </p>
      </section>

      {/* ===== Inline CTA 3 ===== */}
      <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-8 my-12">
        <p className="font-display text-xl text-primary mb-3">
          Wherever you are in Michigan, expert care is one call away.
        </p>
        <p className="text-foreground/70 mb-5">
          From the Upper Peninsula to the Indiana border, our telehealth services bring personalized
          functional medicine directly to you. Start with a free 15-minute call and see the
          difference a root-cause approach can make.
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
          If you've read this far, chances are you recognized yourself in these pages. The fatigue.
          The stubborn weight. The brain fog. The frustration of hearing "everything looks normal"
          when nothing about how you feel is normal. You've been searching for answers for months,
          maybe years, and you're tired of coming up empty.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          I want you to know something: you have not been heard yet, but you are about to be. The
          symptoms you've been living with are not a life sentence. They are signals, and those
          signals point to specific, identifiable, treatable root causes that have simply been
          overlooked.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          You don't need another diet. You don't need another app. You don't need to "try harder" or
          "push through." You need someone who will sit with you, listen to your story, run the
          right tests, and build a plan that actually addresses what's happening inside your body.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          That is exactly what we do at Novaleo Weight and Wellness. Every day. For women just like
          you.
        </p>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The free 15-minute discovery call is the first step, and it is genuinely free with no
          strings attached. You'll speak directly with a member of our care team, share what you've
          been experiencing, and find out if functional medicine is the right path forward. There's
          no commitment required and no pressure to proceed. It's simply a conversation, and it
          could be the conversation that changes everything.
        </p>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-10 my-10 text-center">
          <p className="font-display text-2xl md:text-3xl text-primary mb-4">
            You've waited long enough for answers.
          </p>
          <p className="text-lg text-foreground/70 mb-6 max-w-xl mx-auto">
            Book your free 15-minute discovery call today and take the first step toward
            understanding what's really going on inside your body.
          </p>
          <Link to="/free-15-min-call-with-katie" className="btn-gold text-lg px-8 py-4">
            Book Your Free 15-Minute Call with Katie
          </Link>
        </div>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          A personal note from Katie: I became a nurse practitioner because I believe every person
          deserves to be heard, understood, and helped. After more than 20 years in healthcare, I
          started Novaleo because I saw too many women falling through the cracks of a system that
          wasn't designed for the complexity of their health needs. If you're reading this article
          and thinking "this sounds like me," please reach out. Not because I want to sell you
          something, but because I know from experience that answers exist and you deserve to find
          them. I'll be honored to help you on that journey.
        </p>
      </section>

      {/* ========== Author Bio ========== */}
      <div className="border border-foreground/10 rounded-2xl p-8 mt-16 mb-12 flex flex-col sm:flex-row gap-6 items-start">
        <div className="shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="font-display text-primary text-2xl">KL</span>
        </div>
        <div>
          <h3 className="font-display text-xl text-primary mb-1">Kathryn Long, NP-C</h3>
          <p className="text-sm text-secondary font-semibold mb-3">
            Board-Certified Nurse Practitioner
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Katie is the founder of Novaleo Weight and Wellness, a telehealth functional medicine
            practice serving Michigan and Wisconsin. With over 20 years of experience in healthcare,
            she specializes in helping women over 40 uncover the root causes of weight gain,
            fatigue, hormonal imbalance, and metabolic dysfunction. Her approach combines
            comprehensive lab testing, evidence-based protocols, and compassionate patient care to
            deliver lasting results. Katie is passionate about making quality functional medicine
            accessible to women across Michigan, regardless of where they live.
          </p>
        </div>
      </div>

      {/* ========== Final CTA Section ========== */}
      <section className="bg-primary rounded-2xl p-8 md:p-12 text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          Ready to Stop Guessing and Start Healing?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Join the hundreds of Michigan women who have discovered what conventional medicine missed.
          Your free 15-minute discovery call is the first step toward answers, clarity, and feeling
          like yourself again.
        </p>
        <Link to="/free-15-min-call-with-katie" className="btn-gold text-lg px-8 py-4">
          Book Your Free 15-Minute Call
        </Link>
      </section>
    </BlogLayout>
  );
}
