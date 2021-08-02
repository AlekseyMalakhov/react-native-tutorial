import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import appStyles from "../config/appStyles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: appStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },

    icon: {
        marginRight: 10,
    },
});

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={appStyles.colors.medium} style={styles.icon} />}
            <TextInput style={appStyles.tex} {...otherProps} />
        </View>
    );
}

export default AppTextInput;
