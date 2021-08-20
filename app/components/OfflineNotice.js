import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        height: 50,
        position: "absolute",
        width: "100%",
        zIndex: 1,
        top: Constants.statusBarHeight,
    },
    text: {
        color: "white",
    },
});

function OfflineNotice(props) {
    const netinfo = useNetInfo();

    if (netinfo.type !== "unknown" && netinfo.isInternetReachable === false) {
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connection</AppText>
            </View>
        );
    }
    return null;
}

export default OfflineNotice;
