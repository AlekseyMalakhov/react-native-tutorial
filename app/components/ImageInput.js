import React, { Fragment, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: colors.light,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: 80,
        height: 80,
    },
});

function ImageInput({ imageUri, onChangeImage, onRemoveImage, style }) {
    const requestPermission = async () => {
        const result = await ImagePicker.requestCameraPermissionsAsync();
        if (!result.granted) {
            alert("Pls eneble permission!");
        }
    };

    useEffect(() => {
        requestPermission();
    }, []);

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled) {
                onChangeImage(result.uri);
            }
        } catch (error) {
            console.log("Error reading an image", error);
        }
    };

    const removeImage = () => {
        onRemoveImage(imageUri);
    };

    return (
        <TouchableOpacity onPress={!imageUri ? selectImage : removeImage}>
            <View style={[styles.container, style]}>
                {!imageUri ? <Icon name="camera" size={30} /> : <Image source={{ uri: imageUri }} style={styles.img} />}
            </View>
        </TouchableOpacity>
    );
}

export default ImageInput;
