import axios from "axios";

export const fetchApiData = async (url) => {
  try {
    const response = await axios.get(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
