import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import appStyles from "../config/appStyles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import colors from "../config/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: appStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
    placeholder: {
        color: colors.medium,
    },
});

function AppPicker({ icon, placeholder, items, onSelectItem, selectedItem, numberOfColumns = 1, PickerItemComponent = PickerItem }) {
    const [modalVisible, setModalVisible] = useState(false);

    const select = (item) => {
        setModalVisible(false);
        onSelectItem(item);
    };

    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={appStyles.colors.medium} style={styles.icon} />}
                    <AppText style={selectedItem ? styles.text : styles.placeholder}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={appStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                onPress={() => {
                                    select(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </React.Fragment>
    );
}

export default AppPicker;
