import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

function ListingScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <Card title="Red jacket for sale" subTitle="$100" image={require("../assets/jacket.jpg")} />
                <Card title="Couch in great condition" subTitle="$300" image={require("../assets/couch.jpg")} />
            </View>
        </Screen>
    );
}

export default ListingScreen;
