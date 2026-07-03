import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://novaweightandwellness.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/about", priority: "0.8", changefreq: "monthly" },
          { path: "/approach", priority: "0.8", changefreq: "monthly" },
          { path: "/services", priority: "0.9", changefreq: "weekly" },
          { path: "/scheduler", priority: "0.9", changefreq: "weekly" },
          { path: "/conditions", priority: "0.8", changefreq: "monthly" },
          { path: "/contact", priority: "0.9", changefreq: "monthly" },
          { path: "/blog", priority: "0.8", changefreq: "weekly" },
          { path: "/blog/why-michigan-women-over-40-cant-lose-weight-feel-exhausted", priority: "0.9", changefreq: "monthly" },
          { path: "/free-15-min-call-with-katie", priority: "0.9", changefreq: "monthly" },
          { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
          { path: "/terms-of-service", priority: "0.3", changefreq: "yearly" },
        ];
        const urls = entries.map(
          (e) =>
            `  <url><loc>${BASE_URL}${e.path}</loc><lastmod>${today}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
