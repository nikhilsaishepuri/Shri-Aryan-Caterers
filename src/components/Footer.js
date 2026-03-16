import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Business Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tight text-yellow-400">
              SHRI ARYAN <span className="text-white">Caterers</span>
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Professional catering services for weddings, parties, and
              corporate events. We bring taste and tradition to every plate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-3 text-gray-400">
              {["Home", "Menu", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-yellow-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0 mr-2">
                      →
                    </span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">
              Get In Touch
            </h3>
            <div className="space-y-4 text-gray-400">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <span className="text-yellow-400">📞</span> +91 7569987446
              </a>
              <a
                href="mailto:info@shriaryancaterers.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <span className="text-yellow-400">📧</span>{" "}
                sacaterersandevents@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <span className="text-yellow-400">📍</span> Malkajgiri,
                Hyderabad, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 text-center">
          <p>© {currentYear} SHRI ARYAN Caterers & Event Management.</p>
          <p className="hover:text-gray-300 cursor-default">
            Designed with ❤️ in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
