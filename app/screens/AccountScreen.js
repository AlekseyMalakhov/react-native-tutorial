import React from "react";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import UserInfo from "../components/UserInfo";
import ListItemIcon from "../components/ListItemIcon";
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

//mine
// const options = [
//     {
//         id: 1,
//         title: "My Listings",
//         icon: "format-list-bulleted",
//         iconColor: colors.primary,
//     },
//     {
//         id: 2,
//         title: "My Messages",
//         icon: "email",
//         iconColor: colors.secondary,
//     },
//     {
//         id: 3,
//         title: "Logout",
//         icon: "logout",
//         iconColor: "#ffe66d",
//     },
// ];

// function AccountScreen(props) {
//     return (
//         <Screen>
//             <UserInfo image={require("../assets/mosh.jpg")} title="Mosh Hamedani" subTitle="programmingwithmosh@gmail.com" />
//             <FlatList
//                 style={{ marginTop: 30 }}
//                 data={options}
//                 keyExtractor={(option) => option.id.toString()}
//                 renderItem={({ item }) => (
//                     <ListItemIcon
//                         title={item.title}
//                         icon={item.icon}
//                         color={item.iconColor}
//                         onPressHandler={() => console.log("hi all")}
//                         style={item.title === "Logout" ? { marginTop: 20 } : {}}
//                     />
//                 )}
//                 ItemSeparatorComponent={ListItemSeparator}
//             />
//         </Screen>
//     );
// }

// export default AccountScreen;
