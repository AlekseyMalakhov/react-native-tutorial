import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import appStyles from "../../config/appStyles";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        justifyContent: "space-between",
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
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    chevron: {
        color: appStyles.colors.medium,
        alignSelf: "center",
    },
    info: {
        flex: 1,
        flexDirection: "row",
    },
});

function ListItem({ title, subTitle, image, IconComponent, onPressHandler, renderRightActions, showChevrons }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPressHandler} underlayColor={colors.light}>
                <View style={styles.container}>
                    <View style={styles.info}>
                        {IconComponent}
                        {image && <Image style={styles.image} source={image} />}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines={1}>
                                {title}
                            </AppText>
                            {subTitle && (
                                <AppText style={styles.subTitle} numberOfLines={1}>
                                    {subTitle}
                                </AppText>
                            )}
                        </View>
                    </View>
                    {showChevrons && <MaterialCommunityIcons name="chevron-right" size={20} style={styles.chevron} />}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

export default ListItem;
