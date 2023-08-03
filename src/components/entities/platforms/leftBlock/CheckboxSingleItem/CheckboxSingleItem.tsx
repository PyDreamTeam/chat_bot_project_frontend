import Text from "@/src/components/shared/text/Text";
import { Checkbox } from "../Checkbox/Checkbox";
import css from "./checkboxSingleItem.module.css";

export const CheckboxSingleItem = ({id, tag, isChecked, setChecked, filter}: {id: number, tag: string, isChecked: boolean, setChecked: (id: number, tag: string, filter?: string) => void, filter?: string}) => {

     return ( <li key={id} className={css.tag}>
          <Checkbox onChange={() => setChecked(id, tag, filter)} checked={isChecked}/>
          <Text type="reg14" color="dark">{tag}</Text>
     </li>);
};