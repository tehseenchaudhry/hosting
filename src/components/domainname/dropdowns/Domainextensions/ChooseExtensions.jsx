import React, { useState, useEffect, useRef } from 'react';
import { 
  FiSearch, 
  FiRefreshCw, 
  FiFilter,
  FiChevronDown,
  FiChevronUp,
  FiExternalLink,
  FiCheck,
  FiX
} from 'react-icons/fi';

const ChooseExtensions = () => {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);
  const searchInputRef = useRef(null);

  // Category data
  const categories = [
    { id: '1', name: 'Popular', count: '10' },
    { id: '3', name: 'Countries', count: '30' },
    { id: '4', name: 'Art & Entertainment', count: '32' },
    { id: '5', name: 'Business', count: '59' },
    { id: '6', name: 'Education', count: '20' },
    { id: '7', name: 'Finance', count: '33' },
    { id: '8', name: 'Gastronomy', count: '20' },
    { id: '9', name: 'Geographical', count: '30' },
    { id: '10', name: 'Lifestyle', count: '34' },
    { id: '11', name: 'Market', count: '38' },
    { id: '12', name: 'Media', count: '26' },
    { id: '13', name: 'Real Estate', count: '24' },
    { id: '14', name: 'Shopping', count: '35' },
    { id: '15', name: 'Sport & Health', count: '35' },
    { id: '16', name: 'Technology', count: '56' },
    { id: '17', name: 'Travel', count: '11' },
    { id: '2', name: 'Other', count: '63' },
  ];

  // Domain data - you can replace this with API call
  const domains = [
    { 
      id: 1, 
      extension: '.uk', 
      url: '/en/domain-names/domain-extensions/uk',
      categories: ['3'],
      idProtect: true,
      registration: '$99.50',
      renewal: '$99.50',
      transfer: '$99.50',
      restoration: '$195.862'
    },
    { 
      id: 2, 
      extension: '.webcam', 
      url: '/en/domain-names/domain-extensions/webcam',
      categories: ['12', '4'],
      idProtect: true,
      registration: '$65.00',
      renewal: '$65.00',
      transfer: '$65.00',
      restoration: '$195.862'
    },
    { 
      id: 3, 
      extension: '.com.au', 
      url: '/en/domain-names/domain-extensions/comau',
      categories: ['3'],
      idProtect: true,
      registration: '$25.00',
      renewal: '$25.00',
      transfer: '$25.00',
      restoration: '$195.862'
    },
    { 
      id: 4, 
      extension: '.com', 
      url: '/en/domain-names/domain-extensions/com',
      categories: ['1'],
      idProtect: true,
      registration: '$14.50',
      renewal: '$14.50',
      transfer: '$14.50',
      restoration: '$195.862'
    },
    { 
      id: 5, 
      extension: '.org', 
      url: '/en/domain-names/domain-extensions/org',
      categories: ['1'],
      idProtect: true,
      registration: '$18.50',
      renewal: '$18.50',
      transfer: '$18.50',
      restoration: '$195.862'
    },
    { 
      id: 6, 
      extension: '.net', 
      url: '/en/domain-names/domain-extensions/net',
      categories: ['1'],
      idProtect: true,
      registration: '$17.00',
      renewal: '$17.00',
      transfer: '$17.00',
      restoration: '$195.862'
    },
    { 
      id: 7, 
      extension: '.ma', 
      url: '/en/domain-names/domain-extensions/ma',
      categories: ['3', '1'],
      idProtect: false,
      registration: '$16.00',
      renewal: '$16.00',
      transfer: '$16.00',
      restoration: 'Gratuit'
    },
    { 
      id: 8, 
      extension: '.biz', 
      url: '/en/domain-names/domain-extensions/biz',
      categories: ['5', '1'],
      idProtect: true,
      registration: '$19.00',
      renewal: '$19.00',
      transfer: '$19.00',
      restoration: '$195.862'
    },
    { 
      id: 9, 
      extension: '.co', 
      url: '/en/domain-names/domain-extensions/co',
      categories: ['2', '1'],
      idProtect: true,
      registration: '$43.50',
      renewal: '$43.50',
      transfer: '$43.50',
      restoration: '$195.862'
    },
    { 
      id: 10, 
      extension: '.io', 
      url: '/en/domain-names/domain-extensions/io',
      categories: ['16', '1'],
      idProtect: true,
      registration: '$86.50',
      renewal: '$86.50',
      transfer: '$86.50',
      restoration: '$195.862'
    },
    { 
      id: 11, 
      extension: '.app', 
      url: '/en/domain-names/domain-extensions/app',
      categories: ['16', '1'],
      idProtect: true,
      registration: '$29.50',
      renewal: '$29.50',
      transfer: '$29.50',
      restoration: '$195.862'
    },
    { 
      id: 12, 
      extension: '.me', 
      url: '/en/domain-names/domain-extensions/me',
      categories: ['12', '1'],
      idProtect: true,
      registration: '$42.00',
      renewal: '$42.00',
      transfer: '$42.00',
      restoration: '$195.862'
    },
    { 
      id: 13, 
      extension: '.info', 
      url: '/en/domain-names/domain-extensions/info',
      categories: ['1'],
      idProtect: true,
      registration: '$18.50',
      renewal: '$18.50',
      transfer: '$18.50',
      restoration: '$195.862'
    },
    // Add more domains as needed
  ];

  // Filter domains
  const filteredDomains = domains.filter(domain => {
    const matchesCategory = domain.categories.includes(selectedCategory);
    const matchesSearch = searchTerm === '' || 
      domain.extension.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (window.innerWidth < 1024) {
      setIsMobileFilterVisible(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleResetFilter = () => {
    setSelectedCategory('1');
    setSearchTerm('');
  };

  const handleMobileFilterToggle = () => {
    setIsMobileFilterVisible(!isMobileFilterVisible);
  };

  useEffect(() => {
    if (isMobileFilterVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isMobileFilterVisible]);

  return (
    <div className="container mx-auto px-4 lg:px-8 xl:px-16 pt-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Title */}
        <div className="lg:hidden mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Choose the extension that is right for you
          </h2>
        </div>

        {/* Left Column - Filter Sidebar */}
        <div className="lg:w-1/3 xl:w-1/4">
          <div className={`bg-gray-900 text-white rounded-xl overflow-hidden ${isMobileFilterVisible ? 'shadow-2xl' : 'shadow-lg'}`}>
            {/* Mobile Filter Header */}
            <div 
              className="lg:hidden flex justify-between items-center p-4 border-b border-gray-800 cursor-pointer"
              onClick={handleMobileFilterToggle}
            >
              <h3 className="text-lg font-semibold">Filter Domain Names</h3>
              {isMobileFilterVisible ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
            </div>

            {/* Filter Content */}
            <div className={`${isMobileFilterVisible ? 'block' : 'hidden lg:block'} p-4 lg:p-6`}>
              {/* Search Input */}
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" size={18} />
                </div>
                <input
                  ref={searchInputRef}
                  type="text"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search extension"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>

              {/* Categories */}
              <h4 className="text-xl font-semibold mb-4 pb-4 border-b border-gray-800">Categories</h4>
              <div className=" pr-2">
                <div className="space-y-1">
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${category.id}`}
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={() => handleCategoryChange(category.id)}
                        className="hidden"
                      />
                      <label
                        htmlFor={`category-${category.id}`}
                        className={`flex items-center justify-between w-full px-4 py-1 rounded-lg cursor-pointer transition-all ${
                          selectedCategory === category.id 
                            ? 'bg-blue-600 text-white' 
                            : 'hover:bg-gray-800 text-gray-300'
                        }`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm opacity-75">({category.count})</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Filter Buttons */}
              <div className="lg:hidden mt-6 pt-6 border-t border-gray-800 flex justify-between gap-3">
                <button
                  onClick={handleResetFilter}
                  className="flex items-center justify-center px-4 py-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FiRefreshCw className="mr-2" size={16} />
                  Reset filter
                </button>
                <button
                  onClick={() => setIsMobileFilterVisible(false)}
                  className="px-6 py-2 bg-transparent border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Domain Table */}
        <div className="lg:w-2/3 xl:w-3/4">
          {/* Desktop Title */}
          <div className="hidden lg:block mb-6">
            <h2 className="text-3xl xl:text-4xl font-bold text-gray-900">
              Choose the extension that is right for you
            </h2>
          </div>

          {/* Results Info */}
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredDomains.length}</span> extensions
            </p>
            <button
              onClick={handleResetFilter}
              className="lg:hidden flex items-center text-sm text-blue-600 hover:text-blue-800"
            >
              <FiRefreshCw className="mr-1" size={14} />
              Reset all
            </button>
          </div>

          {/* Domain Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="py-4 px-6 text-left">
                      <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Extension</span>
                    </th>
                    <th className="py-4 px-6 text-left">
                      <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Id Protect</span>
                    </th>
                    <th className="py-4 px-6 text-left">
                      <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Registration</span>
                    </th>
                    <th className="py-4 px-6 text-left">
                      <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Renewal</span>
                    </th>
                    <th className="py-4 px-6 text-left">
                      <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Transfer</span>
                    </th>
                    <th className="py-4 px-6 text-left">
                      <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Restoration</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredDomains.length > 0 ? (
                    filteredDomains.map(domain => (
                      <tr 
                        key={domain.id} 
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-6">
                          {domain.url ? (
                            <a 
                              href={domain.url} 
                              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
                            >
                              {domain.extension}
                              <FiExternalLink className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                            </a>
                          ) : (
                            <span className="font-medium text-gray-900">{domain.extension}</span>
                          )}
                        </td>
                        <td className="py-4 px-6">
                          {domain.idProtect ? (
                            <FiCheck className="text-green-500" size={18} />
                          ) : (
                            <FiX className="text-red-500" size={18} />
                          )}
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-semibold text-gray-900">{domain.registration}</span>
                          <span className="text-gray-500 text-sm ml-1">per year</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-semibold text-gray-900">{domain.renewal}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-semibold text-gray-900">{domain.transfer}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`font-semibold ${
                            domain.restoration === 'Gratuit' || domain.restoration === 'Free' 
                              ? 'text-green-600' 
                              : 'text-gray-900'
                          }`}>
                            {domain.restoration}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="py-12 px-6 text-center">
                        <div className="flex flex-col items-center">
                          <FiSearch className="text-gray-400 mb-4" size={48} />
                          <h3 className="text-lg font-medium text-gray-900 mb-2">No domains found</h3>
                          <p className="text-gray-600 max-w-md">
                            No domain extensions match your search criteria. Try adjusting your filters or search term.
                          </p>
                          <button
                            onClick={handleResetFilter}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Reset filters
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination - Optional */}
            {filteredDomains.length > 0 && (
              <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Showing 1 to {Math.min(filteredDomains.length, 10)} of {filteredDomains.length} results
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mt-6">
            <button
              onClick={handleMobileFilterToggle}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FiFilter size={18} />
              {isMobileFilterVisible ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseExtensions;