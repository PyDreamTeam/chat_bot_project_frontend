export interface ClientEndpoints {
     myAccount: {
          get: string;
          profile: {
               get: string;
               personalData: string;
               changePassword: string;
               payment: string;
          };
          templates: string;
     };
     home: {
          get: string;
     };
     restorePassword: {
          get: string;
     };
     signIn: {
          get: string;
     };
     signUp: {
          get: string;
     };
     updatePassword: {
          get: string;
     };
     platformsFilters: {
          get: string
     };
     adminPage: {
          get: string;
     };
}