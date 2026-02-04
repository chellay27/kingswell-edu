# Kingswell Education Website

## Project Overview

A bilingual (English/Arabic) marketing website for **Kingswell Education**, an educational consultancy in Qatar that helps working professionals obtain Bachelor's, Master's, Doctorate, and professional degrees from universities in the UK and India.

**Status**: New startup - this is their first website.

---

## Business Context

- **Company**: Kingswell Education
- **Tagline**: "Education Without Boundaries"
- **Location**: Qatar
- **Target Audience**: Working professionals in Qatar (Qatari nationals and residents)
- **Services**: Educational consulting - career counseling, course selection, document verification, admission support
- **Study Destinations**: UK (premium) and India (affordable)
- **Program Type**: 100% Distance/Online Learning - study from home in Qatar
- **Logo**: Available at `/logo/logo.png` - Crown, lion emblem, laurel wreaths in dark green and gold

---

## Website Goals

1. Generate new student enquiries (leads)
2. Build trust and credibility
3. Clearly explain services and study options
4. Provide easy contact options (WhatsApp is primary)

---

## Brand Identity

### Design Direction: "Academic Luxury"
The logo features a crown, lion, and laurel wreaths - symbols of royalty and academic excellence. The website should feel like stepping into a prestigious institution: refined, trustworthy, and distinguished.

**Core Principles:**
- Elegant, not flashy
- Generous white space
- Subtle gold accents that feel earned
- Serif headlines for gravitas
- Soft shadows for depth
- Premium, boutique consultancy feel

### Colors
```css
/* Primary Palette */
--color-primary: #22382c;        /* Forest Green - headers, footer, nav */
--color-primary-light: #2d4a3a;  /* Lighter green - hover states */
--color-primary-dark: #1a2b22;   /* Darker green - active states */

/* Accent */
--color-accent: #C9A227;         /* Gold - buttons, CTAs, highlights */
--color-accent-hover: #D4AF37;   /* Brighter gold - hover states */
--color-accent-light: #F5E6B3;   /* Pale gold - subtle highlights */

/* Neutrals */
--color-cream: #F5F1E8;          /* Warm cream - page backgrounds */
--color-white: #FFFFFF;          /* Cards, content areas */
--color-text: #1A1A1A;           /* Primary body text */
--color-text-muted: #5A5A5A;     /* Secondary text, captions */
--color-border: #E5E0D5;         /* Subtle borders */
```

### Typography
```css
/* Display Font - Headlines & Titles */
--font-display: 'Playfair Display', Georgia, serif;
/* Elegant serif that matches the royal, prestigious brand */

/* Body Font - Paragraphs & UI */
--font-body: 'Source Sans 3', system-ui, sans-serif;
/* Clean and readable, professional without being generic */

/* Arabic Font */
--font-arabic: 'Noto Naskh Arabic', serif;
/* Beautiful Arabic typeface with good readability */

/* Font Sizes */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
```

### Spacing System (8px base)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.16);
--shadow-gold: 0 4px 20px rgba(201, 162, 39, 0.25);  /* For gold buttons */
```

### Border Radius
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-pill: 9999px;   /* For pill-shaped buttons */
```

### Component Styles

**Primary Button (Gold)**
```css
background: var(--color-accent);
color: var(--color-primary);
font-weight: 600;
padding: 14px 32px;
border-radius: var(--radius-pill);
box-shadow: var(--shadow-gold);
transition: all 0.2s ease;
/* Hover: brighter gold, lift effect */
```

**Secondary Button (Outlined)**
```css
background: transparent;
color: var(--color-primary);
border: 2px solid var(--color-primary);
padding: 12px 30px;
border-radius: var(--radius-pill);
/* Hover: filled green background */
```

**Cards**
```css
background: var(--color-white);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-md);
padding: var(--space-6);
/* Hover: lift with shadow-lg */
```

