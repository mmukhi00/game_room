import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "4df49e74782c47c69b117414954f6322"
  }
});
