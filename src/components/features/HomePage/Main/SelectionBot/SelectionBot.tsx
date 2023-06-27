import styles from "./SelectionBot.module.css"
import Image from "next/image";
export const SelectionBot = () => {
    return(
        <div className={styles.selectionWrapper}>
        <div className={styles.selectionBot}>
            <div className={styles.solutions}>

                <h1 className={styles.titleSelectionOff}>Подбери конструктор чат ботов и автоматизируй свои продажи</h1>
               <div className={styles.selectionFrame}>
                <p className={styles.titleSelection}>Подбери </p>
                   <div className={styles.selectionDesignerDots}>  <span className={styles.selectionDesigner}>конструктор чат-ботов</span></div>


               </div>
                <p className={styles.titleSelection}>и автоматизируй свои продажи</p>
                <p className={styles.subTitleSelection}>Более 100 разнообразных шаблонов под любые задачи вашего бизнеса</p>
                <button className={styles.btnSelection}>Подобрать решение</button>
            </div>
            <div className={styles.girlOnTheBed} >
                <Image className={styles.girlOnTheBed} src={"img/girlOnTheBed.png"} alt={"girlOnTheBad"} width={517} height={516} />
                <p className={styles.questionSelectionOne}>Здравствуйте, хочу купить новые кроссовки</p>
                <p className={styles.questionSelectionTwo}>У вас есть 37 размер?</p>
                <p className={styles.answerSelection}>Секунду, сейчас проверю. У нас было поступление товара сегодня</p>
            </div>
        </div>
        </div>
    )
}