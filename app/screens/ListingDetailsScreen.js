import React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

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

function ListingDetailsScreen(props) {
    //rsf
    return (
        <View>
            <Image style={styles.image} source={require("../assets/jacket.jpg")} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem image={require("../assets/mosh.jpg")} title="Mosh Hamedani" subTitle="5 Listings" />
                </View>
            </View>
        </View>
    );
}

export default ListingDetailsScreen;

//mine
// const styles = StyleSheet.create({
//     detailsScreen: {
//         flex: 1,
//     },
//     img: {
//         width: "100%",
//     },
//     textBox: {
//         marginTop: 20,
//         marginLeft: 20,
//         marginBottom: 20,
//     },
//     listingPanel: {
//         flexDirection: "row",
//     },
//     userImg: {
//         marginLeft: 20,
//         width: 60,
//         height: 60,
//         borderRadius: 120,
//     },
//     textBoxListing: {
//         marginLeft: 10,
//     },
// });

// function ListingDetailsScreen(props) {
//     const jacektImgLink = require("../assets/jacket.jpg");
//     const moshImgLink = require("../assets/mosh.jpg");
//     const getHeight = (path) => {
//         const screenWidth = Dimensions.get("screen").width;
//         const { width, height } = Image.resolveAssetSource(path);
//         const ratio = screenWidth / width;
//         const imgHeight = height * ratio;
//         return imgHeight;
//     };

//     return (
//         <View style={styles.detailsScreen}>
//             <Image style={[styles.img, { height: getHeight(jacektImgLink) }]} source={jacektImgLink} />
//             <View style={styles.textBox}>
//                 <Text style={{ paddingBottom: 10, fontWeight: "bold" }}>Red jacket for sale</Text>
//                 <Text style={{ color: colors.secondary }}>$100</Text>
//             </View>
//             <View style={styles.listingPanel}>
//                 <Image style={styles.userImg} resizeMode="contain" source={moshImgLink} />
//                 <View style={styles.textBoxListing}>
//                     <Text style={{ fontWeight: "bold" }}>Mosh Hamedani</Text>
//                     <Text style={{ color: "grey" }}>5 Listings</Text>
//                 </View>
//             </View>
//         </View>
//     );
// }

// export default ListingDetailsScreen;
