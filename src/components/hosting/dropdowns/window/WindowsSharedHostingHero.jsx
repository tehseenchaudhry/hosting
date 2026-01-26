const WindowsSharedHostingHero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 pt-32 pb-20">

        {/* BREADCRUMB */}
        <div className="text-sm text-gray-500 mb-10">
          Home <span className="mx-2">›</span> Hosting{" "}
          <span className="mx-2">›</span>
          <span className="text-[#020c2b] font-medium">
            Windows Shared Hosting
          </span>
        </div>

        {/* HERO CONTENT */}
        <div className="text-center max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#020c2b] mb-6 leading-tight">
            Windows shared hosting
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-8">
            Budget hosting for sites and applications based on Microsoft
            technologies like ASP.NET or .NET
          </p>

        </div>

      </div>
    </section>
  );
};

export default WindowsSharedHostingHero;
