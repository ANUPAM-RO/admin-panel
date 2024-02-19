import { useEffect, useState } from "react";
import { createApiData, fetchApiData } from "../utiils";
import { useNavigate } from "react-router-dom";

export const useUser = () => {
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    address: "",
    deliBoy: "",
  });
  const navigate = useNavigate();

  const loadData = async () => {
    const data = await fetchApiData(
      "https://chetan-project-backend.vercel.app/api/v1/user/all"
    );
    setUserData(data.users);
  };

  const createNewUser = async (newUserData) => {
    await createApiData(
      "https://chetan-project-backend.vercel.app/api/v1/user/create",
      newUserData
    );
  };

  const handleNewUser = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", user?.fname + " " + user?.lname);
    formData.append("phone", user?.phone);
    formData.append("email", user?.email);
    formData.append("address", user?.address);
    await createNewUser(formData);
    loadData();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    loadData();
  }, []);
  return { userData, user, handleChange, handleNewUser, navigate };
};
