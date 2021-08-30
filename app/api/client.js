import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";
import settings from "../config/settings";

const apiClient = create({
    baseURL: settings.apiURL,
});

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    if (!authToken) return;
    console.log(authToken);
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
