import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View, StyleSheet } from "react-native";
import Card from "./app/components/Card";

const styles = StyleSheet.create({
    someview: {
        backgroundColor: "azure",
        flex: 1,
    },
});

export default function App() {
    return (
        <View style={styles.someview}>
            <Card title="Red jacket for sale" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
        </View>
    );
}
