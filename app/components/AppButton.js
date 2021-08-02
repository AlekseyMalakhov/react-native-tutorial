import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
});

function AppButton({ title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default AppButton;

//mine
// const styles = StyleSheet.create({
//     loginButton: {
//         width: "100%",
//         paddingVertical: 12,
//         borderRadius: 30,
//     },
//     loginText: {
//         textAlign: "center",
//         color: "white",
//         fontSize: 16,
//         textTransform: "uppercase",
//     },
// });

//     return (
//         <TouchableOpacity style={[styles.loginButton, { backgroundColor: colors[props.color] }]} onPress={onPressLearnMore}>
//             <Text style={styles.loginText}>{props.children}</Text>
//         </TouchableOpacity>
//     );
// }
