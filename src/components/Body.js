import Restaurants from "./Restaurants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();

        return () =>{
            //This functions is called when we unmount the component
        }
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            // https://thingproxy.freeboard.io/fetch/
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6606495&lng=73.73215850000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        //console.log(json)
        //Optional Chaining   
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false) return <h1>Please Check Your Internet Connection</h1>

    // //Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>
    // }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="searchBox" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="srch-btn" onClick={() => {
                        setfilteredRestaurants(listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ));
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    setfilteredRestaurants(listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    ));
                }}
                > Top Rated </button>
            </div>
            <div className="res-con">
                {
                    filteredRestaurants.map(restaurant =><Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id} className="link"> <Restaurants resData={restaurant} /></Link>)
                    // always remember to give unique key while looping on any element
                }

            </div>
        </div>
    );

};

export default Body;