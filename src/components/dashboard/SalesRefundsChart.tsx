import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Card } from '../ui/Card'
import { salesRefunds } from '../../lib/mock-data'

export function SalesRefundsChart() {
  return (
    <Card>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-text-primary">Sales vs Refunds</h3>
        <p className="text-sm text-text-muted">Monthly comparison</p>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={salesRefunds}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:stroke-slate-700" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13 }}
              formatter={(value) => `$${Number(value).toLocaleString()}`}
            />
            <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="sales" fill="#6366f1" radius={[4, 4, 0, 0]} name="Sales" />
            <Bar dataKey="refunds" fill="#f43f5e" radius={[4, 4, 0, 0]} name="Refunds" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
