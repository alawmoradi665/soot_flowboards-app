import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjkzMTQ1YjYxYjQ1MDc1OThmMGVkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDc2MDM3OSwiZXhwIjoxNjQwODQ2Nzc5fQ.Ffw5hCGsDK73PVfFdGKDb9yB7vQq6nJtSPBSjWZzXlA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});