# Implementation Plan: Analytics Dashboard

## Additional Dependencies Needed
- `recharts` — React charting library (AreaChart, BarChart, PieChart, LineChart)
- `lucide-react` — icon library (lightweight, tree-shakeable)

## Build Order

### Step 1: Foundation (types, mock data, design tokens)
**Files:**
- `src/lib/types.ts` — all TypeScript interfaces
- `src/lib/mock-data.ts` — realistic mock data for all endpoints
- `src/index.css` — update `@theme` with design system tokens (after Phase 2)

**Complexity:** Low
**Dependencies:** None

### Step 2: Shared UI Components
**Files:**
- `src/components/ui/Badge.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/DropdownMenu.tsx`
- `src/components/ui/Table.tsx`
- `src/components/ui/Pagination.tsx`
- `src/components/ui/SearchInput.tsx`

**Complexity:** Low-Medium
**Dependencies:** Step 1 (types)

### Step 3: Layout Shell
**Files:**
- `src/components/layout/Sidebar.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/AppLayout.tsx`
- `src/components/layout/MobileSidebarOverlay.tsx`
- `src/contexts/ThemeContext.tsx`
- `src/contexts/SidebarContext.tsx`
- `src/App.tsx` — wire up router, contexts, layout

**Complexity:** Medium (sidebar collapse, mobile drawer, theme toggle)
**Dependencies:** Step 2 (Button, DropdownMenu)

### Step 4: Dashboard Page — KPI Cards
**Files:**
- `src/components/dashboard/KpiCard.tsx`
- `src/components/dashboard/KpiCardRow.tsx`
- `src/pages/DashboardPage.tsx` (initial)

**Complexity:** Low-Medium (sparkline is the tricky part)
**Dependencies:** Step 1 (mock data), Step 2 (Card)

### Step 5: Dashboard Page — Charts
**Files:**
- `src/components/dashboard/RevenueChart.tsx` (area chart with weekly/monthly toggle)
- `src/components/dashboard/SalesRefundsChart.tsx` (grouped bar chart)
- `src/components/dashboard/RegionChart.tsx` (doughnut/pie chart)

**Complexity:** Medium (recharts config, responsive sizing, toggle state)
**Dependencies:** Step 1 (mock data), Step 2 (Card), recharts

### Step 6: Dashboard Page — Activity Feed & Table
**Files:**
- `src/components/dashboard/ActivityFeed.tsx`
- `src/components/dashboard/ActivityItem.tsx`
- `src/components/dashboard/TopCustomersTable.tsx`
- `src/pages/DashboardPage.tsx` (complete)

**Complexity:** Low-Medium
**Dependencies:** Step 2 (Card, Badge, Table), Step 1 (mock data)

### Step 7: Analytics Page
**Files:**
- `src/components/analytics/DateRangePicker.tsx`
- `src/components/analytics/UserGrowthChart.tsx`
- `src/components/analytics/ChurnRateChart.tsx`
- `src/components/analytics/ArpuChart.tsx`
- `src/pages/AnalyticsPage.tsx`

**Complexity:** Medium (date picker filtering)
**Dependencies:** Step 1 (mock data), Step 2 (Card), recharts

### Step 8: Customers Page
**Files:**
- `src/hooks/useCustomers.ts` (search, pagination, sorting logic)
- `src/components/customers/CustomerRow.tsx` (expandable)
- `src/pages/CustomersPage.tsx`

**Complexity:** Medium (client-side search, pagination, expandable rows)
**Dependencies:** Step 2 (Table, Pagination, SearchInput, Badge)

### Step 9: Placeholder Pages
**Files:**
- `src/pages/OrdersPage.tsx`
- `src/pages/SettingsPage.tsx`

**Complexity:** Trivial
**Dependencies:** Step 3 (layout)

### Step 10: Polish
- Responsive breakpoints for all pages
- Hover states, focus rings, transitions
- Dark theme variants for all components
- Loading/empty states
- Console error cleanup

**Complexity:** Medium
**Dependencies:** All previous steps

## Dependency Graph

```
Step 1 (types + mock data)
  ├── Step 2 (UI components)
  │     ├── Step 3 (layout) ──► Step 9 (placeholder pages)
  │     ├── Step 4 (KPI cards)
  │     ├── Step 5 (charts) ──────────┐
  │     ├── Step 6 (feed + table) ────┤
  │     ├── Step 7 (analytics page) ──┤
  │     └── Step 8 (customers page) ──┤
  │                                   │
  └───────────────────────────────────► Step 10 (polish)
```

## Estimated Complexity
- **Total files to create:** ~30
- **Total components:** ~25
- **Critical path:** Steps 1 → 2 → 3 → 5 → 10 (layout + charts are most complex)
- **Highest risk:** Chart responsiveness, sidebar collapse animation, dark theme consistency
