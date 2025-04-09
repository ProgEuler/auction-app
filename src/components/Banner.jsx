import React from 'react'
import banner from '../assets/Banner-min.jpg'

export default function Banner() {
  return (
    <div
  className="hero min-h-[70vh]"
  style={{
    backgroundImage: `url(${banner})`,
  }}>

  <div className="hero-overlay">

  <div className="text-neutral-content px-4 lg:px-14 flex items-center w-2/4 h-full">
    <div>
      <h1 className="mb-5 text-5xl font-semibold">Bid on Unique Items from Around the World</h1>
      <p className="mb-5">
      Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions
      </p>
      <button className="btn rounded-4xl w-1/4">Explore Auctions</button>
    </div>
  </div>
  </div>
</div>
  )
}
