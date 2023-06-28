import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaEye } from "react-icons/fa";

const Modal = ({ closeModal, isOpen, project }) => {
  const {
    title,
    technologies,
    serverside_link,
    clientside_link,
    live_link,
    description,
    image,
  } = project;
  console.log(project);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex w-full min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden rounded-2xl  p-6 text-left align-middle shadow-lg transition-all bg-gradient-to-b from-black to-gray-800 shadow-white">
                <Dialog.Title
                  as="h3"
                  className="text-4xl pb-5 font-bold text-center leading-6 text-sky-600"
                >
                  {title}
                </Dialog.Title>
                <div className="card shadow-xl">
                  <figure className="h-[50vh]">
                    <img
                      src={image}
                      alt="Shoes"
                      className="object-cover bg-cover h-fit w-full"
                    />
                  </figure>
                  <div className="card-body text-white shadow-xl border-y-yellow">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="flex flex-wrap gap-5 items-center">
                      Technologies:
                      {technologies.map((item) => (
                        <div
                          key={item}
                          className="rounded-md bg-gray-500 px-5 py-2 text-white"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="card-actions justify-center gap-8 mt-5">
                      <a
                        href={live_link}
                        className="btn btn-outline border-white text-white"
                      >
                        Live <FaEye size={25} />
                      </a>
                      <a
                        href={clientside_link}
                        className="btn btn-outline border-yellow text-white"
                      >
                        ClineSide <FaEye size={25} />
                      </a>
                      <a
                        href={serverside_link}
                        className="btn btn-outline border-white text-white"
                      >
                        ServerSide <FaEye size={25} />
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
