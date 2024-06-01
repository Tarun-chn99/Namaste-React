import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";
import Filter from "./Filter"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    
    const resList = useRef();
    const [restaurantList, setRestaurantList] = useState([]);
    const onlineStatus = useOnlineStatus();
    resList.current = useRestaurantList(setList);     
   
    function setList(props){
        setRestaurantList(props)
    }

    if(onlineStatus === false)
    return <h1 className="margin-2">Loooks like you're offline, Please check your internet connection</h1>

    return( 

            <div className="body-container">
                <h1>Hey</h1>
                <Filter resList={resList.current} setResList={setList} />
                {restaurantList.length !== 0 ?  
                <div className="res-container flex wrap space-evenly">
                    {restaurantList.map?.((res) => {
                        return  <Link className="linkStyle" key={res.info.id} to={`/restaurantMenu/${res.info.id}`} >
                                   <RestaurantCard resList={res}/>
                                </Link>
                    })}
                </div>
                :
                <Shimmer/>}
            </div>
    );
}

export default Body;




