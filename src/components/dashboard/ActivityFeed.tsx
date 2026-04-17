import { UserPlus, ArrowUpCircle, ArrowDownCircle, XCircle, CreditCard } from 'lucide-react'
import { Card } from '../ui/Card'
import { activities } from '../../lib/mock-data'
import type { ActivityType } from '../../lib/types'

const iconMap: Record<ActivityType, { icon: typeof UserPlus; color: string }> = {
  signup: { icon: UserPlus, color: 'text-emerald-500' },
  upgrade: { icon: ArrowUpCircle, color: 'text-primary' },
  downgrade: { icon: ArrowDownCircle, color: 'text-warning' },
  cancellation: { icon: XCircle, color: 'text-danger' },
  payment: { icon: CreditCard, color: 'text-info' },
}

function timeAgo(ts: string) {
  const diff = Date.now() - new Date(ts).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

export function ActivityFeed() {
  return (
    <Card>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-text-primary">Recent Activity</h3>
        <p className="text-sm text-text-muted">Latest customer actions</p>
      </div>
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {activities.map(a => {
          const { icon: Icon, color } = iconMap[a.type]
          return (
            <div key={a.id} className="flex items-start gap-3">
              <div className={`mt-0.5 ${color}`}>
                <Icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-text-primary">
                  <span className="font-medium">{a.customerName}</span>{' '}
                  <span className="text-text-secondary">{a.description}</span>
                </p>
                <p className="text-xs text-text-muted mt-0.5">{timeAgo(a.timestamp)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
