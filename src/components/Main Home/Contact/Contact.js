import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsFillSendFill } from "react-icons/bs";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uk32j5y",
        "template_qti2sfw",
        form.current,
        "prvxqaezIRoVgZ_H7"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Your massage is successfully,  thank you so much.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="flex md:flex-row flex-col  items-center  gap-x-6">
      <div className="md:space-y-2 space-y-1 lg:w-1/2 md:py-0 sm:py-2 py-1  w-full mx-auto text-center font-abc">
        <h2
          className="2xl:text-5xl lg:text-3xl md:text-xl text-lg font-abc
         font-semibold text-white "
        >
          You can contact me
        </h2>
        <h2
          className="2xl:text-5xl lg:text-3xl md:text-xl text-lg font-abc
         font-semibold text-blue-500"
        >
          If you want!
        </h2>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="lg:w-1/2 md:w-full w-11/12 mx-auto border rounded-lg border-white"
      >
        <div className=" lg:px-4 md:px-3 px-2 lg:pt-6 pt-4 lg:pb-12 md:pb-10 pb-8 space-y-4">
          <div className=" font-abc">
            <input
              type="text"
              name="user_name"
              placeholder="Type your Name"
              className=" px-4 py-2 w-full   border-b-2 border-0 bg-transparent  required    "
            />
          </div>
          <div className="">
            <input
              type="email"
              name="user_email"
              placeholder="Type Your Email"
              className=" px-4 py-2 w-full  border-b-2 border-white bg-transparent   required  "
            />
          </div>
          <div className="">
            <input
              type="text"
              name="message"
              placeholder="Your Massage"
              className=" px-4 py-8 w-full  border-b-2 border-white bg-transparent  hover:bg-none    "
            />
          </div>
          <div className="translate hover:-translate-y-2 transition-transform duration-700">
            <button className="flex items-center md:gap-x-2 gap-x-1 py-2 px-4 rounded-3xl border-2  text-white border-sky-600  hover hover:bg-gradient-to-r from-indigo-500 ... ">
              <BsFillSendFill className="text-xl text-black bg-white hover:bg-black p-1 rounded-full" />
              Send Massage
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
