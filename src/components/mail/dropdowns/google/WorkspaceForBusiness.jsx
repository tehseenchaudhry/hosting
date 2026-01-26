const WorkspaceForBusiness = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-6 leading-tight">
              Workspace for Business
            </h2>

            <p className="text-gray-600 text-lg leading-7 max-w-xl">
              Google Workspace brings together professional email, cloud storage,
              video conferencing and collaboration tools designed to help teams
              work smarter and faster.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="space-y-6"
          >
            <p className="text-gray-600 leading-7">
              With Google Workspace, you get secure business email, shared
              calendars, online document editing and video meetings — all in
              one integrated platform.
            </p>

            <p className="text-gray-600 leading-7">
              Whether you are a startup or a growing company, Workspace adapts
              to your needs and allows seamless collaboration from anywhere
              and on any device.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkspaceForBusiness;
