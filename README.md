# Novaleo Weight & Wellness

Novaleo Weight & Wellness is a modern telehealth platform built for professional women in Michigan and Wisconsin, specializing in hormones, metabolic health, and weight resistance. Guided by Kathryn Long, NP-C, the platform delivers root-cause functional medicine.

## Technology Stack

This application is built with modern frontend technologies:

- **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (React Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State & Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Bundler/Build Tool**: [Vite](https://vitejs.dev/)

## Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) or Node.js (with npm) installed.

### Installation

Install the project dependencies:

```bash
bun install
# or
npm install
```

### Development Server

Run the local development server:

```bash
bun dev
# or
npm run dev
```

The application will be available at `http://localhost:3000` (or the port specified by Vite).

### Production Build

To build the production bundle:

```bash
bun run build
# or
npm run build
```

## Features

- **Responsive Layout**: Optimised for mobile, tablet, and desktop viewports.
- **Dynamic Elements**: Auto-scrolling reviews and quotes carousel powered by Embla Carousel, seamlessly bleeding to screen edges for a modern feel.
- **Telehealth Focus**: Clear call-to-actions (CTAs) for clarity sessions, intake forms, and service information.
- **Global Booking Modal**: A seamless unified pop-up experience for clarity sessions across all pages.
  - Replaces the standard Cal.com popup with a **100% Native React UI** (built with `react-day-picker`) for selecting dates and times.
  - Collects user intake details and primary health goals before proceeding to payment.
  - Seamlessly integrates the **Whop Checkout React SDK** directly into the modal for an uninterrupted "Check Availability First -> Pay" flow.
  - **Global Bio Layout**: The standard location gate has been completely replaced site-wide with a high-converting, trust-building clinician bio. This unified layout includes an Instagram-style verified badge, a rotating carousel of verified 5-star patient reviews in a clean light-theme card, and a highly polished CTA button with a shimmer animation, optimized specifically for Meta Ads traffic.
    - Features intelligent dynamic scrolling (`overflow-y-auto`) that allows the bio to scroll smoothly on small mobile screens.
    - Includes tightened mobile-specific padding above the clinician headshot to maximize above-the-fold real estate.
    - Includes a secondary CTA button below the testimonials to capture conversions without requiring users to scroll back up.
    - Features condensed, punchy intro copy modeled directly after the ad creative to reinforce message-match and improve speed-to-book.
- **UI Enhancements**: Consistent pointer interactions, standardized branding colours, and a personalized clinician avatar with active availability indicators.
  - Buttons across the site feature subtle, elegant box shadows and smooth lift animations on hover.
  - Social media links in the footer have been updated to reflect the `katielong.np` handles across TikTok, Facebook, and Instagram.
  - Mobile-first refinements ensure the primary "Book My $47 Clarity Session" button stays visible above the fold on the homepage hero section.
  - All site images and assets have been optimized by converting them to the WebP format for faster page load times and improved performance.
