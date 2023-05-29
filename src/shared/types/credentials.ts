import {number, string} from "yup";

export interface ICredentials {
     first_name?: string;
     last_name?: string;
     email?: string;
     auth_token?: string;
     id?: string | number;
     avatar?: string;
     jti?: string;
     emailNotification?: boolean;
     user_role?: string;
     picture?: string;
     url?: string;
     accessToken?: string;
}
export type ResponseParams = {
     first_name: string;
     picture: {
          data: {
               url: string
          }
     },
     email: string;
     accessToken: string;
}