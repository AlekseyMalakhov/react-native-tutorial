import React, { useState } from "react";
import Screen from "../components/Screen";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppFormField, SubmitButton, AppForm, ErrorMessage } from "../components/forms";
import usersApi from "../api/users";
import authApi from "../api/auth";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);
        console.log(result);
        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError("An unexpected error occurred.");
                console.log(result);
            }
            return;
        }

        const { data: authToken } = await loginApi.request(userInfo.email, userInfo.password);
        auth.logIn(authToken);
    };
    return (
        <React.Fragment>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
            <Screen style={styles.container}>
                <AppForm
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} />
                    <AppFormField placeholder="Name" icon="account" name="name" autoCapitalize="none" autoCorrect={false} />
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
                    <SubmitButton title="Register" />
                </AppForm>
            </Screen>
        </React.Fragment>
    );
}

export default RegisterScreen;
