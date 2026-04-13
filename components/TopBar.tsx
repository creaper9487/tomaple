'use client'

interface TopBarProps {
  title?: string
  subtitle?: string
}

export default function TopBar({ title = '寧靜流動', subtitle }: TopBarProps) {
  return (
    <header className="flex justify-between items-center px-10 py-4 w-full h-16 bg-surface border-b border-surface-container flex-shrink-0">
      <div className="flex items-center gap-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-on-surface font-headline">{title}</h2>
        {subtitle && <p className="text-sm text-on-surface-variant hidden lg:block">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
          <input
            className="pl-10 pr-4 py-2 bg-surface-container-high border-none rounded-full text-sm focus:ring-1 focus:ring-primary-dim outline-none w-52"
            placeholder="搜尋任務..."
            type="text"
          />
        </div>
        <button className="p-2 text-on-surface-variant hover:bg-surface-container transition-colors rounded-full">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 text-on-surface-variant hover:bg-surface-container transition-colors rounded-full">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-sm">
          U
        </div>
      </div>
    </header>
  )
}
