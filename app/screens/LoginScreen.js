import React from "react";
import Screen from "../components/Screen";
import { Image, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => (
                    <React.Fragment>
                        <AppTextInput
                            placeholder="email"
                            icon="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            onChangeText={handleChange("email")}
                        />
                        <AppText style={{ color: "red" }}>{errors.email}</AppText>
                        <AppTextInput
                            placeholder="Password"
                            icon="lock"
                            autoCapitalize="none"
                            autoCorrect={false}
                            textContentType="password"
                            secureTextEntry
                            onChangeText={handleChange("password")}
                        />
                        <AppText style={{ color: "red" }}>{errors.password}</AppText>
                        <AppButton title="login" onPress={handleSubmit} />
                    </React.Fragment>
                )}
            </Formik>
        </Screen>
    );
}

export default LoginScreen;
