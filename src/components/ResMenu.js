import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom';
import { CDN_URL2 } from '../utils/constants';

const ResMenu = () => {

    const [resDetails ,setResDetails]= useState(null);
    const {resid}= useParams();
    console.log(resid)
    
    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const menu = await fetch(
            // https://thingproxy.freeboard.io/fetch/
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6606495&lng=73.73215850000001&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER"
            );
            
            const json = await menu.json();
            console.log(json);
            
            setResDetails(json?.data);
        };
        if(resDetails===null){
            return <Shimmer/>
        }
        const { name, cuisines, costForTwoMessage } = resDetails?.cards?.[0]?.card?.card?.info || {};
        if (resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) {
            itemCards = resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        } else if (resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards) {
            itemCards = resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        } else {
            itemCards = [];
        }        
    
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>Cuisines - {cuisines.join(",")} | Cost for 2 - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) =>  <li key={item.card.info.id}> {item.card.info.name} - Rs.{item.card.info.price/100}  <img className="menuImg"  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.ImageId}></img></li>)}
            </ul>
        </div>
    )
}

export default ResMenu
