import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, clearCart } from "../Store/cartSlice";
import { useState, useEffect, useMemo } from 'react';

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
      <div className="text-center m-5 cursor-pointer text-4xl font-serif">
        <h1 className="">CART</h1>
      </div>
      <div>
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
              <div key={item.card.info.id} className="flex justify-between border border-primary px-2 py-1 ">
                <div className="flex justify-normal">
                  <img src={item.card.info.imageId} className="w-[20%] rounded mx-1 border border-primary" alt={item.card.info.name} />
                  <div className="text-lg font-semibold text-primary content-center mx-1 overflow-x-hidden">{item.card.info.name}</div>
                </div>
                <div className="flex justify-evenly">
                  <div className="flex items-center mx-2 space-x-0 text-sm">
                    <button className="my-1 bg-primary text-tertiary border border-t-primary border-b-primary px-2 py-1 rounded-l-md" onClick={() => handleDecrement(item.card.info.id)}>-</button>
                    <div className="font-semibold border border-t-primary border-b-primary px-3 py-1">{item.card.info.quantity}</div>
                    <button className="my-1 bg-primary text-tertiary border border-t-primary border-b-primary px-2 py-1 rounded-r-md" onClick={() => handleIncrement(item.card.info.id)}>+</button>
                  </div>
                  <div className="text-lg mx-2 font-semibold text-primary content-center"> | </div>
                  <div className="text-lg mx-2 font-semibold text-primary content-center"> ₹ {((item.card.info.price / 100) * item.card.info.quantity).toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-20 bg-tertiary p-2 rounded">
        <div className=" text-lg font-semibold text-primary flex justify-between " >
          <div className="text-pretty">Food Total</div>
          <div>₹ {foodTotal.toFixed(2)}</div>
        </div>
        <div className=" text-lg font-semibold text-primary flex justify-between " >
          <div className="text-pretty">Delivery Charges</div>
          <div>₹ {cartItems.length > 0 ? (30).toFixed(2) : (0).toFixed(2)}</div>
        </div>
        <div className=" text-lg font-semibold text-primary flex justify-between " >
          <div className="text-pretty">Taxes</div>
          <div>₹ {(foodTotal*0.18).toFixed(2)}</div>
        </div>
        <div className="border border-t-primary text-lg font-semibold text-primary flex justify-between " >
          <div className="text-pretty">Total</div>
          <div>₹ {cartItems.length > 0 ? (foodTotal + foodTotal*0.18 + 30).toFixed(2) : (foodTotal + foodTotal*0.18 + 0).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
