import React from "react";

const faqs = [
  {
    question: "How to register a domain name?",
    answer: (
      <>
        Check the domain name availability using the search bar at the top of the page.
        <br />
        <br />
        If the domain name is available, you can order it immediately, if not you will need to choose another one or go through our{" "}
        <a
          href=""
          className="underline font-bold "
        >
          brokerage service
        </a>.
      </>
    ),
  },
  {
    question: "Can I change my domain name after registration?",
    answer: (
      <>
        Once you have been notified by us that your domain name is registered, you can no longer change it.
        <br />
        <br />
        But you can still register a new one.
      </>
    ),
  },
  {
    question: "Am I the owner of the requested domain name?",
    answer: (
      <>
        Yes, when you register a domain name, you become the owner of the domain name for the duration of the registration that you choose. At the end of that registration time, you can renew your domain name to extend the term.
        <br />
        <br />
        If you do not renew your domain name, it becomes free and can be re-registered by anybody.
        <br />
        <br />
        Genious can also assist you with{" "}
        <a
          href=""
          className="underline font-bold "
        >
          recovering your domain name
        </a>.
      </>
    ),
  },
  {
    question: "Can I change service providers?",
    answer: (
      <>
        Yes, you can switch providers at any time without our intervention.
        <br />
        <br />
        There are however certain conditions set by ICANN that have to be fulfilled in order to{" "}
        <a
          href=""
          className="underline font-bold "
        >
          transfer your domain name
        </a>.
        <br />
        <br />
        The domain must not have been previously registered, transferred or undergone a change of ownership in the last 60 days.
      </>
    ),
  },
];

const RegisterDomainFAQ = () => {
  return (
    <section className=" py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase text-sm text-gray-500 mb-1">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-5xl font-semibold">For Domain registration</h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {faqs.map((item, index) => (
            <div key={index} className=" p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{item.question}</h3>
              <p className="text-gray-700 text-sm md:text-base">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




export default RegisterDomainFAQ