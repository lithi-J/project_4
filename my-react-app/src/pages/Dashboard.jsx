import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-4 flex-1 text-gray-800 dark:text-gray-100">
          <Outlet />
        </div>

      </div>
    </div>
  );
}