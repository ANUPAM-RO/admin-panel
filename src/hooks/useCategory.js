import { useEffect, useState } from "react";
import { createApiData, fetchApiData } from "../utiils";
import { useNavigate, useParams } from "react-router-dom";

export const useCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [newCategoryData, setNewCategoryData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [catName, setCatName] = useState("");
  const [catImage, setCatImage] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

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
  };

  const handleNewCategory = () => {
    createNewData({ catName, catImage });
    setShowModal(false);
  };
  const isCategoryUpdate = (data) => {
    setIsEdit(true);
    navigate(`${data?._id}`);
    setCatName(data?.name);
    setCatImage(data?.image);
    setShowModal(true);
  };
  const handleDelete = () => {};
  const handleUpdate = () => {
    setIsEdit(false);
    setShowModal(false);
    navigate("/category");
    setCatName("");
    setCatImage("");
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
    isEdit,
    setIsEdit,
    setCatImage,
    handleNewCategory,
    handleUpdate,
    handleDelete,
    isCategoryUpdate,
  };
};
