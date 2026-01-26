import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link} from "react-router-dom";

const OnlineProjectToday = () => {
  const [activeTab, setActiveTab] = useState("recommended");

  return (
    <div className="px-6 lg:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          Launch your online project today
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Discover our complete suite of tools to bring your ideas to life and grow your web presence.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 overflow-x-auto">
          {[
            { id: "recommended", label: "Recommended" },
            { id: "hosting", label: "Web Hosting" },
            { id: "mail", label: "Mail solution" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-10 py-4 rounded-full text-sm font-medium whitespace-nowrap transition
                ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ================= TAB 1 ================= */}
        {activeTab === "recommended" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Linux */}
            <div className="lg:col-span-12 bg-blue-100 rounded-2xl pl-6 flex flex-col lg:flex-row items-center h-100 gap-5">
              <div className="flex-1">
                <span className="inline-block bg-blue-200 text-blue-600 text-xs px-3 py-1 rounded-full mb-3">
                  Most popular
                </span>
                <h3 className="text-xl font-bold mb-2">Linux Shared Hosting</h3>
                <p className="text-gray-600 mb-4">
                  Ideal for individuals and small businesses thanks to affordability and compatibility.
                </p>
                
                
               <Link to='/hosting/linux-shared'
                  className="inline-flex items-center gap-2  bg-blue-500 px-10 py-4 rounded-lg hover:bg-black text-white transition"
                >
                  View plans <FaArrowRight />
                </Link>
              </div>
              <img
                src="https://www.genious.net/themes/genious_theme/img/home/bento/linux.webp"
                alt="Linux Hosting"
                className="w-[100vh] h-full  mt-6 lg:mt-0"
              />
            </div>

            {/* SSL */}
            <div className="lg:col-span-8 bg-green-50 rounded-2xl pl-6 flex flex-col lg:flex-row items-center">
              <div className="flex-1">
                <span className="inline-block bg-green-200 text-green-700 text-xs px-3 py-1 rounded-full mb-3">
                  Secure my website
                </span>
                <h3 className="text-xl font-bold mb-2">Genious SSL Certificates</h3>
                <p className="text-gray-600 mb-4">
                  Morocco’s first SSL sub-authority with 20+ years of experience.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-4 rounded-lg hover:bg-green-700 transition"
                >
                  View plans <FaArrowRight />
                </a>
              </div>
              <img
                src="https://www.genious.net/themes/genious_theme/img/home/bento/ssl.webp"
                alt="SSL"
                className="w-[60vh] h-full  mt-6 lg:mt-0"
              />
            </div>

            {/* Mail */}
            <div className="lg:col-span-4 bg-blue-50 rounded-2xl p-16">
              <span className="inline-block bg-blue-200 text-blue-700 text-xs px-3 py-1 rounded-full mb-3 ">
                Professional email
              </span>
              <h3 className="text-xl font-bold mb-2">Genious Mail Solution</h3>
              <p className="text-gray-600 mb-4">
                The best choice for reliable and secure business email.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2  px-10 py-5 bg-blue-500 rounded-lg hover:bg-black text-white transition"
              >
                View plans <FaArrowRight />
              </a>
            </div>
          </div>
        )}

        {/* ================= TAB 2 ================= */}
        {activeTab === "hosting" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Card 1 */}
      <div className="bg-blue-100 rounded-2xl p-6 flex flex-col items-center">
        <img
          src="https://www.genious.net/themes/genious_theme/img/home/bento/wordpress.webp"
          alt="WordPress Hosting"
          className="w-full mb-12"
        />
        <button className="bg-blue-200 text-blue-700 px-4 py-1 mb-3 rounded-2xl">
          Best compatibility
        </button>
        <h3 className="text-xl font-bold mb-2">WordPress Hosting</h3>
        <p className="text-gray-600 mb-4">
          Optimised for speed, performance and security.
        </p>
        
        <Link to='/hosting/wordpress' className="inline-flex items-center gap-2 px-10 py-4 bg-blue-500 rounded-lg hover:bg-black text-white transition mb-5">
          View plans <FaArrowRight />
        </Link>
      </div>

      {/* Card 2 */}
      <div className="bg-blue-100 rounded-2xl p-6 flex flex-col items-center">
        <img
          src="https://www.genious.net/themes/genious_theme/img/home/bento/e-commerce.webp"
          alt="E-commerce Hosting"
          className="w-full mb-12"
        />
        <button className="bg-blue-200 text-blue-700 px-4 py-1 mb-3 rounded-2xl">
          Online Store
        </button>
        <h3 className="text-xl font-bold mb-2">E-commerce Hosting</h3>
        <p className="text-gray-600 mb-4">
          Launch your online store with peace of mind.
        </p>
        <a className="inline-flex items-center gap-2 px-10 py-4 bg-blue-500 rounded-lg hover:bg-black text-white transition mb-5">
          View plans <FaArrowRight />
        </a>
      </div>

      {/* Card 3 */}
      <div className="bg-blue-100 rounded-2xl p-6 flex flex-col items-center">
        <img
          src="https://www.genious.net/themes/genious_theme/img/home/bento/vps.webp"
          alt="VPS Cloud Hosting"
          className="w-full mb-12"
        />
        <button className="bg-blue-200 text-blue-700 px-4 py-1 mb-3 rounded-2xl">
          Experience the Cloud
        </button>
        <h3 className="text-xl font-bold mb-2">VPS Cloud Hosting</h3>
        <p className="text-gray-600 mb-4">
          Dedicated power with cloud flexibility.
        </p>
        <a className="inline-flex items-center gap-2 px-10 py-4 bg-blue-500 rounded-lg hover:bg-black text-white transition mb-5">
          View plans <FaArrowRight />
        </a>
      </div>

      {/* Card 4 */}
      <div className="bg-blue-100 rounded-2xl p-6 flex flex-col items-center">
        <img
          src="https://www.genious.net/themes/genious_theme/img/home/bento/dedicated.webp"
          alt="Dedicated Hosting"
          className="w-full mb-12"
        />
        <button className="bg-blue-200 text-blue-700 px-4 py-1 mb-3 rounded-2xl">
          Full server control
        </button>
        <h3 className="text-xl font-bold mb-2">Dedicated Hosting</h3>
        <p className="text-gray-600 mb-4">
          Perfect for high-traffic platforms.
        </p>
        <Link to='/hosting/dedicated' className="inline-flex items-center gap-2 px-10 py-4 bg-blue-500 rounded-lg hover:bg-black text-white transition mb-5">
          View plans <FaArrowRight />
        </Link>
      </div>

    </div>
        )}

        {/* ================= TAB 3 ================= */}
        {activeTab === "mail" && (
          <div className="flex flex-wrap gap-6">
<div className="flex gap-5">
      {/* Card 1 */}
      <div className="w-full lg:w-1/3">
        <div className="bg-blue-100 rounded-2xl p-6 h-full">
          <span className="inline-block bg-blue-200 text-blue-600 text-xs px-3 py-1 rounded-full mb-3">
            Professional email
          </span>

          <h2 className="text-xl font-bold mb-2">Genious Mail Solution</h2>
          <p className="text-gray-600 mb-4">
            This service is the optimal solution to meet your professional email needs.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-blue-500 px-10 py-5 rounded-lg hover:bg-black text-white transition"
          >
            View plans <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full lg:w-2/3">
        <div className="bg-sky-200 rounded-2xl pl-4  flex flex-col lg:flex-row items-center">
          <div className="flex-1">
            <span className="inline-block bg-sky-300 text-sky-700 text-sm px-3 py-1 rounded-full mb-3">
              Online collaboration
            </span>

            <h2 className="text-xl font-bold mb-2">Google Workspace</h2>
            <p className="text-gray-600 mb-4">
              Boost your productivity with Google’s suite of collaboration tools.
            </p>

            <a className="inline-flex items-center gap-2  px-10 py-5 rounded-lg hover:bg-black text-white transition bg-blue-500">
              View plans <FaArrowRight />
            </a>
          </div>

          <img
            src="https://www.genious.net/themes/genious_theme/img/home/bento/g-w.webp"
            alt="Google Workspace"
            className="w-[70vh]"
          />
        </div>
      </div>
         </div>

      {/* Card 3 */}
      <div className="flex gap-8">
      <div className="w-full lg:w-1/2">
        <div className="bg-blue-50 rounded-2xl pt-10  flex flex-col lg:flex-col items-center">
          <div className="flex-1 ">
            <span className="inline-block bg-blue-200 text-blue-600 text-sm px-3 py-1 rounded-full mb-3">
              Real-time collaboration
            </span>

            <h2 className="text-xl font-bold mb-2">Microsoft 365</h2>
            <p className="text-gray-600 mb-4">
              Microsoft’s collaborative solution for modern businesses.
            </p>

            <a className="inline-flex items-center gap-2 bg-blue-500 px-10 py-5 rounded-lg hover:bg-black text-white transition mb-7">
              View plans <FaArrowRight />
            </a>
          </div>

          <img
            src="https://www.genious.net/themes/genious_theme/img/home/bento/m-365.webp"
            alt="Microsoft 365"
            className="w-full h-[55vh]"
          />
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-full lg:w-1/2">
        <div className="bg-green-50 rounded-2xl pt-10  flex flex-col lg:flex-col items-center">
          <div className="flex-1">
            <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-full mb-3">
              Professional email
            </span>

            <h2 className="text-xl font-bold mb-2">Anti-spam</h2>
            <p className="text-gray-600 mb-4">
              Filter spam emails before they reach your server.
            </p>

            <a className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-5 rounded-lg hover:bg-green-700 transition mb-7">
              View plans <FaArrowRight />
            </a>
          </div>

          <img
            src="https://www.genious.net/themes/genious_theme/img/home/bento/anti-spam.webp"
            alt="Anti-spam"
            className="w-full h-[55vh]"
          />
        </div>
      </div>

      </div>

    </div>
        )}
      </div>
    </div>
  );
};



export default OnlineProjectToday