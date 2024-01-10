import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useParams} from 'react-router-dom'
import useResMenu from '../utils/useResMenu';


const Cart = () => {

  // const { resid } = useParams(); 
  //   console.log(resid)


  //   // import data using useResMenu hook
  //   const resDetails = useResMenu(resid);
  //   console.log(resDetails)
  //   const {cartItemList} =resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.card?.card?.category?.itemCards || resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.card?.card?.categories[0]?.itemCards || {}
  //   console.log(cartItemList)

  const dispatch = useDispatch();
  const handleClearCart =() => {
    dispatch(clearCart());
  }

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" m-5 p-3 text-2xl font-thin w-8/12 mx-auto px-6  border border-solid border-gray-500 bg-slate-200 rounded-2xl italic ">
      <div className=" text-center m-5 cursor-pointer">
        <h1>🛒CART🛒</h1>
      </div>
      <div>
        <button className="mx-2 my-3 px-2 py-1 border border-solid border-black bg-black text-white rounded-lg hover:bg-white hover:text-black font-serif text-sm" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <p className="text-center text-lg font-bold text-yellow-4`00 cursor-pointer"> Cart Empty !!</p>}
        <ItemList items={cartItems} />
      </div>
    </div>
  )
}


export default Cart
