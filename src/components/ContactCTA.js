import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="bg-yellow-400 py-16 md:py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Responsive Heading: smaller on mobile, larger on desktop */}
        <h2 className="text-3xl md:text-5xl font-black text-black mb-4 tracking-tight">
          Ready to Book Your Event?
        </h2>

        <p className="text-base md:text-xl text-black/80 mb-10 max-w-2xl mx-auto">
          Contact us today and make your event unforgettable with our
          professional catering services.
        </p>

        {/* Improved Button Grid: full-width on mobile, auto-width on desktop */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
          {/* Call Button */}
          <a
            href="tel:9999999999"
            className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>📞</span> Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-green-600/20"
          >
            <span>💬</span> WhatsApp
          </a>

          {/* Contact Page */}
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-white text-black border-2 border-transparent px-8 py-4 rounded-xl font-bold transition-all hover:bg-black hover:text-white active:scale-95 flex items-center justify-center"
          >
            Contact Form
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
