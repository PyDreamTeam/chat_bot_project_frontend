import React, {FC} from "react";

import Text from "@/src/components/shared/text/Text";

export interface ICard {
    id?: number;
    icon: React.ReactNode;
    text: string;
}

const CardAdvantages: FC<ICard> = ({icon, text = ""}) => {
     return (
          <div>
               {icon}
               <Text type={"med20"} color={"black"}>
                    {text}
               </Text>
          </div>
     );
};

export default CardAdvantages;