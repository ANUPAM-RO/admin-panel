import React from "react";
import Box from "./Box";
import { useCategory } from "../hooks/useCategory";
import { useProduct } from "../hooks/useProduct";
import { useSubCategory } from "../hooks/useSubCategory";
import { useUser } from "../hooks/useUser";

const Dashboard = () => {
  const { categoryData } = useCategory();
  const { productData } = useProduct();
  const { subCategoryData } = useSubCategory();
  const { userData } = useUser();
  const data = [
    {
      name: "All Product",
      total: productData?.length,
      image: "./Group 40.svg",
      color: "#3C335D",
    },
    {
      name: "All Category",
      total: categoryData?.length,
      image: "./Group 52.svg",
      color: "#023B5B",
    },
    {
      name: "All  Sub- Category",
      total: subCategoryData?.length,
      image: "./Group 46.svg",
      color: "#72909E",
    },
    {
      name: "All User",
      total: userData?.length,
      image: "./Group 47.svg",
      color: "#2F6967",
    },
    {
      name: "All  Sub- Category",
      total: subCategoryData?.length,
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
