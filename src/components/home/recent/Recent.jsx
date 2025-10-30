import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Check out our recently listed properties—featuring prime locations, modern designs, and great value. Find your perfect home today!' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
