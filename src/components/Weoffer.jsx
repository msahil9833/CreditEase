import { img } from "../assets/img";

const Weoffer = () => {
  return (
    <div className="boot-container flex flex-col md:flex-row items-center md:gap-12 lg:gap-20 mt-16 md:mt-20 mb-16 md:mb-20 px-5">
      <div className="w-full max-w-xl text-center md:text-left">
        <p className="text-lg text-gray-700 font-medium">What We Offer</p>
        <h1 className="lg:w-[732px] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
          Instant Credit Card <br /> Settlement to Bank Account
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          We’re here to assist you in selecting the ideal credit card—one that’s both
          rewarding and tailored to your needs. From walking you through the application
          process to offering tips on smart usage, we’ll be by your side every step of the way.
        </p>
        <button className="mt-6 w-44 h-12 border border-black text-black px-4 py-2 transition hover:bg-[#CADCFCE5] hover:text-[#00246B]">
          Learn More...
        </button>
      </div>

      <div className="w-full flex justify-center md:justify-end mt-8 md:mt-0">
        <img src={img.mobile} alt="mobile" className="w-full max-w-xs sm:max-w-sm md:max-w-md" />
      </div>
    </div>
  );
};

export default Weoffer;
