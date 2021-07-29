import React from "react"; //rsf
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const styles = StyleSheet.create({
    //rnss
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    img: {
        width: "100%",
        height: "100%",
    },
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
    },
});

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons style={styles.closeIcon} name="close" size={30} color="white" />
            <MaterialCommunityIcons style={styles.deleteIcon} name="trash-can-outline" size={30} color="white" />
            <Image style={styles.img} resizeMode="contain" source={require("../assets/chair.jpg")} />
        </View>
    );
}

export default ViewImageScreen;
