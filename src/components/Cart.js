import ItemCard from "./ItemCard";
import {useSelector,useDispatch} from "react-redux"
import { clearCart } from "../AppReduxStore/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (
        <div className="cart" >
            <h1 className="p-4" style={{textAlign: "center"}}>Cart</h1>
            <button className="cartButton" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.map((item) => <ItemCard itemInfo={item} key={item?.id}/>)}
        </div>
    )
}

export default Cart;