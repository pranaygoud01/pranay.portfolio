import React from "react";

function Contact() {
  return (
    <div className="bg-neutral-950 h-screen flex flex-col">
      <div className="text-white text-center">
        <h1 className="text-3xl font-bold pt-5 max-md:text-2xl">Contact</h1>
        <p className="p-4 max-md:text-sm">
          Submit the below form to get in touch with me.
        </p>
      </div>
      <div className="w-full flex justify-center ">
        <form
          action="https://getform.io/f/d5270491-33f2-45fc-b9ac-b4fa44597ea4"
          method="POST"
          className="flex flex-col w-6/12 max-md:w-10/12"
        >
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            className="p-2 bg-transparent border-1 text-white rounded-md focus:outline-none mt-3"
          />
          <input
            type="text"
            placeholder="Enter your Email"
            name="email"
            className="p-2 bg-transparent border-1 border-white text-white rounded-md focus:outline-none mt-3"
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your Message"
            className="p-2 bg-transparent border-1 border-white rounded-md text-white focus:outline-none mt-3"
          ></textarea>
          <button className="text-white border-1  border-white p-2 rounded-md mt-3 hover:bg-neutral-800">
            Let's Talk
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
