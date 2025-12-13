import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import { navLinks } from "./data/navLinks";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { BiBuildingHouse } from "react-icons/bi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

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
      <div className="pb-40" onMouseOver={closeDropdown}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      {/* Footer Section */}
      <div className="bg-card-dark px-[2%] md:px-[6%] border">
        {/* Newsletter */}
        <div className="bg-primary rounded-lg -mt-24">
          <div>
            <img src="/images/3d-house.png" alt="" />
          </div>
          <div></div>
        </div>
        <div className="mt-20">
          <footer className="flex flex-wrap gap-2 text-slate-200 max-w-7xl mx-auto justify-center px-4 items-center">
            <div className="basis-[10rem] flex-1">
              <BiBuildingHouse className="text-primary text-3xl" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                harum explicabo illo, magnam vitae expedita.
              </p>
              <div className="flex gap-5 my-5">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FiFacebook className="" />
                </div>
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaTwitter />
                </div>
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaInstagram />
                </div>
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className="basis-[10rem] flex-1">
              <h1>Services</h1>
              <ul>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    Order Tracking
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    Term of use
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    Contact Support
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    2 years guarantee
                  </a>
                </li>
              </ul>
            </div>
            <div className="basis-[10rem] flex-1">
              <h1>Quick Links</h1>
              <ul>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div className="basis-[10rem] flex-1">
              <h1>Business</h1>
              <ul>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    Success
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    Guide
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    Mission
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="opacity-80 text-sm hover:text-primary transition-all duration-300 ease-in-out hover:ml-2"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="basis-[10rem] flex-1">
              <h1>Subscribe to our Newsletter</h1>
              <p>
                Subscribe to be the first one to know about updates. Enter your
                email
              </p>
              <div className="flex items-center gap-1 justify-center">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="bg-transparent border border-dark rounded-lg outline-none px-4 py-[0.35rem]"
                />
                <button className="btn btn-primary">subscribe</button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
