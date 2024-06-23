import React from "react";
import { Data } from "../../data/dada";

const Carts = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {Data.map((item, index) => (
        <div
          key={index}
          className="w-[330px] h-[250px] border border-black rounded-[20px]"
        >
          <div className="">
            <img src={item.image} alt="" className="rounded-[20px]" />
          </div>
          <div className="w-[90%] mx-auto flex justify-between">
            <p>{item.common_name}</p>
            <h2 className="cursor-pointer">${item.price}</h2>
            <p className="cursor-pointer font-bold text-red-500">
              Brend: <span className="text-blue-500">{item.brend}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carts;
