import { useState, useEffect } from "react";
// import {useSelector} from 'react-redux';

const Item = ({ item, onClose, setListOfRestaurants, listOfRestaurants,cart,setCart }) => {
    const [favourite, setFavourite] = useState(item.card.info.favourite);
    console.log(favourite)

    useEffect(() => {
        setFavourite(item.card.info.favourite);
    }, [item]);

    // const cartItems = useSelector((store) => store.cart.items);

    const addCart = () => {
        // const newCart = cart.push(item)
        // setCart(newCart)
    }

   

    const toggleFavourite = () => {
        const updatedFavourite = favourite === 1 ? 0 : 1;
        const updatedRestaurants = listOfRestaurants.map((restaurant) =>
            restaurant.card.info.id === item.card.info.id
                ? {
                    ...restaurant,
                    card: {
                        ...restaurant.card,
                        info: {
                            ...restaurant.card.info,
                            favourite: updatedFavourite,
                        },
                    },
                }
                : restaurant
        );

        setListOfRestaurants(updatedRestaurants);
        setFavourite(updatedFavourite); // Update local state for immediate UI feedback
    };

    const { name, price, description, imageId, ratings } = item.card.info;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-primary bg-opacity-50 z-50">
            <div className="bg-tertiary p-6 rounded-lg shadow-lg lg:w-1/3 mx-auto relative w-10/12">
                <button
                    className="absolute top-0 right-0 m-4 px-2 rounded-md text-tertiary bg-primary"
                    onClick={onClose}
                >
                    X
                </button>
                <img className="h-1/6 w-10/12 my-1 rounded-md mx-auto" src={imageId} alt={name} />
                <h3 className="my-2 font-sans text-center font-bold">{name}</h3>
                <p className="text-center">
                    <span className="mx-2">Price: ₹{price / 100}</span> |
                    <span className="mx-2">Rating: {ratings?.aggregatedRating?.rating || 'N/A'}🌟</span>
                </p>
                <p className="my-2 text-pretty text-primary text-clip text-center">{description}</p>
                <div className="flex justify-center space-x-4">
                    <button className="my-4 bg-primary text-tertiary px-4 py-2 rounded-md" onClick={addCart}>Add to Cart 🛒</button>
                    <button className="my-4 bg-primary text-tertiary px-4 py-2 rounded-md" onClick={toggleFavourite}>
                        {favourite === 1 ? 'Remove from Favourite ❤️' : 'Add to Favourite ❤️'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;