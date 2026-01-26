export default function GeoTrustFilter() {
  return (
    <section className="bg-[#020d2a] py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-4 gap-10 text-white">

          {/* FILTER */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Filter les certificats
            </h4>

            <div className="space-y-3 text-sm text-white/80">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                Most popular
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                Best value
              </label>
            </div>
          </div>

          {/* GUARANTEE */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Garantie
            </h4>

            <div className="space-y-3 text-sm text-white/80">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                Domain validation (DV)
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                Organization validation (OV)
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                Extended validation (EV)
              </label>
            </div>
          </div>

          {/* TYPE */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Type
            </h4>

            <div className="space-y-3 text-sm text-white/80">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                Single-domain
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                Multi-domain
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                Wildcard
              </label>
            </div>
          </div>

          {/* OPTIONS */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Options
            </h4>

            <div className="space-y-3 text-sm text-white/80">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                Quick issuance
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                Mobile friendly
              </label>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
