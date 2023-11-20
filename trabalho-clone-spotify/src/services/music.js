import axios from "axios";

export const music = axios.create({
    baseURL: "https://655b4733ab37729791a8d40c.mockapi.io/",
});