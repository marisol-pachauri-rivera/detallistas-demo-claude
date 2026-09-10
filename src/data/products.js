import sanValentin from '../assets/images/producto-san-valentin.jpg'
import graduacion from '../assets/images/producto-graduacion.jpg'
import cumpleanos from '../assets/images/producto-cumpleanos.jpg'
import diaMadre from '../assets/images/producto-dia-madre.jpg'
import diaPadre from '../assets/images/producto-dia-padre.jpg'
import navidad from '../assets/images/producto-navidad.jpg'

export const products = [
  {
    id: 'amor-eterno-vino',
    category: 'San Valentín',
    categoryColor: 'text-primary-hover',
    footNote: 'Entrega hoy mismo',
    footNoteColor: 'text-primary',
    title: 'Box Amor Eterno & Vino',
    price: '$48.00',
    description:
      'Rosas rojas premium, botella de vino tinto, finos bombones de autor y globos corazón.',
    image: sanValentin,
  },
  {
    id: 'cesta-triunfo-graduacion',
    category: 'Graduación',
    categoryColor: 'text-accent',
    footNote: 'Calidad garantizada',
    footNoteColor: 'text-accent',
    title: 'Cesta Triunfo Graduación',
    price: '$45.00',
    description:
      'Oso con birrete ceremonial, taza personalizada, chocolates Ferrero y globos metalizados.',
    image: graduacion,
  },
  {
    id: 'magic-birthday-confetti-box',
    category: 'Cumpleaños',
    categoryColor: 'text-primary',
    footNote: 'Velita incluida',
    footNoteColor: 'text-primary',
    title: 'Magic Birthday Confetti Box',
    price: '$39.00',
    description:
      'Caja sorpresa con globos pastel, ramo silvestre, cupcake artesanal con velita y dedicatoria.',
    image: cumpleanos,
  },
  {
    id: 'set-ternura-flores-mama',
    category: 'Día de la Madre',
    categoryColor: 'text-primary',
    footNote: 'Flores de estación',
    footNoteColor: 'text-primary',
    title: 'Set Ternura & Flores Mamá',
    price: '$42.00',
    description:
      'Bouquet de tulipanes y claveles rosas, taza de cerámica floral y vela aromática relajante.',
    image: diaMadre,
  },
  {
    id: 'gift-box-papa-gourmet',
    category: 'Día del Padre',
    categoryColor: 'text-text',
    footNote: 'Grabado incluido',
    footNoteColor: 'text-text-muted',
    title: 'Gift Box Papá Gourmet',
    price: '$38.00',
    description:
      'Termo grabado en acero negro, café de especialidad, suculenta viva y llavero de cuero.',
    image: diaPadre,
  },
  {
    id: 'cesta-ilusion-navidena',
    category: 'Navidad',
    categoryColor: 'text-primary-hover',
    footNote: 'Empaque festivo',
    footNoteColor: 'text-primary-hover',
    title: 'Cesta Ilusión Navideña',
    price: '$46.00',
    description:
      'Reno de peluche ultra suave, galletas navideñas, vela de canela y tarjeta conmemorativa.',
    image: navidad,
  },
]
