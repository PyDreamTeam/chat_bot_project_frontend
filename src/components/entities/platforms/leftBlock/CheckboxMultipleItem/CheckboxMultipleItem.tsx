import Text from "@/src/components/shared/text/Text";
import { Checkbox } from "../Checkbox/Checkbox";
import { useAppDispatch } from "@/src/hooks/types";
import { addFilters, deleteFilters } from "@/src/store/reducers/platforms/slice";
import css from "./checkboxMultipleItem.module.css";

export const CheckboxMultipleItem = ({id, tag, isChecked, filter}: {id: number, tag: string, isChecked: boolean, filter?: string}) => {
     const dispatch = useAppDispatch();

     const handleCheckboxClick = ({id, tag, filter}: {id: number, tag: string, filter?: string}) => {
          if (!isChecked) {
               dispatch(addFilters({id: id, tag: tag, filter: filter}));
          } else {
               dispatch(deleteFilters(id));
          }
     };

     return ( <li key={id} className={css.tag}>
          <Checkbox onChange={() => handleCheckboxClick(({id, tag, filter}))} checked={isChecked}/>
          <Text type="reg14" color="dark">{tag}</Text>
     </li>);
};