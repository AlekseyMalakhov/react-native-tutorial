import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 12,
        backgroundColor: colors.white,
        alignItems: "center",
    },
    icon: {},
    iconBackground: {
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },
    text: {
        justifyContent: "center",
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
    },
});

function ListItemIcon({ title, icon, color, onPressHandler, style }) {
    return (
        <TouchableHighlight onPress={onPressHandler} underlayColor={colors.light} style={style}>
            <View style={styles.container}>
                <View style={[styles.iconBackground, { backgroundColor: color }]}>
                    <MaterialCommunityIcons name={icon} size={20} color="white" />
                </View>
                <View style={styles.text}>
                    <AppText style={styles.title}>{title}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    );
}

export default ListItemIcon;
