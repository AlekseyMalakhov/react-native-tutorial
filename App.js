import React from "react";
import { Button, StyleSheet, View, Alert } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Button
                title="Click me"
                color="orange"
                onPress={() =>
                    Alert.alert("My title", "My message", [
                        {
                            text: "Yes",
                            onPress: () => console.log("Yes"),
                        },
                        {
                            text: "No",
                            onPress: () => console.log("No"),
                        },
                    ])
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

<Button title="Button Test" />;
