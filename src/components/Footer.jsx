import { img } from "../assets/img";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      className="bg-cover bg-center mt-20"
      style={{ backgroundImage: `url(${img.footerbg})` }}
    >
      <div className='boot-container flex flex-col items-center text-center'>
        <img className='w-[250px] md:w-[400px] h-auto mt-5' src={img.logo} alt='logo' />
        
        <div className='flex flex-wrap justify-center gap-3 mt-8 mb-6'>
          {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, index) => (
            <Icon key={index} className='w-[50px] h-[50px] p-2 rounded-full border bg-[#A6BD8F] cursor-pointer' />
          ))}
        </div>
        
        <div className='text-white w-full max-w-[900px]'>
          <div className='w-full h-[1px] bg-white my-4'></div>
          <div className='flex flex-wrap justify-center gap-2 text-[16px] md:text-[18px]'>
            {["Home", "Terms & Conditions", "Privacy Policy", "Sitemap", "Contact Us"].map((item, index) => (
              <span key={index} className='flex items-center gap-2'>
                {index !== 0 && <span>|</span>} {item}
              </span>
            ))}
          </div>
          <div className='w-full h-[1px] bg-white my-4'></div>
        </div>
        
        <p className='text-white text-[14px] mt-4'>2025. All Rights Reserved. Designed & Developed with ♥ by Zectagon</p>
      </div>
    </div>
    
  );
};

export default Footer;
