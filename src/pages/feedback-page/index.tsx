import React from "react";

import Header from "@/src/components/features/HomePage/Header/Header";
import Footer from "@/src/components/features/HomePage/Footer/Footer";
import FeedBack from "@/src/components/features/HomePage/FeedBack/FeedBack";

export default function FeedbackPage() {
    return (
        <>
            <Header type="start" />
            <FeedBack />
            <Footer />
        </>
    );
}