**Service Cards**
```css
background: var(--color-white);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-sm);
border: 1px solid var(--color-border);
padding: var(--space-8);
/* Hover: gold border accent, slight lift */
```

### Animations
```css
/* Default transition */
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;

/* Scroll animations: Fade up */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Card hover: Subtle lift */
transform: translateY(-4px);
box-shadow: var(--shadow-lg);
```

### RTL Support
- Use `dir="rtl"` on html element for Arabic
- Tailwind RTL plugin enabled
- Mirror layouts and icons appropriately
- Arabic font automatically applied

**IMPORTANT - Flexbox in RTL Documents:**
When the document has `dir="rtl"`, flexbox behavior is automatically mirrored by the browser:
- `flex-row` in RTL = items flow right-to-left (first item appears on the RIGHT)
- `flex-row-reverse` in RTL = items flow left-to-right (first item appears on the LEFT)

**DO NOT** use `flex-row-reverse` for Arabic/RTL layouts. Just use `flex-row` and the RTL document direction will naturally handle the mirroring. Using `flex-row-reverse` in RTL mode will actually undo the mirroring and make items appear in LTR order.

```tsx
// ✅ CORRECT - Works for both LTR and RTL
<div className="flex flex-col lg:flex-row gap-12 items-center">
  <div>First item (left in LTR, right in RTL)</div>
  <div>Second item (right in LTR, left in RTL)</div>
</div>

// ❌ WRONG - Don't do this
<div className={cn(
  'flex flex-col lg:flex-row gap-12 items-center',
  isRTL && 'lg:flex-row-reverse'  // This actually breaks RTL!
)}>
```

---

### Visual Hierarchy Guidelines

**Hero Section**
- Full-width with gradient overlay on image
- Large serif headline (text-5xl on mobile, text-6xl on desktop)
- Tagline as subtle badge above headline
- Two CTAs: Primary gold + Secondary outlined
- Generous padding (space-24 top/bottom)

**Section Titles**
- Serif font (Playfair Display)
- text-3xl to text-4xl
- Centered with subtle gold underline accent
- Comfortable margin-bottom (space-12)

**Body Content**
- Sans-serif font (Source Sans 3)
- text-lg for readability
- Line height: 1.7
- Max-width: 65ch for paragraphs

**Cards Grid**
- 4 columns on desktop, 2 on tablet, 1 on mobile
- Consistent gap (space-6)
- Equal height cards in rows

---

## Site Structure

```
/                     → Home
/about                → About Us
/study-in-uk          → Study in UK (premium positioning)
/study-in-india       → Study in India (affordable positioning)
/contact              → Contact Us
/faqs                 → FAQs
/testimonials         → Testimonials (placeholder for future content)
```

All pages available in both `/en/...` and `/ar/...` routes.

---

## Pages Overview

### Home
- Hero with CTA (WhatsApp primary)
- Services overview (4 cards)
- Study destinations preview (UK & India)
- Trust-building section
- Testimonials section
- Final CTA

### About Us
- Mission statement
- Approach/values
- Why choose us
- (Note: Founder prefers not to be highlighted individually)

### Study in UK
- UK education overview
- Premium positioning
- Programs available
- Who it's for
- CTA to contact

### Study in India
- India education overview
- Affordable positioning
- Programs available
- Who it's for
- CTA to contact

### Contact
- WhatsApp (PRIMARY - floating button + prominent)
- Phone number
- Contact form (name, phone, email, course interest)
- Office address
- Confirmation message after form submit

### FAQs
- Accordion-style
- Categories: Eligibility, Process, Programs, Support

### Testimonials
- Placeholder section (ready for future content)
- Success stories grid

---

## Key Features

| Feature | Implementation |
|---------|----------------|
| Floating WhatsApp button | Bottom-right, always visible |
| Language switcher | EN/AR toggle in header |
| Contact form | Sends to Email + WhatsApp |
| RTL support | Full Arabic layout support |
| SEO | Meta tags, Open Graph, Schema markup |
| Mobile responsive | All breakpoints |

