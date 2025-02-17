

function Services() {
  const services = [
    {
      title: "Annual CIT filing",
      description:
        "We help clients prepare and submit their annual corporate income tax returns along with necessary supporting documents to obtain tax clearance.",
      image: "../public/img4.jpeg", // Replace with actual image URL
      link: "#",
    },
    {
      title: "Tax Payment services",
      description:
        "We support global clients with Trust Account services for deposit of regular taxes and VAT to Liberian government where clients do not have local signatories and cannot issue cheques.",
      image: "../public/img5.jpeg", // Replace with actual image URL
      link: "#",
    },
    {
      title: "Personal Tax Returns Preparing & Filing",
      description:
        "Dealing with taxation is a crucial part for Liberians and it can often be complicated. We strive at understanding the client’s situation, so as to minimize taxes.",
      image: "../public/img6.jpeg", // Replace with actual image URL
      link: "#",
    },
  ];

  return (
    <div className="bg-white text-black py-16">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-10">What Services We Offer</h2>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
              <a href={service.link} className="text-blue-600 font-semibold mt-4 inline-block">
                More
              </a>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <span className="h-3 w-3 bg-gray-400 rounded-full"></span>
          <span className="h-3 w-3 bg-gray-600 rounded-full"></span>
          <span className="h-3 w-3 bg-gray-400 rounded-full"></span>
          <span className="h-3 w-3 bg-gray-400 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}

export default Services;
