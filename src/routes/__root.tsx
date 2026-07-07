import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import * as React from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingModalProvider } from "@/components/BookingModalContext";
import { BookingModal } from "@/components/BookingModal";

NProgress.configure({ showSpinner: false });

function RouterSpinner() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });

  React.useEffect(() => {
    if (isLoading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [isLoading]);

  return null;
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Novaleo Weight & Wellness | Functional Medicine (MI & WI)" },
      {
        name: "description",
        content:
          "Root-cause functional medicine for women in Michigan & Wisconsin. Resolve fatigue, brain fog, hormone imbalance & weight resistance.",
      },
      {
        property: "og:title",
        content: "Novaleo Weight & Wellness | Functional Medicine (MI & WI)",
      },
      {
        property: "og:description",
        content:
          "Novaleo Weight & Wellness is a telehealth functional medicine practice for women in Michigan & Wisconsin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Novaleo Weight & Wellness | Functional Medicine (MI & WI)",
      },

      {
        name: "twitter:description",
        content:
          "Novaleo Weight & Wellness is a telehealth functional medicine practice for women in Michigan & Wisconsin.",
      },
      {
        property: "og:image",
        content: "https://novaweightandwellness.com/og-image.webp",
      },
      {
        name: "twitter:image",
        content: "https://novaweightandwellness.com/og-image.webp",
      },
    ],
    links: [
      { rel: "icon", type: "image/webp", href: "/favicon.webp" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "alternate", type: "application/json", href: "/ai.json", title: "AI Manifest" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Novaleo Weight & Wellness",
              "description": "Telehealth functional medicine practice specializing in root-cause treatment for fatigue, brain fog, hormone imbalance, weight resistance, and metabolic dysfunction for professional women in Michigan and Wisconsin.",
              "url": "https://novaweightandwellness.com",
              "logo": "https://novaweightandwellness.com/favicon.webp",
              "image": "https://novaweightandwellness.com/og-image.webp",
              "founder": {
                "@type": "Person",
                "name": "Kathryn Long, NP-C",
                "jobTitle": "Nurse Practitioner",
                "description": "Board-certified nurse practitioner with 20+ years in healthcare, specializing in hormones, metabolic health, and weight resistance."
              },
              "areaServed": [
                { "@type": "State", "name": "Michigan" },
                { "@type": "State", "name": "Wisconsin" }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1805 Leonard St NE",
                "addressLocality": "Grand Rapids",
                "addressRegion": "MI",
                "postalCode": "49505",
                "addressCountry": "US"
              },
              "telephone": "+1-616-460-6337",
              "email": "Katie@novaweightandwellness.com",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "07:00",
                "closes": "18:00"
              },
              "priceRange": "$0–$3,995",
              "paymentAccepted": "FSA, HSA, Credit Card, Debit Card",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Functional Medicine Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Root Cause Discovery Call",
                      "description": "Free 10-minute consultation to determine next steps."
                    },
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Root Cause Intake — 60-Minute Clarity Session",
                      "description": "Comprehensive clinical assessment with personalized starting plan."
                    },
                    "price": "97",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTest",
                      "name": "Root Cause Lab Panel",
                      "description": "Signature biomarker panel testing nutrients, thyroid, lipids, blood sugar, liver, and inflammation markers."
                    },
                    "price": "454",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "The Executive Longevity Partnership",
                      "description": "Six-month executive-level functional medicine program limited to 4 clients."
                    },
                    "price": "3995",
                    "priceCurrency": "USD"
                  }
                ]
              },
              "knowsAbout": [
                "Functional Medicine",
                "Hormone Optimization",
                "Metabolic Health",
                "Weight Resistance",
                "Thyroid Dysfunction",
                "Perimenopause",
                "Menopause",
                "Brain Fog",
                "Chronic Fatigue",
                "Insulin Resistance",
                "Root Cause Medicine",
                "Telehealth"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "6",
                "bestRating": "5"
              }
            })
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const routerState = useRouterState();
  const isClaritySessionPage = routerState.location.pathname.includes('/clarity-session');
  const isMichiganPage = routerState.location.pathname.includes('/michigan-discovery-call');
  const isFreeCallPage = routerState.location.pathname.includes('/free-15-min-call-with-katie');
  const hideHeaderFooter = isClaritySessionPage || isMichiganPage || isFreeCallPage;

  React.useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      const isMichiganPage = window.location.pathname.includes('/michigan-discovery-call');
      if (isMichiganPage) {
        (window as any).fbq('init', '3180422178824404');
        (window as any).fbq('track', 'PageView');
      }
    }
  }, [routerState.location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <BookingModalProvider>
        <div className="flex min-h-screen flex-col">
          <RouterSpinner />
          {!hideHeaderFooter && <SiteHeader />}
          <main className="flex-1">
            <Outlet />
          </main>
          {!hideHeaderFooter && <SiteFooter />}
        </div>
        <BookingModal />
      </BookingModalProvider>
    </QueryClientProvider>
  );
}
