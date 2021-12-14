import axios from "axios";

const BASE_URL = "https://localhost:5000/api/";

const TOKEN = localStorage.getItem("persist:root")
    ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
          .currentUser.accessToken
    : "";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        ContentType: "application/json",
        token: `Bearer ${TOKEN}`,
    },
});

export const putRequest = (url, product) =>
    axios.put({
        url,
        product,
        headers: {
            ContentType: "application/json",
            token: `Bearer ${TOKEN}`,
        },
    });
