import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/react-phone-number-input.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleId } from "../pagesData/sign-in";
import { SkeletonTheme } from "react-loading-skeleton";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    require("../../mocks");
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SkeletonTheme baseColor="#d7d7d7" highlightColor="#444">
            <Provider store={store}>
                <GoogleOAuthProvider clientId={googleId}>
                    <Component {...pageProps} />
                </GoogleOAuthProvider>
            </Provider>
        </SkeletonTheme>
    );
}
