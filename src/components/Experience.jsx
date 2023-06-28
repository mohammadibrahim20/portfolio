const Experience = () => {
//     const options = [
//         https://i.ibb.co/R0fNTTS/css.png,
// https://i.ibb.co/3Mj93g6/github.png
// https://i.ibb.co/Ny6zN6N/graphql.png
// https://i.ibb.co/Dbk4sf4/html.png
// https://i.ibb.co/fk4CbXz/javascript.png
// https://i.ibb.co/47qVtDn/nextjs.png
// https://i.ibb.co/mh9F7mg/node.png
// https://i.ibb.co/tY9nYQL/react.png
//     ]
  const techs = [
    {
      id: 1,
      src: "https://i.ibb.co/Dbk4sf4/html.png",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "https://i.ibb.co/fk4CbXz/javascript.png",
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "https://i.ibb.co/tY9nYQL/react.png",
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: "https://i.ibb.co/47qVtDn/nextjs.png",
      title: "NEXT JS",
      style: "shadow-white",
    },
    {
      id: 6,
      src: "https://i.ibb.co/mh9F7mg/node.png",
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: "https://i.ibb.co/0Gswkfr/expressjs-logo-icon-169185.png",
      title: "Express JS",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: "https://i.ibb.co/KrX38KR/firebase-logo-icon-171157.png",
      title: "Firebase",
      style: "shadow-yellow-600",
    },
    {
      id: 9,
      src: "https://i.ibb.co/8gGTJr0/Tailwind.png",
      title: "Tailwind CSS",
      style: "shadow-sky-600",
    },
   
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen py-60"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the theologies I've worked with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className={`w-20 mx-auto `} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