---

## Contact Form

**Fields:**
- Name (required)
- Phone (required)
- Email (required)
- Course Interest (dropdown: Bachelor's, Master's, Doctorate, Not Sure)
- Message (optional)

**On Submit:**
- Validate all fields
- Send notification to email
- Send notification to WhatsApp
- Show success message: "Thank you! We'll contact you within 24 hours."

---

## Trust-Building (New Startup Strategy)

Since this is a new business without historical stats:
- Clear process visualization (step-by-step)
- University accreditation info
- Personal approach messaging
- Guarantees ("Free consultation", "No hidden fees")
- Placeholder for testimonials (ready for future)
- Placeholder for university logos (add later with permission)

---

## Languages

- **English**: Primary, build first
- **Arabic**: RTL support, translate after English complete
- Translation approach: Structured JSON files, provide template for Arabic content

---

## SEO Strategy

No blog (too much maintenance). Instead:
- Strong on-page SEO (meta titles, descriptions, OG tags)
- Schema markup (EducationalOrganization)
- Google Business Profile
- Fast performance
- Mobile-first
- Auto-generated sitemap

---

## Reference Websites

| Site | Notes |
|------|-------|
| EdzipEducation.com | Main inspiration - clean layout, corporate feel |
| SalfordEducation.com | Course cards, sticky nav |
| BrightEduway.com | Some modern touches (subtle only) |

---

## Assets Status

- [x] Logo - Available at `/logo/logo.png` and `/logo/logo.jpeg`
- [ ] WhatsApp business number
- [ ] Email for form notifications
- [ ] Office address in Qatar
- [ ] FAQ content (template provided in docs/content/)

---

## AI Image Prompts (for Gemini)

**Hero:**
> Professional Middle Eastern working adults in business attire, diverse group including men and women, graduation caps and gowns, modern university campus in background, warm lighting, aspirational and confident mood, photorealistic, high quality

**Study UK:**
> Iconic British university building with classical architecture, Big Ben or London skyline subtle in background, professional Arab student in graduation gown smiling, autumn colors, prestigious academic atmosphere, photorealistic

**Study India:**
> Modern Indian university campus, professional student in graduation attire, contemporary architecture, warm welcoming atmosphere, diverse students, photorealistic, high quality

**About/Services:**
> Professional education consultant meeting with client in modern office, laptop and documents on desk, warm and trustworthy atmosphere, Middle Eastern setting, photorealistic

**Contact:**
> Friendly customer service representative with headset, modern office environment, welcoming smile, professional attire, clean background, photorealistic

---

## Development Notes

- Build English version first, then add Arabic
- Use placeholder content where client assets not available
- Floating WhatsApp button on every page
- Form validation before submission
- Success/error states for form
- Test RTL layout thoroughly

---

## Tech Stack

| Component | Technology | Cost |
|-----------|------------|------|
| Framework | Next.js 14 (App Router) | Free |
| Hosting | Vercel (free tier) | Free |
| Styling | Tailwind CSS | Free |
| i18n | next-intl | Free |
| Form Backend | Google Sheets + Apps Script (email notification) | Free |
| WhatsApp | Click-to-Chat links | Free |
| Icons | Lucide React | Free |

**Total Monthly Cost: $0**

### Project Structure
```
kingswell-edu/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Home
│   │   ├── about/page.tsx
│   │   ├── study-in-uk/page.tsx
│   │   ├── study-in-india/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── faqs/page.tsx
│   │   └── testimonials/page.tsx
│   ├── api/
│   │   └── contact/route.ts      # Form → Google Sheets
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── ui/
│   │   └── ...
│   └── sections/
│       └── ...
├── messages/
│   ├── en.json
│   └── ar.json
├── lib/
│   └── utils.ts
└── public/
    └── images/
```
