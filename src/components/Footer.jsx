const exploreLinks = [
  { label: 'Catálogo Completo', path: 'productos' },
  { label: 'Flores & Arreglos', path: 'ocasiones' },
  { label: 'Cajas Personalizadas', path: 'precios' },
  { label: 'Experiencias de Clientes', path: 'opiniones' },
]

const socialIcons = ['favorite', 'share', 'photo_camera']

const legalLinks = ['Términos y Condiciones', 'Privacidad', 'Políticas de Devolución']

function Footer() {
  return (
    <footer className="w-full bg-surface-soft mt-3xl py-2xl">
      <div className="max-w-content mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl mb-2xl">
          <div className="flex flex-col gap-sm">
            <span className="font-display text-headline-md text-primary">Detallistas</span>
            <p className="font-body text-body-md text-text-muted max-w-xs">
              Creando momentos inolvidables a través de obsequios artesanales, floristería fina y
              sorpresas con amor sincero.
            </p>
            <div className="flex items-center gap-sm pt-xs">
              {socialIcons.map((icon) => (
                <a
                  key={icon}
                  className="w-9 h-9 rounded-full bg-surface-muted flex items-center justify-center text-primary hover:bg-primary hover:text-text-inverse transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-xs">
            <h4 className="font-body font-semibold text-title-md text-text mb-2xs">Explorar</h4>
            {exploreLinks.map((link) => (
              <a
                key={link.path}
                className="font-body text-body-md text-text-muted hover:text-primary transition-colors"
                href="#"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-xs">
            <h4 className="font-body font-semibold text-title-md text-text mb-2xs">
              Atención al Cliente
            </h4>
            <div className="flex items-center gap-xs text-text-muted font-body text-body-md">
              <span className="material-symbols-outlined text-primary text-[20px]">call</span>
              <span>+52 (55) 8432-9011</span>
            </div>
            <div className="flex items-center gap-xs text-text-muted font-body text-body-md">
              <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
              <span>hola@detallistas.mx</span>
            </div>
            <div className="flex items-center gap-xs text-text-muted font-body text-body-md">
              <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
              <span>Lun - Sáb: 8:00 - 20:00</span>
            </div>
          </div>

          <div className="flex flex-col gap-sm">
            <h4 className="font-body font-semibold text-title-md text-text">
              Garantía de Entrega
            </h4>
            <p className="font-body text-body-sm text-text-muted">
              Entregas express el mismo día con rastreo en vivo y empaque térmico protector.
            </p>
            <div className="flex flex-wrap items-center gap-xs">
              <div className="flex items-center gap-2xs bg-surface-card px-sm py-2xs rounded-full">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  verified
                </span>
                <span className="font-body text-label-sm text-text">Pago Seguro SSL</span>
              </div>
              <div className="flex items-center gap-2xs bg-surface-card px-sm py-2xs rounded-full">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  local_shipping
                </span>
                <span className="font-body text-label-sm text-text">Entrega Puntual</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-lg flex flex-col md:flex-row items-center justify-between gap-md text-text-muted font-body text-body-sm">
          <p>© 2024 Detallistas Regalos & Diseños Florales. Todos los derechos reservados.</p>
          <div className="flex items-center gap-md">
            {legalLinks.map((label) => (
              <a key={label} className="hover:text-primary transition-colors" href="#">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
