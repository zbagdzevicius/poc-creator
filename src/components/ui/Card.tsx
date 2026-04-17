export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-surface-card rounded-xl shadow-sm border border-surface-border p-5 ${className}`}>
      {children}
    </div>
  )
}
