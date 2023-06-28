// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
// import installNode from "../assets/portfolio/installNode.jpg"
// import navbar from "../assets/portfolio/navbar.jpg"
// import reactParallax from "../assets/portfolio/reactParallax.jpg"
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import { useEffect, useState } from "react";
import Modal from "./modal";
const Portfolio = () => {
  const [projects, setProject] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    fetch(`project.json`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen py-20"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check Out some of my Work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg "
            >
              <div className="">
                <img
                  src={project.image}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 h-96 w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Live
                </button>
                <button
                  onClick={() => setIsOpen(true)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Details
                </button>
              </div>

              <Modal
                project={project}
                isOpen={isOpen}
                closeModal={closeModal}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
