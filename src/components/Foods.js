import { useState ,useEffect} from "react";
import heartSolid from "../images/heartSolid.png";

const Foods = ({ resData,listOfRestaurants }) => {
    const { name, price, imageId } = resData?.card?.info || {};
    const rating = resData?.card?.info?.ratings?.aggregatedRating?.rating || 'N/A';

    const [favourite, setFavourite] = useState(resData?.card?.info?.favourite);
    useEffect(() => {
        setFavourite(resData?.card?.info?.favourite)
        console.log(favourite)
    }, listOfRestaurants);
    





    return (
        <div className="relative m-4 p-2 w-64 h-[90%] bg-gray-150 rounded-lg hover:shadow-gray-700 hover:shadow-2xl hover:border border-tertiary hover:bg-tertiary group">
            <img className="h-36 w-60 my-1 rounded-md cursor-pointer" src={imageId} alt={name} />
            <h3 className="my-2 font-sans text-center font-bold">{name}</h3>
            <h5 className="font-sans text-center">Price - ₹{price / 100} | Rating - {rating} 🌟</h5>
            {favourite === 1 && (
                <img className="absolute top-2 right-2 w-6 h-6" src={heartSolid} alt="favourite" />
            )}

        </div>
    );
};

export default Foods;
