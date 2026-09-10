import { useState } from 'react'
import { products } from '../data/products'

const filters = ['Todos', 'Cumpleaños', 'Amor', 'Graduación', 'Aniversario']

function ProductCard({ product }) {
  return (
    <div className="group flex flex-col bg-surface-card rounded-lg overflow-hidden shadow-sm hover:shadow-[0_12px_28px_-4px_rgba(168,45,71,0.12)] transition-all duration-300">
      <div className="relative w-full h-72 overflow-hidden bg-surface-muted">
        <img
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={product.image}
        />
        <span
          className={`absolute top-3 left-3 bg-surface/90 backdrop-blur-md font-body text-label-sm px-sm py-1 rounded-full shadow-sm ${product.categoryColor}`}
        >
          {product.category}
        </span>
        <button
          aria-label="Añadir a favoritos"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface/90 backdrop-blur-md text-text-soft hover:text-primary flex items-center justify-center transition-colors shadow-sm"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">favorite</span>
        </button>
        <span
          className={`absolute bottom-3 left-3 bg-surface-card/90 backdrop-blur-md font-body text-label-sm px-sm py-0.5 rounded-full ${product.footNoteColor}`}
        >
          {product.footNote}
        </span>
      </div>
      <div className="p-lg flex flex-col flex-1 justify-between gap-md">
        <div className="flex flex-col gap-2xs">
          <div className="flex items-baseline justify-between gap-sm">
            <h3 className="font-body font-bold text-title-lg text-text group-hover:text-primary transition-colors">
              {product.title}
            </h3>
            <span className="font-display text-headline-sm text-primary font-bold shrink-0">
              {product.price}
            </span>
          </div>
          <p className="font-body text-body-sm text-text-muted line-clamp-2">
            {product.description}
          </p>
        </div>
        <button
          className="w-full flex items-center justify-center gap-xs bg-surface-muted text-primary font-body text-label-md py-sm rounded-full group-hover:bg-primary group-hover:text-text-inverse transition-all"
          type="button"
        >
          <span>Pedir sorpresa</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}

function Products() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  return (
    <section
      className="w-full px-gutter-mobile md:px-gutter-desktop py-2xl bg-surface-soft/70"
      id="catalogo"
    >
      <div className="max-w-content mx-auto flex flex-col gap-xl">
        <div className="flex flex-col items-center text-center gap-xs max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2xs bg-surface-card text-primary font-body text-label-sm px-md py-2xs rounded-full shadow-sm">
            <span className="material-symbols-outlined text-[15px]">stars</span> Colección Curada
          </span>
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-text tracking-tight">
            Detalles para cada ocasión especial
          </h2>
          <p className="font-body text-body-md text-text-muted">
            Sorprende con combinaciones pensadas para robar sonrisas en sus fechas memorables
          </p>

          <div className="flex flex-wrap items-center justify-center gap-xs pt-sm">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={
                  filter === activeFilter
                    ? 'bg-primary text-text-inverse font-body text-label-md px-lg py-xs rounded-full transition-all shadow-sm'
                    : 'bg-surface-card text-text-muted hover:text-primary font-body text-label-md px-lg py-xs rounded-full transition-all'
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
