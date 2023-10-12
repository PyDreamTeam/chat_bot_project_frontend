// import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import jwtDecode from "jwt-decode";
import { useAppDispatch } from "@/src/hooks/types";
import { setCredentials } from "@/src/store/reducers/credentialsSlice";
import styles from "./styles/styles.module.css";
import { ICredentials } from "@/src/shared/types/credentials";

const ButtonGoogleLogin = () => {
    const dispatch = useAppDispatch();

    return (
        <svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 1">
                <path
                    id="Vector"
                    d="M40.0039 21.4899C40.0039 20.1118 39.8705 18.6892 39.6482 17.3555H20.3984V25.2243H31.4237C30.9792 27.7584 29.5121 29.9812 27.3337 31.4038L33.9133 36.5163C37.781 32.9153 40.0039 27.6694 40.0039 21.4899Z"
                    fill="#4466F5"
                />
                <path
                    id="Vector_2"
                    d="M20.3913 41.406C25.904 41.406 30.5275 39.5833 33.9062 36.4713L27.3266 31.4033C25.5039 32.6481 23.1477 33.3594 20.3913 33.3594C15.0565 33.3594 10.5664 29.7584 8.92149 24.957L2.16406 30.1585C5.63169 37.0493 12.6559 41.406 20.3913 41.406Z"
                    fill="#34A353"
                />
                <path
                    id="Vector_3"
                    d="M8.9247 24.9121C8.08002 22.3781 8.08002 19.6217 8.9247 17.0877L2.16727 11.8418C-0.722423 17.6212 -0.722423 24.4231 2.16727 30.158L8.9247 24.9121Z"
                    fill="#F6B704"
                />
                <path
                    id="Vector_4"
                    d="M20.3913 8.68566C23.281 8.6412 26.1263 9.75262 28.2157 11.7532L34.0396 5.88488C30.3497 2.41725 25.4594 0.550069 20.3913 0.594526C12.6559 0.594526 5.63169 4.95129 2.16406 11.8421L8.92149 17.088C10.5664 12.2422 15.0565 8.68566 20.3913 8.68566Z"
                    fill="#F53527"
                />
            </g>
        </svg>

        // <GoogleLogin
        //     type="icon"
        //     size="large"
        //     shape="square"
        //     containerProps={{ className: styles.googleLoginButton }}
        //     onSuccess={(credentialResponse) => {
        //         if (credentialResponse.credential) {
        //             console.log(jwtDecode(credentialResponse.credential));
        //             const { jti, first_name, email, avatar }: ICredentials = jwtDecode(credentialResponse.credential);
        //             dispatch(
        //                 setCredentials({
        //                     jti,
        //                     first_name,
        //                     email,
        //                     avatar,
        //                 })
        //             );
        //         }
        //     }}
        // />
    );
};

export default ButtonGoogleLogin;
