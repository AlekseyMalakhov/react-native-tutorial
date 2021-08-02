import React from "react";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";

function AppFormField({ name, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
    return (
        <React.Fragment>
            <AppTextInput onChangeText={handleChange(name)} onBlur={() => setFieldTouched(name)} {...otherProps} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </React.Fragment>
    );
}

export default AppFormField;
