import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://novaweightandwellness.com/privacy-policy" },
    ],
    meta: [
      { title: "Privacy Policy | Novaleo Weight & Wellness" },
      {
        name: "description",
        content: "Privacy policy for Novaleo Weight & Wellness. Learn how we collect, use, and protect your information.",
      },
      { property: "og:title", content: "Privacy Policy | Novaleo Weight & Wellness" },
      { property: "og:description", content: "Privacy policy for Novaleo Weight & Wellness. Learn how we collect, use, and protect your information." },
      { property: "og:url", content: "https://novaweightandwellness.com/privacy-policy" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image.webp" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy | Novaleo Weight & Wellness" },
      { name: "twitter:description", content: "Privacy policy for Novaleo Weight & Wellness. Learn how we collect, use, and protect your information." },
      { name: "twitter:image", content: "https://novaweightandwellness.com/og-image.webp" },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="container-prose py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p>
          At Novaleo Weight & Wellness, we are committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and safeguard your personal information.
        </p>
        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, phone number, and
          health-related information when you use our website or telehealth services.
        </p>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide and improve our services, communicate with you,
          and ensure compliance with healthcare regulations.
        </p>
        <h2>3. Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to outside parties
          except as required by law or as necessary to provide our services (e.g., sharing with
          partner pharmacies or labs).
        </p>
        <h2>4. Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal
          information. We comply with HIPAA regulations to ensure the confidentiality and security of
          your protected health information (PHI).
        </p>
        <h2>5. Your Rights</h2>
        <p>
          You have the right to access, correct, or request the deletion of your personal information.
          Please contact us to exercise these rights.
        </p>
        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. We will notify you of any changes by posting
          the new policy on our website.
        </p>
      </div>
    </div>
  );
}
