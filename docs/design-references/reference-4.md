# Reference 4: Prift Finance Dashboard

**Source:** Eleken design analysis — Prift (Finance App)
**Category:** Financial dashboard with strategic color coding

## What Makes It Effective
- Intentional color psychology: green/blue for positive metrics, red/orange for concerns
- Tabbed categorization keeps pages focused without overwhelming
- Mixed chart types: pie charts for breakdowns, line graphs for trends, bars for comparisons
- Contrasting zones separate different data groups visually
- Clear call-to-action hierarchy

## Patterns to Borrow
- **Color coding:** Semantic colors that carry meaning (green = growth, red = decline, blue = neutral info)
- **Chart variety:** Different chart types for different data relationships prevents visual monotony
- **Tab navigation:** Within pages, use tabs to segment related data (e.g., weekly/monthly toggle)
- **Doughnut center text:** Show total or key metric in the center of doughnut charts

## TailwindCSS Mapping
- Positive change: `text-emerald-600 bg-emerald-50 rounded-full px-2 py-0.5`
- Negative change: `text-rose-600 bg-rose-50 rounded-full px-2 py-0.5`
- Tab active: `border-b-2 border-indigo-500 text-indigo-600 font-medium`
- Tab inactive: `text-gray-500 hover:text-gray-700`
- Chart card: `bg-white rounded-xl shadow-sm border border-gray-100`
