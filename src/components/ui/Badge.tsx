const variantStyles = {
  success: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
  danger: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400',
  warning: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
  info: 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
  neutral: 'bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400',
}

export function Badge({ label, variant = 'neutral' }: { label: string; variant?: keyof typeof variantStyles }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantStyles[variant]}`}>
      {label}
    </span>
  )
}
