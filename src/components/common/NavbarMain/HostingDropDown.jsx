import React from "react";

const HostingDropDown = () => {
  return (
    <section className="w-full min-h-screen bg-white">
      <div className="flex">

        {/* LEFT FILTER */}
        <aside className="w-[280px] bg-[#020c2b] text-white px-10 py-16">
          <p className="text-lg mb-10">Filter by</p>

          <ul className="space-y-6 text-sm font-semibold">
            <li className="opacity-50 cursor-pointer">ALL</li>
            <li className="opacity-50 cursor-pointer">INDIVIDUAL</li>

            <li className="flex items-center gap-2 font-bold">
              PROFESSIONAL
              <span>→</span>
            </li>

            <li className="opacity-50 cursor-pointer">ENTERPRISE</li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1 bg-white flex">

          {/* CENTER CARD */}
          <div className="w-[420px] bg-[#f2f5ff] px-10 py-16">
            <h2 className="text-3xl font-bold mb-4">
              Hosting in Morocco
            </h2>

            <span className="text-2xl font-bold">→</span>

            <p className="text-sm mt-6 leading-6 text-gray-700">
              Discover our hosting and colocation offers in Morocco in a
              certified tier 3 data center with international standards.
            </p>

            {/* Image */}
            <img
              src="/mainNavbar-hosting-img.jpg"
              alt="Data Center"
              className="rounded-2xl mt-8"
            />

            {/* Links */}
            <div className="mt-8 space-y-4 font-semibold">
              <p>Housing →</p>
              <p>Shared Hosting →</p>
              <p>Dedicated →</p>
              <p>Cloud →</p>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="flex-1 px-16 py-16 grid grid-cols-3 gap-x-20 gap-y-16">
            <HostingItem
              title="Shared Hosting in Morocco"
              desc="Web hosting for customers looking to host their data locally"
            />
            <HostingItem
              title="Cloud Hosting"
              desc="Host your data the way you need it with a tailored, scalable hosting solution"
            />
            <HostingItem
              title="Dedicated Servers"
              desc="Total control, privacy and guaranteed resources on a secure physical server"
            />

            <HostingItem
              title="E-commerce Hosting"
              desc="Start your e-commerce business with a high performance web hosting"
            />
            <HostingItem
              title="Wordpress Hosting"
              desc="Specially designed to optimize WordPress sites for speed, performance and security"
            />
            <HostingItem
              title="Multi-Site Hosting"
              desc="An optimized hosting solution to host all your websites on a single hosting package"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const HostingItem = ({ title, desc }) => (
  <div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-sm text-gray-600 leading-6">{desc}</p>
  </div>
);

export default HostingDropDown;
