import React, { useEffect, useState } from "react";
import { createApiData, fetchApiData } from "../utiils";

export const useCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [newCategoryData, setNewCategoryData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [catName, setCatName] = useState("");
  const [catImage, setCatImage] = useState(null);
  console.log(newCategoryData);
  const loadData = async () => {
    const data = await fetchApiData(
      "https://chetan-project-backend.vercel.app/api/v1/catg"
    );
    setCategoryData(data.categories);
  };
  const createNewData = async (newCategoryData) => {
    const data = await createApiData(
      "https://chetan-project-backend.vercel.app/api/v1/catg/create",
      newCategoryData
    );
    console.log(data);
    // setNewCategoryData(data.categories);
  };

  const handleNewCategory = () => {
    createNewData({ catName, catImage });
    setShowModal(false);
  };

  useEffect(() => {
    loadData();
  }, []);
  return {
    categoryData,
    setNewCategoryData,
    showModal,
    setShowModal,
    catName,
    setCatName,
    catImage,
    setCatImage,
    handleNewCategory,
  };
};
