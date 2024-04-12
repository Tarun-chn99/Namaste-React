import { useState } from "react";
import ItemsCard from "./ItemsCard";

const MenuCategory = (props) => {

    const {title,itemCards} = props.category;
    const [itemsVisibitlity,setItemsVisibility] = useState("block");

    const handleItemsCard = () => {
        const element = document.getElementById(title);
        
        if(itemsVisibitlity === "block"){
            element.style.display="none";
            setItemsVisibility("none");
        }
        else{
            element.style.display="block";
            setItemsVisibility("block");
        }
    }

    return (
        <div className="menuCategory margin-1">
            
            <button className="flex space-between menuCategoryBtn" onClick={handleItemsCard}>
                <div><b>{title}</b></div>
                <div className="downArrow">
                    <span>Down</span>
                </div>
            </button>
            
            <div className="ItemsCard" id={title}>
                {
                    itemCards?.map(element => {
                        return <ItemsCard itemInfo={element?.card?.info} key={element?.card?.info?.id}/>
                    }) 
                }
            </div>
            <div className="seperator"></div>
       
        </div>
    )
}

export default MenuCategory;