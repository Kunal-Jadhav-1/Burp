import { CDN_URL } from "../utils/constants";

const Restaurants = (props) => {
    const {resData}=props;
    const {name,avgRating,cuisines,costForTwo,areaName}=resData?.info
    return (
        <div className="res-card">
            <img className="resImg" src={CDN_URL+resData.info.cloudinaryImageId}></img>
            <h3 className="text">{name} | Rating-{avgRating} *</h3>
            <h5 className="text">Cuisine - {cuisines.join(",")}</h5>
            <h5 className="text">Cost - {costForTwo} | Area - {areaName}</h5>
            <h5 className="text"></h5>
        </div>
    )
}

export default Restaurants;