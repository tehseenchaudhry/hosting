import React from "react";
import { ImArrowDownRight2 } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa6"; 


const AuthorizedPartnerProgram = () => {
  return (
    <div className=" border-b border-gray-800 py-20 px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <div className="md:w-7/12">
            <h2 className="text-6xl font-bold mb-4">Genious Authorized Partner Program</h2>

            <div className="flex gap-4 mb-4">
              <a
                href=""
                className="flex items-center gap-2  px-10 py-5 hover:bg-black bg-blue-500 rounded-xl text-white transition duration-300 mt-5"
              >
                Authorized partners <FaAngleRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:w-5/12 flex flex-col gap-6">
            <div>
              <h4 className="text-2xl font-semibold mb-2">Presentation of the program</h4>
              <p>
                Our Authorized partner program is built for entreprises as well as individuals wishing to
                offer web hosting services, to take full advantage of the resources and services of Genious
                Communications.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold mb-2">Our program’s offers</h4>
              <p>
                Three offers: Reseller, Distributor and Partner, gathering attractive advantages and
                discounts from 3% to 20% available on 13 different products!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto mt-8 md:mt-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Reseller */}
          <div className="flex-1 border rounded-xl p-6 text-center">
            <h5 className="text-3xl font-bold mb-4">Reseller</h5>
            <div className="flex items-center justify-center gap-4">
              <ImArrowDownRight2 className="w-9 h-9 text-blue-600" />
              <div>
                <p>Save up to</p>
                <span className="text-4xl font-bold">10%</span>
              </div>
            </div>
          </div>

          {/* Distributor */}
          <div className="flex-1 border rounded-xl p-6 text-center">
            <h5 className="text-3xl font-bold mb-4">Distributor</h5>
            <div className="flex items-center justify-center gap-4">
              <ImArrowDownRight2 className="w-9 h-9 text-blue-600" />
              <div>
                <p>Save up to</p>
                <span className="text-4xl font-bold">15%</span>
              </div>
            </div>
          </div>

          {/* Partner */}
          <div className="flex-1 border rounded-xl p-6 text-center">
            <h5 className="text-3xl font-bold mb-4">Partner</h5>
            <div className="flex items-center justify-center gap-4">
              <ImArrowDownRight2 className="w-9 h-9 text-blue-600" />
              <div>
                <p>Save up to</p>
                <span className="text-4xl font-bold">20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizedPartnerProgram;
