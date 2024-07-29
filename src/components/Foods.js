import { useState } from "react";
import Item from "./Item";

const Foods = ({ resData }) => {
    const { name, category, price, description, imageId } = resData?.card?.info || {};
    const rating = resData?.card?.info?.ratings?.aggregatedRating?.rating || 'N/A';

    const [visit, setVisit] = useState(false);

    const visitItem = () => {
        setVisit(true);
    };
    // console.log(resData)

    return (
        <div className="m-4 p-2 w-64 h-80 bg-gray-150 rounded-lg hover:shadow-gray-700 hover:shadow-2xl hover:border border-tertiary hover:bg-tertiary">
            <img className="h-36 w-60 my-1 rounded-md cursor-pointer" src={imageId} alt={name} />
            <h3 className="my-2 font-sans text-center font-bold">{name} | Category - {category}</h3>
            <h5 className="font-sans text-center">Price - ₹{price / 100} | Rating - {rating} 🌟</h5>
        </div>
    );
};

export default Foods;