import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View, StyleSheet } from "react-native";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

const styles = StyleSheet.create({
    someview: {
        backgroundColor: "#f8f4f4",
        flex: 1,
    },
});

export default function App() {
    return (
        <View style={styles.someview}>
            {/* <WelcomeScreen />
            <Card title="Red jacket for sale" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
            <ListingDetailsScreen />
            <ViewImageScreen />
            <MessagesScreen /> */}
            {/* <AccountScreen /> */}
            <ListingScreen />
        </View>
    );
}
