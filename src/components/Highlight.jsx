import highlightEmocion from '../assets/images/highlight-emocion.jpg'

const benefits = [
  {
    icon: 'schedule',
    title: 'Entrega puntual garantizada',
    description: 'Coordinación sorpresa discreta sin alertar al destinatario.',
  },
  {
    icon: 'filter_vintage',
    title: 'Frescura y sabor artesanal',
    description: 'Flores frescas del día seleccionadas a mano y chocolatería fina de autor.',
  },
  {
    icon: 'history_edu',
    title: 'Tarjetas con caligrafía manual',
    description: 'Tu mensaje personalizado escrito a mano con tinta y papel de algodón.',
  },
  {
    icon: 'videocam',
    title: 'Foto y video de la reacción',
    description: 'Te enviamos el registro del momento exacto para que vivas su emoción.',
  },
]

function Highlight() {
  return (
    <section className="w-full px-gutter-mobile md:px-gutter-desktop py-2xl md:py-3xl">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-2xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-lg">
          <div className="flex flex-col gap-2xs">
            <span className="font-body text-label-sm tracking-widest text-primary uppercase">
              GARANTÍA DE EMOCIÓN
            </span>
            <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-text tracking-tight">
              ¿Por qué nos eligen?
            </h2>
            <p className="font-body text-body-lg text-text-muted pt-xs">
              Cuidamos cada detalle como si fuera para nuestra propia familia. Nos aseguramos de
              que cada entrega sea una sorpresa mágica e inolvidable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-surface-card p-md rounded-lg shadow-sm flex flex-col gap-xs"
              >
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">{benefit.icon}</span>
                </div>
                <h4 className="font-body font-semibold text-title-md text-text">
                  {benefit.title}
                </h4>
                <p className="font-body text-body-sm text-text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full max-w-[500px] rounded-xl overflow-hidden shadow-xl bg-surface-card">
            <img
              className="w-full h-[380px] sm:h-[460px] lg:h-[540px] object-cover"
              alt="Mujer feliz recibiendo un ramo de flores sorpresa, globos de cumpleaños y una caja de regalo de un repartidor cortés en la puerta de su casa."
              src={highlightEmocion}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 bg-surface/90 backdrop-blur-md rounded-full px-md py-xs flex items-center gap-xs shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-hover animate-pulse" />
              <span className="font-body font-semibold text-label-md text-text">
                🎥 Reacción en vivo capturada para el remitente
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlight
