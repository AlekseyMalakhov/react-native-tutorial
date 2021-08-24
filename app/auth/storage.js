import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        console.log(error);
    }
};

const getToken = async () => {
    try {
        const authToken = await SecureStore.getItemAsync(key);
        return authToken;
    } catch (error) {
        console.log(error);
    }
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log(error);
    }
};

const getUser = async () => {
    const token = await getToken();
    if (token) {
        return jwtDecode(token);
    }
    return null;
};

const authStorage = {
    getUser,
    storeToken,
    removeToken,
    getToken,
};

export default authStorage;
