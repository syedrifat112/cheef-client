import React from "react";

const Team = () => {
  return (
    <div className="text-center bg-gray-900 text-white w-[90%] mx-auto rounded-lg py-10">
        <div className=" w-[70%] mx-auto ">
            <h1 className="font-bold text-4xl pb-4">Our Team</h1>
            <p>Chef responsibilities include studying recipes, setting up menus and preparing high-quality dishes. You should be able to delegate tasks to kitchen staff to ensure meals are prepared in a timely manner</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 text-center bg-gray-900 text-white w-[90%] mx-auto rounded-lg py-8">
      <div className="py-6">
        <div className="avatar">
          <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/6ypjCbJ/pexels-2102934.jpg"  />
          </div>
        </div>
        <h1 className="font-bold my-2 ">Cornoll Quel</h1>
        <p>Co Founder</p>
      </div>
      <div className="py-6">
        <div className="avatar">
          <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/HPSd7br/pexels-elle-hughes-2696064.jpg" />
          </div>
        </div>
        <h1 className="font-bold my-2 ">Cornoll Quel</h1>
        <p>Resturant Manager</p>
      </div>
      <div className="py-6">
        <div className="avatar">
          <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/HPSd7br/pexels-elle-hughes-2696064.jpg" />
          </div>
        </div>
        <h1 className="font-bold my-2 ">Cornoll Quel</h1>
        <p>Co-Chief</p>
      </div>
      <div className="py-6">
        <div className="avatar">
          <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/HPSd7br/pexels-elle-hughes-2696064.jpg" />
          </div>
        </div>
        <h1 className="font-bold my-2 ">Cornoll Quel</h1>
        <p>Co-Chief</p>
      </div>
    </div>
    </div>
  );
};

export default Team;
