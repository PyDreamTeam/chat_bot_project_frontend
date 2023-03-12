import { useAppSelector } from "@/src/hooks/types";
import React from "react";
import AccountPageWrapper from "@/src/components/widgets/AccountpageWrapper";
import { useRouter } from "next/router";

const index = () => {
     const credentials = useAppSelector((state) => state.credentialsSlice.credentials);

     const router = useRouter();

     return <AccountPageWrapper />;
};

export default index;
