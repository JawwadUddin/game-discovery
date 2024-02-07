import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '0d51710f66534efdb182e59418de7211'
  }
})