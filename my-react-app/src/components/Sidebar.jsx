import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menus = [
    { name: "Profile", path: "/dashboard" },
    { name: "Assessment", path: "/dashboard/assessment" },
    { name: "Report", path: "/dashboard/report" },
    { name: "Careers", path: "/dashboard/careers" },
  ];

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-gray-800 text-white transition-all duration-300 flex flex-col`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="p-3 text-left hover:bg-gray-700"
      >
        ☰
      </button>

      {/* Menu Items */}
      <div className="flex-1">
        {menus.map((m) => (
          <NavLink
            key={m.name}
            to={m.path}
            className={({ isActive }) =>
              `block p-3 transition ${
                isActive
                  ? "bg-blue-500"
                  : "hover:bg-gray-700"
              }`
            }
          >
            {collapsed ? m.name[0] : m.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};