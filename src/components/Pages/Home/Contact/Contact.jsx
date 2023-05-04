import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-900 w-[90%] mx-auto rounded-lg">
      <div className="flex flex-col sm:flex-row items-center  p-4 ">
        <div className="w-full sm:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Contact"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 p-8">
          <h2 className="text-white text-3xl font-semibold mb-10">For Contact</h2>
          <div className="mb-4">
            <input
              placeholder="Your Name"
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Your Email"
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Write Your Message"
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows="4"
            ></textarea>
          </div>
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
