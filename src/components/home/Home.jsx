import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
// import Price from "./price/Price"
import Recent from "./recent/Recent"
// import Team from "./team/Team"
import Video from "../video/video"
import Information from "../Imfomation/Information"
import Configuration from "../system/Configuration"
import AboutDetails from "../AboutDetails/AboutDetails"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutDetails />
      <Configuration />
      <Recent />
      <Featured />
      <Awards />
      <Location />
      {/* <Team /> */}
      <Video />
      <Information />
      {/* <Price /> */}
    </>
  )
}

export default Home
