import React from "react";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      event: "Wedding Ceremony",
      text: "Amazing catering service for our wedding. The food was delicious and everyone loved the authentic flavors!",
      rating: 5,
    },
    {
      name: "Priya Reddy",
      event: "Corporate Meeting",
      text: "Professional team and excellent food quality. Their management of the buffet line was seamless for our 500+ guests.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      event: "Birthday Party",
      text: "Great experience! The starters were the highlight of the evening. They really made our house party memorable.",
      rating: 5,
    },
    {
      name: "Sneha Kapoor",
      event: "Engagement Party",
      text: "The dessert spread was breathtaking! From presentation to taste, everything was top-notch. Highly recommended.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      event: "Product Launch",
      text: "Impressive attention to detail. They handled our high-profile clients with grace and served gourmet food that matched our brand.",
      rating: 5,
    },
    {
      name: "Ananya Iyer",
      event: "Anniversary Dinner",
      text: "They turned our backyard into a fine-dining experience. The staff was courteous and the fusion menu was a hit!",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            What Our <span className="text-violet-700">Customers Say</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are proud to serve our customers with the best catering services.
            Your satisfaction is our primary ingredient.
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="relative">
          <div
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((rev, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] md:w-[45%] lg:w-[31%] snap-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative flex flex-col justify-between"
              >
                {/* Decorative Quote Mark */}
                <span className="absolute top-4 right-6 text-6xl text-gray-100 font-serif leading-none select-none">
                  &ldquo;
                </span>

                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 italic leading-relaxed mb-6">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-violet-100 text-violet-700 rounded-full flex items-center justify-center font-bold">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 leading-none mb-1">
                      {rev.name}
                    </h4>
                    <p className="text-sm text-gray-400">{rev.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Indicator for Scrolling */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
