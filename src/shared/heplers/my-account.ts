import { ICredentials } from "./../types/credentials";

export const getObjectEmailNameId = (credentials: ICredentials): Partial<ICredentials> => {
     const { email, name, id } = credentials;
     return { email, name, id };
};
