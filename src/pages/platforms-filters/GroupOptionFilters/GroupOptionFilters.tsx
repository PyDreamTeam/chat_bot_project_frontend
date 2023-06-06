import Text from "@/src/components/shared/text/Text";
import { FC, useEffect, useState } from "react";
import InputPrice from "../InputPrice/InputPrice";
import Option from "../OptionFilter/OptionFilter";
import style from "./GroupOptionFilters.module.css";

interface PropsOption {
     name: string;
     checked: boolean;
     onChange?: () => void;
}

interface PropsGroupOption {
     price?: string;
     info?: string;
     name: string;
     items: PropsOption[];
}
const GroupOption: FC<PropsGroupOption> = ({ name, items = [], info, price }) => {

     const [minPrice, setMinPrice] = useState("");
     const [maxPrice, setMaxPrice] = useState("");

     const [lengthArray, setLenghtArray] = useState(4);
     const changeLenghtArray = () => {
          if (items.length === 5) {
               setLenghtArray(5);
          }
     };
     const [options, setOptions] = useState<PropsOption[]>(items);
     const changeCheckboxHandler = (name: string) => {
          setOptions((prevState) => prevState.map((option) => option.name === name ? { ...option, checked: !option.checked } : option));
     };

     const [isOpen, setIsOpen] = useState(false);
     const toogleOpenOptions = () => {
          setIsOpen(!isOpen);
     };

     const [isInfo, setIsInfo] = useState(false);
     const toggleInfo = () => {
          setIsInfo(!isInfo);
     };

     useEffect(() => {
          changeLenghtArray();
     }, []);

     return (
          <div className={style.wrapper}>
               <div>
                    {info === undefined ? <Text type="reg20" color="black">{name}</Text> :
                         <div className={style.blockInfo} onClick={toggleInfo}>
                              <Text type="reg20" color="black">{name}</Text>
                              {isInfo ? <img src="/img/clarity_help-lineActive.svg" alt="item" /> : <img src="/img/clarity_help-line.svg" alt="item" />}
                              {isInfo &&
                                   <div className={style.groupInfo}>
                                        <div className={style.info}>
                                             <Text type="sem16" color="black">{name} <span className={style.infoText}>- {info}</span></Text>
                                        </div>
                                   </div>
                              }
                         </div>}
               </div>
               <ul className={style.list}>
                    {options
                         .slice(0, lengthArray)
                         .map((item) => (
                              <li key={item.name}>
                                   <Option name={item.name} checked={item.checked} onChange={() => changeCheckboxHandler(item.name)} />
                              </li>
                         ))}
                    {price !== undefined &&
                         <div className={style.blockPrice}>
                              <InputPrice value={minPrice} onChange={(e) => setMinPrice(e.target.value)} variant={1} />
                              <span className={style.linePrice}></span>
                              <InputPrice value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} variant={2} />
                         </div>}
                    {items.length > 4 && items.length > 5 &&
                         <div onClick={toogleOpenOptions} className={isOpen ? style.btnOpen : style.btnClose}>
                              <Text type="reg14" color="black">Все {items.length} вариантов</Text>
                              {isOpen ? <img src="/img/chevron-right.svg" alt="item" /> : <img src="/img/chevron-rightGray.svg" alt="item" />}
                         </div>}
                    {isOpen &&
                         <div className={style.wrapperList}>
                              <ul className={`${style.list} ${style.listOpen}`}>
                                   {options.map((item) => (
                                        <li key={item.name}>
                                             <Option name={item.name} checked={item.checked} onChange={() => changeCheckboxHandler(item.name)} />
                                        </li>
                                   ))}
                              </ul>
                         </div>}
               </ul>
          </div>
     );
};

export default GroupOption;