import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCategory from "./MenuCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    
    const {id} = useParams();
    const menu = useRestaurantMenu(id);     //custom hook to get restaurant menu

    if(menu === null)
    return <Shimmer/>;

    const {name,avgRating,totalRatingsString,costForTwoMessage,areaName,sla,expectationNotifiers} = menu?.data?.cards[2]?.card?.card?.info;
    const category = menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        <div className="resMenu">
            
            <h2>{name}</h2>

            <div className="resInfoContainer">
                <div className="resInfo">
                    <div className="flex align-center">
                        <div><b><i>Rating: </i>{avgRating}  ({totalRatingsString})</b></div>
                        <div className="margin-lr1"><b>•</b></div>
                        <div><b>{costForTwoMessage}</b></div>
                    </div>
                    <div className="flex margin-tb1 " style={{height:"3rem"}} >
                        <div className="mapSymbol" >
                            <div className="dot"></div>
                            <div className="line"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="flex flex-column margin-lr1 space-between font14px" >
                            <p style={{marginTop:"0.2rem"}}><b>Outlet</b><span className="margin-lr1">{areaName}</span></p>
                            <p style={{paddingTop:"1.1rem"}}><b>{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</b></p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex align-center padding-1 font14px">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu" alt="" width="20px"/>
                        <p className="margin-lr-half textLightGray">{expectationNotifiers[0].text}</p>
                    </div>
                </div>
            </div>

            <h3 className="heading margin-top2">MENU</h3>
            <div className="search flex space-evenly">
                <button className="menuSearchButton textLightGray"><b>Search for dishes</b></button>
            </div>
            <div className="filter margin-lr1">
                <button>Pure Veg</button>
                <button className="margin-lr-half">Bestseller</button>
            </div>
            <hr className="margin-1 margin-top2" />
            {
                category.map?.((element) => {
                    if(element?.card?.card["@type"]?.includes("ItemCategory")){
                        return <MenuCategory category={element?.card?.card} key={element?.card?.card?.title}/>
                    }
                    else
                    return;
                })
            }
        </div>
    )
}

export default RestaurantMenu;