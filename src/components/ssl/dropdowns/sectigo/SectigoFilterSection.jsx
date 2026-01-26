export default function SectigoFilterSection() {
  return (
    <section className="bg-[#020d2a] py-14">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-4 gap-10 items-start">

          {/* TITLE */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Filter les certificats
            </h3>
            <p className="text-blue-200 text-sm">
              Sélectionnez le type de certificat SSL
            </p>
          </div>

          {/* FILTER GROUP */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-4 gap-6">

            {/* FILTER ITEM */}
            <label className="flex items-center gap-3 text-blue-100 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-500"
              />
              Validation (DV)
            </label>

            <label className="flex items-center gap-3 text-blue-100 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-500"
              />
              Organisation (OV)
            </label>

            <label className="flex items-center gap-3 text-blue-100 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-500"
              />
              Extended Validation (EV)
            </label>

            <label className="flex items-center gap-3 text-blue-100 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-500"
              />
              Wildcard
            </label>

            <label className="flex items-center gap-3 text-blue-100 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-500"
              />
              Multi-Domain
            </label>

            <label className="flex items-center gap-3 text-blue-100 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-500"
              />
              Single Domain
            </label>

          </div>
        </div>
      </div>
    </section>
  );
}
