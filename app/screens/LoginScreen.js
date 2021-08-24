import React, { useState } from "react";
import Screen from "../components/Screen";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppFormField, SubmitButton, AppForm, ErrorMessage } from "../components/forms";
import authAPI from "../api/auth";
import useAuth from "../auth/useAuth";

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
    const [loginFailed, setLoginFailed] = useState(false);
    const { logIn } = useAuth();

    const handleSubmit = async ({ email, password }) => {
        const result = await authAPI.login(email, password);
        if (!result.ok) {
            setLoginFailed(true);
            return;
        }
        setLoginFailed(false);
        logIn(result.data);
    };

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />
            <AppForm
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid email and/or password" visible={loginFailed} />
                <AppFormField
                    placeholder="email"
                    icon="email"
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <AppFormField
                    placeholder="Password"
                    icon="lock"
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="password"
                    secureTextEntry
                />
                <SubmitButton title="login" />
            </AppForm>
        </Screen>
    );
}

export default LoginScreen;
