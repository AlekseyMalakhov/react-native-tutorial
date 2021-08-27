import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const prefix = "cache_";
const expiryInMinutes = 5;

const store = async (key, value) => {
    const item = {
        value,
        timestamp: Date.now(),
    };
    try {
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    } catch (e) {
        console.log(e);
    }
};

const isExpired = (item) => {
    const now = dayjs;
    const storedTime = dayjs(item.timestamp);
    const diff = now.diff(storedTime, "minute");
    if (diff > expiryInMinutes) {
        return true;
    }
    return false;
};

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key);
        const item = JSON.parse(value);
        if (!item) {
            return null;
        }
        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }
        return item.value;
    } catch (e) {
        console.log(e);
    }
};

export default {
    store,
    get,
};
