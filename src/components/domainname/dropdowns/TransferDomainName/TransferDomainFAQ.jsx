import React from "react";

const faqs = [
  {
    question: "Can I transfer my domain name to another account at Genious?",
    answer: (
      <>
        Yes, you only need to send us a request in written form by ticket through your customer area. Usually, we will transfer the domain to the account you want and you will just have to change the whois information as you need.
        <br />
        <br />
        For instance, for the change of ownership of .ma domain names, the ANRT asks to attach a change of ownership form that must be filled out and then signed by both the new and the old owner.{" "}
        <a
          href=""
          className="underline font-semibold break-words"
          target="_blank"
          rel="noopener noreferrer"
        >
         https://www.registre.ma/wp-content/themes/domaine/pdf/Transfert_Titulaire.pdf
        </a>
        <br />
        <br />
        For such special cases, please contact our team for information and assistance in these procedures.
      </>
    ),
  },
  {
    question: "Is the transfer procedure always the same?",
    answer:
      "Yes, the transfer procedure from one provider to another is the same regardless of your domain name extension.",
  },
];

const TransferDomainFAQ = () => {
  return (
    <section className=" py-16 px-6 md:px-24 border-b border-gray-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase mb-1 text-sm font-medium text-gray-500">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            For transferring a domain name
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{faq.question}</h3>
              <p className="text-gray-700 text-sm md:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default TransferDomainFAQ