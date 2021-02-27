import React from "react"
import './UnderConstruction.scss'
import gif from "../../../assets/images/port.gif"

const UnderConstruction = () => {
  return (
    <section className="under-construction">
      <div className="under-construction__gif">
        <img src={gif} />
      </div>
      <div className="under-construction__txt">
        <h2>Este sitio esta en construción y muy pronto estará disponible.</h2>
      </div>
    </section>
  )
}

export default UnderConstruction
