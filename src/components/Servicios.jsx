import React from 'react'

const services = [
  {title: 'Web básica', price: '150 €', desc: '1–3 secciones: inicio, contacto y galería.'},
  {title: 'Web profesional', price: '250–400 €', desc: 'Diseño completo, responsive y optimizado.'},
  {title: 'Tienda online', price: '500 €', desc: 'Catálogo, carrito y métodos de pago.'},
  {title: 'Mantenimiento', price: '20 €/mes', desc: 'Actualizaciones y copias de seguridad.'},
]

export default function Servicios(){
  return (
    <section id="servicios" className="mb-5">
      <h2 className="mb-4">Servicios</h2>
      <div className="row g-3">
        {services.map((s, i) => (
          <div className="col-md-3" key={i}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="mb-3 rcp-card-icon">⚡</div>
                <h5 className="card-title">{s.title}</h5>
                <p className="card-text">{s.desc}</p>
                <div className="mt-auto"><strong>{s.price}</strong></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
