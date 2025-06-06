import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";


const ItemCart = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
        <MdDelete
          onClick={() => {
            dispatch(removeFromCart({ id, name, price, img, qty }));
            toast(`${name} Removed !`, {
              icon: "👋",
            });
          }}
          className="absolute right-7 cursor-pointer text-xl text-red-500 "
        />
        <img src={img} alt="" className="w-[50px] h-[50px]" />

        <div className="leading-5">
          <h2 className="font-bold text-green-800">{name}</h2>
          <div className="flex justify-between">
            <span className="text-green-500 font-bold">₹{price}</span>
            <div className="flex justify-center items-center gap-2 mx-6 absolute right-7">
              <GoPlus
                onClick={() =>
                  qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
                }
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-2xl transition-all ease-linear cursor-pointer"
              />

              <span>{qty}</span>

              <FiMinus
                onClick={() =>
                  qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
                }
                className="border-2 border-gray-600 text-gray-600 not-visited:hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-2xl transition-all ease-linear cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
