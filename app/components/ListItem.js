import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.medium,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
    },
});

function ListItem({ title, subTitle, image, IconComponent, onPressHandler, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPressHandler} underlayColor={colors.light}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

export default ListItem;
