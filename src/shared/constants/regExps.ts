// eslint-disable-next-line no-useless-escape
export const EmailEngRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const NameRegExp = /^[a-zA-Zа-яА-ЯёЁ]+(-[a-zA-Zа-яА-ЯёЁ]+)?$/;
export const PasswordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const PasswordRegExpEightSymbols = /^[A-Za-z\d@$!%*?&]{8,}/;
export const PasswordRegExpMatchLowercaseAndUppercase = /(?=.*[a-z])(?=.*[A-Z])/;
export const PasswordRegExpMatchNumber = /(?=.*[0-9])/;
export const PasswordRegExpMatchSpecialCharacter = /(?=.*[@$!%*?&])/;
// export const PasswordRegExp = /^[A-Za-z0-9]+$/;
export const PhoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
