import {
  FaHome,
  FaPlusCircle,
  FaVial,
  FaFire,
  FaSatelliteDish,
  FaExchangeAlt,
  FaClock,
  FaStickyNote,
  FaTicketAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="group h-screen bg-white border-r border-gray-200 shadow-xl 
                    w-20 hover:w-[280px] transition-all duration-300 flex flex-col overflow-hidden">

      {/* LOGO */}
      <div className="p-6 border-b border-gray-200 flex flex-col items-center">
        <FaSatelliteDish className="text-3xl text-indigo-600" />
        <span className="mt-2 text-xl font-black text-indigo-600 hidden group-hover:block">
          Sales Portal
        </span>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-3 py-4 space-y-2">

        <MenuItem icon={<FaHome />} text="My Dashboard" color="text-indigo-600" />
        <MenuItem icon={<FaPlusCircle />} text="New Requirement" color="text-emerald-600" />
        <MenuItem icon={<FaVial />} text="Route Promotion (NOC)" color="text-orange-600" />
        <MenuItem icon={<FaFire />} text="Fresh Promotions" color="text-red-600" />
        <MenuItem icon={<FaSatelliteDish />} text="Live Routes" color="text-teal-600" />
        <MenuItem icon={<FaExchangeAlt />} text="Route Matches" color="text-purple-600" />
        <MenuItem icon={<FaClock />} text="Pending Requirements" color="text-amber-600" />
        <MenuItem icon={<FaStickyNote />} text="Personal Tracker" color="text-blue-600" />
        <MenuItem icon={<FaTicketAlt />} text="My Tickets" color="text-red-600" />

      </nav>

      {/* FOOTER */}
      <div className="p-5 border-t border-gray-200 text-center">
        <div className="text-3xl font-black text-emerald-600">$142.4k</div>
        <span className="text-sm text-gray-600 hidden group-hover:block">
          This Month
        </span>
      </div>
    </div>
  );
}

/* MENU ITEM COMPONENT */
function MenuItem({ icon, text, color }) {
  return (
    <div className="flex items-center gap-5 px-6 py-4 rounded-xl 
                    text-gray-700 font-semibold text-base cursor-pointer
                    hover:bg-indigo-50 hover:text-indigo-700 transition-all">
      <span className={`text-xl w-8 text-center ${color}`}>{icon}</span>
      <span className="hidden group-hover:block whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

export default Sidebar;

