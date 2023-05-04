import React from 'react';
const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
]

const Banner = () => {
    return (
        <div className="bg-gray-900 py-10 w-[90%] mx-auto mb-4 rounded-lg">
        <section className=" mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
            <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                <h1 className="text-white font-bold text-4xl xl:text-5xl">
                cooking, the act of using heat to
                     <span className="text-indigo-400"> prepare food for consumption</span>
                </h1>
                <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                Cooking, cookery, or culinary arts is the art, science and craft of using heat to improve the palatability, digestibility, nutrition, or safety of food. Cooking techniques and ingredients vary widely, from grilling food over an open fire to using electric stoves.
                </p>
               
            </div>
            <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                <img src="https://i.ibb.co/s2NR4w7/pexels-chan-walrus-958545.jpg" />
            </div>
        </section>
    </div>
    );
};

export default Banner;