// LOGO
import digicertLogo from "../../../../assets/digicert-logo-colors.svg";

export default function DigicertHero() {
  return (
    <section className="bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            {/* LOGO */}
            <img
              src={digicertLogo}
              alt="DigiCert"
              className="h-10 mb-6 object-contain"
            />

            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#061a3a] leading-tight">
              DigiCert SSL <br /> Certificates
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-600 max-w-xl">
              DigiCert is an American certification authority founded in 2003.
              The company is renowned for securing the platforms of the world's
              leading companies such as PayPal, Facebook, or Cloudflare.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-lg font-semibold text-[#061a3a] mb-4">
              Why choose DigiCert certificates?
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                Fast validation procedures in the industry
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                Certificates trusted by the world’s most renowned brands
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                Global provider of high-security digital certificates
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
