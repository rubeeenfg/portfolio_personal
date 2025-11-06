import React from 'react'

const projects = [
  {title: 'Bar Los Olivos', img: '/assets/demo1.jpg'},
  {title: 'Casa Rural Fuente Grande', img: '/assets/demo2.jpg'},
  {title: 'Taller Almedinilla', img: '/assets/demo3.jpg'}
]

export default function Portfolio(){
  return (
    <section id="portfolio" className="mb-5">
      <h2 className="mb-4">Portfolio</h2>
      <div className="row g-3">
        {projects.map((p, i) => (
          <div className="col-md-4" key={i}>
            <div className="card h-100">
              <img src={p.img} className="card-img-top" alt={p.title} />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">Diseño simulado para mostrar estilo y estructura.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
