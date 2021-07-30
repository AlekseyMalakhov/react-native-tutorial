import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { StyleSheet, FlatList } from "react-native";
import colors from "../config/colors";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.light,
    },
});

const listings = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        image: require("../assets/jacket.jpg"),
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 300,
        image: require("../assets/couch.jpg"),
    },
];

function ListingScreen(props) {
    return (
        <Screen style={styles.container}>
            <FlatList
                data={listings}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Card title={item.title} subTitle={"$" + item.price} image={item.image} />}
            />
        </Screen>
    );
}

export default ListingScreen;
