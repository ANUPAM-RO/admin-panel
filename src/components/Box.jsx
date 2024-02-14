import React from "react";

const Box = ({ name, total, image, color }) => {
  return (
    <div
      className="flex justify-between p-6 rounded-2xl w-full"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="text-white">
        <p>{name}</p>
        <p className="font-extrabold text-4xl">{total}</p>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Box;
