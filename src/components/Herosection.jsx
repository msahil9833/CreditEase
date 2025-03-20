import { useState } from "react";
import { img } from "../assets/img";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Herosection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [creditCardOpen, setCreditCardOpen] = useState(false);

  return (
    <div
      className="w-full lg:h-[800px] min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${img.hero})` }}
    >
      <div className="boot-container flex items-center justify-between py-4 md:px-10">
        <img className="pt-3 w-28 md:w-36" src={img.logo} alt="logo" />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-lg">
          <h1 className="cursor-pointer">Home</h1>
          <h1 className="cursor-pointer">About</h1>
          <h1 className="cursor-pointer">Blog</h1>
          <div className="relative">
            <h1
              className="cursor-pointer flex items-center gap-1"
              onClick={() => setCreditCardOpen(!creditCardOpen)}
            >
              Credit Card <FiChevronDown />
            </h1>
            {creditCardOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg p-2">
                <h1 className="cursor-pointer p-2 hover:bg-gray-200">Option 1</h1>
                <h1 className="cursor-pointer p-2 hover:bg-gray-200">Option 2</h1>
              </div>
            )}
          </div>
          <h1 className="cursor-pointer">Contact Us</h1>
        </div>

        <button className="hidden lg:block w-40 h-12 bg-[#A6BD8F] px-4 py-2 hover:bg-[#CADCFCE5] hover:text-[#00246B]">
          Need help?
        </button>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-white text-2xl cursor-pointer z-50 relative" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-900 text-white p-5 z-40">
          <h1 className="py-2">Home</h1>
          <h1 className="py-2">About</h1>
          <h1 className="py-2">Blog</h1>
          <div className="py-2">
            <h1
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setCreditCardOpen(!creditCardOpen)}
            >
              Credit Card <FiChevronDown />
            </h1>
            {creditCardOpen && (
              <div className="pl-4">
                <h1 className="py-1">Option 1</h1>
                <h1 className="py-1">Option 2</h1>
              </div>
            )}
          </div>
          <h1 className="py-2">Contact Us</h1>
          <button className="w-full bg-[#A6BD8F] py-2 mt-4 hover:bg-[#CADCFCE5] hover:text-[#00246B]">
            Need help?
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="boot-container flex flex-col gap-10 lg:gap-32 md:flex-row items-center mt-10 md:mt-36 px-5">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="lg:w-[622px] text-3xl sm:text-4xl md:text-[70px] font-[800] text-white">
            Your Ultimate <br />
            <span className="text-[#A6BD8F]">Credit Card</span> Guide
          </h1>
          <p className="text-base sm:text-lg text-white mt-4">
            We’re here to assist you in selecting the ideal credit card—one that’s both rewarding and tailored to your needs. From walking you through the application process to offering tips on smart usage, we’ll be by your side every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 pt-10">
            <button className="w-44 h-12 bg-[#A6BD8F] px-4 py-2 hover:bg-[#CADCFCE5] hover:text-[#00246B]">
              Apply Now!!!
            </button>
            <button className="w-44 h-12 border border-white text-white px-4 py-2 hover:bg-[#CADCFCE5] hover:text-[#00246B]">
              Learn More...
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 w-full max-w-md md:max-w-lg lg:max-w-xl">
          <img src={img.card} alt="card" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;