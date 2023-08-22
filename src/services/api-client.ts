import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "0e2e20a649d84e4db8d5594888066b73"
  }
});
