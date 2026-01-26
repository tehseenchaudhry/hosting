import { Check } from "lucide-react";

import domainImg from "../../../../assets/ndd.webp";
import hostingImg from "../../../../assets/hapito.webp";

const MyCompanyPackSection = () => {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-16">

        {/* SECTION HEADER */}
        <div
          className="text-center max-w-3xl mx-auto mb-24"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-4">
            My Company Pack
          </h2>
          <p className="text-gray-600 text-lg leading-7">
            Our role is to help your company become visible online. Regardless of
            your status — self-employed, small or medium-sized business — our
            pack is tailored to suit you.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* LEFT – IMAGES */}
          <div
            className="flex flex-col gap-24"
            data-aos="fade-right"
          >
            {/* IMAGE 1 */}
            <div className="w-full rounded-2xl shadow-xl bg-white p-6">
              <img
                src={domainImg}
                alt="Domain names"
                className="w-full object-contain"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="w-[75%] ml-auto rounded-2xl shadow-xl bg-white p-6">
              <img
                src={hostingImg}
                alt="Web hosting"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* RIGHT – TEXT CONTENT */}
          <div className="flex flex-col gap-20">

            {/* ITEM 1 */}
            <div data-aos="fade-left">
              <span className="text-sm font-semibold text-[#0b4dff]">1</span>
              <h3 className="text-2xl font-bold text-[#020c2b] mt-3">
                Domain names
              </h3>
              <p className="text-gray-600 mt-4 leading-7 max-w-lg">
                Choose from over 100 domain extensions to create catchy,
                memorable or location-specific domain names for your business.
              </p>
            </div>

            {/* ITEM 2 */}
            <div data-aos="fade-left" data-aos-delay="100">
              <span className="text-sm font-semibold text-[#0b4dff]">2</span>
              <h3 className="text-2xl font-bold text-[#020c2b] mt-3">
                Web hosting
              </h3>

              <ul className="mt-5 space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#0b4dff]" />
                  Disk space: 15 GB
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#0b4dff]" />
                  Bandwidth: 10 GB
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#0b4dff]" />
                  Email accounts: 10
                </li>
              </ul>
            </div>

            {/* ITEM 3 */}
            <div data-aos="fade-left" data-aos-delay="200">
              <span className="text-sm font-semibold text-[#0b4dff]">3</span>
              <h3 className="text-2xl font-bold text-[#020c2b] mt-3">
                Professional email
              </h3>
              <p className="text-gray-600 mt-4 leading-7 max-w-lg">
                A professional email like{" "}
                <span className="font-medium">name@yourcompany.com</span>{" "}
                increases trust and credibility with customers.
              </p>
            </div>

            {/* ITEM 4 */}
            <div data-aos="fade-left" data-aos-delay="300">
              <span className="text-sm font-semibold text-[#0b4dff]">4</span>
              <h3 className="text-2xl font-bold text-[#020c2b] mt-3">
                Website creation tool
              </h3>
              <p className="text-gray-600 mt-4 leading-7 max-w-lg">
                Create a professional website in minutes with over 200
                customizable templates — no technical skills required.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCompanyPackSection;
