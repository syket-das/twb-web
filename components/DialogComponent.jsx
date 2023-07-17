import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { AiFillCloseCircle, AiOutlineCloseCircle, AiTwotoneCloseSquare } from 'react-icons/ai';

const DialogComponent = ({ title, subtitle, children, isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full lg:max-w-[60vw] max-h-[80vh] transform overflow-x-hidden overflow-y-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                  
                >
                  <div className="w-full flex justify-end">
                    <button
                      type="button"
                      className=" rounded-md border border-transparent 
                      p-2 text-red-400 hover:text-red-500 bg-transparent hover:bg-gray-100
                      focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      <AiOutlineCloseCircle size={24} />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{subtitle}</p>
                  </div>
                  <div className="mt-4">{children}</div>

                  <div className="mt-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DialogComponent;
