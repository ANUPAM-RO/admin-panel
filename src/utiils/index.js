import axios from "axios";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDdmOTBmNGQ0MmU5NWYwZGI0N2U3MyIsImlhdCI6MTY5NTAyODI3MywiZXhwIjoxNjk1MTE0NjczfQ.WWkxRvJ-Gvf7-FH3Up6iksdzQuVuaSUVSOVVPg7ZLT8";

export const fetchApiData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createApiData = async (url, data) => {
  const header = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, data, header);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const updateApiData = async (url, data) => {
  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteApiData = async (url) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
