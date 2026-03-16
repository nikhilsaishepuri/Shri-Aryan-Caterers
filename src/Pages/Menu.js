import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [activeTab, setActiveTab] = useState("vegSilver");

  const menuData = {
    vegSilver: {
      title: "Veg Silver",
      tagline: "Quality essentials for intimate gatherings",
      price: "279/-",
      themeColor: "text-slate-600",
      bgColor: "bg-slate-600",
      items: [
        { cat: "Roti", list: ["Rumali Roti"] },
        { cat: "Curries", list: ["Aloo Curry", "Vankaya Masala"] },
        { cat: "Rice (Select 1)", list: ["Vegetable Rice", "Bagara Rice"] },

        { cat: "Fries (Select 1)", list: ["Bendi Fry", "Dondakaya Fry"] },

        {
          cat: "Chutneys (Select 1)",
          list: ["Beerakaya Chutney", "Dosakaya Chutney"],
        },
        {
          cat: "Common Items",
          list: [
            "White Rice",
            "Sambar",
            "Palakura Pappu",
            "Curd",
            "Raitha",
            "Papad",
            "Salad",
          ],
        },
        {
          cat: "Sweets (Select 1)",
          list: ["Kaala Jamun", "Gulab Jamun", "Double ka Meetha"],
        },
      ],
    },
    vegGold: {
      title: "Veg Gold",
      tagline: "Our most popular premium vegetarian spread",
      price: "359/-",
      themeColor: "text-amber-600",
      bgColor: "bg-amber-600",
      items: [
        { cat: "Starters (Select 1)", list: ["Gobi 65", "Manchuria"] },
        { cat: "Roti (Select 1)", list: ["Rumali Roti", "Poori"] },
        {
          cat: "Curries (Select 2)",
          list: ["Paneer Butter Masala", "Chole Masala", "Bagara Baingan"],
        },
        {
          cat: "Rice (Basmati) (Select 1)",
          list: ["Veg Biryani", "Bagara Rice", "Veg Pulao"],
        },
        {
          cat: "Fries (Select 1)",
          list: ["Bendi Kaju Fry", "Dondakaya Kaju Fry"],
        },
        {
          cat: "Chutneys (Select 1)",
          list: ["Tomato Chutney", "Dosakaya Chutney"],
        },
        {
          cat: "Common Items",
          list: [
            "White Rice",
            "Sambar",
            "Palakura Pappu",
            "Curd",
            "Raitha",
            "Papad",
            "Mirchi Bajji",
            "Salad",
          ],
        },
        {
          cat: "Sweets (Select 1)",
          list: [
            "Kaala Jamun",
            ,
            "Gulab Jamun",
            "Double ka Meetha",
            "Kaddu ki Kheer",
          ],
        },
      ],
    },
    nonVegSilver: {
      title: "Non-Veg Silver",
      tagline: "Classic favorites for non-veg lovers",
      price: "479/-",
      themeColor: "text-red-600",
      bgColor: "bg-red-600",
      items: [
        { cat: "Welcome Drinks", list: ["Soft Drinks"] },
        { cat: "Starters", list: ["Chicken Pakoda", "Veg Bullets"] },
        { cat: "Roti", list: ["Rumali Roti"] },

        {
          cat: "Curries",
          list: ["Chicken Curry", "Paneer Butter Masala"],
        },
        { cat: "Biryani", list: ["Chicken Biryani"] },
        {
          cat: "Chutneys (Select 1)",
          list: ["Tomato Chutney", "Dosakaya Chutney"],
        },
        {
          cat: "Common Items",
          list: [
            "White Rice",
            "Sambar",
            "Palakura Pappu",
            "Curd",
            "Raitha",
            "Papad",
            "Salad",
          ],
        },
        {
          cat: "Sweets (Select 1)",
          list: [
            "Gulab Jamun",
            "Kaddu ki Kheer",
            "Kaala Jamun",
            "Double ka Meetha",
          ],
        },
      ],
    },
    nonVegGold: {
      title: "Non-Veg Gold",
      tagline: "A royal feast featuring our signature mutton",
      price: "599/-",
      themeColor: "text-violet-700",
      bgColor: "bg-violet-700",
      items: [
        {
          cat: "Welcome Drinks (Select 1)",
          list: ["Lime Soda", "Sweet Lassi"],
        },
        {
          cat: "Starters (Non-Veg - Select 1)",
          list: ["Chicken Pakoda", "Apollo Fish"],
        },
        { cat: "Starters (Veg - Select 1)", list: ["Crispy Corn", "Gobi 65"] },
        { cat: "Roti", list: ["Rumali Roti"] },

        {
          cat: "Curries (Non-Veg - Select 1)",
          list: ["Red Chicken", "Green Chicken"],
        },
        {
          cat: "Curries (Veg)",
          list: ["Paneer Butter Masala"],
        },
        { cat: "Biryani", list: ["Mutton Biryani"] },
        {
          cat: "Common Items",
          list: [
            "Bagara Rice",
            "White Rice",
            "Sambar",
            "Palakura Pappu",
            "Curd",
            "Raitha",
            "Papad",
            "Salad",
          ],
        },
        {
          cat: "Sweets (Select 1)",
          list: [
            "Gulab Jamun",
            "Kaddu ki Kheer",
            "Kaala Jamun",
            "Double ka Meetha",
          ],
        },
      ],
    },
  };

  const tabs = [
    { id: "vegSilver", label: "Veg Silver" },
    { id: "vegGold", label: "Veg Gold" },
    { id: "nonVegSilver", label: "NV Silver" },
    { id: "nonVegGold", label: "NV Gold" },
  ];

  return (
    /* Increased top padding (pt-32) to ensure content starts below your fixed Navbar */
    <div className="bg-gray-50 min-h-screen pb-20 pt-32 md:pt-40">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          {/* Reduced font size for mobile (text-2xl) to make it look "normal" */}
          <h1 className="text-xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight">
            Our <span className="text-violet-700">Catering Menu</span>
          </h1>
          <p className="text-xs md:text-base text-gray-500 max-w-xl mx-auto px-4">
            Choose from our curated packages or customize your own feast.
          </p>
        </div>

        {/* Tab Navigation - Responsive Scrollable */}
        <div className="flex justify-center mb-8">
          <div className="flex overflow-x-auto no-scrollbar gap-2 p-1 bg-white rounded-xl shadow-sm border border-gray-100 max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-violet-700 text-white shadow-md"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Container */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-10 items-start">
          {/* Left Side: Summary Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div
              className={`rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-xl ${menuData[activeTab].bgColor} transition-colors duration-500`}
            >
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Starting at
              </span>
              <div className="flex items-baseline gap-1 mt-1 mb-3">
                {/* Reduced price font for mobile (text-3xl) */}
                <span className="text-3xl md:text-5xl font-black">
                  ₹{menuData[activeTab].price.split("/")[0]}
                </span>
                <span className="text-sm md:text-lg opacity-80">/plate</span>
                <span className="text-xl md:text-4xl font-black">
                  Minimum 50 Plates
                </span>
              </div>
              <h2 className="text-lg md:text-2xl font-bold mb-1">
                {menuData[activeTab].title}
              </h2>
              <p className="opacity-90 leading-relaxed mb-6 italic text-[11px] md:text-sm">
                "{menuData[activeTab].tagline}"
              </p>
              <Link
                to="/contact"
                className="w-full flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-black py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(250,204,21,0.4)] active:scale-95 text-sm md:text-base uppercase tracking-wider"
              >
                Book This Package
              </Link>
            </div>

            <div className="mt-4 p-4 bg-white rounded-xl border border-gray-100 flex gap-3 items-center shadow-sm">
              <div className="w-8 h-8 flex-shrink-0 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                i
              </div>
              <p className="text-[10px] md:text-xs text-gray-500 leading-tight">
                Includes Mineral water and high-quality disposables.
              </p>
            </div>
          </div>

          {/* Right Side: Detailed List */}
          <div className="lg:col-span-8 bg-white rounded-2xl md:rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-10">
              <div className="columns-1 md:columns-2 gap-x-12 space-y-10 [column-fill:_balance]">
                {menuData[activeTab].items.map((section, idx) => (
                  <div key={idx} className="group">
                    {/* Normalized section header font size */}
                    <h3
                      className={`flex items-center gap-2 text-sm md:text-base font-black uppercase tracking-wide mb-4 pb-2 border-b border-gray-50 group-hover:border-violet-100 transition-colors ${menuData[activeTab].themeColor}`}
                    >
                      <span className="w-1 h-4 bg-yellow-400 rounded-full"></span>
                      {section.cat}
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                      {section.list.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start text-xs md:text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors"
                        >
                          <span className="mr-2 text-gray-300 mt-1">
                            <svg
                              className="w-3.5 h-3.5 md:w-4 md:h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
