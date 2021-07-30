import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View, StyleSheet } from "react-native";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

const styles = StyleSheet.create({
    someview: {
        backgroundColor: "#f8f4f4",
        flex: 1,
        // padding: 20,
        // paddingTop: 100,
    },
});

export default function App() {
    return (
        <View style={styles.someview}>
            {/* <WelcomeScreen /> */}
            {/* <Card title="Red jacket for sale" subTitle="$100" image={require("./app/assets/jacket.jpg")} /> */}
            {/* <ListingDetailsScreen /> */}
            {/* <ViewImageScreen /> */}
            {/* <MessagesScreen /> */}
            {/* <MyAccountScreen /> */}
            <ListingScreen />
        </View>
    );
}
