import { ICredentials } from "./../types/credentials";

export const getObjectEmailNameId = (credentials: ICredentials): Partial<ICredentials> => {
     const { email, first_name, id, last_name, user_role, emailNotification, auth_token } = credentials;
     return { email, first_name, id, last_name, user_role, emailNotification, auth_token };
};
