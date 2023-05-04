import React from "react";
import { Link } from "react-router-dom";

const Chef = ({chef}) => {
    const { id ,chefName, image, NumbersOfRecipes,likes,experience} = chef
  return ( 
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="chef"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <h3 className=" font-bold text-2xl xl:text-2xl">{experience} experience</h3>
          <h3 className=" font-bold text-xl xl:text-xl">{likes} <span>Likes</span></h3>
          <h3 className=" font-bold text-xl xl:text-xl">{NumbersOfRecipes} <span>Recipes</span></h3>
        
        <div className="card-actions justify-end">
          <Link to={`/${id}`} className="btn btn-primary">View Recipes</Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
