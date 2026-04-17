import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Card } from '../ui/Card'
import type { KpiMetric, KpiMetricWithSparkline } from '../../lib/types'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'

function isSparkline(m: KpiMetric | KpiMetricWithSparkline): m is KpiMetricWithSparkline {
  return 'sparkline' in m
}

export function KpiCard({
  label,
  metric,
  format = 'number',
}: {
  label: string
  metric: KpiMetric | KpiMetricWithSparkline
  format?: 'currency' | 'number' | 'percent'
}) {
  const positive = metric.change >= 0

  const formatted = format === 'currency'
    ? `$${metric.value.toLocaleString()}`
    : format === 'percent'
    ? `${metric.value}%`
    : metric.value.toLocaleString()

  return (
    <Card>
      <p className="text-sm font-medium text-text-secondary mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold text-text-primary">{formatted}</p>
          <span className={`inline-flex items-center gap-0.5 mt-1 text-sm font-medium rounded-full px-2 py-0.5 ${
            positive ? 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10' : 'text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-500/10'
          }`}>
            {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            {Math.abs(metric.change)}%
          </span>
        </div>
        {isSparkline(metric) && (
          <div className="w-24 h-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={metric.sparkline.map((v, i) => ({ v, i }))}>
                <defs>
                  <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="v" stroke="#6366f1" fill="url(#sparkGrad)" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </Card>
  )
}
