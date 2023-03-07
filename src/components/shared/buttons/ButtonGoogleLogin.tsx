import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import jwtDecode from "jwt-decode";
import { useAppDispatch } from "@/src/hooks/types";
import { setCredentials } from "@/src/store/reducers/credentialsSlice";
import styles from "./styles/styles.module.css";

const ButtonGoogleLogin = () => {
     const dispatch = useAppDispatch();

     return (
          <GoogleLogin
               type="icon"
               size="large"
               shape="square"
               containerProps={{ className: styles.googleLoginButton }}
               onSuccess={(credentialResponse: any) => {
                    console.log(jwtDecode(credentialResponse.credential));
                    const { jti, name, email, picture }: any = jwtDecode(credentialResponse.credential);
                    dispatch(
                         setCredentials({
                              jti,
                              name,
                              email,
                              picture,
                         })
                    );
               }}
          />
     );
};

export default ButtonGoogleLogin;
