import { useState } from "react";
import ItemCard from "./ItemCard";

const MenuCategory = (props) => {

    const {title,itemCards} = props.category;
    const {showCategory,setshowCategory} = props;

    return (
        <div className="menuCategory margin-1">
            
            <button className="flex space-between menuCategoryBtn" onClick={setshowCategory}>
                <div><b>{title}</b></div>
                <div className="downArrow">
                    <span>Down</span>
                </div>
            </button>
            
            { showCategory && <div className="ItemsCard">
                {
                    itemCards?.map(element => {
                        return <ItemCard itemInfo={element?.card?.info} key={element?.card?.info?.id}/>
                    }) 
                }
            </div>}
            <div className="seperator"></div>
       
        </div>
    )
}

export default MenuCategory;




