import Restaurants from "./Restaurants";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    filteredList=listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.3
                        );
                    setListOfRestaurants(filteredList); 
                }} 
                > Top Rated </button>
            </div>
            <div className="res-con">
                {
                   listOfRestaurants.map(restaurant => <Restaurants key={restaurant.info.id} resData={restaurant}/>) 
                    // always remember to give unique key while looping on any element
                }
                
            </div>
        </div>
    );

};

export default Body;