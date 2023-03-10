import { createSlice } from "@reduxjs/toolkit";

enum CredentialsTypes {
     name = "name",
     email = "email",
     password = "password",
     token = "token",
     id = "id",
     picture = "picture",
}

type Credentials = Record<keyof typeof CredentialsTypes, string>;

const initialState: { credentials: Credentials } = {
     credentials: {
          name: "",
          email: "",
          password: "",
          token: "",
          id: "",
          picture: "",
     },
};

const credentialsSlice = createSlice({
     name: "credentials",
     initialState,
     reducers: {
          setCredentials(state, action) {
               state.credentials = action.payload;
          },
          removeCredentials(state) {
               state.credentials = {
                    name: "",
                    email: "",
                    password: "",
                    token: "",
                    id: "",
                    picture: "",
               };
          },
     },
});

export const { setCredentials, removeCredentials } = credentialsSlice.actions;
export default credentialsSlice.reducer;
