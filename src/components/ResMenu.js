import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useResMenu from '../utils/useResMenu';
import { CDN_URL2 } from '../utils/constants';

const ResMenu = () => {
    //getting the restaurant id
    const { resid } = useParams();
    console.log(resid)

    // import data using useResMenu hook
    const resDetails = useResMenu(resid);
    
    if (resDetails === null) {
        return <Shimmer />
    }

    //deconstructing necessary components
    const { name, cuisines, costForTwoMessage } = resDetails?.cards?.[0]?.card?.card?.info || {};
    if (resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) {
        itemCards = resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    } else if (resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards) {
        itemCards = resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    } else {
        itemCards = [];
    }

    return (
        <div className="menu">
            <h2 className='menu-text'>{name}</h2>
            <h5 className='menu-text'>{ resDetails?.cards[0]?.card?.card?.info?.sla ?  resDetails?.cards[0]?.card?.card?.info?.sla?.lastMileTravel : ""} kms | { resDetails?.cards[0]?.card?.card?.info?.sla ? resDetails?.cards[0]?.card?.card?.info?.sla?.maxDeliveryTime : "" } mins</h5>
            <h4 className='menu-text'>Cuisines - {cuisines.join(",")} | Cost for 2 - {costForTwoMessage}</h4>
            <h3 className='menu-text'>Menu</h3>
            <ul>
                {itemCards.map((item) => {
                    console.log(item);
                    return (
                        <li key={item.card.info.id}>
                            <div className='menu-tile'>
                                <div>
                                <p className="tile-text"><b>{item.card.info.name}</b></p>
                                <p className='tile-text'>Rs.{item.card.info.price / 100}</p>
                                </div>   
                                <img className="menuImg" src={CDN_URL2 + (item.card.info ? item.card.info.imageId : '')}></img>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default ResMenu
