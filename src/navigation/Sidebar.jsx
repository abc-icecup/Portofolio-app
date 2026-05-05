import { NavLink } from "react-router-dom";

import DashboardIcon from "../assets/dashboardLogo.svg?react";
import ProjectsIcon from "../assets/projectsLogo.svg?react";
import SkillsIcon from "../assets/skillsLogo.svg?react";
import CertificatesIcon from "../assets/certificatesLogo.svg?react";
import ProfileIcon from "../assets/profileLogo.svg?react";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>

        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            <DashboardIcon className="icon" />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
            <ProjectsIcon className="icon" />
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>
            <SkillsIcon className="icon" />
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink to="/certificates" className={({ isActive }) => isActive ? "active" : ""}>
            <CertificatesIcon className="icon" />
            Certificates
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
            <ProfileIcon className="icon" />
            Profile
          </NavLink>
        </li>

      </ul>
    </div>
  );
}