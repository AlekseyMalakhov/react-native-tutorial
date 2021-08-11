import React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";

const styles = StyleSheet.create({
    //rnss
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    },
});

function ListingDetailsScreen({ route }) {
    const listing = route.params;
    //rsf
    return (
        <View>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem image={require("../assets/mosh.jpg")} title="Mosh Hamedani" subTitle="5 Listings" />
                </View>
            </View>
        </View>
    );
}

export default ListingDetailsScreen;
