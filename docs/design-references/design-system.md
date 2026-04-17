# Unified Design System: Analytics Dashboard

Synthesized from Flowbite, Mosaic (Cruip), Hirerise, and Prift design references.

## Color Palette

### TailwindCSS @theme tokens

```css
@theme {
  /* Primary — Indigo (brand, active states, CTAs) */
  --color-primary: #6366f1;
  --color-primary-hover: #4f46e5;
  --color-primary-light: #eef2ff;

  /* Semantic — positive/negative indicators */
  --color-success: #10b981;
  --color-success-light: #ecfdf5;
  --color-danger: #f43f5e;
  --color-danger-light: #fff1f2;
  --color-warning: #f59e0b;
  --color-warning-light: #fffbeb;
  --color-info: #3b82f6;
  --color-info-light: #eff6ff;

  /* Sidebar — Dark slate */
  --color-sidebar: #1e293b;
  --color-sidebar-hover: #334155;
  --color-sidebar-active: #0f172a;
  --color-sidebar-text: #94a3b8;
  --color-sidebar-text-active: #ffffff;

  /* Surface — Content area backgrounds */
  --color-surface: #f8fafc;
  --color-surface-card: #ffffff;
  --color-surface-border: #e2e8f0;

  /* Text */
  --color-text-primary: #0f172a;
  --color-text-secondary: #64748b;
  --color-text-muted: #94a3b8;

  /* Chart palette — 6 distinct colors for data series */
  --color-chart-1: #6366f1;
  --color-chart-2: #8b5cf6;
  --color-chart-3: #06b6d4;
  --color-chart-4: #10b981;
  --color-chart-5: #f59e0b;
  --color-chart-6: #f43f5e;
}
```

### Dark theme overrides (applied via `.dark` class)
```css
.dark {
  --color-surface: #0f172a;
  --color-surface-card: #1e293b;
  --color-surface-border: #334155;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #64748b;
}
```

## Typography

- **Font stack:** `Inter, system-ui, -apple-system, sans-serif` (add Inter via Google Fonts or use system-ui fallback)
- **Scale:**
  - Page title: `text-2xl font-bold` (24px)
  - Section title: `text-lg font-semibold` (18px)
  - Card title: `text-base font-semibold` (16px)
  - KPI value: `text-3xl font-bold` (30px)
  - Body text: `text-sm` (14px)
  - Labels/captions: `text-xs font-medium` (12px)
  - Change indicators: `text-sm font-medium` (14px)

## Spacing Grid

- **Base unit:** 4px (Tailwind default)
- **Card inner padding:** `p-5` or `p-6` (20-24px)
- **Grid gap between cards:** `gap-6` (24px)
- **Section spacing:** `space-y-6` (24px between major sections)
- **Compact spacing within cards:** `space-y-3` or `space-y-4`
- **Page padding:** `p-6` on desktop, `p-4` on mobile

## Component Patterns

### Cards
```
bg-white rounded-xl shadow-sm border border-gray-100 p-5
dark:bg-slate-800 dark:border-slate-700
```
- Subtle shadow, not heavy
- Rounded corners (xl = 12px)
- Thin border for definition on white backgrounds

### KPI Card
```
Card + flex column:
  - Label: text-sm font-medium text-gray-500
  - Value: text-3xl font-bold text-gray-900
  - Change: inline-flex items-center gap-1 text-sm font-medium
    - Positive: text-emerald-600 bg-emerald-50 rounded-full px-2 py-0.5
    - Negative: text-rose-600 bg-rose-50 rounded-full px-2 py-0.5
```

### Sidebar
```
Width: 256px expanded, 64px collapsed
Background: bg-slate-800
Nav items: flex items-center gap-3 px-3 py-2 rounded-lg
  - Default: text-slate-400 hover:bg-slate-700 hover:text-white
  - Active: bg-slate-900 text-white
Logo area: px-4 py-5 border-b border-slate-700
```

### Header
```
Sticky top, h-16, bg-white border-b border-gray-200
Flex justify-between items-center px-6
dark:bg-slate-800 dark:border-slate-700
```

### Badges
```
inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
- Active/Success: bg-emerald-50 text-emerald-700
- Churned/Danger: bg-rose-50 text-rose-700
- Warning: bg-amber-50 text-amber-700
- Info: bg-blue-50 text-blue-700
- Neutral: bg-gray-100 text-gray-700
```

### Tables
```
- Header: text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50
- Row: border-b border-gray-100 hover:bg-gray-50 transition-colors
- Cell: py-3 px-4 text-sm text-gray-900
- Sortable header: cursor-pointer hover:text-gray-700
```

### Buttons
```
Primary: bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-medium
Secondary: bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg px-4 py-2
Ghost: text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg px-3 py-2
```

## Interaction Patterns

- **Hover states:** Subtle background color shift (`hover:bg-gray-50` on rows/items)
- **Transitions:** `transition-colors duration-150` on interactive elements
- **Focus rings:** `focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2` for accessibility
- **Active nav:** Left border accent or background fill, not just color change
- **Dropdown animation:** `transition-all duration-200` with opacity + translateY
- **Sidebar collapse:** `transition-all duration-300` on width change

## Responsive Breakpoints

- **Mobile** (<768px): Single column, sidebar as drawer overlay, stacked cards
- **Tablet** (768-1024px): Sidebar collapsed to icons, 2-column grid for cards
- **Desktop** (1024px+): Full sidebar, 2-3 column grid for dashboard widgets

## Dashboard Grid Layout

```
Desktop (lg+):
┌─────────────────────────────────────────┐
│ KPI Card │ KPI Card │ KPI Card │ KPI Card│  ← full width, 4 cols
├─────────────────────┬───────────────────┤
│ Revenue Chart       │ Sales by Region   │  ← 2/3 + 1/3
│ (area, large)       │ (doughnut)        │
├─────────────────────┤ Activity Feed     │
│ Sales vs Refunds    │ (timeline list)   │
│ (bar chart)         │                   │
├─────────────────────┴───────────────────┤
│ Top Customers Table                     │  ← full width
└─────────────────────────────────────────┘

Mobile:
All widgets stacked single-column, full width
```
