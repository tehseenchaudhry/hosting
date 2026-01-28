import React from "react";

const BrokerImages = () => {
  return (
    <div className="container mx-auto  py-10">
      <div className="flex justify-center">
        {/* Desktop Image */}
        <img
          src="https://www.genious.net/themes/genious_theme/img/ndd/broker-en.svg"
          alt="explication du service de courtage pour noms de domaine"
          className="hidden lg:block "
        />

        {/* Mobile Image */}
        <img
          src="https://www.genious.net/themes/genious_theme/img/ndd/broker-mobile-en.svg"
          alt="le service de courtage pour noms de domaine"
          className="block lg:hidden  mt-2   p-0"
        />
      </div>
    </div>
  );
};

export default BrokerImages;
