import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import { navLinks } from "./data/navLinks";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { BiBuildingHouse } from "react-icons/bi";
import { FiArrowRight, FiFacebook } from "react-icons/fi";
import {
  FaArrowRight,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

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
      <div className="px-[2%] lg:px-[6%] bg-card-dark border">
        {/* Newsletter */}
        <div className="p-4 bg-primary rounded-lg max-w-7xl mx-auto -mt-24 flex flex-wrap items-center justify-center">
          <img
            src="/images/3d-house.png"
            alt=""
            className="basis-[20rem] flex-1 w-[400px] lg:w-[500px] h-[250px] object-contain"
          />
          <div className="text-white text-center md:text-start basis-[16rem] md:basis-[30rem] flex-1 ">
            <h2 className="text-xl capitalize font-semibold">
              subscribe to our newsletter
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, earum.
            </p>
            <div className="flex justify-center items-center gap-2 mt-4 md:justify-start">
              <input
                type="text"
                placeholder="Email address"
                className="outline-none rounded-lg px-4 py-1"
              />
              <div className="btn-secondary p-2 rounded-md">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="text-slate-200 mt-20 px-2">
          <footer className="max-w-7xl mx-auto flex flex-wrap gap-4">
            <div className="basis-[10rem] flex-1">
              <a href="">
                <BiBuildingHouse className="text-primary text-3xl" />
              </a>
              <p className="text-sm my-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                harum explicabo illo, magnam vitae expedita.
              </p>
              <div className="flex gap-4">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FiFacebook />
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
              <h2 className="font-semibold text-xl">Services</h2>
              <ul>
                <li>
                  <a href="#">Order Tracking</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Contact support</a>
                </li>
                <li>
                  <a href="#">2 years guarantee</a>
                </li>
              </ul>
            </div>
            <div className="basis-[10rem] flex-1">
              <h2 className="font-semibold text-xl">Quick Links</h2>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
              </ul>
            </div>
            <div className="basis-[10rem] flex-1">
              <h2 className="font-semibold text-xl">Business</h2>
              <ul>
                <li>
                  <a href="#">Success</a>
                </li>
                <li>
                  <a href="#">Guide</a>
                </li>
                <li>
                  <a href="#">Mission</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="basis-[10rem] flex-1 text-center xl:text-start">
              <h2 className="font-semibold text-xl">
                Subscribe to our Newsletter
              </h2>
              <p className="text-sm my-2">
                Subscribe to be the first one to know about updates. Enter your
                email
              </p>
              <div className="flex gap-2 justify-center">
                <input
                  type="text"
                  placeholder="Email Address..."
                  className="card-bordered bg-transparent rounded-lg px-4 py-[0.35rem]"
                />
                <button className="btn btn-primary">subscribe</button>
              </div>
            </div>
          </footer>
          <div className="text-center border-t border-dark py-2 mt-3 text-muted">
            Created by <span className="text-primary">Aderombi Sheriff</span> |
            All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
