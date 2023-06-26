import React from "react";
import ListCardAdvantages from "@/src/components/entities/lists/listCardAdvantages/ListCardAdvantages";
import {CARDS_OUR_ADVANTAGES} from "@/src/components/entities/cards/CardsOurAdvantagesConfig";

const CardsOurAdvantages = () => {
     return (
          <div>
               <ListCardAdvantages config={CARDS_OUR_ADVANTAGES}/>
          </div>
     );
};

export default CardsOurAdvantages;