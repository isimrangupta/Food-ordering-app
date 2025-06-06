import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({
  id,
  img,
  name,
  price,
  desc,
  category,
  rating,
  handleToast,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="font-bold w-[250px] bg-white p-4 flex flex-col rounded-lg gap-2 mt-7  ">
        <img
          src={img}
          alt=""
          className="w-auto h-[130px] hover:scale-110 cursor-grab  transition-all duration-500 ease-in-out"
        />

        <div className="text-sm flex justify-between">
          <h2 className="text-[16px] text-gray-800">{name}</h2>
          <span className="text-green-500">₹{price}</span>
        </div>
        <p className="text-sm font-normal text-gray-700">
          {desc.slice(0, 50)}...
        </p>

        <div className="flex justify-between">
          <span className="flex justify-center items-center text-gray-700">
            <FaStar className="mr-1 text-yellow-500" /> {rating}
          </span>

          <button
            onClick={() => {
              dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
              handleToast(name);
            }}
            className="p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
