import {
  BiSearch,
  BiMenu,
  BiUser,
  BiBuildingHouse,
  BiSearchAlt,
  BiChevronDown,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { FiDelete, FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";
import { navLinks } from "../data/navLinks";
import { NavLink } from "react-router-dom";

function Navbar({
  openDropdown,
  mode,
  toggleDarkMode,
  closeDropdown,
  isSidebarOpen,
  closeSidebar,
  openSidebar,
}) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [link, setLink] = useState("");

  function handleDropDown(e, link) {
    // console.log(e.currentTarget);
    const linkCords = e.currentTarget.getBoundingClientRect();
    const center = (linkCords.left + linkCords.right) / 2;
    openDropdown(link, center);
  }

  function handleClose(e) {
    // console.log(e.currentTarget.classList);
    if (!e.target.closest(".link")) {
      closeDropdown();
    }
  }

  return (
    <div
      className="fixed w-full top-0 py-2 border-b left-0 dark:border-dark dark:bg-card-dark/60 z-20 bg-white/60 backdrop-blur-sm"
      onMouseOver={handleClose}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <Link to="/" className="flex items-center gap-x-1">
          <BiBuildingHouse className="text-3xl text-primary" />
          <h1 className="hidden md:block">MartVilla</h1>
        </Link>
        <div className="flex gap-x-4">
          {/* desktop menu */}
          <ul
            className={`hidden md:flex items-center ${
              showSearchBar && "!hidden"
            }`}
          >
            {navLinks.map((link) => (
              <NavLink
                to={link.url} // make sure to provide the destination
                end
                className={({ isActive }) =>
                  `flex items-center px-3 py-[0.6rem] lg:px-4 gap-x-1 link whitespace-nowrap ${
                    isActive &&
                    "relative text-primary before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-primary before:left-0 before:bottom-0 lg:before:-bottom-[0.1rem]"
                  }`
                }
                onMouseOver={(e) => handleDropDown(e, link.linkText)}
              >
                {link.linkText}
                {link.subLinks && <BiChevronDown />}
              </NavLink>
            ))}
          </ul>

          {/* mobile menu */}
          <div
            className={`lg:hidden fixed bg-black/50 w-screen h-screen left-0 top-0 opacity-0 pointer-events-none transition-all duration-300 ease-in-out ${
              isSidebarOpen && "opacity-100 pointer-events-auto"
            }`}
            onClick={closeSidebar}
          >
            <ul
              className={`bg-white w-screen h-screen max-w-[300px] p-3 space-y-4 dark:bg-card-dark  transition-all duration-300 ease-in-out ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-[500px]"
              } `}
            >
              <div className="flex justify-between items-center border-b">
                <p className="uppercase">menu</p>
                <div
                  className="rounded-full grid w-9 h-9 place-items-center hover:bg-slate-200 transition-all duration-300 ease-in-out cursor-pointer"
                  onClick={closeSidebar}
                >
                  <FiDelete />
                </div>
              </div>
              {navLinks.map((link) => (
                <ul>
                  <NavLink className="w-fit" to={link.url} end>
                    {link.linkText}
                  </NavLink>

                  {link?.subLinks?.map(({ linkText, url, id }) => (
                    <div className="mt-2 ">
                      <NavLink
                        key={id}
                        className="w-fit ml-8 relative after:absolute after:w-2 after:h-2 after:border-2 after:rounded-full after:-left-4 after:top-1/2 after:-translate-y-1/2 dark:after:opacity-50"
                        to={url}
                        end
                      >
                        {linkText}
                      </NavLink>
                    </div>
                  ))}
                </ul>
              ))}
            </ul>
          </div>

          <div className="flex gap-x-4 items-center">
            <form>
              <div
                className={`flex border-slate-300 rounded-full w-9 h-9 transition-all duration-300 ease-in-out dark:border-dark ${
                  showSearchBar && "!w-[150px] md:!w-[200px] border"
                }`}
              >
                <input
                  type="search"
                  placeholder="search..."
                  className={`w-0 h-0 outline-none bg-transparent ${
                    showSearchBar && "!w-full !h-full px-4"
                  }`}
                />
                <span
                  className={`bg-primary text-white w-9 h-9 grid place-items-center flex-shrink-0 rounded-full sm:cursor-pointer ${
                    showSearchBar && "hover:bg-slate-100 text-inherit"
                  }`}
                  onClick={() => setShowSearchBar(!showSearchBar)}
                >
                  <BiSearch />
                </span>
              </div>
            </form>
            <div
              className="bg-white shadow-md w-9 h-9 grid place-items-center rounded-full hover:shadow-lg sm:cursor-pointer dark:bg-dark-light"
              onClick={toggleDarkMode}
            >
              {mode ? <FiSun /> : <FiMoon />}
            </div>
            <div className="bg-white flex-shrink-0 shadow-md w-9 h-9 grid place-items-center rounded-full hover:shadow-lg sm:cursor-pointer dark:bg-dark-light">
              <BiUser />
            </div>
            <div
              className="md:hidden w-9 h-9 grid place-items-center rounded-full hover:bg-slate-200 cursor-pointer transition-all duration-300 ease-in-out flex-shrink-0"
              onClick={openSidebar}
            >
              <BiMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
