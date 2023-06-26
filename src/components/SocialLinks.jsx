import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://github.com/mohammadibrahim20",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/mohammadibrahim20",
    },
    {
      id: 3,
      child: (
        <>
          Resume <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mohammadibrahim2224@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          Linkedin <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gray-500 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
