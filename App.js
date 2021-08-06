import React, { useEffect, useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View, StyleSheet, TextInput, Text, Switch, Button, Image } from "react-native";
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

const styles = StyleSheet.create({
    someview: {
        backgroundColor: "#f8f4f4",
        flex: 1,
    },
});

//title, subTitle, image, IconComponent, onPressHandler, renderRightActions

export default function App() {
    const [imageUri, setImageUri] = useState(null);

    return (
        // <View style={styles.someview}>
        //     <WelcomeScreen />
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
        // <ListingEditScreen />
        // <Screen>
        //     <ListItem title="t1" subTitle="D1" image={require("./app/assets/mosh.jpg")} />
        // </Screen>
        // <AccountScreen />
        <Screen>
            {/* <Button title="Select Image" onPress={selectImage} />
            <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
            <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)} />
        </Screen>
    );
}
