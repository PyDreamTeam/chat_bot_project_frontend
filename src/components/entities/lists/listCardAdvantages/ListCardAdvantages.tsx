import React, {FC} from "react";

import CardAdvantages, {ICard} from "@/src/components/shared/tabs/cardAdvantages/cardAdvantages";

interface ICardAdvantages {
    config: ICard[];
}
const ListCardAdvantages: FC<ICardAdvantages> = ({config=[]}) => {
     return (
          <div>
               {config.map((tab) => (
                    <CardAdvantages
                         id={tab.id}
                         key={tab.id}
                         icon={tab.icon}
                         text={tab.text}
                    />
               ))}
          </div>
     );
};

export default ListCardAdvantages;