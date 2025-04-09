import React from 'react'
import { GrNotification } from "react-icons/gr";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between px-4 lg:px-12">
  <div>
    <a className="btn btn-ghost text-2xl text-blue-800">
        <span>
            <span>Auction</span>
            <span className='text-yellow-500 font-bold'>Gallery</span>
        </span>
    </a>
  </div>
    <div className='hidden lg:flex gap-2 items-center'>
        <a className="btn btn-ghost btn-sm rounded-btn font-normal text-lg">Home</a>
        <a className="btn btn-ghost btn-sm rounded-btn font-normal text-lg">Auctions</a>
        <a className="btn btn-ghost btn-sm rounded-btn font-normal text-lg">Categories</a>
        <a className="btn btn-ghost btn-sm rounded-btn font-normal text-lg">How to works</a>
    </div>
  <div className="flex gap-4 justify-center items-center">

    <GrNotification />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}
