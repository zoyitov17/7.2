import React from "react";
import { Data } from "../../data/dada"; 

const Carts = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {" "}
      {Data.map((item, index) => (
        <div key={index} className="p-4 border rounded-md shadow-md">
          {" "}
          <div className="flex justify-center">
            <img
              src={item.image}
              alt={item.common_name}
              className="w-64 h-48 object-contain"
            />{" "}
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold text-center">
              {item.common_name}
            </h2>{" "}
            <p className="text-gray-600 text-center">${item.price}</p>{" "}
            <p className="mt-2 text-sm text-gray-700">
              Brand: <span className="text-blue-500">{item.brend}</span>
            </p>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carts;
