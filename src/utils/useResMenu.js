import { useState, useEffect } from 'react';


// custom hook
const useResMenu = (resid) => {
    // useState hook for creating state variables
    const [resDetails, setResDetails] = useState(null);

    //useEffect to fetch data after initial render
    useEffect(() => {
        fetchMenu();
    }, []);

    // async fetch funtion for fetching data
    const fetchMenu = async () => {
        const menu = await fetch(
            // https://thingproxy.freeboard.io/fetch/
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6606495&lng=73.73215850000001&restaurantId=" + resid + "&catalog_qa=undefined&submitAction=ENTER"
        );

        const json = await menu.json();
        console.log(json);

        setResDetails(json?.data);
    };

    return resDetails;
}


export default useResMenu;
