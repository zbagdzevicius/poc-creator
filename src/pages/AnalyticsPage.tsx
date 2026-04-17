import { useState, useMemo } from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from '../components/ui/Card'
import { userGrowth, churnData, arpuData } from '../lib/mock-data'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function AnalyticsPage() {
  const [fromIdx, setFromIdx] = useState(0)
  const [toIdx, setToIdx] = useState(11)

  const filteredGrowth = useMemo(() => userGrowth.slice(fromIdx, toIdx + 1), [fromIdx, toIdx])
  const filteredChurn = useMemo(() => churnData.slice(fromIdx, toIdx + 1), [fromIdx, toIdx])
  const filteredArpu = useMemo(() => arpuData.slice(fromIdx, toIdx + 1), [fromIdx, toIdx])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Analytics</h1>
          <p className="text-sm text-text-muted">Detailed metrics and trends</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-text-secondary">From</label>
          <select
            value={fromIdx}
            onChange={e => setFromIdx(Number(e.target.value))}
            className="text-sm border border-surface-border rounded-lg px-3 py-1.5 bg-surface-card text-text-primary focus:ring-2 focus:ring-primary"
          >
            {months.map((m, i) => <option key={m} value={i}>{m}</option>)}
          </select>
          <label className="text-sm text-text-secondary">To</label>
          <select
            value={toIdx}
            onChange={e => setToIdx(Number(e.target.value))}
            className="text-sm border border-surface-border rounded-lg px-3 py-1.5 bg-surface-card text-text-primary focus:ring-2 focus:ring-primary"
          >
            {months.map((m, i) => <option key={m} value={i}>{m}</option>)}
          </select>
        </div>
      </div>

      <Card>
        <h3 className="text-base font-semibold text-text-primary mb-1">User Growth</h3>
        <p className="text-sm text-text-muted mb-4">Total registered users over time</p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13 }} />
              <Line type="monotone" dataKey="users" stroke="#6366f1" strokeWidth={2} dot={{ r: 3, fill: '#6366f1' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-base font-semibold text-text-primary mb-1">Churn Rate</h3>
          <p className="text-sm text-text-muted mb-4">Monthly churn percentage</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={filteredChurn}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#94a3b8" />
                <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" tickFormatter={v => `${v}%`} />
                <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13 }} formatter={(v) => `${v}%`} />
                <Line type="monotone" dataKey="rate" stroke="#f43f5e" strokeWidth={2} dot={{ r: 3, fill: '#f43f5e' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="text-base font-semibold text-text-primary mb-1">ARPU</h3>
          <p className="text-sm text-text-muted mb-4">Average Revenue Per User</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredArpu}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#94a3b8" />
                <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" tickFormatter={v => `$${v}`} />
                <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13 }} formatter={(v) => `$${Number(v).toFixed(2)}`} />
                <Bar dataKey="arpu" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="ARPU" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  )
}
