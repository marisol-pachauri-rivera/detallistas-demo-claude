function CtaBanner() {
  return (
    <>
      <section className="w-full px-gutter-mobile md:px-gutter-desktop py-lg">
        <div className="max-w-content mx-auto bg-gradient-to-r from-primary to-primary-hover rounded-xl p-xl lg:p-2xl text-text-inverse relative overflow-hidden shadow-[0_16px_36px_-6px_rgba(168,45,71,0.25)]">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-white/5 blur-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-xl">
            <div className="flex flex-col gap-xs max-w-2xl">
              <div className="inline-flex items-center gap-2xs bg-white/20 backdrop-blur-md px-md py-2xs rounded-full w-fit">
                <span className="material-symbols-outlined text-[16px]">card_giftcard</span>
                <span className="font-body text-label-sm tracking-wide">
                  Beneficio Exclusivo Club Detallistas
                </span>
              </div>
              <h3 className="font-display text-headline-lg-mobile md:text-headline-lg text-text-inverse">
                Por cada 3 detalles comprados, tu siguiente compra tiene 20% OFF
              </h3>
              <p className="font-body text-body-md text-white/90">
                Premia tu cariño constante. Acumula tus compras automáticamente con tu número de
                teléfono o correo electrónico.
              </p>
            </div>
            <a
              className="shrink-0 bg-white text-primary hover:bg-surface hover:text-primary-hover font-body text-label-lg px-xl py-md rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-xs"
              href="#catalogo"
            >
              <span>Comenzar mi pedido hoy</span>
              <span className="material-symbols-outlined text-[18px]">favorite</span>
            </a>
          </div>
        </div>
      </section>

      <section className="w-full px-gutter-mobile md:px-gutter-desktop pt-md pb-xl">
        <div className="max-w-content mx-auto bg-surface-card rounded-full py-sm px-lg flex flex-col sm:flex-row items-center justify-between gap-xs shadow-sm">
          <div className="flex items-center gap-xs text-text-muted font-body text-body-md text-center sm:text-left">
            <span className="material-symbols-outlined text-primary text-[20px]">edit_note</span>
            <span>
              ¿Falta de inspiración? Escribimos tu dedicatoria con ayuda de poetas y copywriters.
            </span>
          </div>
          <a
            className="font-body text-label-md text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-2xs shrink-0"
            href="#"
          >
            <span>Ver frases de ejemplo</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </section>
    </>
  )
}

export default CtaBanner
