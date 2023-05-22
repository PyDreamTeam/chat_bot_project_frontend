import { getObjectEmailNameId } from "@/src/shared/heplers/my-account";
import { ICredentials } from "@/src/shared/types/credentials";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { credentials: ICredentials } = {
     credentials: {
          first_name: "",
          last_name: "",
          email: "",
          auth_token: "",
          id: "",
          avatar: "",
          jti: "",
          emailNotification: false,
     },
};

const credentialsSlice = createSlice({
     name: "credentials",
     initialState,
     reducers: {
          setCredentials(state, action: PayloadAction<ICredentials>) {
               state.credentials = action.payload;
               localStorage.setItem("credentials", JSON.stringify(getObjectEmailNameId(action.payload)));
          },
          removeCredentials(state) {
               state.credentials = {
                    first_name: "",
                    last_name: "",
                    email: "",
                    auth_token: "",
                    id: "",
                    avatar: "",
                    jti: "",
               };
          },
     },
});

export const { setCredentials, removeCredentials } = credentialsSlice.actions;
export default credentialsSlice.reducer;
