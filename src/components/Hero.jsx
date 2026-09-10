import heroShowcase from '../assets/images/hero-showcase.jpg'

const metrics = [
  {
    icon: 'sentiment_satisfied',
    value: '+12.5k',
    label: 'Sonrisas entregadas',
    color: 'text-primary',
  },
  {
    icon: 'yard',
    value: '100%',
    label: 'Flores frescas del día',
    color: 'text-primary',
  },
  {
    icon: 'star',
    value: '4.9',
    label: 'Calificación real',
    color: 'text-accent',
    filled: true,
  },
]

function LiveNoticeStrip() {
  return (
    <section className="w-full bg-surface-strong/60 backdrop-blur-md border-b border-border/20 py-xs px-gutter-mobile md:px-gutter-desktop">
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-center justify-between gap-xs text-text-muted text-body-sm font-body">
        <div className="flex items-center gap-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <p className="truncate">
            <span className="font-body font-semibold text-label-md text-text">🌸 Mariana S.</span>{' '}
            acaba de agendar un arreglo en Las Condes{' '}
            <span className="text-text-soft text-[11px]">• Hace 2m</span>
          </p>
        </div>
        <div className="flex items-center gap-sm">
          <span className="inline-flex items-center gap-2xs bg-surface px-sm py-0.5 rounded-full shadow-sm text-primary font-body text-label-sm">
            <span className="material-symbols-outlined text-[15px]">local_shipping</span> Entregas
            el mismo día disponibles en tu ciudad
          </span>
          <span className="hidden lg:inline text-text-soft">•</span>
          <span className="hidden lg:inline font-body text-label-sm text-text-muted">
            Garantía 100% Emoción
          </span>
        </div>
      </div>
    </section>
  )
}

function Hero() {
  return (
    <>
      <LiveNoticeStrip />
      <section className="w-full px-gutter-mobile md:px-gutter-desktop pt-xl pb-2xl md:pb-3xl relative overflow-hidden">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-2xl items-center">
          <div className="lg:col-span-6 flex flex-col items-start gap-md">
            <div className="inline-flex items-center gap-2xs bg-surface-muted px-md py-2xs rounded-full shadow-sm">
              <span className="material-symbols-outlined text-primary text-[18px]">
                auto_awesome
              </span>
              <span className="font-body text-label-md text-primary tracking-wide">
                Sorpresas con alma y entrega el mismo día
              </span>
            </div>

            <h1 className="font-display text-display-mobile md:text-display text-text tracking-tight leading-[1.15]">
              El detalle que tu ser querido{' '}
              <span className="font-display italic font-normal text-primary">merece</span>
            </h1>

            <p className="font-body text-body-lg text-text-muted max-w-xl">
              Creamos momentos inolvidables con arreglos florales, peluches tiernos, chocolates
              artesanales y sorpresas listas para emocionar su corazón.
            </p>

            <div className="flex flex-wrap items-center gap-md pt-xs">
              <a
                className="inline-flex items-center justify-center gap-xs bg-primary text-text-inverse font-body text-label-lg px-xl py-md rounded-full shadow-[0_8px_20px_-4px_rgba(168,45,71,0.35)] hover:bg-primary-hover transition-all hover:scale-105 active:scale-95"
                href="#catalogo"
              >
                <span>Ver productos</span>
                <span className="text-[18px]">🎁</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-xs bg-surface text-primary font-body text-label-lg px-lg py-md rounded-full shadow-sm hover:bg-surface-strong transition-all"
                href="https://wa.me/#"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">chat</span>
                <span>Asesoría por WhatsApp</span>
              </a>
            </div>

            <div className="w-full grid grid-cols-3 gap-sm pt-lg border-t border-surface-strong">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col">
                  <div className={`flex items-center gap-2xs font-display ${metric.color} text-headline-md`}>
                    <span
                      className="material-symbols-outlined text-[20px]"
                      style={metric.filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
                    >
                      {metric.icon}
                    </span>
                    <span>{metric.value}</span>
                  </div>
                  <span className="font-body text-body-sm text-text-muted">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[530px] rounded-xl overflow-hidden shadow-[0_20px_40px_-8px_rgba(168,45,71,0.18)] bg-surface-card">
              <img
                className="w-full h-[360px] sm:h-[440px] lg:h-[520px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                alt="Ramo de peonías y ranúnculos en tono rosa pastel junto a un oso de peluche y una caja de regalo con lazo de terciopelo, sobre una mesa de madera rústica."
                src={heroShowcase}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 bg-surface/90 backdrop-blur-md rounded-lg p-sm flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">recommend</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-body font-semibold text-title-md text-text leading-tight">
                      Combo Consentidor Flor & Oso
                    </span>
                    <span className="font-body text-body-sm text-text-muted">
                      Más vendido de la semana
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-xs">
                  <span className="font-display text-headline-sm text-primary font-bold">
                    $52.00
                  </span>
                  <a
                    className="w-9 h-9 rounded-full bg-primary text-text-inverse flex items-center justify-center hover:bg-primary-hover transition-colors"
                    href="#catalogo"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      add_shopping_cart
                    </span>
                  </a>
                </div>
              </div>

              <div className="absolute top-5 right-5 bg-surface-card/90 backdrop-blur-md text-text font-body text-label-sm px-md py-xs rounded-full shadow-md flex items-center gap-2xs">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  verified_user
                </span>
                <span>Garantía de emoción asegurada</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
