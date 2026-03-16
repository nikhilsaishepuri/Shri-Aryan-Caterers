import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:h-[800px] bg-gradient-to-br from-violet-900 via-violet-800 to-indigo-900 text-white flex items-center pt-20 overflow-hidden">
      {/* Subtle Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT TEXT CONTENT */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-2xl md:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
            SHRI ARYAN <br />
            <span className="text-yellow-400 text-5xl">
              Caterers & Event Management
            </span>
          </h1>

          <p className="text-lg md:text-xl font-semibold font-mono text-white mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We Take Orders for Weddings, Birthdays, Parties & All Corporate
            Events, <br />
            Serving Every Event with Taste and Care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/menu"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all shadow-lg shadow-yellow-400/20 text-center"
            >
              View Our Menu
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all text-center"
            >
              Book an Event
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="order-1 lg:order-2 flex justify-center items-center h-[350px] md:h-[500px]">
          <div className="relative w-full max-w-[400px] aspect-square">
            {/* Rotating container - Hidden on smallest screens to save space if needed */}
            <div className="absolute inset-0 animate-spinSlow">
              {[
                {
                  src: "/Images/food-2.png",
                  pos: "top-0 left-1/2 -translate-x-1/2",
                },
                {
                  src: "/Images/food-3.png",
                  pos: "bottom-0 left-1/2 -translate-x-1/2",
                },
                {
                  src: "/Images/main-2.png",
                  pos: "left-0 top-1/2 -translate-y-1/2",
                },
                {
                  src: "/Images/food-5.png",
                  pos: "right-0 top-1/2 -translate-y-1/2",
                },
              ].map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt="Food Item"
                  className={`absolute w-16 md:w-24 drop-shadow-2xl ${img.pos}`}
                />
              ))}
            </div>

            {/* Main Center Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 md:w-72 md:h-72 rounded-full p-2 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-2xl">
                <img
                  src="/Images/food-5.png"
                  alt="Signature Dish"
                  className="w-full h-full rounded-full object-cover border-4 border-violet-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
