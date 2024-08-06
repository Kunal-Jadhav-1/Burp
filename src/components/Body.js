import { useEffect, useState, useContext } from "react";
import UserContext from '../utils/userContext';
import { food } from "../utils/data";
import Foods from "./Foods";
import Shimmer from "./Shimmer";
import Item from "./Item";  // Import the Popup component

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
        const itemCards = food || [];
        if (Array.isArray(itemCards)) {
            setListOfRestaurants(itemCards);
            setFilteredRestaurants(itemCards);
        } else {
            console.error("Fetched data is not an array:", itemCards);
        }
    };

    const handleFoodClick = (food) => {
        setSelectedFood(food);
        // console.log("Selected Food:", food); // Log to ensure the correct food is selected
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

    // console.log(cart)

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='bg-secondary my-0'>
            <div className="my-4 text-center p-2 text-lg text-primary">
                <p>
                    "Sup <b>{loggedInUser}</b>, These are the dishes we got for you today !!!"
                </p>
            </div>
            <div className="flex mx-14">
                <div className="m-1">
                    <input 
                        type="text" 
                        className="p-1 m-1 border border-solid border-secondary text-primary font-serif font-light rounded-md w-60" 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)} 
                        placeholder="Search restaurants..." 
                    />
                    <button 
                        className="mx-2 my-3 px-2 py-1 border border-solid border-secondary bg-primary text-secondary rounded-lg hover:bg-secondary hover:text-primary font-sans italic" 
                        onClick={handleSearch}
                    >
                        Search🔍
                    </button>
                </div>
                <div className="mx-3 my-4 px-2 py-1 content-center">
                    |
                </div>
                <div className="m-1">
                    <button 
                        className="mx-2 my-3 px-2 py-1 border border-solid border-secondary bg-primary text-secondary rounded-lg hover:bg-secondary hover:text-primary font-sans italic" 
                        onClick={handleFilterAll}
                    >
                        All🍽️
                    </button>
                </div>
                <div className="m-1">
                    <button 
                        className="mx-2 my-3 px-2 py-1 border border-solid border-secondary bg-primary text-secondary rounded-lg hover:bg-secondary hover:text-primary font-sans italic" 
                        onClick={handleFilterTopRated}
                    >
                        Top Rated⭐
                    </button>
                </div>
                <div className="m-1">
                    <button 
                        className="mx-2 my-3 px-2 py-1 border border-solid border-secondary bg-primary text-secondary rounded-lg hover:bg-secondary hover:text-primary font-sans italic" 
                        onClick={handleFilterFavourites}
                    >
                        Favourites❤️
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap mx-8">
                {filteredRestaurants.map(food => (
                    <div 
                        key={food?.card?.info?.id} 
                        onClick={() => handleFoodClick(food)}
                        className="cursor-pointer"  // Added cursor pointer for better UX
                    >
                        <Foods resData={food} listOfRestaurants={listOfRestaurants} />
                    </div>
                ))}
            </div>
            {selectedFood && <Item item={selectedFood} onClose={handleClosePopup} setListOfRestaurants={setListOfRestaurants} listOfRestaurants={listOfRestaurants}/>}
        </div>
    );
};

export default Body;
