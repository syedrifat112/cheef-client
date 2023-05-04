import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChefDetailsCard from "./ChefDetailsCard";
const navigation = [
  { title: "Customers", path: "javascript:void(0)" },
  { title: "Careers", path: "javascript:void(0)" },
];

const ChefDetails = () => {
  const { id } = useParams();
  const [chefDetails, setChefDetails] = useState({});
  useEffect(() => {
    axios
      .get(`https://chef-server-syedrifat112.vercel.app/home/${id}`)
      .then((res) => setChefDetails(res?.data));
  }, [id]);
  console.log(chefDetails);
  const {
    chefName,
    recipes,
    image,
    description,
    likes,
    experience,
    NumbersOfRecipes,
  } = chefDetails;
  return (
    <div>
      <div className="bg-gray-900 w-[90%] mx-auto rounded-lg">
        <section className=" mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-white font-bold text-4xl xl:text-5xl">
              {chefName}
            </h1>
            <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
              {description}
            </p>
            <h3 className="text-white font-bold text-2xl xl:text-2xl">
              {experience}
            </h3>
            <h3 className="text-white font-bold text-xl xl:text-xl">
              {likes} <span>Likes</span>
            </h3>
            <h3 className=" text-white font-bold text-xl xl:text-xl">
              {NumbersOfRecipes} <span>Recipes</span>
            </h3>
          </div>
          <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
            <figure>
              <img className="mt-12 rounded-lg" src={image} alt="chef" />
            </figure>
          </div>
        </section>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto w-[90%] my-10">
      {recipes?.map((recipe) => (
        <ChefDetailsCard
          key={recipe.recipe_id}
          recipe={recipe}
        ></ChefDetailsCard>
      ))}
      </div>
    </div>
  );
};

export default ChefDetails;
