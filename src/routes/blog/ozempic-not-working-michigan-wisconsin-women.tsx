import { createFileRoute, Link } from "@tanstack/react-router";
import { BlogLayout } from "@/components/blog/BlogLayout";

import heroImg from "@/assets/blog/ozempic-hero-michigan-woman.jpg";
import mechanismImg from "@/assets/blog/glp1-appetite-mechanism.jpg";
import muscleImg from "@/assets/blog/ozempic-muscle-loss-strength-training.jpg";
import labsImg from "@/assets/blog/ozempic-functional-medicine-labs.jpg";
import winterImg from "@/assets/blog/michigan-wisconsin-winter-landscape.jpg";
import telehealthImg from "@/assets/blog/ozempic-telehealth-consultation.jpg";

export const Route = createFileRoute(
  "/blog/ozempic-not-working-michigan-wisconsin-women",
)({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://novaweightandwellness.com/blog/ozempic-not-working-michigan-wisconsin-women",
      },
    ],
    meta: [
      {
        title:
          "Why Ozempic Isn't Working: A Michigan & Wisconsin Guide | Novaleo",
      },
      {
        name: "description",
        content:
          "Ozempic plateau? Discover the 6 root causes your doctor isn't checking. Functional medicine solutions for women in Michigan & Wisconsin. Book a free call.",
      },
      {
        property: "og:title",
        content:
          "Why Ozempic Isn't Working: A Functional Medicine Guide for Michigan & Wisconsin Women",
      },
      {
        property: "og:description",
        content:
          "Ozempic plateau? Discover the 6 root causes your doctor isn't checking. Functional medicine solutions for women in Michigan & Wisconsin.",
      },
      {
        property: "og:url",
        content:
          "https://novaweightandwellness.com/blog/ozempic-not-working-michigan-wisconsin-women",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:image",
        content: "https://novaweightandwellness.com/og-image.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogComponent,
});

const tocItems = [
  {
    id: "the-ozempic-promise-and-plateau",
    label: "The Ozempic Promise and the Ozempic Plateau",
  },
  {
    id: "how-glp1-drugs-actually-work",
    label: "How GLP-1 Drugs Actually Work",
  },
  {
    id: "why-the-plateau-happens",
    label: "Why the Plateau Happens: 6 Root Causes",
  },
  {
    id: "the-muscle-loss-problem",
    label: "The Muscle Loss Problem",
  },
  {
    id: "side-effects-safety-women-over-35",
    label: "Side Effects and Safety for Women Over 35",
  },
  {
    id: "what-happens-when-you-stop",
    label: "What Happens When You Stop",
  },
  {
    id: "the-functional-medicine-approach",
    label: "The Functional Medicine Approach",
  },
  {
    id: "michigan-wisconsin-considerations",
    label: "Michigan and Wisconsin Considerations",
  },
  {
    id: "comprehensive-faq",
    label: "Comprehensive FAQ",
  },
  {
    id: "closing-katies-note",
    label: "A Personal Note from Katie",
  },
];

