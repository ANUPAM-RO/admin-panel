import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

export const useUser = () => {
  const [userData, setUserData] = useState([]);

  const loadData = async () => {
    const data = await fetchApiData(
      "https://chetan-project-backend.vercel.app/api/v1/user/all"
    );
    setUserData(data.users);
  };

  useEffect(() => {
    loadData();
  }, []);
  return { userData };
};
