# Component Specs: Analytics Dashboard

## Component Tree

```
App
├── ThemeProvider (context: dark/light)
├── BrowserRouter
│   └── AppLayout
│       ├── Sidebar
│       │   ├── SidebarLogo
│       │   ├── SidebarNav
│       │   │   └── SidebarNavItem (×5: Dashboard, Analytics, Customers, Orders, Settings)
│       │   └── SidebarCollapseButton
│       ├── MainContent
│       │   ├── Header
│       │   │   ├── MobileMenuButton
│       │   │   ├── SearchInput
│       │   │   ├── ThemeToggle
│       │   │   ├── NotificationBell
│       │   │   └── UserMenu
│       │   └── <Routes>
│       │       ├── DashboardPage
│       │       │   ├── KpiCardRow
│       │       │   │   └── KpiCard (×4)
│       │       │   ├── RevenueChart
│       │       │   ├── SalesRefundsChart
│       │       │   ├── ActivityFeed
│       │       │   │   └── ActivityItem (×n)
│       │       │   ├── TopCustomersTable
│       │       │   └── RegionChart
│       │       ├── AnalyticsPage
│       │       │   ├── DateRangePicker
│       │       │   ├── UserGrowthChart
│       │       │   ├── ChurnRateChart
│       │       │   └── ArpuChart
│       │       ├── CustomersPage
│       │       │   ├── SearchFilterBar
│       │       │   ├── CustomerTable
│       │       │   │   └── CustomerRow (×n, expandable)
│       │       │   └── Pagination
│       │       ├── OrdersPage (placeholder)
│       │       └── SettingsPage (placeholder)
│       └── MobileSidebarOverlay
```

## Shared UI Components (`src/components/ui/`)

### Badge
```tsx
interface BadgeProps {
  label: string
  variant: 'success' | 'danger' | 'warning' | 'info' | 'neutral'
}
```
Renders a small colored pill. Used for customer status, notification counts.

### Card
```tsx
interface CardProps {
  children: React.ReactNode
  className?: string
}
```
White card with subtle shadow and rounded corners. Container for dashboard widgets.

### Button
```tsx
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}
```

### DropdownMenu
```tsx
interface DropdownMenuProps {
  trigger: React.ReactNode
  items: { label: string; onClick: () => void; icon?: React.ReactNode }[]
}
```
Opens on trigger click, closes on click outside. Used by UserMenu.

### Table
```tsx
interface TableColumn<T> {
  key: keyof T
  label: string
  sortable?: boolean
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

interface TableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  onRowClick?: (row: T) => void
}
```

### Pagination
```tsx
interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}
```

## Layout Components (`src/components/layout/`)

### Sidebar
- Fixed left, 256px wide (expanded), 64px (collapsed)
- Dark indigo background (`bg-slate-800` / `bg-indigo-900`)
- Props: `collapsed: boolean`, `onToggle: () => void`
- State: `collapsed` stored in localStorage

### Header
- Sticky top, full width of main content area
- White background with bottom border
- Height: 64px

### AppLayout
- Manages sidebar collapse state and mobile drawer state
- CSS Grid: `grid-cols-[auto_1fr]` on desktop, single column on mobile
- Passes sidebar state down to Sidebar and MainContent

## Page Components (`src/pages/`)

### DashboardPage
- 2-column grid on desktop (main charts left 2/3, sidebar widgets right 1/3)
- KPI cards span full width at top
- Mobile: single column, all widgets stacked

### AnalyticsPage
- Single column, date picker at top, 3 chart cards below
- Charts stacked vertically

### CustomersPage
- Full width, search bar at top, table below, pagination at bottom

### OrdersPage / SettingsPage
- Placeholder pages with title and "Coming soon" message

## State Management
- **No global state library** — use React useState/useContext only
- `ThemeContext` — dark/light mode (persisted to localStorage)
- `SidebarContext` — collapsed/expanded (persisted to localStorage)
- Page-level state for filters, pagination, sorting

## Chart Library
- Use **recharts** (React-native charting, works with React 19, tree-shakeable)
- Chart types needed: AreaChart, BarChart, PieChart/RadialChart, LineChart
- Each chart wrapped in a Card component with title

## Icons
- Use **lucide-react** — lightweight, tree-shakeable icon library
- Icons needed: Home, BarChart3, Users, ShoppingCart, Settings, Search, Bell, Sun, Moon, ChevronLeft, ChevronRight, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Menu, X, User, LogOut
