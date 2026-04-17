import type {
  DashboardKpis,
  RevenueDataPoint,
  SalesRefundsDataPoint,
  RegionData,
  Activity,
  Customer,
  UserGrowthDataPoint,
  ChurnDataPoint,
  ArpuDataPoint,
} from './types'

export const dashboardKpis: DashboardKpis = {
  totalRevenue: { value: 24780, change: 12.5 },
  activeSubscribers: {
    value: 1245,
    change: 3.2,
    sparkline: [980, 1020, 1050, 1100, 1150, 1200, 1245],
  },
  mrr: { value: 14320, change: 8.1 },
  refundRate: { value: 2.4, change: -0.8 },
}

export const revenueMonthly: RevenueDataPoint[] = [
  { date: 'Jan', revenue: 18200 },
  { date: 'Feb', revenue: 19400 },
  { date: 'Mar', revenue: 20100 },
  { date: 'Apr', revenue: 19800 },
  { date: 'May', revenue: 21500 },
  { date: 'Jun', revenue: 22300 },
  { date: 'Jul', revenue: 21800 },
  { date: 'Aug', revenue: 23100 },
  { date: 'Sep', revenue: 22700 },
  { date: 'Oct', revenue: 24200 },
  { date: 'Nov', revenue: 23900 },
  { date: 'Dec', revenue: 24780 },
]

export const revenueWeekly: RevenueDataPoint[] = [
  { date: 'W1', revenue: 5200 },
  { date: 'W2', revenue: 5800 },
  { date: 'W3', revenue: 5400 },
  { date: 'W4', revenue: 6100 },
  { date: 'W5', revenue: 5900 },
  { date: 'W6', revenue: 6300 },
  { date: 'W7', revenue: 6000 },
  { date: 'W8', revenue: 6500 },
]

export const salesRefunds: SalesRefundsDataPoint[] = [
  { month: 'Jan', sales: 18200, refunds: 420 },
  { month: 'Feb', sales: 19400, refunds: 380 },
  { month: 'Mar', sales: 20100, refunds: 510 },
  { month: 'Apr', sales: 19800, refunds: 440 },
  { month: 'May', sales: 21500, refunds: 390 },
  { month: 'Jun', sales: 22300, refunds: 470 },
  { month: 'Jul', sales: 21800, refunds: 350 },
  { month: 'Aug', sales: 23100, refunds: 410 },
  { month: 'Sep', sales: 22700, refunds: 480 },
  { month: 'Oct', sales: 24200, refunds: 520 },
  { month: 'Nov', sales: 23900, refunds: 390 },
  { month: 'Dec', sales: 24780, refunds: 430 },
]

export const regionData: RegionData[] = [
  { name: 'North America', revenue: 12400 },
  { name: 'Europe', revenue: 8200 },
  { name: 'Asia Pacific', revenue: 5100 },
  { name: 'Latin America', revenue: 2800 },
  { name: 'Other', revenue: 1280 },
]

export const activities: Activity[] = [
  { id: 'a1', type: 'signup', customerName: 'Sarah Johnson', description: 'Created a new account', timestamp: '2025-12-15T14:30:00Z' },
  { id: 'a2', type: 'upgrade', customerName: 'Acme Corp', description: 'Upgraded to Enterprise plan', timestamp: '2025-12-15T13:15:00Z' },
  { id: 'a3', type: 'payment', customerName: 'TechStart Inc', description: 'Payment of $299 received', timestamp: '2025-12-15T11:45:00Z' },
  { id: 'a4', type: 'cancellation', customerName: 'Old Guard LLC', description: 'Cancelled subscription', timestamp: '2025-12-15T10:20:00Z' },
  { id: 'a5', type: 'signup', customerName: 'Maria Garcia', description: 'Created a new account', timestamp: '2025-12-15T09:00:00Z' },
  { id: 'a6', type: 'upgrade', customerName: 'DataFlow Systems', description: 'Upgraded to Pro plan', timestamp: '2025-12-14T16:30:00Z' },
  { id: 'a7', type: 'payment', customerName: 'CloudNine SaaS', description: 'Payment of $149 received', timestamp: '2025-12-14T14:00:00Z' },
  { id: 'a8', type: 'downgrade', customerName: 'BudgetOps', description: 'Downgraded to Starter plan', timestamp: '2025-12-14T11:30:00Z' },
  { id: 'a9', type: 'signup', customerName: 'Alex Chen', description: 'Created a new account', timestamp: '2025-12-14T09:15:00Z' },
  { id: 'a10', type: 'payment', customerName: 'Rapid Growth Co', description: 'Payment of $99 received', timestamp: '2025-12-13T17:00:00Z' },
]

