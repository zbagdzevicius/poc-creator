import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from '../ui/Card'
import { revenueMonthly, revenueWeekly } from '../../lib/mock-data'

export function RevenueChart() {
  const [period, setPeriod] = useState<'monthly' | 'weekly'>('monthly')
  const data = period === 'monthly' ? revenueMonthly : revenueWeekly

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-text-primary">Revenue Over Time</h3>
          <p className="text-sm text-text-muted">Last 12 months performance</p>
        </div>
        <div className="flex bg-gray-100 dark:bg-slate-700 rounded-lg p-0.5">
          <button
            onClick={() => setPeriod('monthly')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${period === 'monthly' ? 'bg-white dark:bg-slate-600 text-text-primary shadow-sm' : 'text-text-secondary'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setPeriod('weekly')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${period === 'weekly' ? 'bg-white dark:bg-slate-600 text-text-primary shadow-sm' : 'text-text-secondary'}`}
          >
            Weekly
          </button>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:stroke-slate-700" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13 }}
              formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
            />
            <Area type="monotone" dataKey="revenue" stroke="#6366f1" fill="url(#revGrad)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
