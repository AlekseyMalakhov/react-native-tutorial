import React from "react";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";

function AppFormPicker({ name, ...otherProps }) {
    const { values, setFieldValue } = useFormikContext();
    return <AppPicker placeholder={name} {...otherProps} selectedItem={values[name]} onSelectItem={(val) => setFieldValue(name, val)} />;
}

export default AppFormPicker;
