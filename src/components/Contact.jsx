import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;
    const templateParams = {
      from_name: form.user_name.value,
      from_email: form.user_name.value,
      message: form.user_name.value,
    };

    const serviceId = import.meta.env.VITE_Service_id;
    const templateId = import.meta.env.VITE_Template_id;
    const userId = import.meta.env.VITE_public_key;

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        toast.success("Email sent successfully!");
        console.log("Email sent successfully!", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-xl mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={sendEmail} className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              required
              name="user_email"
              placeholder="Enter Your Email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <div className="mx-auto">
              <input
                type="submit"
                value="Let's talk
              "
                className="text-white font-bold px-5 rounded-md mt-5 pt-4 pb-0  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
