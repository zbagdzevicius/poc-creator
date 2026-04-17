import { ShoppingCart } from 'lucide-react'
import { Card } from '../components/ui/Card'

export function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Orders</h1>
        <p className="text-sm text-text-muted">Manage and track orders</p>
      </div>
      <Card className="flex flex-col items-center justify-center py-16">
        <ShoppingCart size={48} className="text-text-muted mb-4" />
        <h2 className="text-lg font-semibold text-text-primary mb-1">Coming Soon</h2>
        <p className="text-sm text-text-muted">Order management will be available in a future update.</p>
      </Card>
    </div>
  )
}
