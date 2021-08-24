import React from "react";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import { StyleSheet } from "react-native";
import Icon from "../components/Icon";
import useAuth from "../auth/useAuth";

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
        targetScreen: "",
    },
    {
        id: 2,
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: "Messages",
    },
];

function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem image={require("../assets/mosh.jpg")} title={user.name} subTitle={user.email} showChevrons />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(option) => option.id.toString()}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                            showChevrons
                            onPress={item.targetScreen ? () => navigation.navigate(item.targetScreen) : null}
                        />
                    )}
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem title="Log out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} showChevrons onPress={() => logOut()} />
        </Screen>
    );
}

export default AccountScreen;
