import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useResMenu from '../utils/useResMenu';
import { CDN_URL2 } from '../utils/constants';
import ResCategory from './ResCategory';

const ResMenu = () => {
    //getting the restaurant id
    const { resid } = useParams();
    //console.log(resid)

    // import data using useResMenu hook
    const resDetails = useResMenu(resid);

    if (resDetails === null) {
        return <Shimmer />
    }

    //console.log(resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    //deconstructing necessary components
    const { name, cuisines, costForTwoMessage } = resDetails?.cards?.[0]?.card?.card?.info;
    const {lastMileTravel,maxDeliveryTime } = resDetails?.cards[0]?.card?.card?.info?.sla;
    
    //deconstructing item categories
    const categories =
        resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||  c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
    //console.log(categories);

    return (
        <div className="mx-auto text-left max-w-4xl border border-solid border-gray-500 bg-slate-200 rounded-2xl m-2 italic">
            <h2 className='m-4 font-bold text-2xl'>{name}</h2>
            <h5 className='m-4 text-sm'>{lastMileTravel} kms | {maxDeliveryTime} mins</h5>
            <h4 className='m-4 text-md font-semibold'>Cuisines - {cuisines.join(",")} | Cost for 2 - {costForTwoMessage}</h4>
            <h3 className='m-6 underline italic text-center text-lg font-extrabold'>MENU</h3>
            <h3>{categories.map((category) => (
                <ResCategory 
                    key={category.card.card.title} 
                    category={category?.card?.card}
                    />
            ))}</h3>
        </div>
    )
}

export default ResMenu
