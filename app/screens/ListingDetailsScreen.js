import React from "react";
import { Image, View, StyleSheet, Dimensions, Text } from "react-native";
import colors from "../config/colors";

const styles = StyleSheet.create({
    detailsScreen: {
        flex: 1,
    },
    img: {
        width: "100%",
    },
    textBox: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
    },
    listingPanel: {
        flexDirection: "row",
    },
    userImg: {
        marginLeft: 20,
        width: 60,
        height: 60,
        borderRadius: 120,
    },
    textBoxListing: {
        marginLeft: 10,
    },
});

function ListingDetailsScreen(props) {
    const jacektImgLink = require("../assets/jacket.jpg");
    const moshImgLink = require("../assets/mosh.jpg");
    const getHeight = (path) => {
        const screenWidth = Dimensions.get("screen").width;
        const { width, height } = Image.resolveAssetSource(path);
        const ratio = screenWidth / width;
        const imgHeight = height * ratio;
        return imgHeight;
    };

    return (
        <View style={styles.detailsScreen}>
            <Image style={[styles.img, { height: getHeight(jacektImgLink) }]} source={jacektImgLink} />
            <View style={styles.textBox}>
                <Text style={{ paddingBottom: 10, fontWeight: "bold" }}>Red jacket for sale</Text>
                <Text style={{ color: colors.secondary }}>$100</Text>
            </View>
            <View style={styles.listingPanel}>
                <Image style={styles.userImg} resizeMode="contain" source={moshImgLink} />
                <View style={styles.textBoxListing}>
                    <Text style={{ fontWeight: "bold" }}>Mosh Hamedani</Text>
                    <Text style={{ color: "grey" }}>5 Listings</Text>
                </View>
            </View>
        </View>
    );
}

export default ListingDetailsScreen;
