import React, { useState } from 'react';
import { 
  FiSearch, 
  FiSettings, 
  FiArrowRight, 
  FiRefreshCw,
  FiX,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';
import { HiOutlineViewGrid } from 'react-icons/hi';

const HostingHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExtensions, setSelectedExtensions] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // All extension categories from your HTML
  const extensionCategories = [
    {
      id: 'popular',
      name: 'Popular',
      count: 10,
      extensions: ['.io', '.app', '.me', '.co', '.ma', '.biz', '.info', '.org', '.net', '.com']
    },
    {
      id: 'countries',
      name: 'Countries',
      count: 30,
      extensions: ['.sc', '.nl', '.nz', '.mx', '.ph', '.ec', '.id', '.wales', '.cymru', '.scot', '.mn', '.bz', '.at', '.ws', '.co.uk', '.gov.ma', '.com.au', '.global', '.uk', '.org.ma', '.press.ma', '.co.ma', '.ac.ma', '.net.ma', '.ru', '.de', '.ca', '.us', '.in', '.ma']
    },
    {
      id: 'art',
      name: 'Art & Entertainment',
      count: 32,
      extensions: ['.rocks', '.page', '.games', '.game', '.fans', '.design', '.desi', '.dance', '.poker', '.art', '.bet', '.band', '.bingo', '.tours', '.show', '.webcam', '.bar', '.photo', '.guitars', '.pics', '.hiphop', '.red', '.pink', '.blue', '.pictures', '.juegos', '.productions', '.camera', '.photos', '.graphics', '.gallery', '.photography']
    },
    {
      id: 'business',
      name: 'Business',
      count: 59,
      extensions: ['.work', '.car', '.security', '.page', '.law', '.jobs', '.rip', '.icu', '.uno', '.coupons', '.flowers', '.tires', '.srl', '.gold', '.career', '.dog', '.cars', '.protection', '.auto', '.review', '.gmbh', '.legal', '.delivery', '.taxi', '.sarl', '.money', '.team', '.trade', '.loans', '.investments', '.credit', '.accountants', '.lawyer', '.attorney', '.fund', '.furniture', '.partners', '.expert', '.services', '.deals', '.cash', '.associates', '.events', '.cheap', '.works', '.industries', '.business', '.agency', '.marketing', '.contractors', '.careers', '.support', '.solutions', '.management', '.center', '.company', '.holdings', '.pro', '.biz']
    },
    {
      id: 'education',
      name: 'Education',
      count: 20,
      extensions: ['.law', '.degree', '.icu', '.courses', '.college', '.career', '.science', '.study', '.how', '.school', '.mba', '.fyi', '.wiki', '.university', '.schule', '.institute', '.education', '.training', '.academy', '.center']
    },
    {
      id: 'finance',
      name: 'Finance',
      count: 33,
      extensions: ['.law', '.jobs', '.creditcard', '.gold', '.mortgage', '.review', '.loan', '.accountant', '.gmbh', '.legal', '.trade', '.loans', '.investments', '.credit', '.accountants', '.lawyer', '.consulting', '.reviews', '.tax', '.fund', '.lease', '.financial', '.capital', '.finance', '.insure', '.exchange', '.cash', '.report', '.business', '.management', '.center', '.holdings', '.pro']
    },
    {
      id: 'gastronomy',
      name: 'Gastronomy',
      count: 20,
      extensions: ['.kiwi', '.green', '.health', '.bio', '.soy', '.delivery', '.wine', '.vin', '.cafe', '.bar', '.menu', '.vodka', '.pub', '.cooking', '.beer', '.restaurant', '.pizza', '.coffee', '.catering', '.recipes']
    },
    {
      id: 'geographical',
      name: 'Geographical',
      count: 30,
      extensions: ['.nagoya', '.vegas', '.miami', '.wales', '.cymru', '.scot', '.earth', '.berlin', '.london', '.irish', '.asia', '.archi', '.amsterdam', '.africa', '.global', '.quebec', '.nyc', '.country', '.joburg', '.durban', '.casa', '.capetown', '.place', '.world', '.farm', '.town', '.zone', '.city', '.international', '.eu']
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle',
      count: 34,
      extensions: ['.wang', '.page', '.luxury', '.green', '.family', '.vip', '.homes', '.gold', '.dance', '.fun', '.eco', '.fashion', '.faith', '.date', '.win', '.party', '.show', '.gifts', '.style', '.express', '.team', '.bar', '.moda', '.fishing', '.christmas', '.surf', '.gift', '.club', '.dating', '.life', '.cool', '.shoes', '.singles', '.clothing']
    },
    {
      id: 'market',
      name: 'Market',
      count: 38,
      extensions: ['.store', '.markets', '.gold', '.bio', '.promo', '.auction', '.shop', '.sale', '.market', '.gifts', '.ink', '.tattoo', '.guitars', '.watch', '.toys', '.fish', '.rentals', '.cleaning', '.tools', '.industries', '.parts', '.supplies', '.supply', '.florist', '.repair', '.glass', '.builders', '.cab', '.kitchen', '.construction', '.camera', '.plumbing', '.clothing', '.limo', '.diamonds', '.lighting', '.equipment', '.bike']
    },
    {
      id: 'media',
      name: 'Media',
      count: 26,
      extensions: ['.page', '.fm', '.studio', '.live', '.news', '.video', '.me', '.blog', '.theater', '.show', '.fyi', '.exposed', '.webcam', '.wiki', '.buzz', '.actor', '.pub', '.guide', '.watch', '.media', '.events', '.productions', '.press', '.tel', '.tv', '.mobi']
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      count: 24,
      extensions: ['.rent', '.homes', '.apartments', '.immo', '.build', '.immobilien', '.haus', '.forsale', '.property', '.casa', '.furniture', '.lease', '.villas', '.tienda', '.condos', '.maison', '.claims', '.properties', '.agency', '.house', '.camp', '.builders', '.land', '.estate']
    },
    {
      id: 'shopping',
      name: 'Shopping',
      count: 35,
      extensions: ['.car', '.store', '.markets', '.coupons', '.flowers', '.tires', '.gold', '.promo', '.shop', '.sale', '.shopping', '.jewelry', '.social', '.menu', '.blackfriday', '.moda', '.kaufen', '.fishing', '.guitars', '.gift', '.furniture', '.tienda', '.deals', '.cash', '.discount', '.watch', '.bargains', '.boutique', '.cheap', '.shoes', '.kitchen', '.camera', '.clothing', '.diamonds', '.bike']
    },
    {
      id: 'sport-health',
      name: 'Sport & Health',
      count: 35,
      extensions: ['.physio', '.green', '.health', '.hospital', '.energy', '.dance', '.doctor', '.rehab', '.fit', '.dentist', '.racing', '.yoga', '.cricket', '.coach', '.tennis', '.golf', '.hockey', '.team', '.football', '.run', '.soccer', '.surf', '.help', '.diet', '.futbol', '.healthcare', '.clinic', '.surgery', '.dental', '.fitness', '.gripe', '.care', '.camp', '.training', '.bike']
    },
    {
      id: 'technology',
      name: 'Technology',
      count: 56,
      extensions: ['.security', '.page', '.name', '.link', '.click', '.io', '.dev', '.rest', '.online', '.lat', '.energy', '.app', '.tech', '.protection', '.ltd', '.stream', '.software', '.site', '.engineer', '.download', '.blog', '.chat', '.express', '.team', '.network', '.wiki', '.social', '.buzz', '.consulting', '.photo', '.hosting', '.pics', '.help', '.pictures', '.audio', '.codes', '.expert', '.services', '.exchange', '.digital', '.direct', '.report', '.website', '.host', '.computer', '.domains', '.guru', '.support', '.email', '.systems', '.tips', '.technology', '.directory', '.gallery', '.tel', '.mobi']
    },
    {
      id: 'travel',
      name: 'Travel',
      count: 11,
      extensions: ['.travel', '.rest', '.lat', '.holiday', '.flights', '.viajes', '.cruises', '.vacations', '.reisen', '.voyage', '.ventures']
    },
    {
      id: 'other',
      name: 'Other',
      count: 63,
      extensions: ['.xxx', '.name', '.one', '.top', '.gdn', '.ngo', '.ong', '.mom', '.cam', '.best', '.lgbt', '.black', '.porn', '.pet', '.jetzt', '.group', '.voto', '.vote', '.tube', '.men', '.feedback', '.wedding', '.vet', '.sx', '.republican', '.navy', '.love', '.lol', '.la', '.gives', '.garden', '.army', '.airforce', '.memorial', '.salon', '.plus', '.ooo', '.social', '.democrat', '.rodeo', '.horse', '.sexy', '.ninja', '.help', '.shiksha', '.kim', '.xyz', '.direct', '.church', '.wtf', '.fail', '.limited', '.community', '.cards', '.foundation', '.gratis', '.guru', '.center', '.tips', '.today', '.directory', '.tel', '.co']
    }
  ];

  const handleExtensionToggle = (extension) => {
    setSelectedExtensions(prev => {
      if (prev.includes(extension)) {
        return prev.filter(ext => ext !== extension);
      } else {
        return [...prev, extension];
      }
    });
  };

  const handleResetExtensions = () => {
    setSelectedExtensions([]);
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleSimpleSearch = (e) => {
    e.preventDefault();
    // Handle simple domain search
    console.log('Searching for:', searchTerm);
    // You can implement your search logic here
    // For example: redirect to search results or call an API
  };

  const handleAdvancedSearch = (e) => {
    e.preventDefault();
    // Handle advanced domain search with selected extensions
    console.log('Advanced search:', searchTerm, selectedExtensions);
    
    // You can implement your advanced search logic here
    // For example: 
    // 1. Construct search query with selected extensions
    // 2. Call API with multiple domain searches
    // 3. Navigate to results page
    
    setIsModalOpen(false);
  };

  const handleSelectAllCategoryExtensions = (categoryId) => {
    const category = extensionCategories.find(cat => cat.id === categoryId);
    if (category) {
      setSelectedExtensions(prev => {
        // Remove any extensions from this category first
        const filtered = prev.filter(ext => !category.extensions.includes(ext));
        // Add all extensions from this category
        return [...filtered, ...category.extensions];
      });
    }
  };

  const handleDeselectAllCategoryExtensions = (categoryId) => {
    const category = extensionCategories.find(cat => cat.id === categoryId);
    if (category) {
      setSelectedExtensions(prev => 
        prev.filter(ext => !category.extensions.includes(ext))
      );
    }
  };

  // Function to get extensions count for a category
  const getSelectedExtensionsCount = (categoryId) => {
    const category = extensionCategories.find(cat => cat.id === categoryId);
    if (!category) return 0;
    
    return category.extensions.filter(ext => 
      selectedExtensions.includes(ext)
    ).length;
  };

  return (
    <div className="ngc-hero-home bg-gradient-to-br from-gray-50 to-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center leading-tight">
          Web hosting and domain<br className="hidden md:block" />
          names in Morocco.
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-10 text-center">
          Start your project with the perfect domain name
        </p>

        {/* Search Container */}
        <div className="max-w-3xl mx-auto">
          {/* Simple Search Form */}
          <form onSubmit={handleSimpleSearch} className="relative">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative group">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Register or transfer your domain name to get started."
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all shadow-sm group-hover:border-gray-400"
                  aria-label="Enter a domain name to register or transfer"
                />
                {/* Decorative dots */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:flex space-x-1 opacity-40">
                  {[1, 2, 3, 4].map((dot) => (
                    <div key={dot} className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                {/* Advanced Mode Button */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-6 py-4 bg-white border-2 border-gray-300 rounded-xl hover:border-blue-500 hover:text-blue-600 hover:shadow-sm transition-all duration-200 font-medium"
                >
                  <FiSettings className="md:hidden text-xl" />
                  <span className="hidden md:inline">Advanced mode</span>
                  <FiArrowRight className="hidden md:inline" />
                </button>

                {/* Search Button */}
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all duration-200 font-medium shadow-md"
                >
                  <FiSearch />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </form>

          {/* Advanced Search Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
              <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden my-8">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white z-20 p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">Advanced search</h2>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      aria-label="Close modal"
                    >
                      <FiX className="text-xl" />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      <span className="font-bold">{selectedExtensions.length}</span> extension(s) selected
                    </div>
                    <button
                      type="button"
                      onClick={handleResetExtensions}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <FiRefreshCw />
                      Reset all
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <form onSubmit={handleAdvancedSearch} className="p-6">
                  {/* Domain Input */}
                  <div className="mb-8">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Enter up to 10 space-separated domain names or keywords"
                      className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      aria-label="Enter domain names or keywords"
                    />
                  </div>

                  {/* Extensions Section */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Extensions</h3>
                    
                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[400px] overflow-y-auto pr-2 pb-20">
                      {extensionCategories.map((category) => (
                        <div key={category.id} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                          {/* Category Header */}
                          <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
                            <div className="flex items-center gap-3">
                              <span className="font-semibold text-gray-900">
                                {category.name}
                              </span>
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                                {category.count}
                              </span>
                              {getSelectedExtensionsCount(category.id) > 0 && (
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                                  {getSelectedExtensionsCount(category.id)} selected
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => toggleCategory(category.id)}
                                className="p-1 hover:bg-gray-100 rounded transition-colors"
                                aria-label={expandedCategories[category.id] ? "Collapse category" : "Expand category"}
                              >
                                {expandedCategories[category.id] ? (
                                  <FiChevronUp className="text-gray-500" />
                                ) : (
                                  <FiChevronDown className="text-gray-500" />
                                )}
                              </button>
                            </div>
                          </div>

                          {/* Category Controls */}
                          <div className="px-4 py-2 bg-white border-b border-gray-200 flex justify-between">
                            <button
                              type="button"
                              onClick={() => handleSelectAllCategoryExtensions(category.id)}
                              className="text-xs text-blue-600 hover:text-blue-700 hover:underline"
                            >
                              Select all
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeselectAllCategoryExtensions(category.id)}
                              className="text-xs text-red-600 hover:text-red-700 hover:underline"
                            >
                              Deselect all
                            </button>
                          </div>

                          {/* Category Extensions */}
                          {expandedCategories[category.id] && (
                            <div className="p-4">
                              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                                {category.extensions.map((extension) => (
                                  <label
                                    key={extension}
                                    className={`flex items-center space-x-2 cursor-pointer p-2 rounded-lg transition-all ${
                                      selectedExtensions.includes(extension)
                                        ? 'bg-blue-50 border border-blue-200'
                                        : 'hover:bg-gray-100 border border-transparent'
                                    }`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={selectedExtensions.includes(extension)}
                                      onChange={() => handleExtensionToggle(extension)}
                                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-2"
                                    />
                                    <span className={`font-medium ${
                                      selectedExtensions.includes(extension)
                                        ? 'text-blue-700'
                                        : 'text-gray-700'
                                    }`}>
                                      {extension}
                                    </span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col md:flex-row gap-4 items-center justify-between pt-6 border-t border-gray-200">
                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium flex items-center justify-center gap-2 shadow-md"
                    >
                      <HiOutlineViewGrid />
                      Search with selected extensions
                    </button>
                    
                    <div className="text-center">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 hover:underline flex items-center justify-center gap-1 font-medium"
                      >
                        View all extensions
                        <FiArrowRight />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Quick Stats or Features */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Trusted by 10,000+ Moroccan businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>24/7 Local Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Free SSL Certificate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingHeroSection;
