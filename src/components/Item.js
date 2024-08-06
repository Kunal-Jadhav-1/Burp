import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateCartItem } from "../Store/cartSlice"; // Assuming you have an updateCartItem action

const Item = ({ item, onClose, setListOfRestaurants, listOfRestaurants }) => {
    const [favourite, setFavourite] = useState(item.card.info.favourite);
    const [quantity, setQuantity] = useState(item.card.info.quantity || 0);

    useEffect(() => {
        setFavourite(item.card.info.favourite);
    }, [item]);

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = () => {
        const itemExists = cartItems.some(cartItem => cartItem.card.info.id === item.card.info.id);

        const updatedRestaurants = listOfRestaurants.map((restaurant) => {
            if (restaurant.card.info.id === item.card.info.id) {
                return {
                    ...restaurant,
                    card: {
                        ...restaurant.card,
                        info: {
                            ...restaurant.card.info,
                            quantity: 1,
                        },
                    },
                };
            }
            return restaurant;
        });

        setListOfRestaurants(updatedRestaurants);
        setQuantity(1);

        if (!itemExists) {
            dispatch(addToCart({ ...item, card: { ...item.card, info: { ...item.card.info, quantity: 1 } } }));
            console.log("item added");
        } else {
            const updatedCartItems = cartItems.map(cartItem =>
                cartItem.card.info.id === item.card.info.id
                    ? { ...cartItem, card: { ...cartItem.card, info: { ...cartItem.card.info, quantity: cartItem.card.info.quantity + 1 } } }
                    : cartItem
            );
            dispatch(updateCartItem(updatedCartItems));
            console.log("item quantity updated");
        }

        console.log(cartItems);
    };

    const incrementQuantity = () => {
        const updatedRestaurants = listOfRestaurants.map((restaurant) => {
            if (restaurant.card.info.id === item.card.info.id) {
                return {
                    ...restaurant,
                    card: {
                        ...restaurant.card,
                        info: {
                            ...restaurant.card.info,
                            quantity: (restaurant.card.info.quantity || 0) + 1,
                        },
                    },
                };
            }
            return restaurant;
        });

        setListOfRestaurants(updatedRestaurants);
        setQuantity(quantity + 1);

        const updatedCartItems = cartItems.map(cartItem =>
            cartItem.card.info.id === item.card.info.id
                ? { ...cartItem, card: { ...cartItem.card, info: { ...cartItem.card.info, quantity: cartItem.card.info.quantity + 1 } } }
                : cartItem
        );
        dispatch(updateCartItem(updatedCartItems));
    };

    const decrementQuantity = () => {
        const updatedRestaurants = listOfRestaurants.map((restaurant) => {
            if (restaurant.card.info.id === item.card.info.id) {
                return {
                    ...restaurant,
                    card: {
                        ...restaurant.card,
                        info: {
                            ...restaurant.card.info,
                            quantity: Math.max((restaurant.card.info.quantity || 0) - 1, 0),
                        },
                    },
                };
            }
            return restaurant;
        });

        setListOfRestaurants(updatedRestaurants);
        setQuantity(Math.max(quantity - 1, 0));

        const updatedCartItems = cartItems.map(cartItem =>
            cartItem.card.info.id === item.card.info.id
                ? { ...cartItem, card: { ...cartItem.card, info: { ...cartItem.card.info, quantity: Math.max(cartItem.card.info.quantity - 1, 0) } } }
                : cartItem
        );
        dispatch(updateCartItem(updatedCartItems));
    };

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
                    {quantity === 0 ? (
                        <button className="my-4 bg-primary text-tertiary px-4 py-2 rounded-md" onClick={addCart}>Add to Cart 🛒</button>
                    ) : (
                        <div className="flex items-center space-x-0 ">
                            <button className="my-4 bg-primary text-tertiary border border-t-primary border-b-primary px-4 py-2 rounded-l-md" onClick={decrementQuantity}>-</button>
                            <button className="font-bold border border-t-primary border-b-primary px-3 py-2">{quantity}</button>
                            <button className="my-4 bg-primary text-tertiary border border-t-primary border-b-primary px-4 py-2 rounded-r-md" onClick={incrementQuantity}>+</button>
                        </div>
                    )}
                    <button className="my-4 bg-primary text-tertiary px-4 py-2 rounded-md" onClick={toggleFavourite}>
                        {favourite === 1 ? '"Un"Favourite ❤️' : 'Favourite ❤️'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
