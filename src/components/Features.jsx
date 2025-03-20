import { img } from "../assets/img";
import { GoDatabase } from "react-icons/go";

const Features = () => {
  return (
    <div className="mt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[20px] text-[#A6BD8F]">Features</p>
        <h1 className="text-[40px] md:text-[50px] mt-5">
          Card Features and Benefits
        </h1>
        <p className="text-[16px] md:text-[18px] mt-5">
          We’re here to assist you in selecting the ideal credit card—one that’s
          both rewarding and tailored to your needs. From walking you through
          the application process to offering tips on smart usage, we’ll be by
          your side every step of the way.
        </p>
      </div>
      <div className="boot-container grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 items-center">
        {/* Left Features */}
        <div className="space-y-10">
          {[
            { title: "Rewards", desc: "Get rewards points use a card's" },
            { title: "Cash Back", desc: "Rewards redeemable for cash back" },
            { title: "Balance Transfer", desc: "Ideal balance transfer credit card" },
            { title: "Travel", desc: "Enjoy lounge access, vouchers." },
          ].map((feature, index) => (
            <div key={index} className="flex gap-5 items-center justify-end md:justify-center">
              <div className="text-right md:text-left">
                <p className="text-[18px] font-bold">{feature.title}</p>
                <p className="text-[14px]">{feature.desc}</p>
              </div>
              <div className="w-[50px] h-[50px] rounded-2xl bg-[#032539] flex items-center justify-center">
                <GoDatabase className="text-[#A6BD8F] text-[24px]" />
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img className="w-full max-w-sm md:max-w-md lg:max-w-lg" src={img.cards} alt="" />
        </div>

        {/* Right Features */}
        <div className="space-y-10">
          {[
            { title: "Zero Percent", desc: "Best zero percent credit cards" },
            { title: "Low Interest", desc: "Low interest free card or apply" },
            { title: "Secured Credit Card", desc: "Secured cards provide by Bank" },
            { title: "Easy Apply", desc: "Card Apply process is quite simple" },
          ].map((feature, index) => (
            <div key={index} className="flex gap-5 items-center">
              <div className="w-[50px] h-[50px] rounded-2xl bg-[#032539] flex items-center justify-center">
                <GoDatabase className="text-[#A6BD8F] text-[24px]" />
              </div>
              <div>
                <p className="text-[18px] font-bold">{feature.title}</p>
                <p className="text-[14px]">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
