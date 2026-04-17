# Reference 1: Flowbite Admin Dashboard

**URL:** https://flowbite.com/application-ui/demo/
**Category:** Open-source Tailwind CSS dashboard (8.8k GitHub stars)

## What Makes It Effective
- Clean two-column layout with persistent sidebar + main content area
- Neutral-dominant color scheme with purposeful accent colors
- Minimal card borders with subtle shadows for content separation
- Generous whitespace between sections
- Hierarchical typography with clear size/weight differentiation
- Dark mode support built-in

## Patterns to Borrow
- **Sidebar:** Expandable menu sections with icon + label, hierarchical organization
- **KPI Cards:** Large numerical values with smaller percentage changes and contextual timeframe labels
- **Charts:** Line charts with helper text, dropdown date selectors ("Last 7 days", "Last 30 days")
- **Tables:** Alternating row backgrounds, sortable columns, status indicators (colored badges)
- **Interactions:** Dropdown date selectors, notification badges with avatars, action buttons

## TailwindCSS Mapping
- Cards: `bg-white rounded-lg shadow-sm border border-gray-200 p-6`
- Sidebar: `bg-gray-900 text-gray-300` with `hover:bg-gray-800` for items
- KPI values: `text-3xl font-bold text-gray-900`
- Change indicators: `text-sm text-green-500` / `text-sm text-red-500`
- Section spacing: `space-y-6` between cards, `p-6` inner padding
