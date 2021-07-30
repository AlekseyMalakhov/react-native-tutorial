import React from "react";
import { FlatList } from "react-native";
import Screen from "../components/Screen";
import UserInfo from "../components/UserInfo";
import ListItemIcon from "../components/ListItemIcon";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

const options = [
    {
        id: 1,
        title: "My Listings",
        icon: "format-list-bulleted",
        iconColor: colors.primary,
    },
    {
        id: 2,
        title: "My Messages",
        icon: "email",
        iconColor: colors.secondary,
    },
    {
        id: 3,
        title: "Logout",
        icon: "logout",
        iconColor: "#ffe66d",
    },
];

function MyAccountScreen(props) {
    return (
        <Screen>
            <UserInfo image={require("../assets/mosh.jpg")} title="Mosh Hamedani" subTitle="programmingwithmosh@gmail.com" />
            <FlatList
                style={{ marginTop: 30 }}
                data={options}
                keyExtractor={(option) => option.id.toString()}
                renderItem={({ item }) => (
                    <ListItemIcon
                        title={item.title}
                        icon={item.icon}
                        color={item.iconColor}
                        onPressHandler={() => console.log("hi all")}
                        style={item.title === "Logout" ? { marginTop: 20 } : {}}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}

export default MyAccountScreen;
