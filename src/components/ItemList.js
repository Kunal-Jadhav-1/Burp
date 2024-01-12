import { useDispatch } from 'react-redux';
import { CDN_URL2 } from "../utils/constants";
import { addItem, removeItem } from '../utils/cartSlice'
import { useState } from 'react'
// import { addValue, removeValue } from '../utils/billSlice';


const ItemList = ({ items }) => {
    //console.log(items)

    
    return (
        <div>
            <div>
                {items.map((item) => {
                    const [count, setCount] = useState(0)
                    const dispatch = useDispatch();
                    const handleAddItem = (item) => {
                        //dispatch action

                        dispatch(addItem(item))
                        setCount(count + 1);
                        
                    }

                    const handleRemoveItem = () => {

                        if (count > 0) {
                            dispatch(removeItem())
                            setCount(count - 1);
                        }
                    }
                    return (
                        <div key={item?.card?.info?.id} className=" border border-solid border-b-gray-500 border-t-gray-500 py-2 px-3 bg-sky-50 flex justify-between">
                            <div className='max-w-lg'>
                                <p className="text-lg font-semibold  m-1">🍴-: {item?.card?.info?.name}</p>
                                <p className="text-xl font-thin m-1">💸-: ₹{(item?.card?.info?.price) / 100}</p>
                                <p className="text-sm  m-1">📝-: {item?.card?.info?.description || item?.card?.info?.name} </p>
                            </div>
                            <div className="items-center flex justify-around relative p-0 m-0">
                                <img className="menuImg h-[80] w-[120] m-2 rounded-lg shadow-md shadow-gray-500 border border-solid border-gray-300 mx-4" src={CDN_URL2 + (item.card.info ? item.card.info.imageId : '')}></img>
                                <div className=" absolute bottom-0 flex">
                                    <button className=" px-[6] rounded-l-md bg-sky-500 text-white  hover:bg-orange-300 hover:text-black text-sm" onClick={() => handleRemoveItem()}>-</button>
                                    <h6 className='align-middle bg-white px-2 text-sm'>{count}</h6>
                                    <button className=" px-[5] rounded-r-md bg-sky-500 text-white  hover:bg-orange-300 hover:text-black text-sm" onClick={() => handleAddItem(item)}>+</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default ItemList
