import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logoContainer: {
        position: "absolute",
        alignItems: "center",
        top: 70,
    },
    logo: {
        width: 100,
        height: 100,
    },
    buttons: {
        flex: 1,
        width: "100%",
        height: 120,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        position: "absolute",
        bottom: 30,
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
});

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/background.jpg")} blurRadius={2}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")} />
                <Text style={styles.tagline}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttons}>
                <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
                <AppButton color="secondary" title="Register" onPress={() => navigation.navigate("Register")} />
            </View>
        </ImageBackground>
    );
}

export default WelcomeScreen;
