import { useEffect, useState } from "react";
import { errorToast, successToast } from "../components/Toast";
import {
  createApiData,
  deleteApiData,
  fetchApiData,
  updateApiData,
} from "../utiils";
import { useNavigate, useParams } from "react-router-dom";

export const useCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [catName, setCatName] = useState("");
  const [catImage, setCatImage] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const { catId } = useParams();

  const loadData = async () => {
    const data = await fetchApiData(
      "https://chetan-project-backend.vercel.app/api/v1/catg"
    );
    setCategoryData(data.categories);
  };

  const createNewData = async (newCategoryData) => {
    await createApiData(
      "https://chetan-project-backend.vercel.app/api/v1/catg/create",
      newCategoryData
    );
    successToast("New Category Create  Successfully!!!.");
  };

  const handleNewCategory = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", catName);
    formData.append("image", catImage);
    await createNewData(formData);
    setShowModal(false);
    loadData();
  };
  const isCategoryUpdate = (data) => {
    setIsEdit(true);
    navigate(`${data?._id}`);
    setCatName(data?.name);
    setCatImage(data?.image);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    await deleteApiData(
      `https://chetan-project-backend.vercel.app/api/v1/catg/delete/category/${id}`
    );
    errorToast("Remove category");
    loadData();
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", catName);
    formData.append("image", catImage);
    await updateApiData(
      `https://chetan-project-backend.vercel.app/api/v1/catg/update/${catId}`,
      formData
    );
    successToast("New Category Edit  Successfully!!!.");
    loadData();
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
