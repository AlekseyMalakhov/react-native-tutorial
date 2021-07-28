import React from "react"; //rsf
import { Image, StyleSheet, View } from "react-native";

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
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    },
});

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image style={styles.img} resizeMode="contain" source={require("../assets/chair.jpg")} />
        </View>
    );
}

export default ViewImageScreen;
