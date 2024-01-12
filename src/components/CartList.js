import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { CDN_URL2 } from "../utils/constants";

const CartList = (cartItems) => {
    //console.log(cartItems)
    const cartlist = cartItems?.items
    


    return (
        <div>
            <div>
                {cartlist.map((item) => {
                    // const [count, setCount] = useState(0)
                    // const dispatch = useDispatch();
                    // const handleAddItem = (item) => {
                    //     //dispatch action

                    //     dispatch(addItem(item))
                    //     setCount(count + 1);
                    // }

                    // const handleRemoveItem = () => {

                    //     if (count > 0) {
                    //         dispatch(removeItem())
                    //         setCount(count - 1);
                    //         
                    //     }
                    // }
                    // if(cartlist.indexOf(item?.card?.info?.id) !== -1){
                    //     dispatch(addItem(item))
                    //     setCount(count+1)
                    //     
                    //     return
                    // }
                    return (
                        <div>
                            <div key={item?.card?.info?.id} className=" border border-solid border-b-gray-500 border-t-gray-500 py-2 px-3 bg-sky-50 flex justify-between">
                                <div className='max-w-lg'>
                                    <p className="text-lg m-1">🍴-: {item?.card?.info?.name}</p>
                                    <p className="text-sm font-thin m-1">💸-: ₹{(item?.card?.info?.price) / 100}</p>
                                </div>
                                <div className="items-center flex justify-around relative p-0 m-0">
                                    <img className="menuImg h-[50] w-[70] m-2 rounded-lg shadow-md shadow-gray-500 border border-solid border-gray-300 mx-4" src={CDN_URL2 + (item.card.info ? item.card.info.imageId : '')}></img>

                                </div>


                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CartList
