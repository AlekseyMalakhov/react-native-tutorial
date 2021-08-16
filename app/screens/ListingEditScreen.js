import React, { useState } from "react";
import Screen from "../components/Screen";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppFormField, SubmitButton, AppForm, AppFormPicker, FormImagePicker } from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";
import UploadScreen from "./UploadScreen";

const items = [
    {
        label: "Furniture",
        value: 1,
        icon: "floor-lamp",
        color: "#fc5c65",
    },
    {
        label: "Cars",
        value: 2,
        icon: "car",
        color: "#fd9644",
    },
    {
        label: "Cameras",
        value: 3,
        icon: "camera",
        color: "#fed330",
    },
    {
        label: "Games",
        value: 4,
        icon: "cards",
        color: "#26de81",
    },
    {
        label: "Clothing",
        value: 5,
        icon: "shoe-heel",
        color: "#2bcbba",
    },
    {
        label: "Sports",
        value: 6,
        icon: "basketball",
        color: "#45aaf2",
    },
    {
        label: "Movies & Music",
        value: 7,
        icon: "headphones",
        color: "#4b7bec",
    },
    {
        label: "Books",
        value: 8,
        icon: "book-open-variant",
        color: "#9f62e3",
    },
    {
        label: "Other",
        value: 9,
        icon: "laptop",
        color: "#938e99",
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
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "Please select at least one image"),
});

function ListingEditScreen() {
    const location = useLocation();
    //const sendListingApi = useApi(listingsApi.addListing);

    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing) => {
        setProgress(0);
        setUploadVisible(true);
        const data = { ...listing };
        data.location = location;
        //sendListingApi.request(data, (progress) => setProgress(progress));
        const result = await listingsApi.addListing(data, (progress) => setProgress(progress));
        //setUploadVisible(false);

        if (!result.ok) {
            setUploadVisible(false);
            return alert("Could not save the listing");
        }
    };

    return (
        <Screen style={styles.container}>
            <UploadScreen progress={progress} visible={uploadVisible} onDone={() => setUploadVisible(false)} />
            <AppForm
                initialValues={{
                    images: [],
                    title: "",
                    price: "",
                    category: null,
                    description: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField placeholder="Title" name="title" autoCapitalize="none" autoCorrect={false} />
                <AppFormField placeholder="Price" name="price" autoCapitalize="none" autoCorrect={false} keyboardType="numeric" maxLength={8} />
                <AppFormPicker placeholder="Category" name="category" items={items} numberOfColumns={3} PickerItemComponent={CategoryPickerItem} />
                <AppFormField placeholder="Description" name="description" autoCapitalize="none" autoCorrect={false} multiline numberOfLines={3} />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

export default ListingEditScreen;
