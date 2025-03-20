import { img } from '../assets/img';

const Cardprocess = () => {
  return (
    <div className="mt-20 px-4">
      <div className="text-center">
        <p className="text-[20px] text-[#A6BD8F]">Card Process</p>
        <h1 className="text-[40px] md:text-[50px] font-bold text-[#032539]">
          How to Get The Card
        </h1>
        <p className="text-[18px] max-w-3xl mx-auto">
          We’re here to assist you in selecting the ideal credit card—one that’s
          both rewarding and tailored to your needs. From walking you through
          the application process to offering tips on smart usage, we’ll be by
          your side every step of the way.
        </p>
      </div>

      {/* Steps */}
      <div className="boot-container space-y-20 mt-20">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-[#A6BD8F] text-[20px] mb-3">Step-1</p>
            <h1 className="text-[30px] md:text-[40px] font-bold mb-3">
              Contact With Our Executive
            </h1>
            <p className="text-[16px] md:text-[18px]">
              We’re here to assist you in selecting the ideal credit card—one
              that’s both rewarding and tailored to your needs.
            </p>
            <button className="border border-black text-black px-6 py-2 mt-6 hover:bg-[#CADCFCE5] hover:text-[#00246B]">
              Learn More...
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-[400px] md:max-w-[600px]"
              src={img.stepone}
              alt="Step 1"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-[#A6BD8F] text-[20px] mb-3">Step-2</p>
            <h1 className="text-[30px] md:text-[40px] font-bold mb-3">
              Submit The Form
            </h1>
            <p className="text-[16px] md:text-[18px]">
              We’re here to assist you in selecting the ideal credit card—one
              that’s both rewarding and tailored to your needs.
            </p>
            <button className="border border-black text-black px-6 py-2 mt-6 hover:bg-[#CADCFCE5] hover:text-[#00246B]">
              Learn More...
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-[400px] md:max-w-[600px]"
              src={img.steptwo}
              alt="Step 2"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-[#A6BD8F] text-[20px] mb-3">Step-3</p>
            <h1 className="text-[30px] md:text-[40px] font-bold mb-3">
              Wait Till Approved
            </h1>
            <p className="text-[16px] md:text-[18px]">
              We’re here to assist you in selecting the ideal credit card—one
              that’s both rewarding and tailored to your needs.
            </p>
            <button className="border border-black text-black px-6 py-2 mt-6 hover:bg-[#CADCFCE5] hover:text-[#00246B]">
              Learn More...
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-[400px] md:max-w-[600px]"
              src={img.stepthree}
              alt="Step 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardprocess;
