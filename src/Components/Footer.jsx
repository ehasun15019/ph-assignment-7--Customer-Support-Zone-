import React from 'react';
import { image } from '../assets/assets';


const Footer = () => {
  return (
  <div className="px-12 footer bg-black text-white py-9">
        <div className="first-footer flex justify-between flex-wrap w-full gap-x-8">
                <section>
                    <h4 className="text-[1.1rem] font-semibold">CS — Ticket System</h4>
                    <p className="text-gray-400 w-[205px] mt-3">
                        When a user reports a problem or submits a request, it is logged as a
                        "ticket" in the system.
                    </p>
                </section>

                <section>
                    <h4 className="text-[1.1rem] font-semibold">Company</h4>
                    <ul className="pt-4 text-gray-400 space-y-3">
                        <li><a href="">About Us</a></li>
                        <li><a href="">Our Mission</a></li>
                        <li><a href="">Contact Saled</a></li>
                    </ul>
                </section>

                <section>
                    <h4 className="text-[1.1rem] font-semibold">Services</h4>
                    <ul className="pt-4 text-gray-400 space-y-3">
                        <li><a href="">Products & Services</a></li>
                        <li><a href="">Customer Stories</a></li>
                        <li><a href="">Download Apps</a></li>
                    </ul>
                </section>

                <section>
                    <h4 className="text-[1.1rem] font-semibold">Information</h4>
                    <ul className="pt-4 text-gray-400 space-y-3">
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Join Us</a></li>
                    </ul>
                </section>

                <section>
                    <h4 className="text-[1.1rem] font-semibold">Social Links</h4>
                    <ul className="text-gray-400">
                        <li>
                        <a href="" className="flex gap-3 pt-2">
                            <img src={image.twitter} alt="" /> @CS — Ticket System
                        </a>
                        </li>
                        <li>
                        <a href="" className="flex gap-3 pt-2">
                            <img src={image.linkdien} alt="" /> @CS — Ticket System
                        </a>
                        </li>
                        <li>
                        <a href="" className="flex gap-3 pt-2">
                            <img src={image.facebook} alt="" /> @CS — Ticket System
                        </a>
                        </li>
                        <li>
                        <a href="" className="flex gap-3 pt-2">
                            <img src={image.message} alt="" /> support@cst.com
                        </a>
                        </li>
                    </ul>
                </section>
            </div>

        {/* Copyright */}
        <hr className="w-full mx-auto mt-2 border-gray-700" />
        <section className="second-footer flex flex-col justify-center items-center text-center text-gray-400 text-sm pt-2 w-full">
            <p className="mx-auto">© 2025 CS — Ticket System. All rights reserved.</p>
        </section>
   </div>
  )
}

export default Footer