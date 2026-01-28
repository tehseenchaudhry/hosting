import React from 'react'
import { FiHome } from "react-icons/fi";
import { HiOutlineArrowRight,
} from "react-icons/hi";
import { Link } from 'react-router-dom';

const DomainBrokerServiceHeroSection = () => {
  return (
    <>
    <div className="hidden lg:block bg-[#020c2b] px-26">
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
         Domain Broker Service
        </li>
      </ul>


       <section className="px-6 py-20 bg-dark-blue relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Domain Broker Service
          </h1>

          <p className="mt-4 text-white text-lg">
            If you want to own a domain name that is already registered, Genious Communications offers a domain name broker service. This service involves a specialist that will act as an agent between domain name’s owner and you, and discreetly negotiate the acquisition of the domain name at the best price.
          </p>

          <a
            href=""
            className="inline-flex items-center mt-6 px-6 py-3    font-medium rounded bg-white  transition-colors duration-300 hover:bg-blue-500"
          >
            Request a brokerage service
            <HiOutlineArrowRight className='pt-1 ml-1'/>
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <div className="relative">
            <img
              src="https://www.genious.net/themes/genious_theme/img/ndd/why-broker.webp"
              alt="Service de courtage pour noms de domaine"
              className="w-full h-auto max-w-xs mx-auto"
            />

          
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-turquoise-pastel -z-10"></div>
    </section>
      </div>



      
    </>
  )
}

export default DomainBrokerServiceHeroSection