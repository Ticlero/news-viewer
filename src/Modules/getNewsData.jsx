import axios from "axios";

const getAllNewsData = (category) => {
  let response = "No Existing Data";
  const url = `http://newsapi.org/v2/top-headlines?country=kr${
    category === "all" ? "" : "&category=" + category
  }&apikey=5d3f265688004953895bef059251bf1e`;
  const naverAxios = axios.create({
    baseURL: url,
    method: "GET",
  });
  try {
    response = naverAxios.get();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getAllNewsData;
