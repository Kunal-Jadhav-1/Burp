import ItemList from "./ItemList"
import { useState } from 'react'

const ResCategory = (props) => {

    
    //console.log(props)
    const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowItems(!showItems);
    };

    return (
        <div>
            <div className='border border-solid border-b-gray-500 border-t-gray-500 cursor-pointer text-lg px-3 py-2 my-2'>
                <div className="flex justify-between bg-white py-2 px-3 text-xl font-bold" onClick={handleClick}>
                    <span className=''>
                        {props?.category?.title} ({(props?.category?.itemCards || props?.category?.categories[0]?.itemCards).length})
                    </span>
                    <span>🔽</span>
                </div>
                <div>
                    {showItems && <ItemList items={props?.category?.itemCards || props?.category?.categories[0]?.itemCards} />}
                </div>
            </div>


        </div>
    )
}

export default ResCategory
