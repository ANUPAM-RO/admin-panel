import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

export const useProduct = () => {
  const [productData, setProductData] = useState([]);

  const loadData = async () => {
    const data = await fetchApiData(
      "https://chetan-project-backend.vercel.app/api/v1/product/admin/products"
    );
    setProductData(data?.products);
  };

  useEffect(() => {
    loadData();
  }, []);
  return { productData };
};
