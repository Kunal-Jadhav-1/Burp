import { CDN_URL } from "../utils/constants";

const Restaurants = (props) => {
    const { resData } = props;
    const { name, avgRating, cuisines, costForTwo, areaName } = resData?.info
    return (
        <div className="m-4 p-2 w-64 h-80 bg-gray-150 rounded-lg  hover:shadow-gray-700 hover:shadow-2xl hover:border border-gray-200 hover:bg-indigo-50">
            <img className="h-36 w-60 my-1 rounded-md cursor-pointer" src={CDN_URL + resData.info.cloudinaryImageId}></img>
            <h3 className="my-2 font-sans text-center font-bold">{name} | Rating-{avgRating}</h3>
            <h5 className="text-center m-2 text-gray-800 break-words overflow-hidden whitespace-no-wrap w-240 truncate font-serif">Cuisine - {cuisines.join(",")}</h5>
            <h5 className="font-sans text-center">Cost - {costForTwo} | Area - {areaName}</h5>
        </div>
    )
}



export default Restaurants;