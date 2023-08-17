import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useField } from "formik";

const PhoneInputField = ({ ...props }) => {
     const [field, meta, helpers] = useField(props.name);

     return (
          <PhoneInput
               {...props}
               {...field}
               value={field.value}
               international
               countryCallingCodeEditable={true}
               defaultCountry="RU"
               onChange={(value) => {
                    helpers.setValue(value);
               }}
               error={field.value ? (isValidPhoneNumber(field.value) ? undefined : "Invalid phone number") : "Phone number required"}
          />
     );
};

export default PhoneInputField;
