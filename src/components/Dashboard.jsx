function Dashboard() {
  return (
    <div className="flex-1 overflow-y-auto p-10 bg-gradient-to-br from-gray-50 to-gray-100">

      {/* HEADER */}
      <h1 className="text-5xl font-black text-gray-800 mb-4">
        Good Morning, Mohit!
      </h1>

      <p className="text-xl text-gray-600 mb-10">
        Monday, 08 Dec 2025 • You're{" "}
        <span className="text-emerald-600 font-bold">+18%</span> ahead of target
      </p>

      {/* KPI GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
        <KpiCard title="Fresh" value="6" color="from-emerald-500 to-green-600" />
        <KpiCard title="Requirements" value="14" color="from-indigo-500 to-purple-600" />
        <KpiCard title="Pending" value="8" color="from-amber-500 to-orange-600" />
        <KpiCard title="Matches" value="11" color="from-purple-500 to-pink-600" />
        <KpiCard title="Tickets" value="3" color="from-red-500 to-rose-600" />
        <KpiCard title="Notes" value="42" color="from-blue-500 to-cyan-600" />
        <KpiCard title="Live Routes" value="68" color="from-teal-500 to-emerald-600" />
        <KpiCard title="Today" value="$28.4k" color="from-pink-500 to-purple-600" />
      </div>

      {/* QUICK ACCESS */}
   <div className="flex flex-col gap-6 w-full">

  {/* Boxes Row */}
  <div className="flex gap-4 w-full">
  <div className="flex flex-col items-start gap-2 p-4 bg-white text-black rounded-2xl shadow-lg flex-1 
transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">

      <div className="flex items-center gap-2">
        <span className="text-2xl text-emerald-500">➕</span>
        <span className="font-medium">New Requirement</span>
      </div>
      <span className="text-lg font-bold">12</span>
      <span className="text-sm text-gray-400">Pending approvals</span>
    </div>

<div className="flex flex-col items-start gap-2 p-4 bg-white text-black rounded-2xl shadow-lg flex-1 
transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">

      <div className="flex items-center gap-2">
        <span className="text-2xl text-orange-500">🔥</span>
        <span className="font-medium">Fresh Promotions</span>
      </div>
      <span className="text-lg font-bold">5</span>
      <span className="text-sm text-gray-400">Active this week</span>
    </div>

   <div className="flex flex-col items-start gap-2 p-4 bg-white text-black rounded-2xl shadow-lg flex-1 
transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">

      <div className="flex items-center gap-2">
        <span className="text-2xl text-purple-500">🔄</span>
        <span className="font-medium">Route Matches</span>
      </div>
      <span className="text-lg font-bold">8</span>
      <span className="text-sm text-gray-400">New routes today</span>
    </div>

 <div className="flex flex-col items-start gap-2 p-4 bg-white text-black rounded-2xl shadow-lg flex-1 
transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">

      <div className="flex items-center gap-2">
        <span className="text-2xl text-red-500">🎟️</span>
        <span className="font-medium">My Tickets</span>
      </div>
      <span className="text-lg font-bold">3</span>
      <span className="text-sm text-gray-400">Open tickets</span>
    </div>

    <div className="flex flex-col items-start gap-2 p-4 bg-white text-black rounded-2xl shadow-lg flex-1 
transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">

      <div className="flex items-center gap-2">
        <span className="text-2xl text-blue-500">📝</span>
        <span className="font-medium">Personal Tracker</span>
      </div>
      <span className="text-lg font-bold">7</span>
      <span className="text-sm text-gray-400">Tasks in progress</span>
    </div>
<div className="flex flex-col items-start gap-2 p-4 bg-white text-black rounded-2xl shadow-lg flex-1 
transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">

      <div className="flex items-center gap-2">
        <span className="text-2xl text-teal-500">📡</span>
        <span className="font-medium">Live Routes</span>
      </div>
      <span className="text-lg font-bold">15</span>
      <span className="text-sm text-gray-400">Currently active</span>
    </div>
  </div> 
  </div>


      {/* LAST TABLE SECTION */}
     {/* LAST TABLE SECTION */}
<div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill From</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill To</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Cost</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">101</td>
        <td className="px-6 py-4 whitespace-nowrap">Fresh Co.</td>
        <td className="px-6 py-4 whitespace-nowrap">Client A</td>
        <td className="px-6 py-4 whitespace-nowrap">$6</td>
        <td className="px-6 py-4 whitespace-nowrap">Delivered</td>
        <td className="px-6 py-4 whitespace-nowrap">View</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">102</td>
        <td className="px-6 py-4 whitespace-nowrap">Requirement Inc.</td>
        <td className="px-6 py-4 whitespace-nowrap">Client B</td>
        <td className="px-6 py-4 whitespace-nowrap">$14</td>
        <td className="px-6 py-4 whitespace-nowrap">Pending</td>
        <td className="px-6 py-4 whitespace-nowrap">View</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">103</td>
        <td className="px-6 py-4 whitespace-nowrap">Pending Ltd.</td>
        <td className="px-6 py-4 whitespace-nowrap">Client C</td>
        <td className="px-6 py-4 whitespace-nowrap">$8</td>
        <td className="px-6 py-4 whitespace-nowrap">Pending</td>
        <td className="px-6 py-4 whitespace-nowrap">View</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">104</td>
        <td className="px-6 py-4 whitespace-nowrap">Matches Co.</td>
        <td className="px-6 py-4 whitespace-nowrap">Client D</td>
        <td className="px-6 py-4 whitespace-nowrap">$11</td>
        <td className="px-6 py-4 whitespace-nowrap">Shipped</td>
        <td className="px-6 py-4 whitespace-nowrap">View</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">105</td>
        <td className="px-6 py-4 whitespace-nowrap">Tickets Ltd.</td>
        <td className="px-6 py-4 whitespace-nowrap">Client E</td>
        <td className="px-6 py-4 whitespace-nowrap">$3</td>
        <td className="px-6 py-4 whitespace-nowrap">Delivered</td>
        <td className="px-6 py-4 whitespace-nowrap">View</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">106</td>
        <td className="px-6 py-4 whitespace-nowrap">Notes Co.</td>
        <td className="px-6 py-4 whitespace-nowrap">Client F</td>
        <td className="px-6 py-4 whitespace-nowrap">$42</td>
        <td className="px-6 py-4 whitespace-nowrap">Delivered</td>
        <td className="px-6 py-4 whitespace-nowrap">View</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">107</td>
        <td className="px-6 py-4 whitespace-nowrap">Live Routes Inc.</td>
        <td className="px-6 py-4 whitespace-nowrap">Client G</td>
        <td className="px-6 py-4 whitespace-nowrap">$68</td>
        <td className="px-6 py-4 whitespace-nowrap">Shipped</td>
        <td className="px-6 py-4 whitespace-nowrap">View</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">108</td>
        <td className="px-6 py-4 whitespace-nowrap">Today Corp.</td>
        <td className="px-6 py-4 whitespace-nowrap">Client H</td>
        <td className="px-6 py-4 whitespace-nowrap">$28,400</td>
        <td className="px-6 py-4 whitespace-nowrap">Delivered</td>
        <td className="px-6 py-4 whitespace-nowrap">View</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  );}
/* KPI CARD */
function KpiCard({ title, value, color }) {
  return (
    <div
      className={`bg-gradient-to-r ${color} text-white p-6 rounded-3xl shadow-xl 
                  transition-all hover:scale-105 hover:shadow-2xl`}
    >
      <div className="text-4xl font-black">{value}</div>
      <div className="text-sm">{title}</div>
    </div>
  );
}

/* QUICK ACCESS CARD */
function QuickCard({ icon, text, color }) {
  return (
    <div
      className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200 
                 text-center hover:shadow-2xl transition-all cursor-pointer"
    >
      <div className={`text-6xl mb-4 ${color}`}>{icon}</div>
      <h3 className="text-2xl font-bold">{text}</h3>
    </div>
  );
}

export default Dashboard;

