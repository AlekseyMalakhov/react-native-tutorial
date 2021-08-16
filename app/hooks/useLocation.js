import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
    const [location, setLocation] = useState();

    const requestLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync();
            const loc = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };
            setLocation(loc);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        requestLocation();
    }, []);

    return location;
};

export default useLocation;
