import React from "react";
import { Field } from "formik";

function FilteredPropsInputField({ className, valid, error, ...props }: any) {
     return <Field className={className} {...props} />;
}

export default FilteredPropsInputField;
