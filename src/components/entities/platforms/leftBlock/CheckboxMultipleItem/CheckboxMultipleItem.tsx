import Text from "@/src/components/shared/text/Text";
import { Checkbox } from "../Checkbox/Checkbox";
import { useAppDispatch } from "@/src/hooks/types";
import { addFilters, deleteFilters } from "@/src/store/reducers/platforms/slice";
import css from "./checkboxMultipleItem.module.css";

export const CheckboxMultipleItem = ({id, tag, isChecked}: {id: number, tag: string, isChecked: boolean}) => {
     const dispatch = useAppDispatch();

     const handleCheckboxClick = ({id, tag}: {id: number, tag: string}) => {
          if (!isChecked) {
               dispatch(addFilters({id: id, tag: tag}));
          } else {
               dispatch(deleteFilters(id));
          }
     };

     return ( <li key={id} className={css.tag}>
          <Checkbox onChange={() => handleCheckboxClick(({id, tag}))} checked={isChecked}/>
          <Text type="reg14" color="dark">{tag}</Text>
     </li>);
};