import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
});

function AppText({ children, style }) {
    return <Text style={[styles.text, style]}>{children}</Text>;
}

export default AppText;
