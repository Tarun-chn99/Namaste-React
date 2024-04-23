import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (id) => {

    const [menu,setMenu] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        try{

            const cachedData = sessionStorage.getItem("resMenu"+id);
            if(cachedData){
                setMenu(JSON.parse(cachedData));
            }
            else{
                const response = await fetch(RESTAURANT_MENU_URL + id);
                const data = await response.json();
                sessionStorage.setItem("resMenu"+id,JSON.stringify(data));
                setMenu(data);
            }

        }catch(err){
            console.log(err);
        }
    }
    return menu;
}

export default useRestaurantMenu;