export const EmailEngRegExp = /^[A-Za-z0-9@.]+$/;
export const NameRegExp = /^[A-Za-z0-9]+$/;
export const PasswordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const PasswordRegExpEightSymbols = /^[A-Za-z\d@$!%*?&]{8,}/;
export const PasswordRegExpMatchLowercaseAndUppercase = /(?=.*[a-z])(?=.*[A-Z])/;
export const PasswordRegExpMatchNumber = /(?=.*[0-9])/;
export const PasswordRegExpMatchSpecialCharacter = /(?=.*[@$!%*?&])/;
// export const PasswordRegExp = /^[A-Za-z0-9]+$/;
export const PhoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
