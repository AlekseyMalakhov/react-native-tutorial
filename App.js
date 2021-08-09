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

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    requestWindow: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "15%",
        backgroundColor: "green",
        borderColor: "black",
        borderRadius: 20,
    },
    buttons: {
        marginTop: 10,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
    },
});

//title, subTitle, image, IconComponent, onPressHandler, renderRightActions

export default function App() {
    const [imageUris, setImageUris] = useState([]);
    const [showRequest, setShowRequest] = useState(false);
    const [imgToRemove, setImgToRemove] = useState(null);

    const addImage = (imageURI) => {
        const newUris = [...imageUris];
        const newURI = {
            uri: imageURI,
            id: Date.now(),
        };
        newUris.push(newURI);
        setImageUris(newUris);
        //console.log(newUris);
    };

    const askToRemove = (imageURI) => {
        setImgToRemove(imageURI);
        setShowRequest(true);
    };

    const removeImage = () => {
        const newUris = [...imageUris];
        const result = newUris.filter((img) => img.uri !== imgToRemove);
        setImageUris(result);
        setShowRequest(false);
        setImgToRemove(null);
    };

    const cancel = () => {
        setShowRequest(false);
        setImgToRemove(null);
    };

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
            {/* <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)} /> */}
            <ImageInputList imageUris={imageUris} onAddImage={addImage} onRemoveImage={askToRemove} />
            <Modal visible={showRequest} transparent animationType="fade">
                <View style={styles.modalContainer}>
                    <View style={styles.requestWindow}>
                        <Text>Delete</Text>
                        <Text>Do you realy want to delete this image?</Text>
                        <View style={styles.buttons}>
                            <Button title="Yes" styles={{ width: "100%" }} onPress={removeImage} />
                            <Button title="No" styles={{ width: "100%" }} onPress={cancel} />
                        </View>
                    </View>
                </View>
            </Modal>
        </Screen>
    );
}
