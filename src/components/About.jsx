const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-10 "
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full px-5 sm:px-0">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-base md:text-xl mt-10 text-justify">
          As an ambitious Frontend Developer, my goal is to contribute my skills and enthusiasm to a dynamic and forwardthinking organization. With a passion for front-end development and a strong foundation in React, I aim to leverage my technical expertise and creativity to create immersive and user-friendly web applications. I am determined to make a significant impact in the field of web development and advance my career as a Frontend Developer
        </p>

        <br />
        <div className="md:flex justify-between">
          <p>Phone: +8801874824104</p>
          <p>Email: mohammadibrahim2224@gmail.com</p>
          <p>Githube: github.com/moham</p>
          <p>Linkedin: linkden.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;
