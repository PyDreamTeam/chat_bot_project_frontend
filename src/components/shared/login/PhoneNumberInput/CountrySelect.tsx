import { FC } from "react";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";

interface ICountrySelect {
    value: string;
    // onChange: (event: string | undefined) => void;
    onChange: (event: string | undefined) => void;

    // TODO: typeError
    labels: any;
}

const CountrySelect: FC<ICountrySelect> = ({ value, onChange, labels, ...rest }) => (
    <select {...rest} value={value} onChange={(event) => onChange(event.target.value || undefined)}>
        <option value="">{labels["ZZ"]}</option>
        {getCountries().map((country) => (
            <option key={country} value={country}>
                {labels[country]} +{getCountryCallingCode(country)}
            </option>
        ))}
    </select>
);

export default CountrySelect;
