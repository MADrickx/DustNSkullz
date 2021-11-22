import axios from "axios";

const BASE_URL = "https://localhost:5000/api/";
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGUzM2EzOTgxNDdjMjBlMGI2MGQ1MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjg4NzIwNCwiZXhwIjoxNjM3MTQ2NDA0fQ.DkoILaqEJVHyuy6CBadG6UixA8uV7peVZ0BnhbPdTC4";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`,
    },
});
