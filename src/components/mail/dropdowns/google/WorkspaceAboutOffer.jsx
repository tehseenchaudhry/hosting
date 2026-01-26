import aboutImg from "../../../../assets/pack-entreprise.webp";

const WorkspaceAboutOffer = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div
            data-aos="fade-right"
            className="relative rounded-3xl overflow-hidden shadow-xl group"
          >
            <img
              src={aboutImg}
              alt="Google Workspace team collaboration"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />

            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-[#020c2b]/5 pointer-events-none" />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-6 leading-tight">
              About this offer
            </h2>

            <p className="text-gray-700 text-lg leading-7 mb-6">
              Google Workspace is designed to help teams collaborate, communicate
              and stay productive from anywhere. With professional Gmail,
              cloud storage, video conferencing and shared documents, your team
              can work efficiently in real time.
            </p>

            <p className="text-gray-600 text-base leading-7">
              This solution is ideal for businesses of all sizes looking for a
              secure, reliable and scalable collaboration platform backed by
              Google’s global infrastructure.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceAboutOffer;
