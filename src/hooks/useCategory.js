import React, { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

export const useCategory = () => {
  const [categoryData, setCategoryData] = useState([]);

  const loadData = async () => {
    const data = await fetchApiData(
      "https://chetan-project-backend.vercel.app/api/v1/catg"
    );
    setCategoryData(data.categories);
  };

  useEffect(() => {
    loadData();
  }, []);
  return { categoryData };
};
