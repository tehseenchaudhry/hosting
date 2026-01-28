import React from 'react'
import { FiHome } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const DomainRetrievalHeroSection = () => {
  return (
    <>
    
    <div className="hidden lg:block ">
      <ul className="flex items-center p-3  gap-3 text-sm text-black">
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
         Domain Retrieval
        </li>
      </ul>


       <section className="px-6 lg:px-24 py-20 border-b border-gray-200 rounded-b-3xl">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold ">
              Domain name recovery
              <br />
              UDRP Procedure
            </h1>

            <p className="text-gray-700 mt-6 leading-relaxed">
              Did a cyber criminal register your national or international
              trademark as a ".ma", ".com", ".net" or any other extension in an
              attempt to resell it back to you or to profit from the reputation
              of your trademark?
              <br /><br />
              A payment delay, an oversight of the registration renewal or any
              other non-intentional omission has resulted in the loss of your
              domain name rights?
            </p>

            <a
              href=""
              className="inline-flex items-center gap-2 mt-8 border border-black px-8 py-4 rounded font-semibold transition-colors duration-300 hover:bg-black hover:text-white "
            >
              Recover My Domain
              <FiArrowRight size={16} />
            </a>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">
            <img
              src="https://www.genious.net/themes/genious_theme/img/ndd/slider-retrieval-3.webp"
              alt="Domain recovery UDRP"
              className="relative z-10 w-[280px] md:w-[400px] rounded-xl"
            />

            {/* Decorative Dots */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
              <div className="w-24 h-24 bg-black/10 rounded-full" />
            </div>
          </div>

        </div>

      </div>
    </section>
      </div>
    </>
  )
}

export default DomainRetrievalHeroSection