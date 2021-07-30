import React from "react";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import { StyleSheet } from "react-native";
import Icon from "../components/Icon";

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    },
});

const menuItems = [
    {
        id: 1,
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        id: 2,
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
    },
];

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem image={require("../assets/mosh.jpg")} title="Mosh Hamedani" subTitle="programmingwithmosh@gmail.com" />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(option) => option.id.toString()}
                    renderItem={({ item }) => (
                        <ListItem title={item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />} />
                    )}
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem title="Log out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} />
        </Screen>
    );
}

export default AccountScreen;
