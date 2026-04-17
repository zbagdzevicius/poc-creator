export interface KpiMetric {
  value: number
  change: number
}

export interface KpiMetricWithSparkline extends KpiMetric {
  sparkline: number[]
}

export interface DashboardKpis {
  totalRevenue: KpiMetric
  activeSubscribers: KpiMetricWithSparkline
  mrr: KpiMetric
  refundRate: KpiMetric
}

export interface RevenueDataPoint {
  date: string
  revenue: number
}

export interface SalesRefundsDataPoint {
  month: string
  sales: number
  refunds: number
}

export interface RegionData {
  name: string
  revenue: number
}

export type ActivityType = 'signup' | 'upgrade' | 'downgrade' | 'cancellation' | 'payment'

export interface Activity {
  id: string
  type: ActivityType
  customerName: string
  description: string
  timestamp: string
}

export type CustomerStatus = 'active' | 'churned'
export type PlanType = 'Starter' | 'Pro' | 'Enterprise'

export interface Customer {
  id: string
  name: string
  email: string
  plan: PlanType
  mrr: number
  status: CustomerStatus
  joinedDate: string
  totalSpent: number
  address: string
  lastActivity: string
}

export interface UserGrowthDataPoint {
  date: string
  users: number
}

export interface ChurnDataPoint {
  date: string
  rate: number
}

export interface ArpuDataPoint {
  date: string
  arpu: number
}
