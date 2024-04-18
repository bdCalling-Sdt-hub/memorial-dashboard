import axios from "axios";

 const baseURL = axios.create({
  baseURL: "http://188.166.254.156:8000/api",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
})

export default baseURL;
