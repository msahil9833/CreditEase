import { img } from "../assets/img";
import { GoDatabase } from "react-icons/go";

const Aboutus = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap- md:gap- pt-16 md:pt-32 mb-16 md:mb-20 px-5">
      {/* Image Section */}
      <div className="w-full flex justify-center md:justify-start">
        <img src={img.person} alt="person" className="w-full max-w-sm md:max-w-md lg:max-w-2xl"/>
      </div>

      {/* Text Section */}
      <div className="w-full text-center md:text-left">
        <p className="text-lg text-[#A6BD8F] font-medium">About Us</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
          Neque porro quisquam est qui <br /> dolorem ipsum quia dolor.
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          We’re here to assist you in selecting the ideal credit card—one that’s both rewarding and
          tailored to your needs. From walking you through the application process to offering tips
          on smart usage, we’ll be by your side every step of the way.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6">
          {[
            "100+ Bank Options",
            "99% Customer Satisfaction",
            "Secure & Online Process",
            "Free Dedicated Support",
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#032539]">
                <GoDatabase className="text-[#A6BD8F] text-[30px]" />
              </div>
              <p className="text-[18px]">{text}</p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <button className="mt-6 w-44 h-12 border border-black text-black px-4 py-2 transition hover:bg-[#CADCFCE5] hover:text-[#00246B]">
          Learn More...
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
