import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ShieldCheck, Building2, Chrome } from "lucide-react";

const FILTERS = ["All", "Individual", "Professional", "Enterprise"];

const SOLUTIONS = [
  {
    title: "Genious Mail Solution",
    desc: "Professional email accounts with low rates, security and easy access from anywhere.",
    category: "Professional",
    path: "/mail-solutions/genious-mail",
    icon: Mail,
  },
  {
    title: "Google Workspace",
    desc: "Gmail, Drive, Docs, Meet and more — everything you need to collaborate.",
    category: "Enterprise",
    path: "/mail-solutions/google-workspace",
    icon: Chrome,
  },
  {
    title: "Microsoft 365",
    desc: "Office, Outlook, Excel, PowerPoint with enhanced security.",
    category: "Enterprise",
    path: "/mail-solutions/microsoft-365",
    icon: Building2,
  },
  {
    title: "Anti-Spam",
    desc: "Protect your inbox and block unwanted emails.",
    category: "Individual",
    path: "/mail-solutions/anti-spam",
    icon: ShieldCheck,
  },
];

const MailSolutionsDropDown = ({ closeMenu }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? SOLUTIONS
      : SOLUTIONS.filter(item => item.category === activeFilter);

  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto px-10 py-14 grid grid-cols-[260px_1fr_340px] gap-14">

        {/* LEFT FILTER */}
        <div className="border-r pr-6">
          <p className="text-xs font-semibold uppercase text-gray-400 mb-6">
            Filter by
          </p>

          <ul className="space-y-3">
            {FILTERS.map(filter => (
              <li
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative pl-4 py-2 cursor-pointer text-sm font-medium transition-all
                  ${
                    activeFilter === filter
                      ? "text-[#020c2b]"
                      : "text-gray-500 hover:text-[#020c2b]"
                  }`}
              >
                {activeFilter === filter && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-[#0b4dff] rounded-full" />
                )}
                {filter}
              </li>
            ))}
          </ul>
        </div>

        {/* CENTER CONTENT */}
        <div className="grid grid-cols-2 gap-8">
          {filtered.map(({ title, desc, path, icon: Icon }) => (
            <Link
              key={title}
              to={path}
              onClick={closeMenu}
              className="group rounded-xl p-6 transition-all duration-300
                         hover:bg-gradient-to-br hover:from-[#f5f8ff] hover:to-white
                         hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#eef2ff] flex items-center justify-center text-[#0b4dff]">
                  <Icon size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-[#020c2b] mb-2 group-hover:text-[#0b4dff] transition">
                    {title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-6">
                    {desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* RIGHT BLOG CARD */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#020c2b] to-[#071a5a] text-white p-8 flex flex-col justify-between shadow-xl">
          <div>
            <span className="text-xs uppercase text-white/70 font-semibold">
              Blog Article
            </span>

            <h3 className="text-2xl font-extrabold leading-snug mt-4">
              Le cloud pour le développement d’apps mobiles
            </h3>
          </div>

          <Link
            to="/blog/cloud-apps"
            onClick={closeMenu}
            className="inline-flex items-center gap-2 mt-8 font-semibold text-sm hover:gap-3 transition-all"
          >
            Discover →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MailSolutionsDropDown;
