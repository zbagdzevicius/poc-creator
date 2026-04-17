# Reference 2: Mosaic by Cruip

**URL:** https://cruip.com/mosaic/
**Category:** Premium Tailwind CSS admin dashboard (2.8k GitHub stars)

## What Makes It Effective
- 60+ pre-built pages with hundreds of components
- Card-based widget layout with clean information hierarchy
- Indigo/dark sidebar theme that creates strong contrast with white content area
- Chart.js integration for smooth, interactive data visualizations
- Responsive grid that adapts cleanly from desktop to mobile

## Patterns to Borrow
- **Layout:** Dark indigo sidebar (left) + white/gray content area (right), sticky header
- **Dashboard grid:** 2-column on desktop (charts left 2/3, widgets right 1/3), single column on mobile
- **Color approach:** Indigo as primary brand color, used sparingly for active states and CTAs
- **KPI cards:** Top row spanning full width, 4 cards in a grid with metric + change + icon
- **Charts:** Subtle gridlines, rounded corners on bars, gradient fills on area charts

## TailwindCSS Mapping
- Sidebar background: `bg-slate-800` or `bg-indigo-950`
- Active nav item: `bg-slate-900 text-white` with left border accent `border-l-2 border-indigo-500`
- Content background: `bg-gray-50`
- Cards: `bg-white rounded-xl shadow-sm p-5`
- Primary accent: `text-indigo-500`, `bg-indigo-500`
