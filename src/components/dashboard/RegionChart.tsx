import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Card } from '../ui/Card'
import { regionData } from '../../lib/mock-data'

const COLORS = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']

export function RegionChart() {
  const total = regionData.reduce((sum, r) => sum + r.revenue, 0)

  return (
    <Card>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-text-primary">Sales by Region</h3>
        <p className="text-sm text-text-muted">Revenue distribution</p>
      </div>
      <div className="h-52 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={regionData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              dataKey="revenue"
              nameKey="name"
              stroke="none"
            >
              {regionData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13 }}
              formatter={(value) => `$${Number(value).toLocaleString()}`}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-lg font-bold text-text-primary">${(total / 1000).toFixed(1)}k</p>
            <p className="text-xs text-text-muted">Total</p>
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {regionData.map((r, i) => (
          <div key={r.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
              <span className="text-text-secondary">{r.name}</span>
            </div>
            <span className="font-medium text-text-primary">{((r.revenue / total) * 100).toFixed(0)}%</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
