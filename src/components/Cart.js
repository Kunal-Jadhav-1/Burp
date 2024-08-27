import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, clearCart } from "../Store/cartSlice";
import { useMemo } from 'react';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const foodTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.card.info.price / 100) * item.card.info.quantity, 0);
  }, [cartItems]);

  return (
    <div className="m-5 p-3 w-9/12 mx-auto px-6 bg-secondary text-primary rounded-2xl italic">
      <div className="text-center m-5 cursor-pointer text-4xl font-extrabold">
        <h1>CART</h1>
      </div>
      <button
        onClick={handleClearCart}
        className="mx-2 my-3 px-2 py-1 font-semibold border border-solid border-tertiary bg-primary text-secondary rounded-lg hover:bg-secondary hover:text-primary text-md"
      >
        Clear Cart
      </button>
      {cartItems && cartItems.length === 0 ? (
        <p className="text-center text-lg font-bold text-primary cursor-pointer">
          Cart Empty !!
        </p>
      ) : (
        <div className="bg-tertiary rounded-md">
          {cartItems.map((item) => (
            <div key={item.card.info.id} className="flex flex-col md:flex-row justify-between border border-primary px-3 py-2">
              <div className="flex flex-col md:flex-row justify-between items-center space-x-3">
                <div className="lg:w-[96px] md:w-[64px] w-[48px]">
                  <img src={item.card.info.imageId} className="rounded mx-1 border border-primary" alt={item.card.info.name} />
                </div>
                <div 
                  className="text-lg font-semibold text-primary mx-1 overflow-hidden whitespace-nowrap text-ellipsis" 
                  style={{ maxWidth: '150px' }} 
                  title={item.card.info.name}
                >
                  {item.card.info.name}
                </div>
              </div>
              <div className="flex justify-evenly md:flex-row sm:flex-col items-center">
                <div className="flex items-center mx-2 space-x-0 text-sm">
                  <button className="my-1 bg-primary text-tertiary border border-t-primary border-b-primary px-2 py-1 rounded-l-md" onClick={() => handleDecrement(item.card.info.id)}>-</button>
                  <div className="font-semibold border border-t-primary border-b-primary px-3 py-1">{item.card.info.quantity}</div>
                  <button className="my-1 bg-primary text-tertiary border border-t-primary border-b-primary px-2 py-1 rounded-r-md" onClick={() => handleIncrement(item.card.info.id)}>+</button>
                </div>
                <div className="text-lg mx-2 font-semibold text-primary"> | </div>
                <div className="text-lg mx-2 font-semibold text-primary">
                  ₹ {((item.card.info.price / 100) * item.card.info.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-20 bg-tertiary p-2 rounded">
        <div className="text-lg font-semibold text-primary flex justify-between">
          <div className="text-pretty">Food Total</div>
          <div>₹ {foodTotal.toFixed(2)}</div>
        </div>
        <div className="text-lg font-semibold text-primary flex justify-between">
          <div className="text-pretty">Delivery Charges</div>
          <div>₹ {cartItems.length > 0 ? "30.00" : "0.00"}</div>
        </div>
        <div className="text-lg font-semibold text-primary flex justify-between">
          <div className="text-pretty">Taxes</div>
          <div>₹ {(foodTotal * 0.18).toFixed(2)}</div>
        </div>
        <div className="border-t border-primary text-lg font-semibold text-primary flex justify-between pt-2">
          <div className="text-pretty">Total</div>
          <div>₹ {(foodTotal + foodTotal * 0.18 + (cartItems.length > 0 ? 30 : 0)).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
