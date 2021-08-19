import React from "react";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";

function AppFormField({ name, ...otherProps }) {
    const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();
    return (
        <React.Fragment>
            <AppTextInput
                onChangeText={(val) => setFieldValue(name, val)}
                onBlur={() => setFieldTouched(name)}
                value={values[name]}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </React.Fragment>
    );
}

export default AppFormField;
