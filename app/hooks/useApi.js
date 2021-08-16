import { useState } from "react";
//import { Alert } from "react-native";

export default useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        const response = await apiFunc(...args);
        setLoading(false);

        if (!response.ok) {
            setError(true);
            //Alert.alert("Could not save!");
            return;
        }
        setError(false);
        setData(response.data);
        //Alert.alert("Success");
    };

    return { data, error, loading, request };
};
