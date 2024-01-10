import Restaurants from "./Restaurants";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from '../utils/userContext'


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    //console.log(listOfRestaurants);
    // const userData = useContext(UserContext);
    // console.log(userData)
    // const { loggedInUser } = userData
    // console.log(loggedInUser)

    const {setUserName,loggedInUser} = useContext(UserContext)

    useEffect(() => {
        fetchData();

        return () => {
            //This functions is called when we unmount the component
        }
    }, []);


    // https://thingproxy.freeboard.io/fetch/
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6439281&lng=73.7577146&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        //console.log(json)
        //Optional Chaining   
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>Please Check Your Internet Connection</h1>

    // //Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>
    // }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='bg-gray-100'>
                <div className="p-4 text-center">
                    <label><b>User Name: </b></label>
                    <input type="text" className=" p-1 m-1 border border-solid border-black rounded-md w-44" value={loggedInUser} onChange={(e) => {setUserName(e.target.value)}}/>
                </div>
            <div className="text-center p-2 text-lg">
                <p>
                    "Sup <b>{loggedInUser}</b>, These are the restaurants we got for you today !!!"
                </p>
            </div>
            <div className="flex mx-14">
                <div className="m-1">
                    <input type="text" className="p-1 m-1 border border-solid border-black rounded-md w-60 " value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="mx-2 my-3 px-2 py-1 border border-solid border-black bg-black text-white rounded-lg hover:bg-white hover:text-black font-sans italic" onClick={() => {
                        setfilteredRestaurants(listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ));
                    }}>Search🔍</button>
                </div>
                <div className="m-1">
                    <button className="mx-2 my-3 px-2 py-1 border border-solid border-black bg-black text-white rounded-lg hover:bg-white hover:text-black font-sans italic" onClick={() => {
                        setfilteredRestaurants(listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        ));
                    }}
                    > Top Rated⭐</button>
                </div>
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