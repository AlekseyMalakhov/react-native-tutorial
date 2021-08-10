import React, { useEffect, useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View, StyleSheet, TextInput, Text, Switch, Button, Image, Modal } from "react-native";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/lists/ListItem";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import AppButton from "./app/components/AppButton";
import FormImagePicker from "./app/components/forms/FormImagePicker";
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({});

// const Link = () => {
//     const navigation = useNavigation();
//     return <Button title="Click" onPress={() => navigation.navigate("TweetDetails", { id: 1 })} />;
// };

// const Tweets = ({ navigation }) => {
//     return (
//         <Screen>
//             <Text>Tweets</Text>
//             {/* <Button title="View Tweet" onPress={() => navigation.navigate("TweetDetails")} /> */}
//             <Link />
//         </Screen>
//     );
// };

// const TweetDetails = ({ route }) => {
//     return (
//         <Screen>
//             <Text>TweetDetails {route.params.id}</Text>
//         </Screen>
//     );
// };

const Stack = createNativeStackNavigator();
// const FeedNavigator = () => {
//     return (
//         <Stack.Navigator
//             initialRouteName="Tweets"
//             screenOptions={{
//                 headerStyle: { backgroundColor: "dodgerblue" },
//                 headerTintColor: "white",
//             }}
//         >
//             <Stack.Screen
//                 name="Tweets"
//                 component={Tweets}
//                 options={{
//                     headerStyle: { backgroundColor: "tomato" },
//                     headerTintColor: "white",
//                     headerShown: false,
//                 }}
//             />
//             <Stack.Screen
//                 name="TweetDetails"
//                 component={TweetDetails}
//                 options={({ route }) => ({
//                     title: "k" + route.params.id,
//                 })}
//             />
//         </Stack.Navigator>
//     );
// };

// const Account = () => {
//     return (
//         <Screen>
//             <Text>Account</Text>
//         </Screen>
//     );
// };

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Feed" component={FeedNavigator} />
//             <Tab.Screen name="Account" component={Account} />
//         </Tab.Navigator>
//     );
// };

export default function App() {
    return (
        // <View style={styles.someview}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>

        //<LoginScreen />
        // <Card title="Red jacket for sale" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
        //     <ListingDetailsScreen />
        //     <ViewImageScreen />
        // <MessagesScreen />
        //     <AccountScreen />
        //     <ListingScreen />
        // </View>
        // <Screen>
        //     <AppTextInput placeholder="Username" icon="email" />
        //     <AppPicker
        //         selectedItem={category}
        //         onSelectItem={(item) => setCategory(item)}
        //         items={categories}
        //         icon="apps"
        //         placeholder="Category"
        //     ></AppPicker>
        //     <AppTextInput icon="email" placeholder="email" />
        // </Screen>
        //<ListingEditScreen />
        // <Screen>
        //     <ListItem title="t1" subTitle="D1" image={require("./app/assets/mosh.jpg")} />
        // </Screen>
        // <AccountScreen />
        // <Screen>
        //     {/* <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)} /> */}
        //     <FormImagePicker />
        // </Screen>
        // <NavigationContainer>
        //     <TabNavigator />
        // </NavigationContainer>
    );
}
