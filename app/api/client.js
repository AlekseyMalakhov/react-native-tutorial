import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
    baseURL: "http://192.168.100.7:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    if (!authToken) return;
    request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
    const responce = await get(url, params, axiosConfig);
    if (responce.ok) {
        cache.store(url, responce.data);
        return responce;
    }

    const data = await cache.get(url);
    if (data) {
        return {
            ok: true,
            data,
        };
    }
    return responce;
};

export default apiClient;
