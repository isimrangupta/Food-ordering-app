import React from "react";
import FoodCard from "./FoodCard.jsx";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItem = () => {

const category = useSelector((state) => state.category.category);
const search = useSelector((state) => state.search.search);
console.log(search)

const handleToast = (name) =>{
  toast.success(`Added ${name}`)
};

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap justify-center items-center gap-10">
        {
          FoodData.filter((food) => {
            if(category === "All"){
              return food.name.toLowerCase().includes(search.toLowerCase());
            } else{
             return category === food.category &&
             food.name.toLowerCase().includes(search.toLowerCase());
            }
          }).map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              img={food.img}
              name={food.name}
              price={food.price}
              desc={food.desc}
              category={food.category}
              rating={food.rating}
              handleToast = {handleToast}
            />
          ))
        }
      </div>
    </>
  );
};

export default FoodItem;
