import React, { FC } from "react";
import styles from "./DescriptionBlock.module.css";
import SelectedPlatforms from "@/src/components/shared/solutionItem/selectedPlatforms/SelectedPlatforms";
import Image, { StaticImageData } from "next/image";
import ButtonAuthHeader from "@/src/components/shared/buttons/ButtonAuthHeader";
import ButtonSubmit from "@/src/components/shared/buttons/ButtonSubmit";
import Text from "@/src/components/shared/textfields/Text";

interface IDescriptionBlock {
     title: string;
     description: string;
     image: StaticImageData;
     selectedPlatforms: string[];
     logo: string;
}

const DescriptionBlock: FC<IDescriptionBlock> = ({ title, description, image, selectedPlatforms, logo }) => {
     return (
          <div className={styles.descriptionWrapper}>
               <div className={styles.solutionItemLeftBlock}>
                    <div className={styles.logoWithText}>
                         {logo && <Image src={logo} alt={"Logo Error"} />}
                         <div className={styles.solutionItemTextBlock}>
                              <Text type={"p"} color={"black"}>{title}</Text>
                              <Text type={"p"} color={"black"}>{description}</Text>
                         </div>
                    </div>
                    <SelectedPlatforms platforms={selectedPlatforms} />
                    <ButtonSubmit isDisabled={true} text={"Добавить в избранное"} />
               </div>
               {image ? (
                    <Image className={styles.solutionItemImg} src={image} alt={"Image Error"} />
               ) : (
                    <div className={styles.solutionItemImg} />
               )}
          </div>
     );
};

export default DescriptionBlock;