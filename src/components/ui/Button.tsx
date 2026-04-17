const variantStyles = {
  primary: 'bg-primary hover:bg-primary-hover text-white',
  secondary: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-gray-200 dark:hover:bg-slate-600',
  ghost: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-700 dark:hover:text-gray-200',
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
}: {
  children: React.ReactNode
  variant?: keyof typeof variantStyles
  size?: keyof typeof sizeStyles
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  )
}
