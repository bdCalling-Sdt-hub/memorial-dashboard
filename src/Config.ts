import axios from "axios";

 const baseURL = axios.create({
  baseURL: "http://103.145.138.53:8000/api",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
})

export default baseURL;
