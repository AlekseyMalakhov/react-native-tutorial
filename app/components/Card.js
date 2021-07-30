import React from "react";
import { Image, View, StyleSheet, Text, Dimensions, StatusBar, Platform } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
});

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

// const imgHorizontalMargin = 20;

// const styles = StyleSheet.create({
//     card: {
//         marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 30,
//         //marginHorizontal: imgHorizontalMargin,
//         backgroundColor: "white",
//         borderRadius: 15,
//         overflow: "hidden",
//     },
//     img: {
//         width: "100%",
//     },
//     textBox: {
//         marginTop: 20,
//         marginLeft: 20,
//         marginBottom: 20,
//     },
// });

// function Card(props) {
//     const screenWidth = Dimensions.get("screen").width;
//     const { width, height } = Image.resolveAssetSource(props.image);
//     const ratio = (screenWidth - imgHorizontalMargin * 2) / width;
//     const imgHeight = height * ratio;

//     return (
//         <View style={styles.card}>
//             <Image style={[styles.img, { height: imgHeight }]} source={props.image} resizeMode="contain" />
//             <View style={styles.textBox}>
//                 <Text style={{ paddingBottom: 10, fontWeight: "bold" }}>{props.title}</Text>
//                 <Text style={{ color: colors.secondary }}>{props.subTitle}</Text>
//             </View>
//         </View>
//     );
// }

export default Card;
