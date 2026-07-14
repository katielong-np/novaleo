import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Linkedin, Link2 } from "lucide-react";

export type TocItem = {
  id: string;
  label: string;
};

export type BlogLayoutProps = {
  title: string;
  author: string;
  date: string;
  readTime: string;
  heroImg: string;
  heroAlt: string;
  tocItems: TocItem[];
  slug: string;
  breadcrumbTitle: string;
  eyebrow?: string;
  children: React.ReactNode;
  faqSchema?: Record<string, any>;
};

export function BlogLayout({
  title,
  author,
  date,
  readTime,
  heroImg,
  heroAlt,
  tocItems,
  slug,
  breadcrumbTitle,
  eyebrow = "Functional Medicine for Women",
  children,
  faqSchema,
}: BlogLayoutProps) {
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const fullUrl = `https://novaweightandwellness.com/blog/${slug}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);

  // Auto-generate standard Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    image: "https://novaweightandwellness.com/og-image.webp",
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(date).toISOString(),
    author: {
      "@type": "Person",
      name: author,
      url: "https://novaweightandwellness.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Novaleo Weight & Wellness",
      logo: {
        "@type": "ImageObject",
        url: "https://novaweightandwellness.com/logo.webp",
      },
    },
  };

  // Auto-generate standard Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://novaweightandwellness.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://novaweightandwellness.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: breadcrumbTitle,
        item: fullUrl,
      },
    ],
  };

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="container-prose pt-6 pb-4">
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
            {breadcrumbTitle}
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="container-prose pb-8">
        <span className="eyebrow text-secondary mb-4 inline-block">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6">
          {title}
        </h1>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span>By {author}</span>
            <span aria-hidden="true">|</span>
            <time dateTime={new Date(date).toISOString()}>{date}</time>
            <span aria-hidden="true">|</span>
            <span>{readTime}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-foreground/60 mr-1">
              Share:
            </span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(fullUrl);
                alert("Link copied to clipboard!");
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
          alt={heroAlt}
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
            className={`w-5 h-5 text-primary transition-transform duration-300 ${
              tocOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {tocOpen && (
          <div
            id="mobile-toc"
            className="mt-2 bg-primary/5 border border-primary/10 rounded-xl p-5"
          >
            <nav>
              <ol className="space-y-3">
                {tocItems.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setTocOpen(false)}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors block"
                    >
                      <span className="text-secondary font-semibold mr-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="container-prose pb-12 md:pb-20 pt-4 md:pt-8">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          
          <article className="min-w-0 text-lg leading-relaxed text-foreground/85 prose-headings:font-display prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-secondary/80">
            {children}
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
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>

              {/* Sidebar CTA */}
              <div className="mt-8 pt-6 border-t border-primary/10">
                <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 text-center">
                  <h4 className="font-display text-lg text-primary mb-2">
                    Tired of feeling exhausted?
                  </h4>
                  <p className="text-sm text-foreground/70 mb-4">
                    Book a free discovery call to discuss functional lab testing.
                  </p>
                  <Link
                    to="/free-15-min-call-with-katie"
                    className="btn-primary text-sm w-full py-2.5"
                  >
                    Free 15-Min Call
                  </Link>
                </div>
              </div>
            </nav>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
