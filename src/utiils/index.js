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
  try {
    const response = await axios.post(url, data);
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

// upload image in cloudinary
export const uploadImage = (image) => {
  return new Promise((resolve, reject) => {
    let apiUrl = "https://api.cloudinary.com/v1_1/dab6e1ngo/image/upload";
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "admin-panel");

    fetch(apiUrl, {
      body: data,
      method: "post",
    })
      .then(async (response) => {
        const responseData = await response.json();
        const imageUrl = responseData.url;
        resolve(imageUrl);
      })
      .catch((err) => {
        console.log(err);
        reject("Cannot upload");
      });
  });
};
