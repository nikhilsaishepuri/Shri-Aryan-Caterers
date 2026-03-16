function WhyChooseUs() {
  const features = [
    {
      icon: "🍲",
      title: "Quality Food",
      desc: "Authentic flavors and fresh ingredients curated by our executive chefs for a gourmet experience.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: "👨‍🍳",
      title: "Expert Service",
      desc: "Our uniformed professional staff ensures your guests are treated with warmth and hospitality.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: "💰",
      title: "Budget Friendly",
      desc: "Customizable packages designed to provide luxury catering at competitive market prices.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: "🧼",
      title: "Strict Hygiene",
      desc: "FSSAI compliant kitchen practices and sanitized equipment for 100% safe food preparation.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: "✅",
      title: "FSSAI Certified",
      desc: "Our catering services are officially certified by FSSAI, ensuring high food safety and quality standards.",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-violet-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black  text-gray-900 mb-4 tracking-tight">
              Why <span className="text-violet-700">Shri Aryan</span> is the{" "}
              <br className="hidden md:block" />
              Right Choice for You
            </h2>
            <p className="text-gray-600 font-mono text-lg">
              We don't just serve food; we create memories through taste,
              presentation, and impeccable service standards.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-2xl hover:shadow-violet-200/50 transition-all duration-500"
            >
              {/* Icon Container */}
              <div
                className={`w-16 h-16 ${item.bgColor} ${item.iconColor} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
