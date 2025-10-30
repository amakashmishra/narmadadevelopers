import React from "react"
import Heading from "../common/Heading"
import "./AboutDetails.css"
import img from "../../assets/Icons/Banner.jpeg"

const AboutDetails = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading
              title="Welcome to Narmada Developers"
              subtitle="Discover premium builder flats designed for comfort, style, and modern living"
            />
            <p>Located at NANA MASTER NAGAR, one of the most peaceful locations in Karjat.It is near to Karjat Railway Station and a well-developed area. Surrounded by green open spaces and natural tranquility. You will enjoy an active lifestyle</p>
            {/* <p>Surrounded by green open spaces and natural tranquility. You will enjoy an active lifestyle.</p> */}

            <h3>Key Features</h3>
            <ul>
              <li>Prime locations</li>
              <li>Modern architecture</li>
              <li>Quality construction</li>
              <li>Amenities and services</li>
              <li>Transparent pricing</li>
            </ul>

            <p>This profile establishes Narmada Developers as a new player in the real estate industry, focused on quality, innovation, and customer satisfaction.</p>
          </div>
          <div className='right row'>
            <img src={img} alt='about' />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutDetails
