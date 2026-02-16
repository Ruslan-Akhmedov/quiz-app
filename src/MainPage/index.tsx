import React from "react";
import * as styles from "./index.css";
import quizImage from "../assets/quiz.png";

export const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <div className={styles.textTitle}>История спорта</div>
          <div className={styles.textDescription}>
            Проверьте свои знания по истории спорта
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={quizImage} className={styles.image}></img>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.buttonStart}>Начать квиз</button>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonMyResults}>Мои результаты</button>
            <button className={styles.buttonGeneralResults}>
              Общие резульатты
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
