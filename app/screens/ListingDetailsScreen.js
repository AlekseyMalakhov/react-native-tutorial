import React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import ContactSellerForm from "../components/ContactSellerForm";
import { Platform } from "react-native";

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
        marginTop: 30,
    },
});

function ListingDetailsScreen({ route }) {
    const listing = route.params;
    //rsf
    return (
        <KeyboardAvoidingView behavior="position">
            <View>
                <Image style={styles.image} uri={listing.images[0].url} preview={{ uri: listing.images[0].thumbnailUrl }} tint="light" />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{listing.title}</AppText>
                    <AppText style={styles.price}>${listing.price}</AppText>
                    <View style={styles.userContainer}>
                        <ListItem image={require("../assets/mosh.jpg")} title="Mosh Hamedani" subTitle="5 Listings" />
                    </View>
                </View>
                <ContactSellerForm listingId={listing.id} />
            </View>
        </KeyboardAvoidingView>
    );
}

export default ListingDetailsScreen;
