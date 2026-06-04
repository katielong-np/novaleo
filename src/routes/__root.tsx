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
      { title: "Novaleo Weight & Wellness  Functional Medicine via Telehealth (MI & WI)" },
      {
        name: "description",
        content:
          "Root-cause functional medicine and metabolic health for professionals in Michigan & Wisconsin. Resolve fatigue, brain fog, hormone imbalance & weight resistance  even when labs are 'normal.'",
      },
      {
        property: "og:title",
        content: "Novaleo Weight & Wellness  Functional Medicine via Telehealth (MI & WI)",
      },
      {
        property: "og:description",
        content:
          "Novaleo Wellness Hub is a telehealth practice for functional medicine and metabolic health.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Novaleo Weight & Wellness  Functional Medicine via Telehealth (MI & WI)",
      },
      {
        name: "description",
        content:
          "Novaleo Wellness Hub is a telehealth practice for functional medicine and metabolic health.",
      },
      {
        name: "twitter:description",
        content:
          "Novaleo Wellness Hub is a telehealth practice for functional medicine and metabolic health.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/97202518-d211-4d11-a993-7df77f283483/id-preview-8789e02d--47fc7760-6bdb-4d8e-8e38-7dac030e02b7.lovable.app-1779261933001.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/97202518-d211-4d11-a993-7df77f283483/id-preview-8789e02d--47fc7760-6bdb-4d8e-8e38-7dac030e02b7.lovable.app-1779261933001.png",
      },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
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
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <RouterSpinner />
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
