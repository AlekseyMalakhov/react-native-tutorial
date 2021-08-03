import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

function AppFormPicker({ name, ...otherProps }) {
    const { values, setFieldValue, errors, touched, setFieldTouched } = useFormikContext();
    let errText = "";
    if (errors[name]) {
        errText = JSON.stringify(errors[name]);
    }
    return (
        <React.Fragment>
            <AppPicker
                placeholder={name}
                {...otherProps}
                selectedItem={values[name]}
                onSelectItem={(val) => {
                    setFieldTouched(name);
                    setFieldValue(name, val);
                }}
            />
            <ErrorMessage error={errText} visible={touched[name]} />
        </React.Fragment>
    );
}

export default AppFormPicker;
