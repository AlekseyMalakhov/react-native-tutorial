import React from "react";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
    return <ViewImageScreen />;
}

// import React from "react";
// import { View, Image, StyleSheet, StatusBar, Platform, Text } from "react-native";

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "black",
//         height: "100%",
//         width: "100%",
//     },
//     rectContainer: {
//         flex: 1,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     },
//     img: {
//         width: "100%",
//         height: "100%",
//     },
//     imgContainer: {
//         position: "absolute",
//         width: "100%",
//         height: "100%",
//     },
//     rect1: {
//         backgroundColor: "tomato",
//         width: 50,
//         height: 50,
//         marginLeft: 20,
//     },
//     rect2: {
//         backgroundColor: "mediumturquoise",
//         width: 50,
//         height: 50,
//         marginRight: 20,
//     },
// });

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <View style={styles.imgContainer}>
//                 <Image style={styles.img} resizeMode="contain" source={require("./assets/chair.jpg")} />
//             </View>
//             <View style={styles.rectContainer}>
//                 <View style={styles.rect1}></View>
//                 <View style={styles.rect2}></View>
//             </View>
//         </View>
//     );
// }
