import { useState } from "react";

import Topbar from "../navigation/Topbar";
import Sidebar from "../navigation/Sidebar";

import "./NavigationLayout.css";

export default function NavigationLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout-container">

      <Topbar toggleSidebar={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen} />

      <main
        className={`layout-content ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        {children}
      </main>

    </div>
  );
}