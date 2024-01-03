import Restaurants from "./Restaurants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    //console.log(listOfRestaurants);

    useEffect(() => {
        fetchData();

        return () => {
            //This functions is called when we unmount the component
        }
    }, []);


    // https://thingproxy.freeboard.io/fetch/
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.645566&lng=73.75587589999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        //console.log(json)
        //Optional Chaining   
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>Please Check Your Internet Connection</h1>

    // //Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>
    // }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='bg-gray-100'>
            <div className="flex mx-14">
                <div className="m-1">
                    <input type="text" className="m-1 border border-solid border-black rounded-md " value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="mx-3 my-3 px-2 py-1 border border-solid border-black bg-black text-white rounded-lg hover:bg-white hover:text-black" onClick={() => {
                        setfilteredRestaurants(listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ));
                    }}>Search</button>
                </div>
                <button className="mx-3 my-3 px-2 py-1 border border-solid border-black bg-black text-white rounded-lg hover:bg-white hover:text-black" onClick={() => {
                    setfilteredRestaurants(listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    ));
                }}
                > Top Rated </button>
            </div>
            <div className="flex flex-wrap  mx-8">
                {
                    filteredRestaurants.map(restaurant => <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> <Restaurants resData={restaurant} /></Link>)
                    // always remember to give unique key while looping on any element
                }

            </div>
        </div>
    );

};

export default Body;