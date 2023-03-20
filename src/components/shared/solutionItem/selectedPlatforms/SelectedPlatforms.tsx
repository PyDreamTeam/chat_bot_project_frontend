import React, { FC } from "react";

import styles from "./SelectedPlatforms.module.css";
import uuid from "uuid-random";
import { PlatformsSvgConfig } from "@/src/components/shared/solutionItem/selectedPlatforms/images/PlatformsSvgConfig";

interface ISelectedPlatforms {
     platforms: string[];
}

const SelectedPlatforms: FC<ISelectedPlatforms> = ({ platforms }) => {
     return <div className={styles.selectedPlatformsBlock}>{platforms.map((platform) => PlatformsSvgConfig[platform])}</div>;
};

export default SelectedPlatforms;
