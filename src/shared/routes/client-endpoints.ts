import { ClientEndpoints } from "./../types/endpoints";
const myAccount = "/my-account";
const profile = `${myAccount}/profile`;

export const clientEndpoints: ClientEndpoints = {
     myAccount: {
          get: myAccount,
          profile: {
               get: `${profile}`,
               personalData: `${profile}/personal-data`,
               changePassword: `${profile}/change-password`,
               payment: `${profile}/payment`,
               settings: `${profile}/settings`,
          },
          templates: `${myAccount}/templates`,
     },
     home: {
          get: "/home",
     },
     restorePassword: {
          get: "/restore-password",
     },
     signIn: {
          get: "/sign-in",
     },
     signUp: {
          get: "/sign-up",
     },
     updatePassword: {
          get: "/update-password",
     },
};