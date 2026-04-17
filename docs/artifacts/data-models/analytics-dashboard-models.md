# Data Models: Analytics Dashboard

## TypeScript Interfaces

All interfaces defined in `src/lib/types.ts`.

### KPI Types

```typescript
interface KpiMetric {
  value: number
  change: number // percentage, positive = growth, negative = decline
}

interface KpiMetricWithSparkline extends KpiMetric {
  sparkline: number[]
}

interface DashboardKpis {
  totalRevenue: KpiMetric
  activeSubscribers: KpiMetricWithSparkline
  mrr: KpiMetric
  refundRate: KpiMetric
}
```

### Chart Data Types

```typescript
interface RevenueDataPoint {
  date: string // "YYYY-MM" or "YYYY-WW"
  revenue: number
}

interface SalesRefundsDataPoint {
  month: string // "Jan", "Feb", etc.
  sales: number
  refunds: number
}

interface RegionData {
  name: string
  revenue: number
}

interface TimeSeriesDataPoint {
  date: string
  value: number
}
```

### Activity Types

```typescript
type ActivityType = 'signup' | 'upgrade' | 'downgrade' | 'cancellation' | 'payment'

interface Activity {
  id: string
  type: ActivityType
  customerName: string
  description: string
  timestamp: string // ISO 8601
}
```

### Customer Types

```typescript
type CustomerStatus = 'active' | 'churned'
type PlanType = 'Starter' | 'Pro' | 'Enterprise'

interface Customer {
  id: string
  name: string
  email: string
  plan: PlanType
  mrr: number
  status: CustomerStatus
  joinedDate: string // "YYYY-MM-DD"
  totalSpent: number
  address: string
  lastActivity: string // ISO 8601
}
```

### Analytics Types

```typescript
interface UserGrowthDataPoint {
  date: string
  users: number
}

interface ChurnDataPoint {
  date: string
  rate: number
}

interface ArpuDataPoint {
  date: string
  arpu: number
}
```

### Pagination

```typescript
interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  totalPages: number
}
```

## Data Flow

```
src/lib/mock-data.ts (static constants)
       │
       ▼
src/lib/types.ts (TypeScript interfaces)
       │
       ▼
src/hooks/ (useCustomers, useDashboard — filter/paginate mock data)
       │
       ▼
src/pages/ (consume via hooks)
       │
       ▼
src/components/ (render data as UI)
```

## Key Design Notes

1. **Mock data is realistic** — use real-sounding company names, plausible numbers, proper date ranges
2. **All dates in ISO 8601** — components format for display using `Intl.DateTimeFormat`
3. **Currency formatting** — use `Intl.NumberFormat` with `style: 'currency'`
4. **No global state store** — data flows through hooks, page-level state for filters/pagination
5. **Theme state** — `ThemeContext` provides `theme` and `toggleTheme`, persisted in `localStorage`
6. **Sidebar state** — `SidebarContext` provides `collapsed` and `toggleSidebar`, persisted in `localStorage`
