import { Link } from "react-router-dom";

function GalleryPreview() {
  const images = [
    {
      src: "/Images/Gallery/gal-1.jpg",
      alt: "Elegant Restaurant Setup",
    },

    {
      src: "/Images/Gallery/gal-4.jfif",
      alt: "Professional Plating",
    },
    {
      src: "/Images/Gallery/gal-7.jpg",
      alt: "Grilled Delicacies",
    },
    {
      src: "/Images/Gallery/gal-5.jpeg",
      alt: "Outdoor Event Catering",
    },
    {
      src: "/Images/Gallery/gal-6.jpg",
      alt: "Corporate Lunch Spread",
    },

    {
      src: "/Images/Gallery/gal-8.jpg",
      alt: "Signature Dishes",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Our Event Gallery
          </h2>
          <div className="w-20 h-1.5 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Take a look at some of our recent catering events and food setups.
            We turn every meal into a visual masterpiece.
          </p>
        </div>

        {/* Gallery Grid: 1 col on mobile, 2 on small tablet, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-[4/3] shadow-md"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  View Setup
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 md:mt-16">
          <Link
            to="/gallery"
            className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-yellow-400/20 hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            Explore Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;
