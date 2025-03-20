import { img } from "../assets/img";
import { GoDatabase } from "react-icons/go";
import { TiArrowForwardOutline } from "react-icons/ti";

const Whatoffer = () => {
  return (
    <div
      className="relative min-h-[600px] w-full bg-cover bg-center py-16 md:py-24 px-5"
      style={{ backgroundImage: `url(${img.fourbg})` }}
    >
      <div className="boot-container flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Text Section */}
        <div className="w-full md:max-w-[1100px] text-center md:text-left">
          <p className="text-lg text-white font-medium">What We Offer</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-2">
            Neque porro quisquam est qui <br className="hidden md:block" /> dolorem ipsum quia dolor.
          </h1>
          <p className="text-white opacity-70 text-lg mt-4">
            We’re here to assist you in selecting the ideal credit card—one that’s both rewarding
            and tailored to your needs. From walking you through the application process to
            offering tips on smart usage, we’ll be by your side every step of the way.
          </p>
          <button className="mt-6 w-[174px] h-[44px] border border-white text-white px-4 py-2 transition hover:bg-[#CADCFCE5] hover:text-[#00246B]">
            Learn More...
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="w-full max-w-[330px] h-auto bg-white p-5 rounded-3xl border-5 border-white border-t-[#A6BD8F] lg:-mt-40">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#032539]">
              <GoDatabase className="text-[#A6BD8F] text-[30px]" />
            </div>
            <p className="text-[22px] font-semibold pt-5">Boost Sales</p>
            <p className="text-[16px] opacity-50 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis neque, 
              laoreet non semper volutpat, tempus et mi.
            </p>
            <div className="w-full h-[2px] bg-gray-300 mt-5"></div>
            <div className="flex items-center gap-2 pt-5 text-[#032539] font-medium cursor-pointer">
              <p>Learn more...</p>
              <TiArrowForwardOutline />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[330px] h-auto bg-white p-5 rounded-3xl border-5 border-white border-t-[#A6BD8F] lg:ml-10 lg:-mt-30">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#032539]">
              <GoDatabase className="text-[#A6BD8F] text-[30px]" />
            </div>
            <p className="text-[22px] font-semibold pt-5">Secure Payments</p>
            <p className="text-[16px] opacity-50 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis neque, 
              laoreet non semper volutpat, tempus et mi.
            </p>
            <div className="w-full h-[2px] bg-gray-300 mt-5"></div>
            <div className="flex items-center gap-2 pt-5 text-[#032539] font-medium cursor-pointer">
              <p>Learn more...</p>
              <TiArrowForwardOutline />
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[330px] h-auto bg-white p-5 rounded-3xl border-5 border-white border-b-[#A6BD8F] lg:-mb-20">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#032539]">
              <GoDatabase className="text-[#A6BD8F] text-[30px]" />
            </div>
            <p className="text-[22px] font-semibold pt-5">High Conversion</p>
            <p className="text-[16px] opacity-50 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis neque, 
              laoreet non semper volutpat, tempus et mi.
            </p>
            <div className="w-full h-[2px] bg-gray-300 mt-5"></div>
            <div className="flex items-center gap-2 pt-5 text-[#032539] font-medium cursor-pointer">
              <p>Learn more...</p>
              <TiArrowForwardOutline />
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full max-w-[330px] h-auto bg-white p-5 rounded-3xl border-5 border-white border-b-[#A6BD8F] lg:ml-20 lg:mt-20 lg:-mb-10">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#032539]">
              <GoDatabase className="text-[#A6BD8F] text-[30px]" />
            </div>
            <p className="text-[22px] font-semibold pt-5">Customer Support</p>
            <p className="text-[16px] opacity-50 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis neque, 
              laoreet non semper volutpat, tempus et mi.
            </p>
            <div className="w-full h-[2px] bg-gray-300 mt-5"></div>
            <div className="flex items-center gap-2 pt-5 text-[#032539] font-medium cursor-pointer">
              <p>Learn more...</p>
              <TiArrowForwardOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatoffer;
