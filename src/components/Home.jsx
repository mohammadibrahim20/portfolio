import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/heroImage.png";
const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black to-gray-800  "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div>
          <h2>I'am MERN Stack Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam id
            iste quae culpa vitae, quo saepe quia molestiae maiores facere!
          </p>
          <div>
            <button>
              Portfolio{" "}
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="My Picture" />
        </div>
      </div>
    </div>
  );
};

export default Home;
