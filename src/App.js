import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import { navLinks } from "./data/navLinks";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [position, setPosition] = useState(null);
  const [currentLink, setCurrentLink] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [mode, setMode] = useState(() => {
    return JSON.parse(localStorage.getItem("theme-mode")) || false;
  });

  function toggleDarkMode() {
    setMode(!mode);
  }

  function openDropdown(newText, center) {
    setCurrentLink(navLinks.find((link) => link.linkText === newText));
    // console.log(center, newText);
    setIsDropdownOpen(true);
    setPosition(center);
  }

  function closeDropdown() {
    setIsDropdownOpen(false);
  }

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  useEffect(() => {
    const root = document.documentElement;
    if (mode) root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme-mode", JSON.stringify(mode));
  }, [mode]);

  return (
    <div>
      <Navbar
        openDropdown={openDropdown}
        mode={mode}
        toggleDarkMode={toggleDarkMode}
        closeDropdown={closeDropdown}
        isDropdownOpen={isDropdownOpen}
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        openSidebar={openSidebar}
      />
      <Dropdown
        isDropdownOpen={isDropdownOpen}
        position={position}
        currentLink={currentLink}
      />
    </div>
  );
}

export default App;
