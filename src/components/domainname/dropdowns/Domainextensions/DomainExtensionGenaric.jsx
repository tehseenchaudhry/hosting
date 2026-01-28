import React from "react";

const extensions = [
  {
    title: "Generic extensions (gTLD)",
    desc: `A domain name with a generic top-level extension or gTLD is usually recommended for websites targeting an international audience.
    
Examples of gTLDs include .com, .net, .info and .biz.`,
  },
  {
    title: "National domain extensions (ccTLD)",
    desc: `Every country has a specific domain name extension. It is recommended to use a national extension if you are targeting a specific country. The rules and policies regarding these extensions differ from country to country, and the registration of a domain name with such extensions can be restricted to the citizens of the country in question.
    
Examples of national domain extensions are .ma for Morocco, .fr for France or .ca for Canada.`,
  },
  {
    title: "New domain extensions (new gTLDs)",
    desc: `If the name that you are looking for is not currently available in the gTLDs and ccTLDs, you can use the new extensions (newgTLDs) and choose from hundreds of extensions relating to different topics and businesses that match your website.
    
A few examples of new extensions: .app, .site, .restaurant, .blog etc.`,
  },
];

const DomainExtensionGenaric = () => {
  return (
    <section className="bg-[#020c2b] text-white py-16 px-6 md:px-24 mt-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {extensions.map((ext, idx) => (
          <div key={idx} className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{ext.title}</h2>
            <p className="text-gray-200 whitespace-pre-line">{ext.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};



export default DomainExtensionGenaric