function BlogComponent() {
  return (
    <BlogLayout
      title="Why Am I Not Losing Weight on Ozempic? A Functional Medicine Perspective for Michigan and Wisconsin Women"
      author="Kathryn Long, NP-C"
      date="2026-07-23"
      readTime="32 min read"
      heroImg={heroImg}
      heroAlt="Woman in her 40s in Michigan considering weight loss options including Ozempic, sitting contemplatively at her kitchen table"
      tocItems={tocItems}
      slug="ozempic-not-working-michigan-wisconsin-women"
      breadcrumbTitle="Why Ozempic Isn't Working"
      faqSchema={faqSchema}
    >
      {/* Disclaimer */}
      <div className="bg-muted/60 border border-border rounded-xl p-5 mb-10 text-sm text-foreground/70 leading-relaxed">
        <strong className="text-foreground/90">Informational purposes only.</strong>{" "}
        This article is written for educational purposes and does not constitute medical advice. All decisions about GLP-1 medications or any medical treatment should be made in collaboration with your licensed healthcare provider. This content has been written by Kathryn Long, NP-C and is intended to be reviewed by a licensed clinician before any clinical application.
      </div>

      {/* Section 1 */}
      <section id="the-ozempic-promise-and-plateau">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-2 mb-6">
          The Ozempic Promise and the Ozempic Plateau
        </h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          It is February in Grand Rapids. You have been on semaglutide for four months. The first two were almost miraculous. The cravings quieted down, you felt full after half of what you used to eat, and the scale actually moved for the first time in years. Your primary care doctor was pleased. You were cautiously hopeful.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          And then, somewhere around month three, the losses slowed. And then they stopped. You are still taking your weekly injection. You are still eating less than you used to. But the number on the scale has barely shifted in six weeks. Your appetite is coming back in ways you were not expecting. The nausea that made the first weeks miserable has mostly settled, but now you are wondering if this is just it.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Or maybe you are in Milwaukee, and you never quite got the results the online testimonials promised. You lost eight pounds in the first month, and then the losses tapered off to one pound, then nothing, while your neighbor in Brookfield seems to be melting away on the same medication. You keep asking yourself what you are doing wrong.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Or perhaps you are in Traverse City and you have not started yet. You have been considering Ozempic or Wegovy for months because your regular doctor mentioned it, or you saw the ads, or a friend had success. But you have also heard about the muscle loss, the rebound weight gain when people stop, the gastrointestinal side effects. You want the full picture before you decide.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Whatever brought you to this article, I want you to know something before we go any further: if you are not losing weight on Ozempic, or if your results have stalled, that is not a personal failure. It is not evidence that you lack willpower or discipline. It is a physiological signal, and it has a set of real, identifiable explanations that most prescribers never discuss.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          GLP-1 receptor agonists, short for glucagon-like peptide-1 receptor agonists, like semaglutide (sold as Ozempic for type 2 diabetes and Wegovy for weight loss) and tirzepatide (sold as Mounjaro for diabetes and Zepbound for weight loss) are genuinely effective medications for many people. The clinical trial data on their ability to drive initial weight loss is real and significant. A landmark 2021 trial published in the New England Journal of Medicine showed that weekly semaglutide injections produced an average weight loss of about 15 percent of body weight over 68 weeks, a meaningful result.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          But there is a gap between what those clinical trials measured and what actually happens for the women I see every week in my practice. The trials do not tell the full story of what happens to thyroid function when you are eating dramatically less. They do not explain why your insulin resistance can persist despite the drug. They do not address the muscle you are losing along with the fat, or what happens to your metabolism when that muscle disappears, or why the weight comes rushing back the moment you stop the injection.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          That is what this article is about. Not whether GLP-1 drugs work. They can, for the right person, in the right context, with the right support structure around them. The question this article answers is why the Ozempic plateau happens, what is actually going on underneath the surface, and what a functional medicine approach to GLP-1 treatment looks like for women over 35 in Michigan and Wisconsin.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          We are going to cover a lot of ground. By the end of this article, you will understand exactly how these medications work and why they stop working. You will understand the six root causes that GLP-1 drugs simply cannot fix, the muscle loss problem that is unfolding in real time across the country as millions of people use these medications without adequate support, what happens to your body when you stop, and what a comprehensive functional medicine approach looks like alongside or instead of a GLP-1.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This is a long article because it is a complicated topic and you deserve a complete answer, not a quick take. Let us get into it.
        </p>
      </section>

      {/* Section 2 */}
      <section id="how-glp1-drugs-actually-work">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          How GLP-1 Drugs Actually Work (Plain-Language Mechanism)
        </h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          To understand why the plateau happens, you first need to understand what these medications are actually doing in your body. The name GLP-1 stands for glucagon-like peptide-1, a hormone your body naturally produces in the cells lining your small intestine. You make GLP-1 every time you eat. It serves as a biochemical messenger that tells your pancreas to release insulin, tells your liver to slow down glucose production, slows the rate at which food leaves your stomach (a process called gastric emptying), and sends signals to your brain that you have eaten enough.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          In a well-functioning metabolic system, this works beautifully. You eat, GLP-1 rises, you feel satisfied, your blood sugar stays stable, and your appetite naturally quiets down until your body needs more fuel. But in people with insulin resistance, obesity, or metabolic dysfunction, this system becomes blunted. GLP-1 signaling is impaired. The brain does not get the satiety message as clearly. Gastric emptying happens faster than it should, meaning you get hungry again sooner.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Semaglutide, the active compound in Ozempic and Wegovy, is a synthetic molecule engineered to mimic GLP-1 but with one crucial modification: it stays in your body for days rather than the few minutes that natural GLP-1 persists. That long half-life is why you take it once a week. It binds to GLP-1 receptors throughout your body, particularly in the pancreas, the gut, and the brain, and keeps those receptors activated continuously.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The result is a powerful combination of effects. Appetite suppression: the drug tells your hypothalamus, the brain's hunger control center, that you are full, and it delivers that message persistently. Slower gastric emptying: food moves through your stomach more slowly, which extends the physical sensation of fullness and blunts post-meal blood sugar spikes. Improved insulin secretion: the pancreas releases insulin more appropriately in response to meals, which helps stabilize blood sugar. Reduced glucagon: the drug suppresses glucagon, a hormone that tells the liver to dump glucose into the bloodstream between meals.
        </p>
        <img
          src={mechanismImg}
          alt="Illustration of the gut-brain appetite signaling pathway showing how GLP-1 hormones communicate satiety signals from the digestive system to the brain"
          className="rounded-2xl shadow-lg w-full my-8"
          width={800}
          height={450}
          loading="lazy"
        />
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Tirzepatide, sold as Mounjaro for diabetes and Zepbound for weight loss, goes one step further. It is what is called a dual agonist, meaning it activates both the GLP-1 receptor and a second receptor called GIP (glucose-dependent insulinotropic polypeptide). This dual action appears to produce somewhat greater average weight loss than semaglutide alone, though the clinical and real-world picture continues to evolve as more long-term data becomes available.
        </p>
        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Why It Works So Well Initially for Many Women
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          For someone who has been struggling with constant hunger, food noise (the persistent mental preoccupation with food), carbohydrate cravings, and blood sugar swings, the early weeks on a GLP-1 can feel transformative. The food noise gets quiet. The obsessive thinking about what you are going to eat next largely disappears. You can stop eating when you are satisfied rather than pushing through to fullness. And because you are eating significantly less, you are, at least initially, consuming fewer calories than you are burning.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This is real. It works. For many people, especially in the first three to six months, weight comes off at a pace they have not seen in years, sometimes ever. The early success stories are genuine, and they deserve to be acknowledged honestly before we discuss why they so often do not last.
        </p>
        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          The Crucial Limitation: Treating the Symptom, Not the System
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Here is where I need to be very direct with you, because this is the part that most prescribers gloss over. GLP-1 drugs work by suppressing appetite and slowing digestion. They are not addressing the underlying hormonal dysfunction, the thyroid disorder, the chronic cortisol elevation, the insulin resistance pattern that predates the medication, the estrogen-progesterone imbalance of perimenopause, or the nutrient depletion that was already compromising your metabolism before you ever took your first injection.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Think of it this way. Imagine your metabolism is a leaky bucket. GLP-1 medication reduces how much water you are pouring into the top. That is genuinely useful. But the bucket is still leaking. The holes, meaning the underlying hormonal and metabolic dysfunction, are still there. And as your body adapts to the drug, as your metabolism downregulates, as you lose muscle along with fat, the bucket effectively gets smaller and the rate of leaking becomes proportionally more significant.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This is not a criticism of the medication. It is simply an accurate description of what it does and does not do. And understanding this distinction is the key to understanding why the Ozempic plateau is not a mystery. It is predictable. It is explainable. And with the right approach, it is addressable.
        </p>
      </section>

      {/* Section 3 */}
      <section id="why-the-plateau-happens">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          Why the Plateau Happens: 6 Root Causes Ozempic Cannot Touch
        </h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          When women come to Novaleo after months on a GLP-1 with stalled or disappointing results, the investigation almost always uncovers one or more of the following six patterns. These are the root causes that semaglutide and tirzepatide simply do not address, and they are the real reason so many women experience a semaglutide plateau.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          1. Thyroid Dysfunction the Drug Cannot Fix
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The thyroid gland is the master regulator of your metabolism. It produces hormones, primarily thyroxine (T4) and triiodothyronine (T3, the active form), that control the speed at which every cell in your body burns energy. When thyroid function is suboptimal, even just slightly below what your individual body needs to thrive, your basal metabolic rate (BMR, the number of calories your body burns at rest) drops. Fat oxidation slows. Weight loss becomes dramatically harder, and in many cases functionally impossible, regardless of how little you are eating.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Here is what makes this particularly relevant for GLP-1 users: when you eat significantly less, your thyroid function often decreases further. This is a built-in survival mechanism. Your body interprets a prolonged calorie deficit as a famine signal and downregulates the thyroid as a way of conserving energy. So the very thing the medication is doing, helping you eat less, can over time blunt thyroid output and slow your metabolism even further. This is one of the most important and least-discussed contributors to the wegovy weight loss stalled pattern.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The standard screening test for thyroid function is TSH (thyroid-stimulating hormone). But TSH alone is woefully incomplete. It tells you how much your pituitary gland is signaling your thyroid to produce hormones, but it does not tell you how much T4 your thyroid is actually making, how well your body is converting T4 into the active T3 your cells can use, whether you have an elevated Reverse T3 (rT3, an inactive form that blocks active T3 from doing its job), or whether you have autoimmune thyroid antibodies indicating Hashimoto's thyroiditis.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          A complete thyroid picture requires TSH, Free T4, Free T3, Reverse T3, and both TPO (thyroid peroxidase) and Thyroglobulin antibodies. We cover this in significant detail in{" "}
          <Link
            to="/blog/the-ultimate-guide-to-hormones-and-weight-resistance-over-40"
            className="text-secondary font-semibold hover:underline"
          >
            The Ultimate Guide to Hormones and Weight Resistance Over 40
          </Link>
          {" "}if you want to go deeper on thyroid specifically. The short version: a woman can have a TSH of 3.8 (flagged as normal on a standard panel), a Free T3 in the bottom quartile of the reference range, and an elevated Reverse T3 from the chronic calorie restriction her GLP-1 is producing, and every single test will come back labeled normal by conventional standards. Meanwhile, her metabolism is operating at a significant deficit compared to where it needs to be for sustained fat loss.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The American Thyroid Association estimates that up to 60 percent of people with thyroid disease are unaware they have it. Women are five to eight times more likely than men to develop thyroid problems, and risk increases after age 35. Hashimoto's thyroiditis, the most common autoimmune thyroid condition, affects an estimated 14 million Americans, the majority of them women. If your Ozempic plateau started around the same time your calorie intake dropped significantly, thyroid function is one of the first things worth investigating.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          2. Estrogen Dominance and Progesterone Decline in Perimenopause
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          For women in their late 30s, 40s, and early 50s, there is almost always a hormonal context surrounding the weight struggles that led them to consider a GLP-1 in the first place. That context is perimenopause, the transitional phase before menopause that can begin as early as age 35 and last a decade or more.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The signature hormonal pattern of early perimenopause is this: progesterone falls first and fastest. Estrogen initially stays relatively level or even rises in some fluctuating patterns before eventually declining. The result is a state called estrogen dominance, not necessarily because estrogen is unusually high in absolute terms, but because the progesterone that normally balances and modulates estrogen's effects is no longer present in sufficient quantities.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Estrogen dominance creates several metabolic effects that directly work against weight loss. Estrogen promotes fat storage, particularly in the hips, thighs, and abdomen. It can drive water retention and bloating. It blunts the action of thyroid hormones at the cellular level, meaning even if your thyroid numbers look reasonable, the hormones may not be working as efficiently. Estrogen dominance also worsens insulin resistance, creating a two-front metabolic challenge that a GLP-1 alone is simply not equipped to manage.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Meanwhile, the declining progesterone has its own metabolic consequences. Progesterone is a natural thermogenic hormone, meaning it helps raise basal body temperature and supports calorie burning. It also promotes the action of thyroid hormones and has a natural diuretic effect, reducing fluid retention. When progesterone falls, women often experience the opposite: reduced metabolic rate, water retention, and a reduced capacity to use thyroid hormones effectively.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          None of this is addressed by semaglutide or tirzepatide. The drug does not measure or modulate your estrogen-to-progesterone ratio. It does not know that you are in perimenopause. It does not compensate for the metabolic slowdown that comes with declining sex hormone levels. This is why, for perimenopausal women specifically, GLP-1 medication without concurrent hormonal assessment and support often produces disappointing or short-lived results.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Accurate hormonal assessment requires more than a single estradiol and FSH level drawn on a random day. To understand the complete hormonal picture, including how your body produces, uses, and metabolizes hormones, functional medicine providers often use the DUTCH panel (dried urine test for comprehensive hormones), which measures estrogen metabolites, progesterone metabolites, cortisol patterns, and androgens with a level of detail that a standard blood test simply cannot provide.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          3. Insulin Resistance That Predates and Persists Despite the Drug
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Many women who start GLP-1 medications have insulin resistance, often diagnosed as pre-diabetes or metabolic syndrome, that drove the weight gain in the first place. GLP-1 drugs improve post-meal insulin sensitivity and reduce the glucose spikes after meals, which is genuinely valuable. But they do not address the deeper, chronic insulin resistance pattern that has been building for years.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Here is how insulin resistance works. When your cells stop responding normally to insulin's signal, your pancreas compensates by producing more insulin to get the same effect. This elevated baseline insulin level tells your fat cells to store more fat and blocks the release of stored fat for energy. The result is that even in a calorie deficit, your body stubbornly refuses to burn stored fat efficiently because the hormonal signal, elevated insulin, is instructing it not to.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          GLP-1 medications help manage blood sugar and reduce post-meal insulin spikes. But fasting insulin, the level of insulin in your blood before you eat, can remain elevated even in people on semaglutide who are eating far less. This is because the underlying cellular insulin resistance, the reason the body was overproducing insulin in the first place, has not been corrected. The drug manages the blood sugar consequences but does not repair the cellular signaling dysfunction.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Fasting insulin is one of the most important and most frequently skipped tests in conventional medicine. A fasting glucose and a hemoglobin A1c (HbA1c) can both look normal while fasting insulin is already elevated, which is a sign of insulin resistance that predates any blood sugar abnormality. At Novaleo, measuring fasting insulin is routine. For women on GLP-1 medications who are hitting a plateau, it is essential.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The practical interventions for underlying insulin resistance go well beyond medication. They include dietary patterns that reduce post-meal glucose spikes (specific carbohydrate types, meal timing, food ordering), targeted resistance training (which independently improves muscle cell insulin sensitivity), stress management (because cortisol directly drives insulin resistance), and specific nutrients like magnesium, berberine, alpha-lipoic acid, and chromium that support cellular insulin signaling. None of this happens automatically when you take a GLP-1.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          4. Cortisol and Chronic Stress Undermining Every Result
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Cortisol is your primary stress hormone, produced by the adrenal glands in response to any physical or psychological stressor. In the short term, cortisol is essential. It mobilizes energy, sharpens focus, and prepares you to respond to threats. The problem is that in modern life, the cortisol response is activated persistently, by work deadlines, financial stress, relationship strain, poor sleep, overexercising, and yes, even the stress of a restrictive diet.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Chronically elevated cortisol has a direct and significant impact on weight and metabolism. It tells the liver to release glucose into the bloodstream (raising blood sugar even when you have not eaten), directly drives fat storage in the abdomen (visceral fat, the metabolically most damaging type), blocks progesterone production (worsening the hormonal imbalance of perimenopause), blunts thyroid hormone conversion, promotes muscle breakdown, and disrupts sleep architecture. Poor sleep independently worsens cortisol, creating a vicious cycle that a GLP-1 medication simply cannot interrupt.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          GLP-1 drugs have no mechanism for reducing cortisol. They do not modulate your stress response, improve your sleep, address your adrenal output, or protect your muscles from cortisol-driven breakdown. A woman in Kalamazoo managing a demanding career, aging parents, and the emotional weight of feeling like her body is failing her can be on the highest dose of semaglutide available and still be losing the weight loss battle because cortisol is overriding every other intervention.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Assessing cortisol accurately requires more than a single morning blood draw. The most informative assessment is a four-point salivary or urinary cortisol test that measures your cortisol output at multiple points throughout the day, revealing patterns of excess, depletion, or dysrhythmia that a single snapshot cannot capture. This is part of the DUTCH panel mentioned above and is among the most clinically useful tests we run for GLP-1 users experiencing a plateau.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          5. Muscle Loss from Rapid Weight Loss Without Adequate Support
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This is the root cause I want to spend the most time on, because it is getting the most attention in current clinical and public discourse around GLP-1 medications, and for very good reason. It is also one of the most consequential long-term concerns for women using these medications without a comprehensive support protocol. We devote the entire next section of this article to the GLP-1 muscle loss problem and what a protective protocol looks like.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The short version: when you lose weight rapidly, whether through calorie restriction, medication, or both, your body does not lose fat exclusively. It also breaks down muscle tissue. With the aggressive appetite suppression of GLP-1 medications, which can reduce daily calorie intake by 30 to 50 percent or more, muscle loss becomes a serious concern. Research published in the journal Obesity in 2023 found that in some GLP-1 users, up to 40 percent of the weight lost was lean mass rather than fat.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Muscle is metabolically active tissue. Pound for pound, muscle burns significantly more calories at rest than fat. When you lose muscle, you reduce your BMR. The more muscle you lose, the slower your metabolism becomes, and the harder it is to continue losing weight. This is one of the central physiological mechanisms behind the Ozempic plateau, and it compounds the metabolic slowdown from thyroid and hormonal changes described above.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          6. Nutrient Depletion from Prolonged Appetite Suppression
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Your body requires a constant supply of micronutrients to manufacture hormones, regulate metabolism, repair tissue, produce neurotransmitters, support immune function, and maintain energy production. When GLP-1 medications reduce your food intake by 30 to 50 percent or more, and when that reduced intake is not carefully structured to prioritize nutrient density, micronutrient deficiencies will develop. This is not speculation. It is biochemistry.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The nutrients most commonly depleted in GLP-1 users include protein (inadequate intake drives muscle loss), vitamin B12 (essential for energy metabolism and neurological function), iron and ferritin (critical for oxygen transport), zinc (required for thyroid hormone production), magnesium (supports energy metabolism, sleep quality, and insulin sensitivity), vitamin D (influences metabolic rate and immune function), folate (required for DNA synthesis and cell repair), and omega-3 fatty acids (anti-inflammatory and essential for hormone production).
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Many of these deficiencies are clinically silent for months. The downstream effects accumulate as fatigue that feels like the drug is not working, brain fog, mood changes, poor sleep quality, hair thinning, and compounding difficulty losing weight. When we run comprehensive micronutrient panels on women who have been on GLP-1 medications for several months, the results are almost always illuminating and almost always directly relevant to the plateau they are experiencing.
        </p>
      </section>

      {/* CTA 1 */}
      <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-8 my-12">
        <p className="font-display text-xl text-primary mb-3">
          If your Ozempic results have stalled, there is a reason. Let's find it.
        </p>
        <p className="text-foreground/70 mb-5">
          A free 15-minute discovery call is the starting point. No pressure, no commitment, no sales pitch. Just an honest conversation about what might be missing from your current approach and whether functional medicine is the right next step.
        </p>
        <Link to="/free-15-min-call-with-katie" className="btn-gold">
          Book Your Free 15-Minute Call
        </Link>
      </div>

      {/* Section 4 */}
      <section id="the-muscle-loss-problem">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          The Muscle Loss Problem: What GLP-1 Drugs Do Not Tell You
        </h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Because muscle loss in GLP-1 users is such a significant clinical concern, it deserves its own dedicated section. This is not a fringe worry or the concern of a few outlier patients. It is an issue that endocrinologists, cardiologists, geriatricians, and obesity medicine specialists are actively discussing in peer-reviewed literature. And it hits women over 35 particularly hard, for reasons rooted in the hormonal changes of perimenopause.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Why Losing Muscle Worsens the Exact Problem the Drug Was Meant to Solve
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Let us trace the chain of events carefully. You start semaglutide. Your appetite suppresses significantly. You are eating, let us say, 1,200 calories a day instead of your previous 2,000. You lose weight, initially some fat and some muscle. As the months pass, the calorie deficit continues but the rate of fat loss slows. Simultaneously, the muscle loss you have experienced has reduced your BMR, perhaps by 100 to 200 calories per day, meaning your body now burns fewer calories at rest than it did when you started. The effective calorie deficit has narrowed or closed entirely.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This is the plateau, explained mechanistically. You have not changed what you are doing. The drug has not stopped working at suppressing your appetite. But your metabolism has adapted downward in response to muscle loss and caloric restriction, and the deficit that was driving weight loss no longer exists or has shrunk dramatically. The only ways forward are to eat even less (which accelerates further muscle loss and nutrient depletion), increase metabolic rate (which requires building muscle back through adequate protein and resistance training), or dose escalation (which has its own limits and risks). This is why the GLP-1 plateau is so frustrating and so common.
        </p>
        <img
          src={muscleImg}
          alt="A woman in her 40s doing dumbbell strength training in a home gym, demonstrating the resistance training needed to prevent muscle loss during GLP-1 weight loss treatment"
          className="rounded-2xl shadow-lg w-full my-8"
          width={800}
          height={450}
          loading="lazy"
        />

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          The Perimenopause Compounding Factor
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Women over 35 are already losing muscle mass as part of the normal aging process, at a rate of approximately 3 to 8 percent per decade starting in the 30s, which accelerates significantly during the hormonal transition of perimenopause. Estrogen plays a direct protective role in preserving muscle tissue. As estrogen declines, muscle protein synthesis, the process by which your body builds and repairs muscle, becomes less efficient. At the same time, cortisol's muscle-catabolizing effect becomes relatively more powerful as progesterone, which modulates cortisol, declines.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          A woman in her 40s who starts a GLP-1 medication is therefore walking into the muscle loss problem from an already disadvantaged position. She is simultaneously dealing with hormonal shifts that are naturally reducing muscle mass, a drug that is dramatically reducing her calorie intake (and therefore her protein intake unless she is very intentional), and potentially elevated cortisol from the stress of her life stage. Each of these factors independently promotes muscle loss. Together, they create a compounding effect that is responsible for many of the most disappointing GLP-1 outcomes we see clinically.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          What a Protective Protocol Looks Like
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Protecting muscle during GLP-1 treatment requires deliberate effort and specific clinical guidance. The foundational pillars are protein intake, resistance training, body composition monitoring, and hormonal support.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Protein intake: Because GLP-1 drugs dramatically reduce overall food volume, many users inadvertently eat far too little protein. Current evidence suggests that women on GLP-1 medications need at least 1.2 to 1.6 grams of protein per kilogram of body weight per day to minimize muscle loss, and some researchers advocate for even higher targets during active weight loss phases. When your stomach is telling you it is full after half a chicken breast and a few bites of salad, meeting those protein targets requires intentional planning and often supplementation with high-quality protein sources.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Resistance training: Progressive resistance training, lifting weights, using resistance bands, or bodyweight exercises that progressively challenge your muscles, is the single most powerful tool for preserving muscle during caloric restriction. It should be non-negotiable for anyone on a GLP-1 medication, yet it is rarely mentioned during the prescription process. Even two to three sessions per week focusing on compound movements (squats, deadlifts, rows, presses) can make a meaningful difference in body composition outcomes. At Novaleo, we tailor resistance training recommendations to each patient's baseline fitness, joint health, and available resources.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Body composition monitoring: Body weight alone is a misleading metric. A scale cannot tell you whether the pounds you have lost are fat, muscle, or water. A DEXA (dual-energy X-ray absorptiometry) scan, or at minimum a bioelectrical impedance analysis, provides a breakdown of fat mass versus lean mass and is an invaluable tool for tracking what you are actually losing. We recommend baseline and quarterly monitoring for anyone on a GLP-1 medication.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Hormonal support: Because estrogen and testosterone both play protective roles in maintaining muscle mass, addressing the hormonal decline of perimenopause is not just about managing hot flashes and sleep disruption. It is also a muscle preservation strategy. Women whose estrogen and testosterone levels are adequately supported maintain lean mass more effectively during weight loss. This is one of the most compelling arguments for integrating hormone assessment and, when appropriate, bioidentical hormone therapy into a GLP-1 protocol for perimenopausal women.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Finally, the rebound body composition problem is worth naming explicitly. When women who have lost significant muscle mass stop their GLP-1 medication, the weight that returns is predominantly fat. So they end up with more body fat and less muscle than before they started, which is a meaningfully worse metabolic situation than where they began. This cycle of muscle-depleting weight loss followed by fat regain is increasingly recognized as a serious unintended consequence of GLP-1 use without proper support structure, and it is one of the primary reasons functional medicine oversight matters for anyone using these medications.
        </p>
      </section>

      {/* Section 5 */}
      <section id="side-effects-safety-women-over-35">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          Side Effects and Safety Considerations for Women Over 35
        </h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Most of the major media coverage of GLP-1 side effects focuses on the gastrointestinal symptoms, nausea, vomiting, diarrhea, constipation, and stomach discomfort, which are indeed the most common adverse effects reported in clinical trials and real-world use. These GI symptoms are typically most severe during the dose escalation phase and tend to diminish as the body adapts to the medication.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          However, for women over 35, particularly those in perimenopause, there are several additional considerations that deserve careful attention and that are rarely discussed during the brief prescribing conversation.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Gastrointestinal Side Effects and Nutrient Absorption
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Beyond the discomfort of nausea and vomiting, the slowed gastric emptying that GLP-1 drugs produce has implications for nutrient absorption. Digestion and nutrient assimilation depend on the coordinated movement of food through your gastrointestinal tract. When gastric emptying is significantly slowed, this coordination can be disrupted.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          For perimenopausal women who are already at higher risk for vitamin B12 deficiency (due to declining stomach acid production with age), iron deficiency (due to menstrual changes during perimenopause), and magnesium deficiency (driven by stress and inadequate intake), GLP-1-induced reduction in food intake and altered GI motility can compound existing nutritional vulnerabilities in ways that are not apparent until deficiencies are significant. This is another reason why proactive micronutrient monitoring is a clinical necessity, not an optional extra, for women on these medications.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Gallbladder Concerns
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Rapid weight loss of any kind increases the risk of gallstone formation. When you lose weight quickly, the liver secretes more cholesterol into bile, and the gallbladder contracts less frequently because you are eating less, creating conditions favorable for gallstone development. GLP-1 medications carry a documented elevated risk of gallbladder disease, including gallstones and cholecystitis (gallbladder inflammation). Clinical trial data for semaglutide showed a statistically significant increase in gallbladder-related adverse events compared to placebo.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Women are already at two to three times higher risk of gallstones than men, with risk further elevated by estrogen (which increases cholesterol secretion into bile), obesity, rapid weight loss, and older age. The convergence of these risk factors in a perimenopausal woman on a GLP-1 medication makes gallbladder monitoring a reasonable clinical precaution, particularly for women with any prior history of gallbladder symptoms.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Cardiovascular Benefits and Honest Context
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          It is worth acknowledging the significant positive cardiovascular data that has emerged for GLP-1 medications. The SELECT trial, published in 2023 in the New England Journal of Medicine, demonstrated that semaglutide reduced major cardiovascular events (heart attacks, strokes, and cardiovascular death) by 20 percent in people who were overweight or obese but did not have type 2 diabetes. This is meaningful and should be part of any honest discussion of these medications.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          However, even this benefit does not eliminate the importance of addressing the underlying root causes. The cardiovascular improvements observed in clinical trials are largely driven by weight reduction and metabolic improvements that occur while the medication is being taken. When the medication is discontinued, weight returns and metabolic improvements reverse. The long-term cardiovascular benefit therefore depends on either indefinite medication use or the establishment of a metabolic and hormonal foundation that sustains cardiovascular health independently of the drug.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          When to Loop In a Functional Medicine Provider
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          If you are currently on a GLP-1 medication and have not had the following evaluated, it is worth seeking a comprehensive functional medicine assessment: a full thyroid panel (not just TSH), sex hormones and DUTCH testing, fasting insulin and comprehensive metabolic markers, micronutrient status, cortisol patterns, and body composition assessment. The goal is not to tell you to stop your medication. The goal is to build the complete metabolic and hormonal picture that allows your GLP-1 treatment, if you choose to continue it, to work as effectively as possible, or to identify whether a different approach might serve you better.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          You can explore our full{" "}
          <Link
            to="/services"
            className="text-secondary font-semibold hover:underline"
          >
            functional medicine services
          </Link>
          {" "}to understand what a comprehensive evaluation and protocol looks like in practice.
        </p>
      </section>

      {/* CTA 2 */}
      <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-8 my-12">
        <p className="font-display text-xl text-primary mb-3">
          On a GLP-1 and not getting the results you expected?
        </p>
        <p className="text-foreground/70 mb-5">
          You deserve a complete picture of what is happening in your body. Our free 15-minute discovery call is a no-pressure, no-commitment conversation to explore whether a functional medicine approach can help you get better outcomes from your current treatment, or find a better path forward.
        </p>
        <Link to="/free-15-min-call-with-katie" className="btn-gold">
          Schedule Your Free Discovery Call
        </Link>
      </div>

      {/* Section 6 */}
      <section id="what-happens-when-you-stop">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          What Happens When You Stop: The Rebound Question
        </h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The question of what happens when you stop a GLP-1 medication is one of the most important and least honestly answered questions in the current popular discussion of these drugs. The short answer is that for most people who stop semaglutide or tirzepatide without having addressed the underlying metabolic and hormonal dysfunction, a substantial portion of the lost weight returns within 12 months. This is not opinion. It is documented in clinical data.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The STEP 1 trial extension study followed participants for one year after stopping semaglutide. Within 12 months of discontinuation, participants regained on average about two-thirds of the weight they had lost. Their metabolic improvements, blood sugar, blood pressure, lipids, also largely reversed. The conclusion from the research team was stark: the results indicated that obesity is a chronic condition requiring long-term treatment. What that team did not say, but what functional medicine practitioners would add, is that sustainable long-term treatment means addressing root causes, not just indefinitely suppressing appetite with a medication.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Why Regain Happens: The Physiology, Not the Willpower
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Weight regain after stopping a GLP-1 is not a character flaw. It is not a failure of willpower. It is a predictable physiological response to the removal of the one thing that was overriding the body's default settings. When the drug is stopped, appetite returns, often to levels even higher than pre-treatment, because GLP-1 signaling has been artificially elevated for months and the body's own GLP-1 production has not meaningfully changed. Hunger comes back urgently, and cravings that were quiet for months return with force.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Simultaneously, the metabolic set point that was already inclined toward weight storage reasserts itself. The thyroid, which may have downregulated during the low-calorie period on the drug, has not been corrected. The insulin resistance has not been resolved. The cortisol dysregulation has not been addressed. The muscle lost during the weight loss phase is not magically returned. All of these factors combine to create a body that is biologically primed to regain weight, and rapidly.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The body composition twist makes this even more problematic. As described in the muscle loss section, the weight lost on a GLP-1 without adequate protein and resistance training includes a significant proportion of muscle. When weight returns after stopping, it returns predominantly as fat. The person ends up with a higher body fat percentage and lower muscle mass than they had before the medication, which means a slower metabolic rate and a more challenging weight management situation going forward than where they started.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          For many women, the concern about coming off Ozempic weight gain is one of the most significant barriers to feeling genuinely hopeful about these medications. That concern is valid. It is grounded in real physiology, and it deserves a real answer rather than dismissal.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          How a Functional Metabolic Foundation Reduces Rebound Risk
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This does not mean that stopping a GLP-1 inevitably leads to full weight regain. It means that stopping without having addressed the underlying dysfunction leads to significant regain. The distinction is crucial.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Women who work with a functional medicine provider during their GLP-1 treatment to simultaneously address thyroid function, hormonal balance, insulin sensitivity, cortisol patterns, muscle preservation, and nutritional status are building a metabolic foundation that can substantially sustain results after discontinuation. The goal is that by the time they taper off the medication, their thyroid is functioning optimally, their hormones are balanced, their insulin sensitivity has improved through lifestyle and targeted interventions, they have maintained or built muscle mass, and their diet and lifestyle are organized around metabolic health rather than just calorie restriction.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This is not a guarantee against any weight regain. But it is the difference between regaining most of the weight within a year and maintaining a meaningful, lasting portion of the results. And for women considering these medications, it is the most important piece of information they need before they start.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          There is also a growing cohort of women who are using the semaglutide plateau experience as a turning point to ask whether the medication was the right primary approach in the first place, and whether a comprehensive functional medicine approach that builds lasting metabolic change without the medication might serve them better long-term. That is a legitimate, individualized question that deserves an honest, personalized conversation, which is exactly what a discovery call is designed for.
        </p>
      </section>

      {/* Section 7 */}
      <section id="the-functional-medicine-approach">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          The Functional Medicine Approach: Using GLP-1s as a Tool, Not a Fix
        </h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          At Novaleo, we have a clear and consistent position on GLP-1 medications that I want to articulate directly: we are not anti-Ozempic. We are pro-root-cause. And those two positions are not in conflict.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          GLP-1 medications can be a legitimate, clinically appropriate tool for some women. For someone with significant insulin resistance, type 2 diabetes risk, or high cardiovascular risk who needs metabolic support while underlying dysfunction is being addressed, a GLP-1 can provide meaningful benefit. For someone whose food noise and appetite dysregulation are so severe that they cannot engage with nutritional or lifestyle interventions without pharmacological support first, a GLP-1 can create a window of opportunity that would not otherwise exist.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          What we consistently object to is using GLP-1 medications as a stand-alone solution, without comprehensive testing, without addressing the underlying hormonal and metabolic dysfunction, without muscle preservation protocols, and without a plan for what happens when the medication is eventually stopped. That approach is increasingly common because it is faster, easier, and more profitable. But it does not serve women well, and the pattern of initial results followed by plateau followed by rebound that so many women experience is the predictable consequence.
        </p>

        <img
          src={labsImg}
          alt="Comprehensive functional medicine lab testing setup with blood vials, test reports, and clinical analysis tools used to identify root causes of weight loss resistance"
          className="rounded-2xl shadow-lg w-full my-8"
          width={800}
          height={450}
          loading="lazy"
        />

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Comprehensive Testing: What We Actually Look At
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The foundation of our approach is a level of diagnostic thoroughness that most GLP-1 prescribers, whether primary care physicians, med spas, or telehealth weight loss services, are not providing. Before any protocol is built, we need to know the actual state of the following:
        </p>
        <ul className="space-y-3 mb-6 pl-1">
          {[
            "Full thyroid panel: TSH, Free T4, Free T3, Reverse T3, TPO antibodies, Thyroglobulin antibodies",
            "Sex hormones: estradiol, progesterone, testosterone (total and free), DHEA-S, SHBG, LH, FSH",
            "DUTCH comprehensive hormones panel for metabolite mapping, cortisol patterns, and estrogen pathways",
            "Metabolic markers: fasting insulin, fasting glucose, hemoglobin A1c, full lipid panel with particle size",
            "Inflammatory markers: hs-CRP, homocysteine, ferritin (as inflammatory marker as well as iron storage)",
            "Micronutrients: vitamin D, B12, folate, iron panel (including ferritin), magnesium RBC, zinc",
            "GI-MAP stool testing when GI symptoms or suspected gut dysbiosis are present",
            "Complete metabolic panel, CBC with differential, and comprehensive cardiovascular risk markers",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-foreground/85">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This level of testing is consistent with the approach we describe in detail in{" "}
          <Link
            to="/blog/the-ultimate-guide-to-hormones-and-weight-resistance-over-40"
            className="text-secondary font-semibold hover:underline"
          >
            The Ultimate Guide to Hormones and Weight Resistance Over 40
          </Link>
          . When you layer this level of diagnostic clarity onto a GLP-1 treatment plan, you transform the medication from a blunt instrument into a precisely contextual tool.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          What a Combined Protocol Can Look Like
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          There is no universal combined protocol because no two women are the same. But the architecture of a comprehensive GLP-1 plus functional medicine approach generally includes the following elements, tailored to individual lab results and health history.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Hormonal optimization: If testing reveals perimenopause-related estrogen-progesterone imbalance, addressing this through bioidentical hormone replacement therapy (BHRT), when clinically appropriate and desired by the patient, simultaneously supports weight loss, protects muscle mass, improves sleep and mood, reduces cortisol, and supports thyroid function. This is a set of metabolic benefits that extends far beyond what a GLP-1 alone can produce.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Thyroid support: When thyroid function is suboptimal, whether through subclinical hypothyroidism, Hashimoto's thyroiditis, or medication-driven metabolic slowdown, optimizing thyroid function can make the difference between a GLP-1 that keeps working and one that plateaus within months. Thyroid support ranges from dietary and lifestyle interventions to targeted nutraceuticals to, when indicated, thyroid hormone replacement.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Insulin sensitivity protocols: Combining a GLP-1 medication with targeted insulin sensitizing interventions, specific dietary patterns, timed carbohydrate intake, resistance training, and targeted supplements like berberine, chromium, and alpha-lipoic acid, produces better and more durable results than either approach alone.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Muscle preservation and protein optimization: We build individualized protein targets and resistance training frameworks into every GLP-1 protocol. For women over 35, this is the most important structural element of the entire plan.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Micronutrient repletion: Based on lab findings, we use targeted supplementation to address specific deficiencies rather than generic multivitamin approaches. Vitamin D optimization has direct downstream benefits on thyroid function, insulin sensitivity, and mood regulation. B12 support addresses the energy and neurological deficits common in GLP-1 users. Magnesium repletion improves sleep quality, reduces cortisol, and supports insulin signaling.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Cortisol and stress regulation: Addressing cortisol patterns through sleep optimization, adaptogenic support, stress management frameworks, and structural life changes rounds out the metabolic picture in ways that profoundly affect GLP-1 outcomes and long-term weight management success.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Functional Medicine as an Alternative for Some Women
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          It is worth stating clearly that for some women, a comprehensive functional medicine approach without GLP-1 medication is the better path. Women whose thyroid, hormonal, and metabolic dysfunction is the primary driver of their weight struggles often find that addressing those root causes produces meaningful, durable weight loss without the side effect burden, cost, or dependency of a GLP-1 medication.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The women most likely to do well with functional medicine alone are those whose metabolic dysfunction is driven primarily by identifiable, treatable hormonal or thyroid issues; those who do not have significant appetite dysregulation that would benefit from pharmacological suppression; those who are motivated to engage with dietary and lifestyle changes as their primary intervention; and those who are in a position to address root causes comprehensively over a six to twelve month timeline. This conversation, which path is right for you, is exactly what a free discovery call is designed to facilitate, without pressure in either direction.
        </p>
      </section>

      {/* Section 8 */}
      <section id="michigan-wisconsin-considerations">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          Michigan and Wisconsin Considerations
        </h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          The challenges we have been discussing throughout this article apply to women over 35 broadly, but there are specific geographic, climatic, and cultural factors that apply with particular force to women in Michigan and Wisconsin. If you are one of the hundreds of thousands of women in these states navigating GLP-1 treatment or considering it, this context matters.
        </p>

        <img
          src={winterImg}
          alt="A serene Michigan winter landscape showing a snow-covered lake and trees under a grey sky, representing the long Upper Midwest winters that compound vitamin D deficiency and metabolic challenges"
          className="rounded-2xl shadow-lg w-full my-8"
          width={800}
          height={450}
          loading="lazy"
        />

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          The Vitamin D Deficit: A Compounding Factor for GLP-1 Users
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Michigan sits between the 42nd and 47th parallels north, and Wisconsin runs from the 42nd to the 47th as well. Both states experience the same critical limitation: from roughly November through March, the sun's angle is too low for skin to synthesize meaningful amounts of vitamin D regardless of how much time you spend outside. Combined with the long grey winters, Wisconsin averages 176 cloudy days per year and Michigan's Upper Peninsula rivals that, both states produce a near-universal background of vitamin D deficiency among residents.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          This matters acutely for GLP-1 users. Vitamin D is not just a bone-health vitamin. It functions more like a hormone, influencing thyroid function, immune regulation, insulin sensitivity, mood, and metabolic rate. Low vitamin D worsens insulin resistance, impairs thyroid hormone function, contributes to the chronic low-grade inflammation that stalls weight loss, and exacerbates the mood disruption that many women experience during perimenopause. When you layer severe vitamin D deficiency onto an already-challenged metabolic system, GLP-1 results suffer.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Testing vitamin D levels as 25-hydroxyvitamin D and aggressively repletion to optimal ranges, generally 50 to 80 ng/mL in functional medicine compared to the conventional normal threshold of 20 ng/mL, is a foundational part of any weight loss protocol for women in Michigan and Wisconsin, and it is particularly relevant to GLP-1 users specifically. This is a consistent finding across our Michigan and Wisconsin patient populations and is discussed in detail in our{" "}
          <Link
            to="/blog/gaining-weight-exhausted-after-40-wisconsin-women"
            className="text-secondary font-semibold hover:underline"
          >
            Wisconsin guide
          </Link>
          {" "}and our{" "}
          <Link
            to="/blog/why-michigan-women-over-40-cant-lose-weight-feel-exhausted"
            className="text-secondary font-semibold hover:underline"
          >
            Michigan guide
          </Link>
          .
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          The GLP-1 Telehealth Landscape in Michigan and Wisconsin
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          GLP-1 medications have become widely available through telehealth in both states, which is largely a positive development for access. Women in places like the Upper Peninsula of Michigan, the Northwoods of Wisconsin, or smaller communities across both states who would previously have had no access to obesity medicine or functional medicine specialists can now receive care remotely.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          However, the quality of telehealth GLP-1 prescribing varies enormously. Many telehealth weight loss platforms offer rapid, low-friction prescriptions with minimal baseline testing, no ongoing monitoring, and no integrated protocol for the hormonal and metabolic issues we have discussed throughout this article. For women in Traverse City, Eau Claire, Marquette, or La Crosse, the fact that you can get a GLP-1 prescription in fifteen minutes online does not mean you should, without a more comprehensive assessment first.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Novaleo provides telehealth functional medicine services across both Michigan and Wisconsin. Lab work is completed at any Quest Diagnostics or Labcorp location, of which there are dozens across both states, from Detroit and Grand Rapids to Green Bay and Duluth. All appointments are conducted via secure, HIPAA-compliant video. Whether you are in Ann Arbor, Appleton, Flint, Fond du Lac, Saginaw, or Superior, you have access to the same level of comprehensive functional medicine care without leaving home.
        </p>

        <img
          src={telehealthImg}
          alt="A Michigan or Wisconsin woman in her 40s having a telehealth video consultation with her functional medicine provider from the comfort of her home, looking engaged and hopeful"
          className="rounded-2xl shadow-lg w-full my-8"
          width={800}
          height={450}
          loading="lazy"
        />

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Midwest Food Culture and GLP-1 Treatment
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Both Michigan and Wisconsin have food cultures that are genuinely joyful and deeply community-rooted. Friday night fish fries in Wisconsin. Pasties in the Upper Peninsula. Cherry season on the Leelanau Peninsula. Bratwurst at Green Bay Packers tailgates. Craft beer culture stretching from Milwaukee to Grand Rapids. Coney dogs in Detroit. These are not just foods. They are expressions of community, tradition, and belonging. Nobody is asking you to give any of that up.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          What matters, both with and without GLP-1 medication, is understanding the metabolic impact of the dietary baseline you are coming from and making intelligent adjustments that honor both your health goals and your life. For women who have been eating a standard Midwestern diet for decades, the nutritional adjustments that support optimal GLP-1 outcomes and the underlying metabolic health we are building are about adding strategic nutrients and shifting proportions rather than eliminating entire food categories with guilt and deprivation.
        </p>

        <h3 className="text-xl md:text-2xl font-display text-primary mt-10 mb-4">
          Winter, Seasonal Patterns, and GLP-1 Timing
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Women in both states often notice that their weight management challenges are seasonal, with the period from November through April being consistently harder. Reduced sunlight drives down vitamin D and serotonin simultaneously. Cold weather reduces physical activity. Holiday food culture from Thanksgiving through Easter involves an extended period of heavier, more calorie-dense eating. Many women start GLP-1 medications in January, motivated by New Year's resolutions, which means they are starting during the season when multiple metabolic factors are already working against them.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Understanding this seasonal metabolic context allows for smarter clinical planning. Vitamin D optimization should begin weeks before winter sets in. Resistance training routines that work around cold weather and reduced outdoor activity should be established before winter arrives. Stress management and sleep hygiene strategies should be in place before the cortisol-elevating effects of holiday season and seasonal affective disorder (SAD) compound the metabolic challenge that GLP-1 treatment is trying to address.
        </p>
      </section>

      {/* Section 9: FAQ */}
      <section id="comprehensive-faq">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          Comprehensive FAQ: Your Questions Answered
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-display text-primary mb-3">
              Why did I stop losing weight on Ozempic?
            </h3>
            <p className="text-lg leading-relaxed text-foreground/85">
              The most common reasons for an Ozempic plateau include one or more of the following: reduced metabolic rate from muscle loss (your body burns fewer calories at rest as lean mass declines during rapid weight loss), thyroid function suppression triggered by prolonged caloric restriction, unresolved insulin resistance that the drug improves but does not correct, elevated cortisol from chronic stress that counteracts the drug's metabolic benefits, and perimenopausal hormonal shifts that the medication does not address. A comprehensive functional medicine evaluation can identify which of these is most relevant in your specific case.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-display text-primary mb-3">
              Will I gain the weight back if I stop Ozempic?
            </h3>
            <p className="text-lg leading-relaxed text-foreground/85">
              Clinical data shows that most people regain a substantial portion of the weight lost within 12 months of stopping semaglutide or tirzepatide if the underlying metabolic dysfunction has not been addressed. The STEP 1 trial extension found an average of two-thirds of lost weight regained within one year of discontinuation. However, women who work to build a metabolic foundation during their medication use by addressing thyroid function, hormone balance, insulin sensitivity, muscle mass, and nutritional status are significantly better positioned to maintain results after discontinuation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-display text-primary mb-3">
              Is it safe to combine Ozempic with hormone therapy?
            </h3>
            <p className="text-lg leading-relaxed text-foreground/85">
              There is no known significant pharmacological interaction between semaglutide or tirzepatide and bioidentical hormone replacement therapy (BHRT). For perimenopausal women, addressing hormonal decline alongside GLP-1 treatment may produce better overall results because hormones like estrogen and testosterone play direct roles in maintaining muscle mass, supporting thyroid function, improving insulin sensitivity, and regulating mood and sleep. Any combination of treatments should be managed by a licensed clinician with full awareness of both. The North American Menopause Society (NAMS) supports the use of hormone therapy for appropriate candidates, and the decision should be individualized based on health history and risk profile.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-display text-primary mb-3">
              How much protein do I need on Ozempic to prevent muscle loss?
            </h3>
            <p className="text-lg leading-relaxed text-foreground/85">
              Current evidence suggests a target of at least 1.2 to 1.6 grams of protein per kilogram of body weight per day for women on GLP-1 medications to minimize lean mass loss. For a 150-pound woman (approximately 68 kg), that means approximately 82 to 109 grams of protein per day. Because GLP-1 medications reduce appetite and food volume significantly, reaching these targets requires deliberate planning, prioritizing high-protein foods at every meal, and often supplementation with a high-quality protein powder.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-display text-primary mb-3">
              Can Wisconsin and Michigan women get functional medicine treatment via telehealth?
            </h3>
            <p className="text-lg leading-relaxed text-foreground/85">
              Yes. Novaleo Weight and Wellness is licensed to provide telehealth functional medicine services in both Wisconsin and Michigan. All consultations and follow-up appointments are conducted via secure, HIPAA-compliant video. Lab work is completed at any Quest Diagnostics or Labcorp location near you, and results are reviewed together via telehealth. Whether you are in Detroit, Green Bay, Saginaw, Madison, Traverse City, or a smaller community anywhere across both states, you have full access to our services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-display text-primary mb-3">
              What is the difference between Ozempic, Wegovy, Mounjaro, and Zepbound?
            </h3>
            <p className="text-lg leading-relaxed text-foreground/85">
              Ozempic and Wegovy both contain semaglutide, a GLP-1 receptor agonist. Ozempic is FDA-approved for type 2 diabetes management, while Wegovy is FDA-approved specifically for chronic weight management. They are chemically identical but packaged in different dose ranges and approved for different indications. Mounjaro and Zepbound both contain tirzepatide, a dual GIP and GLP-1 receptor agonist. Mounjaro is approved for type 2 diabetes, and Zepbound is approved for weight management. Tirzepatide's dual mechanism produces somewhat greater average weight loss in clinical trials compared to semaglutide, though individual responses vary considerably.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-display text-primary mb-3">
              Can you take Ozempic if you have thyroid disease?
            </h3>
            <p className="text-lg leading-relaxed text-foreground/85">
              GLP-1 medications carry an FDA black box warning regarding a potential risk of thyroid C-cell tumors based on animal studies. This warning applies specifically to people with a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2), for whom GLP-1 drugs are contraindicated. For people with common thyroid conditions like Hashimoto's thyroiditis or hypothyroidism, there is no current evidence of direct harm from GLP-1 medications. However, comprehensive thyroid monitoring is important for any GLP-1 user with a thyroid history, as prolonged caloric restriction can affect thyroid function markers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-display text-primary mb-3">
              How long does it typically take for the Ozempic plateau to happen?
            </h3>
            <p className="text-lg leading-relaxed text-foreground/85">
              Most GLP-1 users experience the most rapid weight loss in the first three to six months. A true plateau, where no meaningful weight loss occurs over a four to six week period despite continued medication use, most commonly occurs between months six and twelve. However, women with significant underlying metabolic dysfunction may hit a plateau as early as three months. The specific timing varies considerably by individual, starting dose, and whether supporting protocols are in place.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-display text-primary mb-3">
              Is the Ozempic muscle loss concern real, or overstated?
            </h3>
            <p className="text-lg leading-relaxed text-foreground/85">
              The muscle loss concern is real and clinically significant, not overstated. Multiple studies have found that GLP-1 users without adequate protein intake and resistance training can lose 25 to 40 percent of their total weight loss from lean mass rather than fat. Lifestyle interventions for weight loss without medication typically produce a ratio of roughly 75 percent fat loss to 25 percent lean mass loss. The GLP-1-induced ratio can be considerably less favorable. This is not a reason to avoid these medications, but it is a serious reason to take the muscle preservation protocol seriously from day one of treatment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-display text-primary mb-3">
              What signs suggest GLP-1 medication is not the right approach for me?
            </h3>
            <p className="text-lg leading-relaxed text-foreground/85">
              GLP-1 medications may not be the right primary approach if your weight challenges are driven primarily by identifiable, correctable hormonal or metabolic dysfunction such as Hashimoto's thyroiditis, progesterone deficiency, or significant untreated insulin resistance that a functional medicine protocol can address more directly. If you have already tried a GLP-1 with disappointing results, this is a strong signal that underlying dysfunction needs to be assessed and addressed. A comprehensive evaluation, which is exactly what the free discovery call is designed to facilitate, is the appropriate starting point for any of these questions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Closing */}
      <section id="closing-katies-note">
        <h2 className="text-3xl md:text-4xl font-display text-primary mt-16 mb-6">
          What Comes Next: Getting the Support You Actually Deserve
        </h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          If you have read this far, you already know more about the mechanics of GLP-1 medications and the Ozempic plateau than the vast majority of people currently taking these drugs. More importantly, you now understand that a plateau is not a dead end. It is a signal pointing to specific, identifiable, treatable root causes that have simply not been addressed yet.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Whether you are currently on a GLP-1 and frustrated that it stopped working, considering starting one and want to do it right from the beginning, or looking for a functional medicine alternative that addresses root causes rather than symptoms, the next step is the same: get a comprehensive functional medicine evaluation. Not a fifteen-minute prescription conversation. Not a BMI calculation and a telehealth sign-off. A thorough, individualized assessment of what is actually happening in your body.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          You deserve to understand your thyroid, your hormones, your insulin, your cortisol, your body composition, and your nutritional status. You deserve a protocol built around your specific biology and your specific goals. And you deserve a provider who will take the time to explain the full picture, adjust your plan as your labs evolve, and stay with you through the process rather than issuing a prescription and sending you on your way.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          From anywhere in Michigan, from the Detroit metro to the Upper Peninsula, and from anywhere in Wisconsin, from Milwaukee and Madison to the Northwoods, you have access to that level of care through Novaleo Weight and Wellness via telehealth.
        </p>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-10 my-10 text-center">
          <p className="font-display text-2xl md:text-3xl text-primary mb-4">
            Your Ozempic plateau has a reason. Let's find it.
          </p>
          <p className="text-lg text-foreground/70 mb-6 max-w-xl mx-auto">
            Book your free 15-minute discovery call with our care team. No sales pitch, no commitment, no pressure. Just an honest conversation about what might be missing and what a root-cause approach could do for you.
          </p>
          <Link to="/free-15-min-call-with-katie" className="btn-gold text-lg px-8 py-4">
            Book Your Free 15-Minute Call with Katie
          </Link>
        </div>

        <p className="text-lg leading-relaxed text-foreground/85 mb-5 italic border-l-4 border-secondary/40 pl-6 my-8">
          A personal note from Katie:
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          I want to be honest with you about something I see in my practice almost every week. Women who have been on Ozempic or Wegovy for months, sometimes more than a year, come to me feeling confused and defeated. They did the thing their doctor suggested. They took the medication. For a while it worked. And then it stopped, and nobody has been able to tell them why.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          That experience breaks my heart a little, every time. Because the answers are not mysterious. They are sitting right there in the lab work that never got ordered, in the thyroid panel that never went beyond TSH, in the hormonal transition that nobody mentioned when the prescription was written, in the muscle mass that quietly disappeared while the scale moved and nobody noticed.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          I started Novaleo because I believe that every woman deserves to have someone take the time to actually look. Not at a BMI or a single lab value, but at the whole, interconnected picture of who she is, what her body is doing, and what it needs. After more than 20 years in healthcare, I know that the answers are almost always there. They just require someone willing to look for them.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          If you are a woman in Michigan or Wisconsin who has been on a GLP-1 and is not getting the results you were hoping for, or who is considering starting and wants to do it in a way that actually builds lasting metabolic health, I would be honored to be part of that conversation. Not because I want to sell you something. Not because I have a script to run through. But because two decades of sitting with women in exactly your position has taught me that the right investigation changes everything.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Your body is not broken. Your metabolism is not your enemy. And you are not out of options. Reach out. Let us start by just talking.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5 font-semibold">
          Katie Long, NP-C
          <br />
          <span className="font-normal text-foreground/70">Founder, Novaleo Weight and Wellness</span>
        </p>
      </section>

      {/* Author Bio */}
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
            Katie is the founder of Novaleo Weight and Wellness, a telehealth functional medicine practice licensed in both Michigan and Wisconsin. With over 20 years of healthcare experience, she specializes in helping women over 35 identify and address the root causes of weight resistance, hormonal imbalance, and metabolic dysfunction. Her approach combines comprehensive lab testing, evidence-based protocols, and genuine patient partnership to produce lasting results. Katie is committed to making quality functional medicine accessible to women across both states, regardless of where they live.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <section className="bg-primary rounded-2xl p-8 md:p-12 text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          Ready for Answers That Actually Stick?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Join the growing number of Michigan and Wisconsin women who have discovered what conventional medicine missed. Your free 15-minute discovery call is the first step toward understanding what is really happening and what to do about it.
        </p>
        <Link to="/free-15-min-call-with-katie" className="btn-gold text-lg px-8 py-4">
          Book Your Free 15-Minute Call
        </Link>
      </section>

      {/* References */}
      <div className="border-t border-foreground/10 pt-8 mt-4 mb-8">
        <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">References</p>
        <ul className="space-y-2 text-sm text-foreground/60">
          <li>
            Wilding JPH, et al. "Once-Weekly Semaglutide in Adults with Overweight or Obesity." <em>New England Journal of Medicine</em>. 2021;384(11):989-1002.{" "}
            <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2032183" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              View study
            </a>
          </li>
          <li>
            Lincoff AM, et al. "Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes." <em>New England Journal of Medicine</em>. 2023;389(24):2221-2232.{" "}
            <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2307563" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              View study
            </a>
          </li>
          <li>
            Rubino DM, et al. "Effect of Continued Weekly Subcutaneous Semaglutide vs Placebo on Weight Loss Maintenance in Adults With Overweight or Obesity: The STEP 4 Randomized Clinical Trial." <em>JAMA</em>. 2021;325(14):1414-1425.{" "}
            <a href="https://jamanetwork.com/journals/jama/fullarticle/2777886" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              View study
            </a>
          </li>
        </ul>
      </div>
    </BlogLayout>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why did I stop losing weight on Ozempic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common reasons for an Ozempic plateau include reduced metabolic rate from muscle loss, thyroid function suppression triggered by prolonged caloric restriction, unresolved insulin resistance, elevated cortisol from chronic stress, and perimenopausal hormonal shifts that the medication does not address. A comprehensive functional medicine evaluation can identify which factors are most relevant for your specific situation.",
      },
    },
    {
      "@type": "Question",
      name: "Will I gain the weight back if I stop Ozempic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clinical data shows that most people regain a substantial portion of lost weight within 12 months of stopping semaglutide if underlying metabolic dysfunction has not been addressed. The STEP 1 trial extension found an average of two-thirds of lost weight regained within one year of discontinuation. Women who build a metabolic foundation during medication use by addressing thyroid function, hormonal balance, insulin sensitivity, and muscle mass are significantly better positioned to maintain results after discontinuation.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to combine Ozempic with hormone therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no known significant pharmacological interaction between semaglutide or tirzepatide and bioidentical hormone replacement therapy (BHRT). For perimenopausal women, addressing hormonal decline alongside GLP-1 treatment may produce better overall results because hormones like estrogen and testosterone support muscle mass, thyroid function, insulin sensitivity, and sleep. Any combination of treatments should be managed by a licensed clinician.",
      },
    },
    {
      "@type": "Question",
      name: "Can Wisconsin and Michigan women get functional medicine treatment via telehealth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Novaleo Weight and Wellness is licensed to provide telehealth functional medicine services in both Wisconsin and Michigan. All consultations are conducted via secure, HIPAA-compliant video. Lab work is completed at any Quest Diagnostics or Labcorp location near you, and results are reviewed together via telehealth. Whether you are in Detroit, Green Bay, Saginaw, Madison, Traverse City, or a smaller community anywhere across both states, you have full access to our services.",
      },
    },
    {
      "@type": "Question",
      name: "How much protein do I need on Ozempic to prevent muscle loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Current evidence suggests a target of at least 1.2 to 1.6 grams of protein per kilogram of body weight per day for women on GLP-1 medications to minimize lean mass loss. For a 150-pound woman, that means approximately 82 to 109 grams of protein per day. Because GLP-1 medications reduce food volume significantly, reaching these targets requires deliberate planning, prioritizing protein at every meal, and often using high-quality protein supplementation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Ozempic, Wegovy, Mounjaro, and Zepbound?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ozempic and Wegovy both contain semaglutide, a GLP-1 receptor agonist. Ozempic is FDA-approved for type 2 diabetes and Wegovy for chronic weight management. Mounjaro and Zepbound both contain tirzepatide, a dual GIP and GLP-1 receptor agonist. Mounjaro is approved for type 2 diabetes and Zepbound for weight management. Tirzepatide's dual mechanism produces somewhat greater average weight loss in clinical trials.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Ozempic muscle loss concern real or overstated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The muscle loss concern is real and clinically significant. Multiple studies have found that GLP-1 users without adequate protein intake and resistance training can lose 25 to 40 percent of their total weight loss from lean mass rather than fat. This is not a reason to avoid these medications, but it is a serious reason to take the muscle preservation protocol, adequate protein intake plus regular resistance training, seriously from the first day of treatment.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the Ozempic plateau typically take to happen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most GLP-1 users experience the most rapid weight loss in the first three to six months. A true plateau most commonly occurs between months six and twelve. Women with significant underlying metabolic dysfunction may plateau as early as three months, while those with relatively favorable metabolic conditions may continue losing weight for twelve to eighteen months. The specific timing varies considerably by individual.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take Ozempic if I have thyroid disease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GLP-1 medications carry an FDA black box warning for people with a personal or family history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2, for whom these drugs are contraindicated. For people with common thyroid conditions like Hashimoto's thyroiditis or hypothyroidism, there is no current evidence of direct harm. However, comprehensive thyroid monitoring is important for any GLP-1 user with a thyroid history, as prolonged caloric restriction can affect thyroid function markers.",
      },
    },
    {
      "@type": "Question",
      name: "What signs suggest GLP-1 medication is not the right approach for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GLP-1 medications may not be the right primary approach if your weight challenges are driven by identifiable, correctable hormonal or metabolic dysfunction such as Hashimoto's thyroiditis, progesterone deficiency, or significant untreated insulin resistance. If you have already tried a GLP-1 with disappointing results, this is a strong signal that underlying dysfunction needs to be assessed before any pharmacological approach. A comprehensive functional medicine evaluation is the appropriate starting point.",
      },
    },
  ],
};
