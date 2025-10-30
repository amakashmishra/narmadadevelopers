import React from "react"
import Heading from "../common/Heading"
import "./information.css"

const highlights = [
  {
    icon: "fa-chart-line",
    text: "Fast-Growing Narmada Hill Real Estate Market Expands",
  },
  {
    icon: "fa-leaf",
    text: "Narmada Hill Offers a Green and Pollution-Free Living Environment",
  },
  {
    icon: "fa-ship",
    text: "Nhava-Seva Sea Port is 56 Km Away from Narmada Hill",
  },
  {
    icon: "fa-plane-departure",
    text: "Navi Mumbai’s Upcoming International Airport is 39 Km from Narmada Hill",
  },
  {
    icon: "fa-train",
    text: "Narmada Hill Railway provides connectivity to Mumbai, Pune, Panvel, and Khopoli",
  },
  {
    icon: "fa-road",
    text: "National and state highways link Narmada Hill to Mumbai, Pune, and Nashik",
  },
  {
    icon: "fa-mountain-sun",
    text: "Weekend getaways in Narmada Hill include picnics, river rafting, trekking, and hiking",
  },
  {
    icon: "fa-building-circle-check",
    text: "Proposed Central Railway car shed land acquisition in Narmada Hill is completed",
  },
  {
    icon: "fa-hotel",
    text: "ND Film Studio and luxury five-star hotels are in Narmada Hill",
  },
  {
    icon: "fa-tree-city",
    text: "Explore Matheran Hill Station, scenic waterfalls, and historic forts in Narmada Hill",
  },
  {
    icon: "fa-university",
    text: "Reliance to establish world-class university on 800 acres in Narmada Hill",
  },
  {
    icon: "fa-ship",
    text: "RO-RO ferry service planned between Mumbai Bhaucha Dhakka and Uran Nava Seva",
  },
  {
    icon: "fa-train-subway",
    text: "Railway Harbour Line extension connects Panvel to Narmada Hill through Mahape",
  },
  {
    icon: "fa-golf-ball-tee",
    text: "Located on Narmada Hill Chauk Highway, 9 Aces Golf Greens Academy stands",
  },
  {
    icon: "fa-city",
    text: "NAINA covers 270 revenue villages including Narmada Hill, Khalapur, and Pen",
  },
  {
    icon: "fa-star",
    text: "Celebrity farmhouses (Film Stars, Politicians, Cricketers) in Narmada Hill and Khalapur",
  },
]

const Information = () => {
  return (
    <section className='team background'>
      <div className='container'>
        <Heading
          title='Why Narmada Hill is the Perfect Choice'
          subtitle='Explore the booming real estate and lifestyle advantages of investing in Narmada Hill.'
        />
        <div className='karjat-info grid2 mtop'>
          {highlights.map((item, index) => (
            <div className='info-box' key={index}>
              <i className={`fa-solid ${item.icon}`}></i>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Information
