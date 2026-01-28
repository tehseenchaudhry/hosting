import React from 'react'
import { FiHome } from "react-icons/fi";
import { Link } from 'react-router-dom'

const DomainNameResellerHeroSection = () => {
  return (
    <>
<div className="hidden lg:block bg-[#020c2b]">
      <ul className="flex items-center p-3  gap-3 text-sm text-white">
        {/* Home */}
        <li className="flex items-center gap-1 underline">
          <FiHome className="text-sm" />
          <Link to='/hosting'className="hover:text-black">
            Home
          </Link>
        </li>
        

        <li className="text-gray-400">/</li>

        {/* Domain Names */}
        <li className="underline">
          <Link to="/domain-names"
            className="hover:text-black"
          >
            Domain names
          </Link>
        </li>

        <li className="text-gray-400">/</li>

        {/* Current */}
        <li className="font-semibold text-gray-400">
         Domain Name Reseller
        </li>
      </ul>


       <section className=" text-white px-6 lg:px-24 py-20 mb-24 rounded-b-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold">
              Domain name reseller
            </h1>

            <p className="mt-6 text-lg leading-relaxed max-w-xl">
              Genious Communications supports you to grow your business by
              allowing you to act as a domain name reseller offering discounts
              on domain name registrations, renewals and transfers as well as
              white label automation solutions to ensure an efficient experience
              for you and your customers.
            </p>
          </div>

          {/* Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              <img
                src="https://www.genious.net/themes/genious_theme/img/ndd/slider-reseller-ndd.webp"
                alt="Domain name reseller"
                className="w-[280px] md:w-[400px] relative rounded-xl z-10"
              />

              {/* Decorative dots */}
              <img
                src="/themes/genious_theme/img/sprite.svg#dots-white"
                alt=""
                className="absolute -right-10 top-10 hidden lg:block"
              />
            </div>
          </div>

        </div>
      </div>
      </section>
      </div>

    </>
  )
}

export default DomainNameResellerHeroSection