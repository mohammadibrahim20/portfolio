import { FiDownload } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../assets/heroImage.png";
const Home = () => {
  return (
    <div
      id="home"
      // name="home"
      className="md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-40"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-3/5 gap-8">
          <h1 className="font-signature font-bold text-4xl sm:text-7xl text-gray-300 ">Mohammad Ibrahim</h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I 'am a MERN Stack Developer
          </h2>
          <p className="text-gray-500 py-4 text-2xl">
          Hey, I'm Mohammad Ibrahim. I am an Junior Frontend Developer.I am a website developer from Bangladesh. I create professional websites. As a web developer, I have a passion for creating dynamic and engaging online experiences.
          </p>
          <div className="flex gap-5">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
            >
              Portfolio
              <span className="group-hover hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>

            <a
              href="/resume.pdf"
              download={true}
              className="group hover:scale-105 duration-200 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
            >
              Resume
              <span className=" duration-300">
                <FiDownload size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="My Picture"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
