import axios from "axios";

const AuthaxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth`,
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AuthaxiosInstance;
