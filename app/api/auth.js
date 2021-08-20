import client from "./client";

const login = (email, password) => client.post("/auth", { email, password });

const authAPI = {
    login,
};
export default authAPI;
