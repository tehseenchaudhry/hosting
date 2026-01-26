const FAQS = [
  {
    q: "What is the minimum duration of my subscription?",
    a: "There is no minimum period of subscription. You can either order your server monthly or yearly according to your preference and needs.",
  },
  {
    q: "How long does it take to install a cloud server?",
    a: "Cloud servers are generally installed in less than 5 minutes after your order is validated.",
  },
  {
    q: "Can I switch from one package to another?",
    a: "You can upgrade your Cloud server at any time through your customer interface with just a few clicks.",
  },
  {
    q: "What is the difference between a cloud and a dedicated server?",
    a: "Our Cloud VPS servers use KVM virtualization technology, while Dedicated servers are physical machines reserved entirely for one customer.",
  },
];

const CloudHostingFAQ = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* TITLE */}
        <h2
          className="text-center text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-20"
          data-aos="fade-up"
        >
          Frequently asked questions
        </h2>

        {/* FAQ GRID */}
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-14 max-w-5xl mx-auto">
          {FAQS.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group"
            >
              <h4 className="font-bold text-[#020c2b] mb-3 group-hover:text-[#0b4dff] transition">
                {item.q}
              </h4>
              <p className="text-gray-600 text-sm leading-7">
                {item.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CloudHostingFAQ;
