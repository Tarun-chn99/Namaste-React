import { RES_IMG_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
    
    const {name,cloudinaryImageId,areaName,avgRating,sla} = props.resList?.info;
    return (
        <div className="res-card">
              <img src={`${RES_IMG_URL}/${cloudinaryImageId}`} alt=""/>
              <div className="restaurant-details">
                  <h3>{name}</h3>
                  <p><b>Rating : </b>{avgRating}</p>
                  <p><b>Delivery Time : </b>{sla.deliveryTime} min</p>
                  <p><b>Address : </b>{areaName}</p>
              </div>
                  
          </div>
      );
  }

  export default RestaurantCard;