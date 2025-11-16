import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ position, isDropdownOpen, currentLink }) {
  const container = useRef(null);
  const { subLinks } = currentLink;
  // console.log(currentLink);

  const links = {
    id: 1,
    linkText: "Home",
    url: "/",
    subLinks: [
      {
        id: 1,
        linkText: "Home 1",
        url: "/",
      },
      {
        id: 2,
        linkText: "Home 2",
        url: "/home-2",
      },
      {
        id: 3,
        linkText: "Home 3",
        url: "/home-3",
      },
    ],
  };

  useEffect(() => {
    const dropdown = container.current;
    dropdown.style.left = `${position}px`;
  }, [position]);

  return (
    <div
      className={`hidden transition-all duration-300 ease-in-out z-50 fixed top-11 left-1/2 -translate-x-1/2
    w-52 bg-white shadow-md rounded-xl dark:bg-dark-light before:dark:bg-dark-light
    before:content-[''] before:absolute  
    before:bg-white before:rotate-45 before:left-1/2 
    before:-translate-x-1/2 before:-top-2 ${
      isDropdownOpen && subLinks && "!block before:w-4 before:h-4"
    }`}
      ref={container}
    >
      <div className={`${subLinks && "p-2"}`}>
        {subLinks?.map((link) => (
          <NavLink
            end
            key={link.id}
            to={link.url}
            className="flex p-2 items-center cursor-pointer hover:bg-slate-100 rounded-lg link dark:hover:bg-hover-color-dark"
          >
            {link.linkText}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
