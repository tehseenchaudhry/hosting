export default function DigicertFilterBar() {
  return (
    <section className="bg-gradient-to-r from-[#020d2a] to-[#04153d] py-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-start">

          {/* FILTER TITLE */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Filter les certificats
            </h3>

            <label className="flex items-center gap-2 text-blue-100 text-sm">
              <input type="checkbox" className="accent-blue-500" />
              Certificats standards
            </label>

            <label className="flex items-center gap-2 text-blue-100 text-sm mt-2">
              <input type="checkbox" className="accent-blue-500" />
              Certificats EV
            </label>
          </div>

          {/* VALIDATION */}
          <div>
            <h3 className="text-white font-semibold mb-3">Garantie</h3>

            <label className="flex items-center gap-2 text-blue-100 text-sm">
              <input type="checkbox" className="accent-blue-500" />
              Domaine (DV)
            </label>

            <label className="flex items-center gap-2 text-blue-100 text-sm mt-2">
              <input type="checkbox" className="accent-blue-500" />
              Organisation (OV)
            </label>

            <label className="flex items-center gap-2 text-blue-100 text-sm mt-2">
              <input type="checkbox" className="accent-blue-500" />
              Étendue (EV)
            </label>
          </div>

          {/* TYPE */}
          <div>
            <h3 className="text-white font-semibold mb-3">Type</h3>

            <label className="flex items-center gap-2 text-blue-100 text-sm">
              <input type="checkbox" className="accent-blue-500" />
              Simple
            </label>

            <label className="flex items-center gap-2 text-blue-100 text-sm mt-2">
              <input type="checkbox" className="accent-blue-500" />
              Multi-domain
            </label>

            <label className="flex items-center gap-2 text-blue-100 text-sm mt-2">
              <input type="checkbox" className="accent-blue-500" />
              Wildcard
            </label>
          </div>

          {/* OPTIONS */}
          <div>
            <h3 className="text-white font-semibold mb-3">Options</h3>

            <label className="flex items-center gap-2 text-blue-100 text-sm">
              <input type="checkbox" className="accent-blue-500" />
              Ajout de sous-domaines
            </label>

            <label className="flex items-center gap-2 text-blue-100 text-sm mt-2">
              <input type="checkbox" className="accent-blue-500" />
              Sécurisation avancée
            </label>
          </div>

        </div>

      </div>
    </section>
  );
}
