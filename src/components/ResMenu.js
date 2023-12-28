import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { CDN_URL2 } from '../utils/constants';

const ResMenu = () => {

    const [resDetails, setResDetails] = useState(null);
    const { resid } = useParams();
    console.log(resid)

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const menu = await fetch(
            // https://thingproxy.freeboard.io/fetch/
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6606495&lng=73.73215850000001&restaurantId=" + resid + "&catalog_qa=undefined&submitAction=ENTER"
        );

        const json = await menu.json();
        console.log(json);

        setResDetails(json?.data);
    };
    if (resDetails === null) {
        return <Shimmer />
    }
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
