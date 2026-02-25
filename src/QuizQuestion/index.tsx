import React, { useState } from "react";
import * as styles from "./index.css";
import { Questions } from "../constants/index";

export const QuizQuestion = () => {
  const [nextQuestion, setNextQuestion] = useState(1);

  // const handleNextQuestion = () = {
  //   setNextQuestion(nextQuestion)
  // }

  return Questions.map((question, index) => (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        Вопрос {question.id}/{Questions.length}
        <hr className={styles.line} />
        <div className={styles.question}>{question.text}</div>
        <div className={styles.variants}>
          {question.variants.map((variant, index) => (
            <div className={styles.variant} key={index}>
              {variant}
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.quizEnd}>Завершить квиз</button>
          <button
            className={styles.nextQuestion}
            onClick={() => setNextQuestion(nextQuestion + 1)}
          >
            Следующий вопрос
          </button>
        </div>
      </div>
    </div>
  ));
};
