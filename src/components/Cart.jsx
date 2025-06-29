import { IoCloseSharp } from "react-icons/io5";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>

          <IoCloseSharp
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md hover:bg-red-300  hover:text-white hover:border-red-300 cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCart
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-2xl text-center text-gray-800 font-light">
            Your cart is empty !
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-600">Item : {totalQty}</h3>
          <h3 className="font-semibold text-gray-600">
            Totle Amount : {totalPrice}{" "}
          </h3>
          <hr className="w[90vw] lg:w-[18vw] mt-5" />

          <button
            onClick={() => {
              if (cartItems.length > 0) {
                navigate("/success", {state: {amount:totalPrice}});
              }
            }}
            disabled = {cartItems.length === 0}
            className={`w-[90vw] lg:w-[18vw] border-none text-xl h-[45px] text-white rounded-lg mt-3 mb-5 transition-all duration-300 
              ${cartItems.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 cursor-pointer text-white"}`}
          >
            Checkout
          </button>
        </div>
      </div>
      <FaCartShopping
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-3 right-1 cursor-pointer text-pink-800 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
