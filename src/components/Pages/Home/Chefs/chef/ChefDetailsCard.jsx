import React, { useState } from "react";
import {  Toaster, toast } from "react-hot-toast";

const ChefDetailsCard = ({ recipe }) => {
    const [isFavorite, SetIsFavorite] = useState(false);
    const handleFavorite = () => {
        SetIsFavorite(true);
        toast.success("Favorite Recipe Added")
    }
  console.log(isFavorite);
  const { recipe_name, rating, cooking_method, ingredients } = recipe;
  return (
    <div>
      <div className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2">
        <div>
          <span className="text-indigo-600 font-medium"> <span>Rating </span> {rating}</span>
          <div className="mt-4 text-gray-800 text-3xl font-semibold">
            {recipe_name}
          </div>
        </div>
        <ul className="py-8 space-y-3">
            <h1 className="text-3xl font-semibold">Ingredients</h1>
          {ingredients?.map((data, idx) => (
            <li key={idx} className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {data}
            </li>
          ))}
        </ul>
        <ul className="py-8 space-y-3">
            <h1 className="text-3xl font-semibold">Cooking Method ---</h1>
          {cooking_method?.map((data, idx) => (
            <li key={idx} className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {data}
            </li>
          ))}
        </ul>
        <div className="flex-1 flex items-end">
          <button  onClick={handleFavorite} className={` px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 ${isFavorite ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isFavorite}>
          Favorite
          </button>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default ChefDetailsCard;
