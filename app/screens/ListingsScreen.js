import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { StyleSheet, FlatList, View } from "react-native";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.light,
    },
});

function ListingsScreen({ navigation }) {
    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
        getListingsApi.request();
    }, []);

    return (
        <Screen style={styles.container}>
            {getListingsApi.error && (
                <View>
                    <AppText>Couldn't retreave the listings.</AppText>
                    <AppButton title="Retry" onPress={getListingsApi.request}></AppButton>
                </View>
            )}
            <ActivityIndicator visible={getListingsApi.loading} />
            <FlatList
                data={getListingsApi.data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate("ListingDetails", item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                    />
                )}
            />
        </Screen>
    );
}

export default ListingsScreen;
