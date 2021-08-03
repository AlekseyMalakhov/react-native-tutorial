import React from "react";
import Screen from "../components/Screen";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppFormField, SubmitButton, AppForm, AppFormPicker } from "../components/forms";

const items = [
    {
        label: "Furniture",
        value: 1,
    },
    {
        label: "Clothes",
        value: 2,
    },
    {
        label: "Cameras",
        value: 3,
    },
];

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().optional().label("Description"),
    category: Yup.object()
        .shape({
            label: Yup.string().required(),
            value: Yup.number().required(),
        })
        .nullable(),
});

function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    category: null,
                    description: "",
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField placeholder="Title" name="title" autoCapitalize="none" autoCorrect={false} />
                <AppFormField placeholder="Price" name="price" autoCapitalize="none" autoCorrect={false} />
                <AppFormPicker placeholder="Category" name="category" items={items} />
                <AppFormField placeholder="Description" name="description" autoCapitalize="none" autoCorrect={false} />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

export default ListingEditScreen;
