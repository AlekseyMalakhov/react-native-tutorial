import React from "react";
import { View, StyleSheet, Alert, Keyboard } from "react-native";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";
import messageApi from "../api/messages";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
});

function ContactSellerForm({ listingId }) {
    const handleSubmit = async (values, actions) => {
        const result = await messageApi.send(values);
        if (!result.ok) {
            console.log("Error", result);
            return Alert.alert("Error", "Could not send the message to the seller.");
        }
        actions.resetForm();
    };

    return (
        <View style={styles.container}>
            <AppForm
                initialValues={{
                    message: "",
                    listingId: listingId,
                }}
                onSubmit={handleSubmit}
            >
                <AppFormField placeholder="Message..." name="message" autoCapitalize="none" autoCorrect={false} />
                <SubmitButton title="Contact seller" />
            </AppForm>
        </View>
    );
}

export default ContactSellerForm;
