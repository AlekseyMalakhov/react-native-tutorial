import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { StyleSheet, FlatList, View } from "react-native";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.light,
    },
});

function ListingsScreen({ navigation }) {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadListings();
    }, []);

    const loadListings = async () => {
        setLoading(true);
        const response = await listingsApi.getListings();
        setLoading(false);

        if (!response.ok) {
            setError(true);
            return;
        }
        setError(false);
        setListings(response.data);
    };

    return (
        <Screen style={styles.container}>
            {error && (
                <View>
                    <AppText>Couldn't retreave the listings.</AppText>
                    <AppButton title="Retry" onPress={loadListings}></AppButton>
                </View>
            )}
            <ActivityIndicator visible={loading} />
            <FlatList
                data={listings}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate("ListingDetails", item)}
                    />
                )}
            />
        </Screen>
    );
}

export default ListingsScreen;
