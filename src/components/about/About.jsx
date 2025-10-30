import React, { useState } from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  const [showMore, setShowMore] = useState(false)

  const handleToggle = () => {
    setShowMore(!showMore)
  }

  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />

        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Krishna Heritage Pvt Ltd' subtitle='Building Foundations, Creating Futures' />

            <p>Krishna Heritage Pvt Ltd is a dynamic and ambitious real estate development company, established to transform the landscape of Karjat. With a focus on innovation, quality, and customer satisfaction, we aim to deliver exceptional living and working spaces.</p>
            <p>To create vibrant, sustainable, and inspiring communities, exceeding customer expectations through transparency, integrity, and excellence.</p>

            <h3>Key Features</h3>
            <ul>
              <li>Prime locations</li>
              <li>Modern architecture</li>
              <li>Quality construction</li>
              <li>Amenities and services</li>
              <li>Transparent pricings</li>
            </ul>
            <button className='btn2' onClick={handleToggle}>
              {showMore ? "Hide Details" : "More About Us"}
            </button>

            {showMore && (
              <div className="more-info mtop">
                <h3>Our Values:</h3>
                <ul>
                  <li>1. Customer-centric approach</li>
                  <li>2. Quality and excellence</li>
                  <li>3. Transparency and trust</li>
                  <li>4. Innovation and sustainability</li>
                  <li>5. Timely delivery</li>
                </ul>

                <h3 className="mtop">Leadership:</h3>
                <ul>
                  <li>1. KUSH RAM BATHIJA, Managing Director</li>
                  <li>2. RAKSHITA KUSH BATHIJA, Director</li>
                </ul>
              </div>
            )}
          </div>

          <div className='right row'>
            <img src='./immio.jpg' alt='about' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
