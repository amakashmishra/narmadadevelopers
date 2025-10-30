import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <section className='location padding'>
      <div className='container'>
        <Heading
          title='Narmada Developers Specifications'
          subtitle='Crafted with precision and built to last — explore the fine details that make Narmada Developers a class apart.'
        />

        <div className='content grid3'>
          {location.map((item, index) => (
            <div className='box fadeIn' key={index}>
              <img src={item.cover} alt={item.name} />
              <div className='overlay'>
                <h5>{item.name}</h5>
                <div className='specs'>
                  <label>{item.Villas}</label>
                  <label>{item.Apartments}</label>
                  <label>{item.Offices}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Location
