import { img } from "../assets/img";
import { IoIosArrowForward } from "react-icons/io";

const Blogs = () => {
  return (
    <>
      <div className="boot-container mt-20">
        <div className="flex items-center justify-between flex-wrap">
          <h1 className="text-[70px] font-bold">Recent Blogs</h1>
          <div className="flex items-center gap-5">
            <p className="text-[26px] text-[#A6BD8F] font-bold">All Articles</p>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="">
              <img src={img.blog} alt="Blog" className="w-full h-auto rounded-lg" />
              <h1 className="text-[24px] lg:text-[30px] font-semibold mt-5">
                How To Start Using Lipsum For Your Startup
              </h1>
              <p className="text-[16px] lg:text-[18px] mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="text-[#A6BD8F] text-[14px] mt-5 flex gap-3 flex-wrap">
                <button className="px-4 py-2 border rounded">Finance</button>
                <button className="px-4 py-2 border rounded">Credit Card</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;