import React, { useState } from 'react'

export default function Contacto(){
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <section id="contacto" className="mb-5">
      <h2 className="mb-4">Contacto</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea className="form-control" rows="4" required />
            </div>
            <button className="btn btn-primary" type="submit">Enviar</button>
          </form>
          {sent && <div className="alert alert-success mt-3">Mensaje enviado (simulado).</div>}
        </div>
        <div className="col-md-6">
          <h5>Contacto directo</h5>
          <p>📩 info@rcpdigital.es</p>
          <p>💬 WhatsApp: +34 600 000 000</p>
          <p>📍 Almedinilla, Córdoba</p>
        </div>
      </div>
    </section>
  )
}