export const customers: Customer[] = [
  { id: 'c1', name: 'Acme Corp', email: 'billing@acme.com', plan: 'Enterprise', mrr: 299, status: 'active', joinedDate: '2024-03-15', totalSpent: 12450, address: '123 Main St, San Francisco, CA', lastActivity: '2025-12-14T09:00:00Z' },
  { id: 'c2', name: 'TechStart Inc', email: 'admin@techstart.io', plan: 'Pro', mrr: 149, status: 'active', joinedDate: '2024-06-01', totalSpent: 8940, address: '456 Oak Ave, Austin, TX', lastActivity: '2025-12-15T11:45:00Z' },
  { id: 'c3', name: 'DataFlow Systems', email: 'ops@dataflow.dev', plan: 'Pro', mrr: 149, status: 'active', joinedDate: '2024-01-20', totalSpent: 10430, address: '789 Pine Rd, Seattle, WA', lastActivity: '2025-12-14T16:30:00Z' },
  { id: 'c4', name: 'CloudNine SaaS', email: 'hello@cloudnine.co', plan: 'Enterprise', mrr: 299, status: 'active', joinedDate: '2024-04-10', totalSpent: 11960, address: '321 Elm St, Denver, CO', lastActivity: '2025-12-14T14:00:00Z' },
  { id: 'c5', name: 'Rapid Growth Co', email: 'finance@rapidgrowth.com', plan: 'Starter', mrr: 49, status: 'active', joinedDate: '2024-08-22', totalSpent: 2940, address: '654 Birch Ln, Portland, OR', lastActivity: '2025-12-13T17:00:00Z' },
  { id: 'c6', name: 'Old Guard LLC', email: 'info@oldguard.biz', plan: 'Pro', mrr: 0, status: 'churned', joinedDate: '2023-11-05', totalSpent: 4470, address: '987 Cedar Dr, Chicago, IL', lastActivity: '2025-12-15T10:20:00Z' },
  { id: 'c7', name: 'BudgetOps', email: 'team@budgetops.io', plan: 'Starter', mrr: 49, status: 'active', joinedDate: '2024-09-14', totalSpent: 1470, address: '147 Maple Ct, Miami, FL', lastActivity: '2025-12-14T11:30:00Z' },
  { id: 'c8', name: 'NovaTech Labs', email: 'admin@novatech.dev', plan: 'Enterprise', mrr: 299, status: 'active', joinedDate: '2024-02-28', totalSpent: 14350, address: '258 Spruce Way, Boston, MA', lastActivity: '2025-12-12T08:00:00Z' },
  { id: 'c9', name: 'GreenLeaf Digital', email: 'billing@greenleaf.co', plan: 'Pro', mrr: 149, status: 'active', joinedDate: '2024-05-17', totalSpent: 7450, address: '369 Willow Blvd, Nashville, TN', lastActivity: '2025-12-11T15:30:00Z' },
  { id: 'c10', name: 'Pinnacle Solutions', email: 'accounts@pinnacle.io', plan: 'Enterprise', mrr: 299, status: 'active', joinedDate: '2023-12-01', totalSpent: 17940, address: '741 Ash St, New York, NY', lastActivity: '2025-12-10T12:00:00Z' },
  { id: 'c11', name: 'Sarah Johnson', email: 'sarah@sjconsulting.com', plan: 'Starter', mrr: 49, status: 'active', joinedDate: '2025-12-15', totalSpent: 49, address: '852 Oak Hill, Atlanta, GA', lastActivity: '2025-12-15T14:30:00Z' },
  { id: 'c12', name: 'Streamline Corp', email: 'ops@streamline.co', plan: 'Pro', mrr: 0, status: 'churned', joinedDate: '2024-07-03', totalSpent: 3280, address: '963 River Rd, Phoenix, AZ', lastActivity: '2025-11-20T09:00:00Z' },
  { id: 'c13', name: 'Velocity AI', email: 'hello@velocityai.com', plan: 'Enterprise', mrr: 299, status: 'active', joinedDate: '2024-10-11', totalSpent: 5980, address: '159 Tech Park, San Jose, CA', lastActivity: '2025-12-09T16:00:00Z' },
  { id: 'c14', name: 'Bright Ideas Inc', email: 'info@brightideas.co', plan: 'Starter', mrr: 49, status: 'active', joinedDate: '2025-01-08', totalSpent: 1960, address: '753 Innovation Dr, Raleigh, NC', lastActivity: '2025-12-08T11:00:00Z' },
  { id: 'c15', name: 'CoreStack', email: 'team@corestack.io', plan: 'Pro', mrr: 149, status: 'active', joinedDate: '2024-11-25', totalSpent: 4470, address: '486 Cloud Ave, Salt Lake City, UT', lastActivity: '2025-12-07T14:30:00Z' },
]

export const userGrowth: UserGrowthDataPoint[] = [
  { date: 'Jan', users: 820 },
  { date: 'Feb', users: 890 },
  { date: 'Mar', users: 950 },
  { date: 'Apr', users: 1010 },
  { date: 'May', users: 1060 },
  { date: 'Jun', users: 1090 },
  { date: 'Jul', users: 1120 },
  { date: 'Aug', users: 1150 },
  { date: 'Sep', users: 1180 },
  { date: 'Oct', users: 1200 },
  { date: 'Nov', users: 1225 },
  { date: 'Dec', users: 1245 },
]

export const churnData: ChurnDataPoint[] = [
  { date: 'Jan', rate: 3.2 },
  { date: 'Feb', rate: 2.8 },
  { date: 'Mar', rate: 3.1 },
  { date: 'Apr', rate: 2.5 },
  { date: 'May', rate: 2.3 },
  { date: 'Jun', rate: 2.6 },
  { date: 'Jul', rate: 2.1 },
  { date: 'Aug', rate: 2.4 },
  { date: 'Sep', rate: 2.2 },
  { date: 'Oct', rate: 2.0 },
  { date: 'Nov', rate: 2.3 },
  { date: 'Dec', rate: 2.4 },
]

export const arpuData: ArpuDataPoint[] = [
  { date: 'Jan', arpu: 22.1 },
  { date: 'Feb', arpu: 23.4 },
  { date: 'Mar', arpu: 21.8 },
  { date: 'Apr', arpu: 24.2 },
  { date: 'May', arpu: 25.1 },
  { date: 'Jun', arpu: 24.7 },
  { date: 'Jul', arpu: 25.8 },
  { date: 'Aug', arpu: 26.3 },
  { date: 'Sep', arpu: 25.9 },
  { date: 'Oct', arpu: 27.1 },
  { date: 'Nov', arpu: 26.8 },
  { date: 'Dec', arpu: 27.5 },
]
