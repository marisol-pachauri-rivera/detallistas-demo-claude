import logo from '../assets/images/logo.png'

const navLinks = [
  { label: 'Productos', path: 'productos', active: true },
  { label: 'Nosotros', path: 'nosotros' },
  { label: 'Precios', path: 'precios' },
  { label: 'Ocasiones', path: 'ocasiones' },
  { label: 'Opiniones', path: 'opiniones' },
]

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_4px_14px_-2px_rgba(225,29,72,0.05),0_2px_6px_-1px_rgba(59,53,48,0.03)]">
      <div className="h-20 max-w-content mx-auto px-gutter-mobile md:px-gutter-desktop flex items-center justify-between gap-md">
        <div className="flex items-center gap-sm shrink-0">
          <img alt="Detallistas" className="h-8 w-auto object-contain" src={logo} />
          <span className="font-display text-headline-sm text-primary tracking-tight">
            Detallistas
          </span>
        </div>

        <nav className="hidden xl:flex items-center gap-xs">
          {navLinks.map((link) => (
            <a
              key={link.path}
              aria-current={link.active ? 'page' : undefined}
              href="#"
              className={
                link.active
                  ? 'transition-colors bg-primary-container text-text-inverse font-body text-label-lg rounded-full px-md py-xs shadow-sm'
                  : 'font-body text-label-lg text-text-muted px-md py-xs rounded-full transition-colors hover:bg-surface-strong hover:text-text'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-sm">
          <div className="hidden md:flex items-center bg-surface-muted rounded-full px-md py-xs w-48 lg:w-60 focus-within:bg-surface-card focus-within:ring-1 focus-within:ring-primary transition-all">
            <span className="material-symbols-outlined text-text-soft text-[20px] mr-xs">
              search
            </span>
            <input
              className="bg-transparent border-none outline-none font-body text-body-sm text-text placeholder:text-text-soft w-full"
              placeholder="Buscar detalles..."
              type="text"
            />
          </div>
          <a
            className="inline-flex items-center gap-2xs bg-surface-soft text-primary hover:bg-primary hover:text-text-inverse font-body text-label-md px-md py-xs rounded-full transition-all shadow-sm shrink-0"
            href="#"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            className="relative p-xs text-text-muted hover:text-primary transition-colors flex items-center justify-center"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            <span className="absolute top-1 right-1 bg-primary-hover text-text-inverse font-body text-label-sm w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-text-inverse text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
