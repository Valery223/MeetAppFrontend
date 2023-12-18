import axios from "axios";

const API = axios.create({
  baseURL: "https://reqres.in/api/users?page=2",
});

export const fetchSearchData = async () => {
  try {
    const response = await API.get("");
    return response.data.data[4];
  } catch (error) {
    console.error(error);
    console.log("pipipapa!!!");
    throw error;
  }
};
