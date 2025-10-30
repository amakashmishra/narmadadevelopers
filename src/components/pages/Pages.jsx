import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
// import Pricing from "../pricing/Pricing"
// import Blog from "../blog/Blog"
// import Services from "../services/Services"
import Contact from "../contact/Contact"
import Information from "../Imfomation/Information"
import Location from "../home/location/Location"
import EnquireNowButton from "../EnquireNow/EnquireNowButton"
import ScrollToTop from "../common/footer/ScrollToTop"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Location} />
          <Route exact path='/blog' component={Information} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
        <EnquireNowButton />
      </Router>
    </>
  )
}

export default Pages
