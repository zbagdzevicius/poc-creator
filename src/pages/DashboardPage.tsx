import { KpiCard } from '../components/dashboard/KpiCard'
import { RevenueChart } from '../components/dashboard/RevenueChart'
import { SalesRefundsChart } from '../components/dashboard/SalesRefundsChart'
import { RegionChart } from '../components/dashboard/RegionChart'
import { ActivityFeed } from '../components/dashboard/ActivityFeed'
import { TopCustomersTable } from '../components/dashboard/TopCustomersTable'
import { dashboardKpis } from '../lib/mock-data'

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
        <p className="text-sm text-text-muted">Welcome back, John. Here's what's happening.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard label="Total Revenue" metric={dashboardKpis.totalRevenue} format="currency" />
        <KpiCard label="Active Subscribers" metric={dashboardKpis.activeSubscribers} format="number" />
        <KpiCard label="MRR" metric={dashboardKpis.mrr} format="currency" />
        <KpiCard label="Refund Rate" metric={dashboardKpis.refundRate} format="percent" />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RevenueChart />
          <SalesRefundsChart />
        </div>
        <div className="space-y-6">
          <RegionChart />
          <ActivityFeed />
        </div>
      </div>

      {/* Table */}
      <TopCustomersTable />
    </div>
  )
}
