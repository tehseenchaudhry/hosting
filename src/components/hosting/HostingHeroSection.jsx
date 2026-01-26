import React, { useState } from 'react';
import { FiSearch, FiSettings, FiArrowRight } from 'react-icons/fi';
import HostingHeroSectionModal from '../hosting/HostingHeroSectionModal '

const HostingHeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSimpleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="px-3">
            <div
                className="ngc-hero-home relative min-h-screen py-20 px-4 md:px-6 lg:px-8 flex items-center"
                style={{
                    backgroundImage: `url('https://www.genious.net/themes/genious_theme/img/home/homepage-hero.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '10px',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent rounded-xl"></div>

                <div className="w-full relative z-10">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-center">
                        Web hosting and domain<br className="hidden md:block" />
                        names in Morocco.
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 text-center">
                        Start your project with the perfect domain name
                    </p>

                    {/* Search Form */}
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
                </div>

                {/* Modal */}
                <HostingHeroSectionModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    searchTerm={searchTerm}
                    onSearchTermChange={setSearchTerm}
                />
            </div>
        </div>
    );
};

export default HostingHeroSection;
