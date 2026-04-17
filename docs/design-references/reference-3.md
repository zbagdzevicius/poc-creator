# Reference 3: Hirerise-style Typography-Driven Dashboard

**Source:** Eleken design analysis — Hirerise (Applicant Tracking System)
**Category:** Typography-forward minimal dashboard

## What Makes It Effective
- Strong visual hierarchy through typography and whitespace rather than heavy color use
- "Plain cells with significant spacing" for numerical data
- Minimal palette — relies on bold black vs light gray contrast
- Linear graphs paired with card-based metrics
- Professional, enterprise feel without being visually heavy

## Patterns to Borrow
- **Typography hierarchy:** Large bold numbers (32-40px) for primary metrics, medium weight (18-20px) for labels, small light text (12-14px) for secondary info
- **Spacing strategy:** Generous padding inside cards (24px+), clear gaps between grid items (24px)
- **Color restraint:** Almost monochrome with 1-2 accent colors only (for positive/negative indicators)
- **Data density:** Show key numbers prominently, push details into expandable sections or sub-pages

## TailwindCSS Mapping
- Primary metric: `text-4xl font-bold text-gray-900`
- Labels: `text-sm font-medium text-gray-500`
- Card gaps: `gap-6` in grid
- Inner padding: `p-6`
- Accent green: `text-emerald-500`
- Accent red: `text-rose-500`
