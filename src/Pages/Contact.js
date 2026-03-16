import React from "react";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Get in <span className="text-violet-700">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to make your event unforgettable? Reach out to us via call,
            WhatsApp, or visit our office in Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side: Contact Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">
                Contact Information
              </h2>

              <div className="grid grid-cols-1 gap-6">
                {/* Phone Card */}
                <a
                  href="tel:+917569987446"
                  className="flex items-center gap-5 p-4 rounded-2xl bg-gray-50 hover:bg-violet-50 transition-colors group"
                >
                  <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-violet-600 group-hover:text-white transition-all">
                    📞
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">
                      Call Us Directly
                    </p>
                    <p className="text-xl font-black  text-gray-800">
                      +91 7569987446
                    </p>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:sacaterersandevents@gmail.com"
                  className="flex items-center gap-5 p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                    📧
                  </div>
                  <div>
                    <p className="text-sm  text-gray-400 font-bold uppercase tracking-wider">
                      Email Inquiry
                    </p>
                    <p className="text-sm  font-black text-gray-800 ">
                      sacaterersandevents@gmail.com
                    </p>
                  </div>
                </a>

                {/* Address Card */}
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-gray-50">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">
                      Our Location
                    </p>
                    <p className="text-lg font-black text-gray-800">
                      Old Safilguda, Medchal-Malkajgiri, <br /> Hyderabad, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Action & Map */}
          <div className="flex flex-col gap-6">
            {/* WhatsApp CTA Box */}
            <div className="bg-green-600 p-8 rounded-3xl shadow-xl shadow-green-600/20 text-white flex flex-col justify-center items-center text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-2">Chat on WhatsApp</h3>
              <p className="text-green-100 mb-6">
                The fastest way to get a quote and check date availability.
              </p>
              <a
                href="https://wa.me/917569987446"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-green-600 font-black py-4 rounded-xl hover:bg-green-50 transition-colors text-center shadow-lg"
              >
                MESSAGE NOW
              </a>
            </div>

            {/* Map Preview */}
            <div className="flex-grow overflow-hidden rounded-3xl border border-gray-100 shadow-sm relative group">
              <iframe
                title="Office Location"
                className="w-full h-full min-h-[300px]  group-hover:grayscale-0 transition-all duration-1000"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.22966508649847!2d78.55068509888183!3d17.46720459750891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b21034b83ef%3A0x4ed969c27462e711!2sShri%20aryan%20caterers%20and%20event%20management!5e0!3m2!1sen!2sin!4v1773486890145!5m2!1sen!2sin"
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>

              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl text-xs font-bold text-center text-gray-600 pointer-events-none">
                Visit our main kitchen for a food tasting session!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
