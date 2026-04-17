import { NavLink } from 'react-router-dom'
import { LayoutDashboard, BarChart3, Users, ShoppingCart, Settings, ChevronLeft, ChevronRight } from 'lucide-react'
import { useSidebar } from '../../contexts/SidebarContext'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/customers', label: 'Customers', icon: Users },
  { to: '/orders', label: 'Orders', icon: ShoppingCart },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const { collapsed, mobileOpen, toggleCollapse, closeMobile } = useSidebar()

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={closeMobile} />
      )}

      <aside className={`
        fixed top-0 left-0 z-50 h-full bg-sidebar flex flex-col transition-all duration-300
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
        ${collapsed ? 'w-16' : 'w-64'}
      `}>
        {/* Logo */}
        <div className={`flex items-center border-b border-slate-700 h-16 ${collapsed ? 'justify-center px-2' : 'px-4'}`}>
          {!collapsed && <span className="text-white text-lg font-bold">POC Dashboard</span>}
          {collapsed && <span className="text-white text-lg font-bold">P</span>}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMobile}
              className={({ isActive }) => `
                flex items-center gap-3 rounded-lg transition-colors
                ${collapsed ? 'justify-center px-2 py-2.5' : 'px-3 py-2.5'}
                ${isActive
                  ? 'bg-sidebar-active text-sidebar-text-active'
                  : 'text-sidebar-text hover:bg-sidebar-hover hover:text-white'
                }
              `}
            >
              <Icon size={20} />
              {!collapsed && <span className="text-sm font-medium">{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Collapse toggle — desktop only */}
        <button
          onClick={toggleCollapse}
          className="hidden lg:flex items-center justify-center h-12 border-t border-slate-700 text-sidebar-text hover:text-white hover:bg-sidebar-hover transition-colors"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </aside>
    </>
  )
}
