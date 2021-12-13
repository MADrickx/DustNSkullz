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
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        token: `Bearer ${TOKEN}`,
    },
});
