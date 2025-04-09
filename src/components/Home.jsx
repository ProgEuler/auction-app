import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Footer from './Footer'
import ActiveAuctions from './ActiveAuctions'

export default function Home() {
  return (
    <div>
        <NavBar />
        <Banner />
        <main className="bg-[#ebf0f5] ">
            <ActiveAuctions />
        </main>
        <Footer />
    </div>
  )
}
