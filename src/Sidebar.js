import React from "react";
import { FaTimes } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { social, links } from "./data";
import { useGlobalContext } from "./context";


function SideBar() {
    const { sideBarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${sideBarOpen ? "sidebar show-sidebar" : "sidebar"} `}>
      <div className="sidebar-header">
        <AiFillAppstore className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((socialicon) => {
          const { id, url, icon } = socialicon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
