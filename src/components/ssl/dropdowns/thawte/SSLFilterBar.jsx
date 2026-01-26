export default function SSLFilterBar() {
  return (
    <section className="bg-gradient-to-r from-[#020d2a] to-[#04153d] py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-4 gap-10 text-blue-100">

          {/* FILTER TITLE */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Filter les certificats
            </h4>

            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                className="accent-blue-500 w-4 h-4"
              />
              Show promotional offers
            </label>

            <label className="flex items-center gap-3 text-sm mt-3">
              <input
                type="checkbox"
                className="accent-blue-500 w-4 h-4"
              />
              Reinitialize filters
            </label>
          </div>

          {/* GUARANTEE */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Garantie
            </h4>

            <div className="space-y-3 text-sm">
              <label className="flex items-center gap-3">
                <input type="radio" name="garantie" className="accent-blue-500" />
                Domain (DV)
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="garantie" className="accent-blue-500" />
                Organization (OV)
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="garantie" className="accent-blue-500" />
                Extended (EV)
              </label>
            </div>
          </div>

          {/* TYPE */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Type
            </h4>

            <div className="space-y-3 text-sm">
              <label className="flex items-center gap-3">
                <input type="radio" name="type" className="accent-blue-500" />
                Simple
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="type" className="accent-blue-500" />
                Multi-domain
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="type" className="accent-blue-500" />
                Wildcard
              </label>
            </div>
          </div>

          {/* OPTIONS */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Options
            </h4>

            <div className="space-y-3 text-sm">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="accent-blue-500" />
                Audit de sécurité
              </label>

              <label className="flex items-center gap-3">
                <input type="checkbox" className="accent-blue-500" />
                Scan Malware
              </label>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
