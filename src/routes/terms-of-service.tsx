import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://novaweightandwellness.com/terms-of-service" },
    ],
    meta: [
      { title: "Terms of Service | Novaleo Weight & Wellness" },
      {
        name: "description",
        content: "Terms of service for Novaleo Weight & Wellness. Read the terms and conditions for using our website and services.",
      },
      { property: "og:title", content: "Terms of Service | Novaleo Weight & Wellness" },
      { property: "og:description", content: "Terms of service for Novaleo Weight & Wellness. Read the terms and conditions for using our website and services." },
      { property: "og:url", content: "https://novaweightandwellness.com/terms-of-service" },
      { property: "og:image", content: "https://novaweightandwellness.com/og-image.webp" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terms of Service | Novaleo Weight & Wellness" },
      { name: "twitter:description", content: "Terms of service for Novaleo Weight & Wellness. Read the terms and conditions for using our website and services." },
      { name: "twitter:image", content: "https://novaweightandwellness.com/og-image.webp" },
    ],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <div className="container-prose py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl mb-8">Terms of Service</h1>
      <div className="prose max-w-none">
        <p>
          Welcome to Novaleo Weight & Wellness. By accessing or using our website and services, you
          agree to comply with and be bound by the following terms and conditions.
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using our telehealth services, you confirm that you have read, understood, and agree to
          be bound by these Terms of Service.
        </p>
        <h2>2. Medical Disclaimer</h2>
        <p>
          The content provided on this website is for informational purposes only and is not intended
          as a substitute for professional medical advice, diagnosis, or treatment. Always seek the
          advice of your physician or other qualified health provider with any questions you may have
          regarding a medical condition.
        </p>
        <h2>3. Services Provided</h2>
        <p>
          Novaleo Weight & Wellness provides functional medicine and metabolic health services via
          telehealth to residents of Michigan and Wisconsin.
        </p>
        <h2>4. User Responsibilities</h2>
        <p>
          You agree to provide accurate and complete information about yourself as required for our
          services. You are responsible for maintaining the confidentiality of any account information
          and for all activities that occur under your account.
        </p>
        <h2>5. Modifications</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Any changes will be
          effective immediately upon posting on the website. Your continued use of the services
          constitutes your acceptance of the revised terms.
        </p>
      </div>
    </div>
  );
}
