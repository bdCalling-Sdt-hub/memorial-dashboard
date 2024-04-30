import axios from "axios";

 const baseURL = axios.create({
  baseURL: "http://server.memorialmoments.org/api",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
})

export default baseURL;
