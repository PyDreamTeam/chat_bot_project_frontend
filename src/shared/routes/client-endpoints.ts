import { ClientEndpoints } from "./../types/endpoints";
const myAccount = "/my-account";
const profile = `${myAccount}/profile`;
const settings = `${myAccount}/settings`;

export const clientEndpoints: ClientEndpoints = {
     myAccount: {
          get: myAccount,
          profile: {
               get: `${profile}`,
               personalData: `${profile}/personal-data`,
          },
          settings: {
               personalData: `${settings}/personal-data`,
               changePassword: `${settings}/change-password`,
               payment: `${settings}/payment`,
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
