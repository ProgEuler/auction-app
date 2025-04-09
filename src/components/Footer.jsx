import React from 'react'

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 gap-6 py-20">
        <div>
    <a className="btn btn-ghost text-2xl text-blue-800">
        <span>
            <span>Auction</span>
            <span className='text-yellow-500 font-bold'>Gallery</span>
        </span>
    </a>
    <ul className='flex gap-4 font-semibold text-lg'>
        <li><a>Bid.</a></li>
        <li><a>Win.</a></li>
        <li><a>Own.</a></li>
    </ul>
  </div>
    <div className="grid grid-flow-col gap-8">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Auctions</a>
    <a className="link link-hover">Categories</a>
    <a className="link link-hover">How to works</a>
    </div>
  <aside>
    <p>© {new Date().getFullYear()} AuctionHub. All right reserved</p>
  </aside>
</footer>
  )
}
