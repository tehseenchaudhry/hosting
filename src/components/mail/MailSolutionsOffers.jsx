import geniousImg from "../../assets/slider-three-mans.webp"; // main image
import { ArrowRight } from "lucide-react";

const offers = [
  {
    title: "Genious Mail Solution",
    text: "Take full advantage of Genious Mail Solution by choosing a stable and highly secure solution to ensure a better contact’s synchronization on all of your devices.",
  },
  {
    title: "Google Workspace",
    text: "Workspace is a Google product from Google Apps, that includes Gmail, Google Drive, Slides, Calendar, Keep, and many more tools to improve your organisation.",
  },
  {
    title: "Microsoft 365",
    text: "Office 365 is a Microsoft solution that includes Outlook, Word, Excel, PowerPoint, Skype and many more applications you need for your business.",
  },
  {
    title: "Anti-spam",
    text: "Protect and secure your email from spam, viruses and phishing by using the SpamExperts solution and make better use of your email.",
  },
];

const MailSolutionsOffers = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* LEFT TEXT */}
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#020c2b] mb-6">
              Our mail solution <br /> offers
            </h2>

            <p className="text-gray-600 leading-7 max-w-xl">
              Genious Communications offers you different types of business
              messaging to fit all kinds of emailing requirements.
              <br /><br />
              You can also find management tools that can facilitate in-house
              work via Workspace and Office 365.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div data-aos="fade-left">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={geniousImg}
                alt="Mail solutions office"
                className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

        {/* OFFERS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {offers.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-bold text-[#020c2b] text-lg mb-4 group-hover:text-[#0b4dff] transition">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-6 mb-6">
                {item.text}
              </p>

              <button className="flex items-center gap-2 text-[#020c2b] font-semibold group-hover:text-[#0b4dff] transition">
                Discover
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MailSolutionsOffers;
