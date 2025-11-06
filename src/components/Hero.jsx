import React from 'react'

export default function Hero() {
  return (
    <section className="rcp-hero mb-5">
      <div className="row align-items-center">
        <div className="col-md-7">
          <h1 className="display-6">Diseño web moderno para negocios locales</h1>
          <p className="lead">En RCP Digital creamos páginas web profesionales, rápidas y adaptadas a tu negocio. Desde 150 €.</p>
          <a className="btn rcp-cta btn-lg" href="#contacto">Solicita tu web</a>
        </div>
        <div className="col-md-5 text-center">
          <div className="card p-3 shadow-sm">
            <img src="/assets/demo1.jpg" alt="demo" className="img-fluid rounded" />
            <p className="small text-muted mt-2">Ejemplo de diseño para bar local</p>
          </div>
        </div>
      </div>
    </section>
  )
}
