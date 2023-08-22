import React from "react";

import ListIconCompany from "@/src/components/entities/lists/listIconCompany/ListIconCompany";
import { ICON_COMPANY } from "@/src/components/entities/iconCompany/IconCompanyConfig";

const IconCompany = () => {
    return (
        <div>
            <ListIconCompany config={ICON_COMPANY} />
        </div>
    );
};

export default IconCompany;
