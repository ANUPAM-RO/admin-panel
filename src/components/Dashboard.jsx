import React from "react";
import Box from "./Box";

const Dashboard = () => {
  const data = [
    {
      name: "All Product",
      total: 61,
      image: "./Group 40.svg",
      color: "#3C335D",
    },
    {
      name: "All Category",
      total: 11,
      image: "./Group 52.svg",
      color: "#023B5B",
    },
    {
      name: "All  Sub- Category",
      total: 18,
      image: "./Group 46.svg",
      color: "#72909E",
    },
    {
      name: "All User",
      total: 11,
      image: "./Group 47.svg",
      color: "#2F6967",
    },
    {
      name: "All  Sub- Category",
      total: 18,
      image: "./Group 48.svg",
      color: "#04649B",
    },
    {
      name: "Not Delivered",
      total: 24,
      image: "./Group 48 (1).svg",
      color: "#FF9B3F",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((d, index) => (
        <div key={index}>
          <Box name={d.name} total={d.total} image={d.image} color={d.color} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
