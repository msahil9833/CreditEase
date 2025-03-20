import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Needhelp = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="boot-container px-4 py-10">
      <h1 className="text-[50px] md:text-[70px] text-center mb-10">Need Help ?</h1>
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <div className="space-y-10 lg:space-y-20 w-full lg:w-auto">
          {[
            {
              icon: <BsTelephone className="text-[50px]" />,
              title: "Call Anytime",
              detail: "+1-445-458-6699",
            },
            {
              icon: <IoMailOutline className="text-[50px]" />,
              title: "Write Email",
              detail: "help@website.com",
            },
            {
              icon: <IoLocationOutline className="text-[50px]" />,
              title: "Visit Office",
              detail: "789 Avenue Riverside, CA 0720",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-5 sm:gap-10">
              <div className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] bg-[#A6BD8F1A] rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <p className="text-[20px] sm:text-[26px] font-bold">{item.title}</p>
                <p className="text-[18px] sm:text-[24px] text-[#A6BD8F]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-20 w-full lg:w-[688px]">
          {[
            { question: "How does it work?", answer: "We’re here to assist you in selecting the ideal credit card—one that’s both rewarding and tailored to your needs. From walking you through the application process to offering tips on smart usage, we’ll be by your side every step of the way." },
            { question: "How to apply?", answer: "You can apply by ..." },
            { question: "What are the benefits?", answer: "The benefits include ..." },
            { question: "Is there a fee?", answer: "No, there is no fee ..." },
            { question: "How can I contact support?", answer: "You can contact us via ..." },
          ].map((faq, index) => (
            <div key={index} className="space-y-2">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAnswer(index)}
                
              >
                <p className="text-[18px] sm:text-[20px]">{faq.question}</p>
                <IoIosArrowDown className={`text-xl transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </div>
              {openIndex === index && <p className="text-[16px] sm:text-[18px] mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Needhelp;

