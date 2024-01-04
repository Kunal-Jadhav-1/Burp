import { CDN_URL2 } from "../utils/constants";


const ItemList = ({ items }) => {
 
    //console.log(items)
    return (
        <div>
            <div>
                {items.map((item) => {
                    return (
                        <div key={item?.card?.info?.id} className=" border border-solid border-b-gray-500 border-t-gray-500 py-2 px-3 bg-sky-50 flex justify-between">
                            <div className='max-w-lg'>
                                <p className="text-lg font-semibold  m-1">🍴-: {item?.card?.info?.name}</p>
                                <p className="text-md font-thin m-1">💸-: ₹{(item?.card?.info?.price) / 100}</p>
                                <p className="text-sm  m-1">📝-: {item?.card?.info?.description || item?.card?.info?.name} </p>
                            </div>
                            <div className="items-center flex">
                                <img className="menuImg h-[80] w-[120] m-2 rounded-lg shadow-md shadow-gray-500 border border-solid border-gray-300 mx-4" src={CDN_URL2 + (item.card.info ? item.card.info.imageId : '')}></img>
                                <div className="w-36 absolute">
                                    <button className=" my-5 mx-[48] px-[6] py-[5] w-[60] absolute bg-sky-500 text-white rounded-lg hover:bg-orange-300 hover:text-black text-sm">Add +</button>
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
