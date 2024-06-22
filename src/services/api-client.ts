import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ad277828646146329e3ec07bd130d5d8",
  },
});
