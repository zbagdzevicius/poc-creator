import { useState, useRef, useEffect } from 'react'
import { Search, Bell, Sun, Moon, Menu, User, Settings, LogOut } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
import { useSidebar } from '../../contexts/SidebarContext'

export function Header() {
  const { dark, toggleTheme } = useTheme()
  const { toggleMobile } = useSidebar()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="sticky top-0 z-30 h-16 bg-surface-card border-b border-surface-border flex items-center justify-between px-4 lg:px-6">
      {/* Left: mobile menu + search */}
      <div className="flex items-center gap-3">
        <button onClick={toggleMobile} className="lg:hidden text-text-secondary hover:text-text-primary p-1">
          <Menu size={22} />
        </button>
        <div className="relative hidden sm:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 text-sm rounded-lg border border-surface-border bg-surface text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-56"
          />
        </div>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-2">
        <button onClick={toggleTheme} className="p-2 rounded-lg text-text-secondary hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className="relative p-2 rounded-lg text-text-secondary hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-4 h-4 bg-danger text-white text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
        </button>

        {/* User menu */}
        <div ref={menuRef} className="relative">
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-surface-card rounded-xl shadow-lg border border-surface-border py-1 transition-all duration-200">
              <div className="px-4 py-2 border-b border-surface-border">
                <p className="text-sm font-medium text-text-primary">John Doe</p>
                <p className="text-xs text-text-muted">john@company.com</p>
              </div>
              <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:bg-gray-50 dark:hover:bg-slate-700">
                <User size={14} /> Profile
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:bg-gray-50 dark:hover:bg-slate-700">
                <Settings size={14} /> Settings
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-danger hover:bg-gray-50 dark:hover:bg-slate-700">
                <LogOut size={14} /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
