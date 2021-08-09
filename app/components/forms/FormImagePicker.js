import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, Button } from "react-native";
import ImageInputList from "../ImageInputList";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

const styles = StyleSheet.create({
    container: {},
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

function FormImagePicker({ name }) {
    const { setFieldValue, errors, touched, setFieldTouched } = useFormikContext();

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
        setFieldValue(name, newUris);
        setFieldTouched(name);
    };

    const askToRemove = (imageURI) => {
        setImgToRemove(imageURI);
        setShowRequest(true);
    };

    const removeImage = () => {
        const newUris = [...imageUris];
        const result = newUris.filter((img) => img.uri !== imgToRemove);
        setImageUris(result);
        setFieldValue(name, result);
        setShowRequest(false);
        setImgToRemove(null);
    };

    const cancel = () => {
        setShowRequest(false);
        setImgToRemove(null);
    };
    return (
        <React.Fragment>
            <View style={styles.container}>
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
            </View>
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </React.Fragment>
    );
}

export default FormImagePicker;
