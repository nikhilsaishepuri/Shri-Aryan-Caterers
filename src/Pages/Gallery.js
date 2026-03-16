import React, { useState } from "react";

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const categories = ["All", "Weddings", "Corporate", "Parties", "Food"];

  const photos = [
    {
      src: "/Images/Gallery/gal-1.jpg",
      cat: "Corporate",
    },
    {
      src: "/Images/Gallery/gal-2.png",
      cat: "Food",
    },
    {
      src: "/Images/Gallery/gal-3.png",
      cat: "Food",
    },
    {
      src: "/Images/Gallery/gal-4.jfif",
      cat: "Weddings",
    },
    {
      src: "/Images/Gallery/gal-5.jpeg",
      cat: "Parties",
    },
    {
      src: "/Images/Gallery/gal-6.jpg",
      cat: "Food",
    },
    {
      src: "/Images/Gallery/gal-7.jpg",
      cat: "Weddings",
    },
    {
      src: "/Images/Gallery/gal-8.jpg",
      cat: "Parties",
    },
    {
      src: "/Images/Gallery/gal-9.jfif",
      cat: "Corporate",
    },
    {
      src: "/Images/Gallery/gal-10.png",
      cat: "Food",
    },
    {
      src: "/Images/Gallery/gal-11.png",
      cat: "Food",
    },
    {
      src: "/Images/Gallery/gal-12.jfif",
      cat: "Weddings",
    },
    {
      src: "/Images/Gallery/gal-13.jfif",
      cat: "Parties",
    },
    {
      src: "/Images/Gallery/gal-14.png",
      cat: "Food",
    },
    {
      src: "/Images/Gallery/gal-15.png",
      cat: "Weddings",
    },
    {
      src: "/Images/Gallery/gal-16.jfif",
      cat: "Parties",
    },
  ];

  const filteredPhotos =
    filter === "All" ? photos : photos.filter((p) => p.cat === filter);

  return (
    <div className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Our Event <span className="text-violet-700">Gallery</span>
          </h1>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                  filter === cat
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative group cursor-zoom-in break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImg(photo.src)}
            >
              <img
                src={`${photo.src}?auto=format&fit=crop&w=800&q=80`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Event"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/30 text-sm">
                  View Full Size
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white text-4xl font-light hover:text-yellow-400 transition-colors">
              &times;
            </button>
            <img
              src={selectedImg}
              className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in duration-300"
              alt="Enlarged"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
