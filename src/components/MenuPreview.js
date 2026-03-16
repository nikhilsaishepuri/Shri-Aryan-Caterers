import { Link } from "react-router-dom";
import vegSilver from "../Images/silver-veg.avif";
import vegGold from "../Images/gold-veg.avif";
import nonvegSilver from "../Images/silver-nonveg.jpg";
import nonvegGold from "../Images/gold-nonveg.jpg";

function MenuPreview() {
  const packages = [
    {
      title: "Veg Silver",
      desc: "Perfect for small events and intimate gatherings.",
      img: vegSilver,
      color: "border-gray-300",
    },
    {
      title: "Veg Gold",
      desc: "Premium vegetarian catering with exotic dishes.",
      img: vegGold,
      color: "border-yellow-400",
    },
    {
      title: "Non-Veg Silver",
      desc: "Delicious non-veg starters and main courses.",
      img: nonvegSilver,
      color: "border-gray-300",
    },
    {
      title: "Non-Veg Gold",
      desc: "Our most popular grand event non-veg spread.",
      img: nonvegGold,
      color: "border-yellow-600",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Our Catering Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed catering menus tailored for every
            occasion.
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-gray-700 shadow-sm">
                    Package
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {pkg.desc}
                </p>

                {/* Button stays at bottom thanks to flex-grow above */}
                <Link
                  to="/menu"
                  className="w-full text-center bg-yellow-400 hover:bg-black hover:text-white text-black font-bold py-3 rounded-xl transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic mb-4">
            Need a custom menu for a large wedding?
          </p>
          <Link
            to="/contact"
            className="text-violet-700 font-bold hover:underline underline-offset-4"
          >
            Talk to our Chef →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MenuPreview;
