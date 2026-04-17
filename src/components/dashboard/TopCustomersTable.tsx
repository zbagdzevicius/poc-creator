import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { customers } from '../../lib/mock-data'

export function TopCustomersTable() {
  const top5 = [...customers].sort((a, b) => b.totalSpent - a.totalSpent).slice(0, 5)

  return (
    <Card className="overflow-hidden p-0">
      <div className="p-5 pb-0">
        <h3 className="text-base font-semibold text-text-primary">Top Customers</h3>
        <p className="text-sm text-text-muted mb-4">By total spend</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-surface-border">
              <th className="px-5 py-3 text-xs font-medium text-text-muted uppercase tracking-wider">Customer</th>
              <th className="px-5 py-3 text-xs font-medium text-text-muted uppercase tracking-wider">Total Spent</th>
              <th className="px-5 py-3 text-xs font-medium text-text-muted uppercase tracking-wider">Plan</th>
              <th className="px-5 py-3 text-xs font-medium text-text-muted uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {top5.map(c => (
              <tr key={c.id} className="border-b border-surface-border last:border-0 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                <td className="px-5 py-3">
                  <p className="text-sm font-medium text-text-primary">{c.name}</p>
                  <p className="text-xs text-text-muted">{c.email}</p>
                </td>
                <td className="px-5 py-3 text-sm font-medium text-text-primary">${c.totalSpent.toLocaleString()}</td>
                <td className="px-5 py-3 text-sm text-text-secondary">{c.plan}</td>
                <td className="px-5 py-3">
                  <Badge label={c.status} variant={c.status === 'active' ? 'success' : 'danger'} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
