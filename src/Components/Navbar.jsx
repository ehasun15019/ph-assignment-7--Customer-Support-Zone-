import { TextAlignCenter } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-white text-black shadow-sm px-5 sm:px-12">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="lg:hidden cursor-pointer pe-3">
                    <TextAlignCenter />
                </div>

                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            <a href='/' className="font-bold text-[0.9rem] md:text-xl">CS — Ticket System</a>
        </div>


        <div className="navbar-end">
            <div className="list-section hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            <a className="btn border-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md py-3 text-white cursor-pointer px-5">
                + New Ticket
            </a>
        </div>
    </div>
  )
}

export default Navbar