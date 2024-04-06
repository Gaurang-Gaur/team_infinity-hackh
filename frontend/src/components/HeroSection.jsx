import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import {Link} from "react-router-dom"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Portal for Unified Defense:
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Securing India's Tomorrow
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Discover our all-in-one solution for unified defense. Seamlessly manage weapons inventory and enhance border surveillance with state-of-the-art image segmentation technology. Our platform ensures meticulous tracking of armaments while leveraging advanced algorithms for border monitoring, bolstering national security with unprecedented precision. Experience the future of defense management with our solution, shaping a safer tomorrow for India.
      </p>
      <div className="flex justify-center my-10">
     
        <Link to="/inventory" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
      Defence Personnel
      </Link>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Report Suspicious Activity
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
