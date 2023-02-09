import React from "react";
import { Field } from "formik";

// @ts-ignore
function FilteredPropsInputField({ className, valid, error, ...props }) {
    return <Field className={className} {...props} />;
}

export default FilteredPropsInputField;