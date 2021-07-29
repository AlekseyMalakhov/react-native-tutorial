import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

const styles = StyleSheet.create({
    loginButton: {
        width: "100%",
        paddingVertical: 12,
        borderRadius: 30,
    },
    loginText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        textTransform: "uppercase",
    },
});

function LoginButton(props) {
    const onPressLearnMore = () => {
        console.log("hi all");
    };

    return (
        <TouchableOpacity style={[styles.loginButton, { backgroundColor: colors[props.color] }]} onPress={onPressLearnMore}>
            <Text style={styles.loginText}>{props.children}</Text>
        </TouchableOpacity>
    );
}

export default LoginButton;
