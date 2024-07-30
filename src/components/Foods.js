import { useState } from "react";
import Item from "./Item";

const Foods = ({ resData }) => {
    const { name, category, price, description, imageId } = resData?.card?.info || {};
    const rating = resData?.card?.info?.ratings?.aggregatedRating?.rating || 'N/A';


    return (
        <div className="relative m-4 p-2 w-64 h-80 bg-gray-150 rounded-lg hover:shadow-gray-700 hover:shadow-2xl hover:border border-tertiary hover:bg-tertiary group">
            <img className="h-36 w-60 my-1 rounded-md cursor-pointer" src={imageId} alt={name} />
            <h3 className="my-2 font-sans text-center font-bold">{name} | Category - {category}</h3>
            <h5 className="font-sans text-center">Price - ₹{price / 100} | Rating - {rating} 🌟</h5>
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-secondary px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Cart 🛒
            </button>
        </div>
    );
};

export default Foods;
