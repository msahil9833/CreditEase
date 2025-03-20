import Aboutus from "../components/Aboutus";
import Cardprocess from "../components/Cardprocess";
import Needhelp from "../components/Needhelp";
import Video from "../components/Video";
import Weoffer from "../components/Weoffer";
import Whatoffer from "../components/Whatoffer";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Herosection from "../components/Herosection";

const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <Herosection/>
      {/* What we offer */}
      <Weoffer/>
      {/* About Us */}
      <Aboutus/>
      {/* what we offer */}
      <Whatoffer/>
      {/* video */}
      <Video/>
      {/* Card Process */}
      <Cardprocess/>
      {/* features */}
      <Features/>
      {/* need help */}
      <Needhelp/>
      {/* Recent Blogs */}
      <Blogs/>
      {/* footer */}
      <Footer/>
    </>
  );
};

export default HomePage;
