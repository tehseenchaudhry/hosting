import React, { useState } from "react";
import { FaHome, FaSearch, FaChevronRight } from "react-icons/fa";
import { FiSearch, FiSettings, FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";
import DomainNameHeroSectionModal from "../../DomainNameHeroSectionModel";
// import DomainNameHeroSectionModal from "../domainname/DomainNameHeroSectionModel";

const DomainExtensionsHeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSimpleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
    };


    return (
        <section className="relative bg-[#020b3a] h-[90vh] p-6 mb-28">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-white flex items-center gap-2">
                <FaHome className="text-xl" />
                <Link to='/hosting' className="underline ">Home</Link>

                <span>/</span>
                <Link to='/domain-names' className="underline ">Domain names</Link>
                <span>/</span>
                <span className="text-gray-300">Domain Extensions</span>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSimpleSearch} className="relative">
                <div className="flex flex-col md:flex-row gap-4 bg-white rounded-xl px-5 py-4">
                    <div className="flex-1 relative group">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Register or transfer your domain name to get started."
                            className="w-full px-6 py-6 text-lg bg-white/10 backdrop-blur-sm placeholder-black rounded-xl focus:border-blue-400 focus:ring-4 focus:ring-blue-300/30 outline-none transition-all"
                            aria-label="Enter a domain name"
                        />
                    </div>

                    <div className="flex gap-4 md:gap-6">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 px-6 py-6 border-l border-gray-500 hover:bg-white/20 hover:border-white/30 hover:shadow-lg transition-all duration-200 font-medium underline"
                        >
                            <FiSettings className="md:hidden text-xl" />
                            <span className="hidden md:inline">Advanced mode</span>
                            <FiArrowRight className="hidden md:inline" />
                        </button>

                        <button
                            type="submit"
                            className="flex items-center gap-2 px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-200 font-medium shadow-lg"
                        >
                            <FiSearch />
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </form>



            <DomainNameHeroSectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
            />

            {/* Hero Section */}
            <div className=" top-50 max-w-7xl mx-auto px-6 mt-8 ">
                <div
                    className="relative rounded-xl overflow-hidden min-h-[420px] bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(https://www.genious.net/themes/genious_theme/img/ndd/slider-extesnions.webp)",
                    }}
                >
                    {/* Overlay Card */}
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/60 text-white p-8 rounded-lg max-w-md">
                        <h1 className="text-4xl font-bold mb-4">Domain name extensions</h1>

                        <p className=" mb-4 text-gray-200">
                           Browse the hundreds of domain name extensions that Genious Communications has to offer and choose the right ones for your project.
                        </p>

                        <button className="text-blue-400 font-medium hover:underline">
                            Discover our offers →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};





export default DomainExtensionsHeroSection