import axios from "axios";

const naverAxios = axios.create({
  baseURL: `http://newsapi.org/v2/top-headlines?country=kr&apikey=5d3f265688004953895bef059251bf1e`,
  method: "GET",
});
const getAllNewsData = async () => {
  let response = "No Existing Data";
  try {
    response = await naverAxios.get("");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getAllNewsData;
