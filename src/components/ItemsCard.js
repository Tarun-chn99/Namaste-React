import { useState } from "react";

const ItemsCard = (props) => {

    const {name,itemAttribute,price,ratings,description,id} = props.itemInfo;  
    const [moreBtn,setMoreBtn] = useState(false);

    const handleMoreBtn = () => {
      (moreBtn === true) ?  setMoreBtn('false') : setMoreBtn('true');
      console.log(id);
      console.log(document.getElementById(id)); 
      document.getElementById(id).style.display = "none";
    }


    return (
      <>
      <div className="flex foodItem  space-between">
          
          <div style={{width:"70%",paddingRight:"3rem"}}>
            <h5><b>TYPE: </b>{itemAttribute.vegClassifier}</h5>
            <h3 className="margin-top-half"><i>{name}</i></h3>
            <p ><i>Rs.{price/100}</i></p>

              { 
                (Object.keys(ratings.aggregatedRating).length !== 0) ?
                <p className="margin-tb-half textGreen">
                  <i>
                    <b>Rating: {ratings.aggregatedRating.rating} </b>
                    ({ratings.aggregatedRating.ratingCount.split(" ")[0]})
                  </i>
                </p>
                : <p className="margin-tb1"></p>
              }

            <p><i>
              
              {(Object.keys(props.itemInfo).find((val)=>{return val==="description"}) === "description") ? 
                ((moreBtn === false) ? description.slice(0,80) : description )  : ""}

              <button id={id} className="moreButton" onClick={handleMoreBtn}><b>...more</b></button>
            </i></p>
          </div>
          
          <div className="mealImage">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/35884bffaba12971bd5491cddcb8be35" alt="" width='100%' height='100%' />
          </div>

      </div>
      <hr />
      </>
  )
}

export default ItemsCard;
