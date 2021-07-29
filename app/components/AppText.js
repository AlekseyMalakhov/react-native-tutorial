import React from "react";
import { Text, Platform } from "react-native";

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
});

function AppText({ children }) {
    return <Text style={styles.text}>{children}</Text>;
}

export default AppText;
