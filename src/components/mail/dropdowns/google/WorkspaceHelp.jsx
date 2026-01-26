import { ArrowRight } from "lucide-react";

const WorkspaceHelp = () => {
  return (
    <section className="bg-[#020c2b] py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row justify-between items-center gap-10">

        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Need help? <br /> We have experts to help you
        </h2>

        <button className="group bg-white text-[#020c2b] px-10 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition">
          Contact experts
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
        </button>

      </div>
    </section>
  );
};

export default WorkspaceHelp;
