import React from "react";
import ReactStars from "react-rating-stars-component";
import {
  BiBed,
  BiBriefcase,
  BiBuildingHouse,
  BiBuildings,
  BiCurrentLocation,
  BiFullscreen,
  BiHeart,
  BiHomeAlt,
  BiMap,
  BiMoney,
  BiShieldAlt2,
  BiStar,
} from "react-icons/bi";
import {
  FiArrowRight,
  FiCheck,
  FiEye,
  FiHome,
  FiLayers,
  FiUsers,
} from "react-icons/fi";
import {
  FaArrowRight,
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaFedex,
  FaInstagram,
  FaLinkedin,
  FaPaintRoller,
  FaTwitter,
  FaVimeo,
  FaYoutube,
} from "react-icons/fa";
import {
  feeds,
  projects,
  property,
  services,
  testimonials,
} from "../data/dummyData";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-16">
      <div
        className="relative flex justify-center items-center z-0 min-h-screen flex-wrap gap-2 md:-mt-10"
        style={{
          background: "url('/images/hero-bg-pattern.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="absolute top-0 right-0 bg-[#04a7ff]/30 w-72 h-72 rounded-full blur-[120px]"></div>
        <div className="basis-[20rem] flex-1">
          <h1 className="text-4xl md:text-5xl capitalize font-bold">
            Property Consisting <br /> Land And Buildings
          </h1>
          <p className="border-l-4 pl-3 border-primary mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nulla
            unde exercitationem! Recusandae error quaerat sapiente quibusdam
            culpa magni eius?
          </p>
          <button className="my-6 btn btn-primary">get started</button>
          <div className="flex text-center gap-x-6">
            <div>
              <h1 className="text-2xl font-bold">
                12k <span className="text-primary text-sm">+</span>
              </h1>
              <p>Requested Projects</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                15k <span className="text-primary text-sm">+</span>
              </h1>
              <p>Projects Completed</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                100 <span className="text-primary text-sm">+</span>
              </h1>
              <p>Served Clients</p>
            </div>
          </div>
        </div>
        <div className="basis-[20rem] flex-1">
          <img src="/images/hero-4.png" alt="" className="w-full" />
        </div>
      </div>
      {/* search */}
      <div className="px-4 max-w-7xl -mt-8 sm:-mt-20">
        <div className="shadow-lg rounded-lg p-4 flex flex-col gap-4 md:flex-row items-center">
          <div className="flex flex-col gap-4 sm:flex-row flex-1 w-full">
            <div className="bg-slate-100 p-2 border rounded-lg flex-1">
              <p className="font-bold">Location</p>
              <div className="flex items-center gap-x-2">
                <BiMap />
                <input
                  type="text"
                  placeholder="Enter location of the property"
                  className="bg-transparent outline-none border-none w-full"
                />
              </div>
            </div>
            <div className="bg-slate-100 p-2 border rounded-lg flex-1">
              <p className="font-bold">Property Type</p>
              <div className="flex items-center gap-x-2">
                <BiBuildingHouse />
                <select
                  name=""
                  id=""
                  className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
                >
                  <option value="condors">Condors</option>
                  <option value="offfice buildings">Offfice Buildings</option>
                  <option value="apartments">Apartments</option>
                  <option value="mansions">Mansions</option>
                  <option value="real estate">Real Estate</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="living room">Living Room</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row flex-1 w-full">
            <div className="bg-slate-100 p-2 border rounded-lg flex-1">
              <p className="font-bold">Price range</p>
              <div className="flex items-center gap-x-2">
                <BiMoney />
                <select name="" id="" className="bg-transparent w-full">
                  <option value="$40,000 - $80,000">$40,000 - $80,000</option>
                  <option value="$80,000 - $120,000">$80,000 - $120,000</option>
                  <option value="$120,000 - $200,000">
                    $120,000 - $200,000
                  </option>
                  <option value="$200,000 - $300,000">
                    $200,000 - $300,000
                  </option>
                  <option value="$300,000 - $500,000">
                    $300,000 - $500,000
                  </option>
                  <option value="$500,000 - $1000,000">
                    $500,000 - $1000,000
                  </option>
                </select>
              </div>
            </div>
            <div className="bg-slate-100 p-2 border rounded-lg flex-1">
              <p className="font-bold">For</p>
              <div className="flex items-center gap-x-2">
                <BiBriefcase />
                <select
                  name=""
                  id=""
                  className="w-full bg-transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark"
                >
                  <option value="sell">Sell</option>
                  <option value="rent">Rent</option>
                </select>
              </div>
            </div>
          </div>

          <button className="btn btn-primary w-full md:w-fit">search</button>
        </div>
      </div>
      {/* Invest */}
      <div className="pt-10 pb-16">
        <div className="rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <img
            src="/images/property (1).jpeg"
            alt=""
            className="grid-cols-1  w-full h-full"
          />
          <div className="bg-secondary p-5 flex items-center flex-col gap-5 md:col-span-2 md:flex-row">
            <div className="bg-white/80 w-fit p-3 rounded-lg -mt-16 backdrop-blur-sm sm:mt-0 sm:-ml-72 md:-ml-20 flex-shrink-0">
              <div className="flex">
                <img
                  src="/images/avatar.png"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="/images/avatar-1.png"
                  alt=""
                  className="w-8 h-8 rounded-full -ml-2 border-white border-2"
                />
                <img
                  src="/images/avatar-2.png"
                  alt=""
                  className="w-8 h-8 rounded-full -ml-2 border-white border-2"
                />
                <img
                  src="/images/avatar-3.png"
                  alt=""
                  className="w-8 h-8 rounded-full -ml-2 border-white border-2"
                />
                <div className="w-8 h-8 rounded-full -ml-2 border-white border-2 grid text-white place-items-center bg-primary">
                  +5
                </div>
              </div>
              <p>People Successfull Getting Homes</p>
            </div>
            <div>
              <h1 className="text-2xl text-white font-semibold">
                You invest in the apartment of your choice
              </h1>
              <div className="flex items-center gap-3 mt-5">
                <div className="flex items-center bg-white  px-3 py-2 w-fit rounded-lg gap-2">
                  <FiHome />
                  <input type="text" placeholder="Find your nice home..." />
                </div>
                <button className="p-2 bg-primary text-white rounded-lg shadow-primary shadow-sm">
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about us */}
      <div className="pt-10 pb-16">
        <div className="flex gap-10 flex-wrap">
          <div className="space-y-4 flex-1 basis-[20rem]">
            <h1 className="sub-heading">about us</h1>
            <h1 className="heading">
              We Specialize In Quality Home <br /> Renovations
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              laborum earum saepe quibusdam, temporibus aut sapiente, ea alias
              libero, ipsam perferendis. Consectetur maiores, dicta, earum eaque
              facilis adipisci dignissimos optio fuga officia itaque quo
              impedit.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-x-2">
                <div className="icon-box bg-primary/20 text-primary">
                  <FiCheck />
                </div>
                <p>Outstanding Property</p>
              </li>
              <li className="flex items-center gap-x-2">
                <div className="icon-box bg-primary/20 text-primary">
                  <FiCheck />
                </div>
                <p>Professional and experienced human resource</p>
              </li>
              <li className="flex items-center gap-x-2">
                <div className="icon-box bg-primary/20 text-primary">
                  <FiCheck />
                </div>
                <p>Provide the best services for users</p>
              </li>
              <li className="flex items-center gap-x-2">
                <div className="icon-box bg-primary/20 text-primary">
                  <FiCheck />
                </div>
                <p>Modern city locations and exceptional lifestyle</p>
              </li>
            </ul>
            <button className="btn btn-primary">read more</button>
          </div>
          <div className="flex-1 basis-[20rem]">
            <div className=" relative">
              <div className="rounded-lg overflow-hidden relative">
                <img
                  src="/images/property (5).jpg"
                  alt=""
                  className="sm:h-[400px] w-full object-cover"
                />
              </div>
              <div className="absolute bottom-10 -left-2 sm:bottom-5 md:-left-20">
                <div className="bg-white rounded-lg flex items-center w-72 p-3 shadow-lg">
                  <p>We have been serving our customers for over 70 years</p>
                  <div className="icon-box bg-primary/20 text-primary flex-shrink-0">
                    <FiUsers />
                  </div>
                </div>
                <div className="bg-white rounded-lg flex items-center w-72 p-3 shadow-lg ml-8 mt-4">
                  <p>
                    Working with the symbol and reputation of trustworthy trait
                  </p>
                  <div className="icon-box bg-primary/20 text-primary flex-shrink-0">
                    <FiLayers />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services */}
      <div className="pt-10 pb-16 text-center">
        <h1 className="sub-heading mx-auto">services</h1>
        <h1 className="heading">
          Specialists Services Provided In This Apartment Building
        </h1>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div className="space-y-2 border-t-4 border-transparent hover:border-primary p-3 rounded-lg hover:shadow-lg dark:hover:bg-card-dark">
              <div className="icon-box w-14 h-14 text-primary hover:text-white hover:bg-primary bg-primary/20 mx-auto text-2xl transition-all duration-300 ease-in-out">
                {service.icon}
              </div>
              <h1 className="heading text-xl">{service.name}</h1>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* featured */}
      <div className="pt-10 pb-16 space-y-4">
        <h1 className="sub-heading mx-auto">featured</h1>
        <h1 className="heading text-center">
          Expore Featured Latest Properties
        </h1>
        <div className="flex gap-4 flex-wrap">
          {property.slice(0, 3).map((item) => (
            <div className="shadow-lg rounded-lg overflow-hidden group basis-[18rem] flex-1 dark:border dark:border-card-dark">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-[250px] object-cover w-full group-hover:scale-125 transition-all duration-300 ease-in-out"
                />
                <div className="flex gap-x-2 absolute top-2 left-2">
                  <p className="bg-primary rounded-full px-3 py-[3px] text-sm text-white">
                    {item.distance} Away
                  </p>
                  <p className="bg-secondary rounded-full px-3 py-[3px] text-sm text-white">
                    For Sale
                  </p>
                </div>
                <div className="absolute hidden gap-x-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:flex">
                  <div className="icon-box h-7 w-7 bg-primary text-white hover:bg-secondary">
                    <BiHeart />
                  </div>
                  <div className="icon-box h-7 w-7 bg-primary text-white hover:bg-secondary">
                    <FiEye />
                  </div>
                  <div className="icon-box h-7 w-7 bg-primary text-white hover:bg-secondary">
                    <BiStar />
                  </div>
                </div>
                <div className="flex items-center gap-x-2 text-white absolute bottom-0 px-2 py-2 bg-gradient-to-t from-black/80 to-transparent w-full group-hover:translate-y-0 sm:translate-y-10 transition-transform">
                  <div>
                    <BiMap />
                  </div>
                  <p>{item.location}</p>
                </div>
              </div>
              <div className="space-y-4 p-3">
                <h1 className="font-bold group-hover:text-primary transition-all duration-300 ease-in-out">
                  {item.name}
                </h1>

                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2">
                    <div className="icon-box bg-primary/20 text-primary w-7 h-7">
                      <BiBed />
                    </div>
                    <p className="text-sm">{item.number_of_beds} Beds</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="icon-box bg-primary/20 text-primary w-7 h-7">
                      <BiBed />
                    </div>
                    <p className="text-sm">
                      {item.number_of_bathrooms} Bathrooms
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="icon-box bg-primary/20 text-primary w-7 h-7">
                      <BiBed />
                    </div>
                    <p className="text-sm">{item.dimensions}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-primary font-bold">${item.price}</p>
                  <button className="btn btn-secondary">details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* testimony */}
      <div className="pt-10 pb-16">
        <div className="bg-secondary text-center flex flex-wrap gap-7 justify-center px-4 py-8">
          <div>
            <p className="heading text-slate-100">12k+</p>
            <p className="text-slate-100">Renovation Projects</p>
          </div>
          <div>
            <p className="heading text-slate-100">12k+</p>
            <p className="text-slate-100">Renovation Projects</p>
          </div>
          <div>
            <p className="heading text-slate-100">12k+</p>
            <p className="text-slate-100">Renovation Projects</p>
          </div>
          <div>
            <p className="heading text-slate-100">12k+</p>
            <p className="text-slate-100">Renovation Projects</p>
          </div>
        </div>
      </div>
      {/* projects */}
      <div className="pb-16">
        <div className="sub-heading mx-auto">
          <h1> our projects</h1>
        </div>
        <h1 className="heading text-center">
          excellent projects both small and complex
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-4">
          {projects.map((project) => (
            <div className="relative group overflow-hidden">
              <img
                src={project.image}
                alt=""
                className="object-cover w-full h-full md:h-[250px] group-hover:scale-125 transition-all duration-300 ease-in-out"
              />
              <div className="absolute left-0 bottom-0 text-slate-100 w-full p-2 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-lg font-semibold">{project.name}</p>
                <p>{project.number} Property</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* testimonial */}
      <div className="pt-10 pb-16 space-y-4">
        <h1 className="uppercase bg-primary/20 text-primary w-fit rounded-full px-3 py-[3px] text-sm mx-auto">
          testimonial
        </h1>
        <h1 className="heading text-center">
          what they're saying about our work feedback
        </h1>

        <div className="flex flex-wrap gap-4">
          {testimonials.map((item) => (
            <div className="basis-[16rem] flex-1 border border-1 rounded-md p-4 ">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis porro ex perferendis, nulla consectetur consequuntur
                odio qui adipisci harum earum dolor, eius accusantium quia
                praesentium.
              </p>
              <div className="flex gap-x-3 mt-3">
                <img
                  src="/images/avatar.png"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-bold">Wabz Braize</p>
                  <p className="text-sm">Front-end developer</p>
                  <ReactStars
                    size={18}
                    isHalf={true}
                    activeColor="#ffd700"
                    value={4.5}
                    edit={false}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* brand */}
      <div className="pt-6 pb-10">
        <div className="text-center mx-auto max-w-[400px]">
          <h1 className="sub-heading mx-auto">brands</h1>
          <h1 className="heading">Our Brands</h1>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            quia eius quaerat, quas deleniti sed. Sapiente illo architecto!
          </p>
        </div>
      </div>
      {/* newsfeed */}
      <div className="pt-10 pb-16">
        <div className="text-center">
          <h1 className="sub-heading mx-auto">blog post</h1>
          <h1 className="heading">Latest Newsfeeds</h1>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {feeds.slice(0, 4).map((feed) => (
            <div className="flex flex-col sm:flex-row gap-3 group">
              <div className="flex-shrink-0 relative">
                <img
                  src={feed.image}
                  alt=""
                  className="w-full h-64 object-cover sm:w-48 rounded-lg"
                />
                <div className="bg-secondary absolute top-1/2 right-0 -rotate-90 rounded-full px-3 py-1">
                  <span className="capitalize text-white">{feed.category}</span>
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-lg group-hover:text-primary transition-all duration-300 ease-in-out font-bold">
                  {feed.title}
                </h1>
                <p className="uppercase text-sm opacity-60">
                  by {feed.name}: {feed.date_posted}
                </p>
                <p>{feed.description.slice(0, 200)}</p>
                <Link className="flex items-center gap-3 text-primary">
                  <span className="uppercase  hover:underline">read more</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
