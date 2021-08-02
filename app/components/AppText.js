import React from "react";
import { Text } from "react-native";
import appStyles from "../config/appStyles";

function AppText({ children, style }) {
    return <Text style={[appStyles.text, style]}>{children}</Text>;
}

export default AppText;
