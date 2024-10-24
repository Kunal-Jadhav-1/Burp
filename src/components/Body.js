import { useEffect, useState, useContext } from "react";
import UserContext from '../utils/userContext';
import { food } from "../utils/data";
import Foods from "./Foods";
import Shimmer from "./Shimmer";
import Item from "./Item";  // Import the Popup component
import axios from "axios";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedFood, setSelectedFood] = useState(null); // State to manage selected food item

    const { loggedInUser } = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://burp-server.onrender.com/api/foods');
            const itemCards = response.data;  // Access the data from the response
            // console.log(itemCards);
            if (Array.isArray(itemCards)) {
                setListOfRestaurants(itemCards);
                setFilteredRestaurants(itemCards);
            } else {
                console.error("Fetched data is not an array:", itemCards);
            }
        } catch (error) {
            console.error("Error fetching food data:", error);
        }
    };


    const handleFoodClick = (food) => {
        setSelectedFood(food);
    };

    const handleClosePopup = () => {
        setSelectedFood(null);
    };

    const handleSearch = () => {
        const filtered = listOfRestaurants.filter(
            (res) => res?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    };

    const handleFilterAll = () => {
        setFilteredRestaurants(listOfRestaurants);
    };

    const handleFilterTopRated = () => {
        const topRated = listOfRestaurants.filter(
            (res) => res?.card?.info?.ratings?.aggregatedRating?.rating > 4
        );
        setFilteredRestaurants(topRated);
    };

    const handleFilterFavourites = () => {
        const favourites = listOfRestaurants.filter(
            (res) => res?.card?.info?.favourite === 1
        );
        setFilteredRestaurants(favourites);
    };

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='bg-secondary my-0'>
            <div className="my-4 text-center p-2 text-lg text-primary">
                <p>
                    "Sup <b>{loggedInUser}</b>, These are the dishes we got for you today !!!"
                </p>
            </div>
            <div className="flex flex-col px-4 sm:px-14">
                <div className="flex flex-col md:flex-row w-full md:w-[50%] mb-4 md:space-x-3">
                    <input
                        type="text"
                        className="p-2 bg-[#f2fbff] border border-solid border-secondary text-primary font-serif font-light rounded-md w-full md:w-[80%] mb-2 md:mb-0 items-center"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search.."
                    />
                    <button
                        className="px-4 py-2 border border-solid border-secondary bg-primary text-secondary rounded-lg hover:bg-secondary hover:text-primary font-sans italic w-full md:w-[30%]"
                        onClick={handleSearch}
                    >
                        Search🔍
                    </button>
                </div>
                <div className="flex flex-wrap gap-2">
                    <button
                        className="px-4 py-2 border border-solid border-secondary bg-primary text-secondary rounded-lg hover:bg-secondary hover:text-primary font-sans italic flex-1 sm:flex-none"
                        onClick={handleFilterAll}
                    >
                        All🍽️
                    </button>
                    <button
                        className="px-4 py-2 border border-solid border-secondary bg-primary text-secondary rounded-lg hover:bg-secondary hover:text-primary font-sans italic flex-1 sm:flex-none"
                        onClick={handleFilterTopRated}
                    >
                        Top⭐
                    </button>
                    <button
                        className="px-4 py-2 border border-solid border-secondary bg-primary text-secondary rounded-lg hover:bg-secondary hover:text-primary font-sans italic flex-1 sm:flex-none"
                        onClick={handleFilterFavourites}
                    >
                        Fav❤️
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap mx-12 md:px-20 lg:px-8 sm:mx-0 sm:items-center">
                {filteredRestaurants.map(food => (
                    <div
                        key={food?.card?.info?.id}
                        onClick={() => handleFoodClick(food)}
                        className="cursor-pointer"
                    >
                        <Foods resData={food} listOfRestaurants={listOfRestaurants} />
                    </div>
                ))}
            </div>
            {selectedFood && <Item item={selectedFood} onClose={handleClosePopup} setListOfRestaurants={setListOfRestaurants} listOfRestaurants={listOfRestaurants} />}
        </div>
    );
};

export default Body;
