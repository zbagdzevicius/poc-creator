import { useState, useMemo } from 'react'
import { Search, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { customers } from '../lib/mock-data'

const PAGE_SIZE = 10

export function CustomersPage() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return customers.filter(c => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q))
  }, [search])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Customers</h1>
        <p className="text-sm text-text-muted">{filtered.length} total customers</p>
      </div>

      <Card className="p-0 overflow-hidden">
        {/* Search bar */}
        <div className="p-4 border-b border-surface-border">
          <div className="relative max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1) }}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-surface-border bg-surface text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-surface-border bg-gray-50/50 dark:bg-slate-800/50">
                <th className="px-5 py-3 text-xs font-medium text-text-muted uppercase tracking-wider">Name</th>
                <th className="px-5 py-3 text-xs font-medium text-text-muted uppercase tracking-wider hidden sm:table-cell">Email</th>
                <th className="px-5 py-3 text-xs font-medium text-text-muted uppercase tracking-wider">Plan</th>
                <th className="px-5 py-3 text-xs font-medium text-text-muted uppercase tracking-wider">MRR</th>
                <th className="px-5 py-3 text-xs font-medium text-text-muted uppercase tracking-wider">Status</th>
                <th className="px-5 py-3 text-xs font-medium text-text-muted uppercase tracking-wider hidden md:table-cell">Joined</th>
                <th className="px-5 py-3 w-10"></th>
              </tr>
            </thead>
            <tbody>
              {paged.map(c => (
                <>
                  <tr
                    key={c.id}
                    onClick={() => setExpandedId(expandedId === c.id ? null : c.id)}
                    className="border-b border-surface-border hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                  >
                    <td className="px-5 py-3 text-sm font-medium text-text-primary">{c.name}</td>
                    <td className="px-5 py-3 text-sm text-text-secondary hidden sm:table-cell">{c.email}</td>
                    <td className="px-5 py-3 text-sm text-text-secondary">{c.plan}</td>
                    <td className="px-5 py-3 text-sm font-medium text-text-primary">${c.mrr}</td>
                    <td className="px-5 py-3">
                      <Badge label={c.status} variant={c.status === 'active' ? 'success' : 'danger'} />
                    </td>
                    <td className="px-5 py-3 text-sm text-text-secondary hidden md:table-cell">{c.joinedDate}</td>
                    <td className="px-5 py-3 text-text-muted">
                      {expandedId === c.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </td>
                  </tr>
                  {expandedId === c.id && (
                    <tr key={`${c.id}-detail`} className="border-b border-surface-border bg-gray-50/50 dark:bg-slate-800/30">
                      <td colSpan={7} className="px-5 py-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-text-muted text-xs font-medium uppercase mb-1">Address</p>
                            <p className="text-text-primary">{c.address}</p>
                          </div>
                          <div>
                            <p className="text-text-muted text-xs font-medium uppercase mb-1">Total Spent</p>
                            <p className="text-text-primary font-medium">${c.totalSpent.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-text-muted text-xs font-medium uppercase mb-1">Last Activity</p>
                            <p className="text-text-primary">{new Date(c.lastActivity).toLocaleDateString()}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-5 py-3 border-t border-surface-border">
            <p className="text-sm text-text-muted">
              Page {page} of {totalPages}
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-1.5 rounded-lg text-text-secondary hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-1.5 rounded-lg text-text-secondary hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
