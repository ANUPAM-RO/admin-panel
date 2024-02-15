import React, { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

export const useSubCategory = () => {
  const [subCategoryData, setSubCategoryData] = useState([]);

  const loadData = async () => {
    const data = await fetchApiData(
      "https://chetan-project-backend.vercel.app/api/v1/catg/subcategory/get"
    );
    setSubCategoryData(data);
  };

  useEffect(() => {
    loadData();
  }, []);
  return { subCategoryData };
};
