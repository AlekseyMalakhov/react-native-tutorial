import React, { useEffect, useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View, StyleSheet, TextInput, Text, Switch, Button, Image, Modal, TouchableOpacity } from "react-native";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
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
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppText from "./app/components/AppText";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

const styles = StyleSheet.create({});

export default function App() {
    const [user, setUser] = useState();
    const [isReady, setIsReady] = useState(false);

    const restoreUser = async () => {
        const user = await authStorage.getUser();
        if (user) {
            setUser(user);
        }
    };

    if (!isReady) {
        return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={(error) => console.log(error)} />;
    }

    return (
        // <View style={styles.someview}>

        // <NavigationContainer>
        //     <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
        //         <Stack.Screen name="Welcome" component={WelcomeScreen} />
        //         <Stack.Screen name="Login" component={LoginScreen} />
        //     </Stack.Navigator>
        // </NavigationContainer>

        // <NavigationContainer>
        //     <Tab.Navigator
        //         screenOptions={{
        //             headerShown: false,
        //             tabBarActiveTintColor: "tomato",
        //             tabBarStyle: {
        //                 height: 60,
        //             },
        //             tabBarLabelStyle: {
        //                 bottom: 10,
        //             },
        //         }}
        //     >
        //         <Tab.Screen
        //             name="ListingsScreen"
        //             component={ListingScreenNavigation}
        //             options={{
        //                 tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={25} />,
        //             }}
        //         />
        //         <Tab.Screen
        //             name="Listing Edit"
        //             component={ListingEditScreen}
        //             options={{
        //                 tabBarButton: (props) => {
        //                     console.log(props);
        //                     return <BigButton />;
        //                 },
        //             }}
        //         />
        //         <Tab.Screen
        //             name="AccountScreen"
        //             component={AccountScreenNavigation}
        //             options={{
        //                 tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={25} />,
        //             }}
        //         />
        //     </Tab.Navigator>
        // </NavigationContainer>
        <AuthContext.Provider value={{ user, setUser }}>
            <NavigationContainer theme={navigationTheme}>{user ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>
            <OfflineNotice />
        </AuthContext.Provider>

        //<LoginScreen />
        // <Card title="Red jacket for sale" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
        //     <ListingDetailsScreen />
        //     <ViewImageScreen />
        // <MessagesScreen />
        //     <AccountScreen />
        //     <ListingsScreen />
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
