import React, { useState, useEffect } from 'react';
import { 
  X, 
  RefreshCw, 
  ChevronDown, 
  ChevronUp, 
  Settings,
  ArrowRight,
  
} from 'lucide-react';

const DomainNameHeroSectionModal = ({ isOpen, onClose }) => {
  const [selectedExtensions, setSelectedExtensions] = useState([]);
  const [openCategories, setOpenCategories] = useState([]);

  // Categories data structure
  const categories = [
    { id: 1, name: "Popular", count: 10, extensions: [".io", ".app", ".me", ".co", ".ma", ".biz", ".info", ".org", ".net", ".com"] },
    { id: 2, name: "Other", count: 63, extensions: [".xxx", ".name", ".one", ".top", ".gdn", ".ngo", ".ong", ".mom", ".cam", ".best", ".lgbt", ".black", ".porn", ".pet", ".jetzt", ".group", ".voto", ".vote", ".tube", ".men", ".feedback", ".wedding", ".vet", ".sx", ".republican", ".navy", ".love", ".lol", ".la", ".gives", ".garden", ".army", ".airforce", ".memorial", ".salon", ".plus", ".ooo", ".social", ".democrat", ".rodeo", ".horse", ".sexy", ".ninja", ".help", ".shiksha", ".kim", ".xyz", ".direct", ".church", ".wtf", ".fail", ".limited", ".community", ".cards", ".foundation", ".gratis", ".guru", ".center", ".tips", ".today", ".directory", ".tel", ".co"] },
    { id: 3, name: "Countries", count: 30, extensions: [".sc", ".nl", ".nz", ".mx", ".ph", ".ec", ".id", ".wales", ".cymru", ".scot", ".mn", ".bz", ".at", ".ws", ".co.uk", ".gov.ma", ".com.au", ".global", ".uk", ".org.ma", ".press.ma", ".co.ma", ".ac.ma", ".net.ma", ".ru", ".de", ".ca", ".us", ".in", ".ma"] },
    { id: 4, name: "Art & Entertainment", count: 32, extensions: [".rocks", ".page", ".games", ".game", ".fans", ".design", ".desi", ".dance", ".poker", ".art", ".bet", ".band", ".bingo", ".tours", ".show", ".webcam", ".bar", ".photo", ".guitars", ".pics", ".hiphop", ".red", ".pink", ".blue", ".pictures", ".juegos", ".productions", ".camera", ".photos", ".graphics", ".gallery", ".photography"] },
    { id: 5, name: "Business", count: 59, extensions: [".work", ".car", ".security", ".page", ".law", ".jobs", ".rip", ".icu", ".uno", ".coupons", ".flowers", ".tires", ".srl", ".gold", ".career", ".dog", ".cars", ".protection", ".auto", ".review", ".gmbh", ".legal", ".delivery", ".taxi", ".sarl", ".money", ".team", ".trade", ".loans", ".investments", ".credit", ".accountants", ".lawyer", ".attorney", ".fund", ".furniture", ".partners", ".expert", ".services", ".deals", ".cash", ".associates", ".events", ".cheap", ".works", ".industries", ".business", ".agency", ".marketing", ".contractors", ".careers", ".support", ".solutions", ".management", ".center", ".company", ".holdings", ".pro", ".biz"] },
    { id: 6, name: "Education", count: 20, extensions: [".law", ".degree", ".icu", ".courses", ".college", ".career", ".science", ".study", ".how", ".school", ".mba", ".fyi", ".wiki", ".university", ".schule", ".institute", ".education", ".training", ".academy", ".center"] },
    { id: 7, name: "Finance", count: 33, extensions: [".law", ".jobs", ".creditcard", ".gold", ".mortgage", ".review", ".loan", ".accountant", ".gmbh", ".legal", ".trade", ".loans", ".investments", ".credit", ".accountants", ".lawyer", ".consulting", ".reviews", ".tax", ".fund", ".lease", ".financial", ".capital", ".finance", ".insure", ".exchange", ".cash", ".report", ".business", ".management", ".center", ".holdings", ".pro"] },
    { id: 8, name: "Gastronomy", count: 20, extensions: [".kiwi", ".green", ".health", ".bio", ".soy", ".delivery", ".wine", ".vin", ".cafe", ".bar", ".menu", ".vodka", ".pub", ".cooking", ".beer", ".restaurant", ".pizza", ".coffee", ".catering", ".recipes"] },
    { id: 9, name: "Geographical", count: 30, extensions: [".nagoya", ".vegas", ".miami", ".wales", ".cymru", ".scot", ".earth", ".berlin", ".london", ".irish", ".asia", ".archi", ".amsterdam", ".africa", ".global", ".quebec", ".nyc", ".country", ".joburg", ".durban", ".casa", ".capetown", ".place", ".world", ".farm", ".town", ".zone", ".city", ".international", ".eu"] },
    { id: 10, name: "Lifestyle", count: 34, extensions: [".wang", ".page", ".luxury", ".green", ".family", ".vip", ".homes", ".gold", ".dance", ".fun", ".eco", ".fashion", ".faith", ".date", ".win", ".party", ".show", ".gifts", ".style", ".express", ".team", ".bar", ".moda", ".fishing", ".christmas", ".surf", ".gift", ".club", ".dating", ".life", ".cool", ".shoes", ".singles", ".clothing"] },
    { id: 11, name: "Market", count: 38, extensions: [".store", ".markets", ".gold", ".bio", ".promo", ".auction", ".shop", ".sale", ".market", ".gifts", ".ink", ".tattoo", ".guitars", ".watch", ".toys", ".fish", ".rentals", ".cleaning", ".tools", ".industries", ".parts", ".supplies", ".supply", ".florist", ".repair", ".glass", ".builders", ".cab", ".kitchen", ".construction", ".camera", ".plumbing", ".clothing", ".limo", ".diamonds", ".lighting", ".equipment", ".bike"] },
    { id: 12, name: "Media", count: 26, extensions: [".page", ".fm", ".studio", ".live", ".news", ".video", ".me", ".blog", ".theater", ".show", ".fyi", ".exposed", ".webcam", ".wiki", ".buzz", ".actor", ".pub", ".guide", ".watch", ".media", ".events", ".productions", ".press", ".tel", ".tv", ".mobi"] },
    { id: 13, name: "Real Estate", count: 24, extensions: [".rent", ".homes", ".apartments", ".immo", ".build", ".immobilien", ".haus", ".forsale", ".property", ".casa", ".furniture", ".lease", ".villas", ".tienda", ".condos", ".maison", ".claims", ".properties", ".agency", ".house", ".camp", ".builders", ".land", ".estate"] },
    { id: 14, name: "Shopping", count: 35, extensions: [".car", ".store", ".markets", ".coupons", ".flowers", ".tires", ".gold", ".promo", ".shop", ".sale", ".shopping", ".jewelry", ".social", ".menu", ".blackfriday", ".moda", ".kaufen", ".fishing", ".guitars", ".gift", ".furniture", ".tienda", ".deals", ".cash", ".discount", ".watch", ".bargains", ".boutique", ".cheap", ".shoes", ".kitchen", ".camera", ".clothing", ".diamonds", ".bike"] },
    { id: 15, name: "Sport & Health", count: 35, extensions: [".physio", ".green", ".health", ".hospital", ".energy", ".dance", ".doctor", ".rehab", ".fit", ".dentist", ".racing", ".yoga", ".cricket", ".coach", ".tennis", ".golf", ".hockey", ".team", ".football", ".run", ".soccer", ".surf", ".help", ".diet", ".futbol", ".healthcare", ".clinic", ".surgery", ".dental", ".fitness", ".gripe", ".care", ".camp", ".training", ".bike"] },
    { id: 16, name: "Technology", count: 56, extensions: [".security", ".page", ".name", ".link", ".click", ".io", ".dev", ".rest", ".online", ".lat", ".energy", ".app", ".tech", ".protection", ".ltd", ".stream", ".software", ".site", ".engineer", ".download", ".blog", ".chat", ".express", ".team", ".network", ".wiki", ".social", ".buzz", ".consulting", ".photo", ".hosting", ".pics", ".help", ".pictures", ".audio", ".codes", ".expert", ".services", ".exchange", ".digital", ".direct", ".report", ".website", ".host", ".computer", ".domains", ".guru", ".support", ".email", ".systems", ".tips", ".technology", ".directory", ".gallery", ".tel", ".mobi"] },
    { id: 17, name: "Travel", count: 11, extensions: [".travel", ".rest", ".lat", ".holiday", ".flights", ".viajes", ".cruises", ".vacations", ".reisen", ".voyage", ".ventures"] }
  ];

  // Initialize all categories as closed
  useEffect(() => {
    if (isOpen) {
      setOpenCategories([]);
    }
  }, [isOpen]);

  const toggleCategory = (categoryId) => {
    setOpenCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleExtension = (extension) => {
    setSelectedExtensions(prev => 
      prev.includes(extension)
        ? prev.filter(ext => ext !== extension)
        : [...prev, extension]
    );
  };

  const resetExtensions = () => {
    setSelectedExtensions([]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching with extensions:', selectedExtensions);
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-90 overflow-y-auto  bg-opacity-50">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl rounded-lg bg-white shadow-xl dark:bg-gray-800 ">
          {/* Header */}
          <form onSubmit={handleSearch} className="p-6">
            <div className="absolute right-4 top-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-black hover:bg-gray-700 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap items-center justify-between">
                <h2 className="text-2xl font-bold text-black">Advanced search</h2>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                    {selectedExtensions.length} extension(s) selected
                  </span>
                  <button
                    type="button"
                    onClick={resetExtensions}
                    className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 underline"
                  >
                    <RefreshCw className="h-3 w-3" />
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Enter up to 10 space-separated domain names or keywords"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Extensions Section */}
            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-black">Extensions</h3>
              
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="border-b border-gray-700">
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      className="flex w-full items-center justify-between py-3 text-left  "
                    >
                      <span className="font-medium">{category.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">{category.count}</span>
                        {openCategories.includes(category.id) ? (
                          <ChevronUp className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    {openCategories.includes(category.id) && (
                      <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {category.extensions.map((extension, index) => (
                          <div key={`${category.id}-${index}`} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`ext-${extension}-${category.id}`}
                              checked={selectedExtensions.includes(extension)}
                              onChange={() => toggleExtension(extension)}
                              className="peer hidden"
                            />
                            <label
                              htmlFor={`ext-${extension}-${category.id}`}
                              className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 peer-checked:bg-blue-600 peer-checked:text-white"
                            >
                              {extension}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <Settings className="h-5 w-5" />
                Search
              </button>
              
              <a
                href=""
                className="flex items-center justify-center gap-1 text-sm text-blue-400 hover:text-blue-300"
              >
                View all extensions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DomainNameHeroSectionModal;