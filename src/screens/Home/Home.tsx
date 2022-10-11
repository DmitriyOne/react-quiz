import { FunctionComponent, useState } from "react";

import { questions } from "../../data";
import { IQuestion } from "../../interfaces";

import { Game, Result } from "../../components";

import styles from './home.module.scss';

export const Home: FunctionComponent = () => {
  const [step, setStep] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);
  const question: IQuestion = questions[step];

  const onClickVariant = (index: number) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <>
      <div className={styles.container}>
        {step !== questions.length
          ?
          <Game
            step={step}
            questions={question}
            onClickVariant={onClickVariant}
          />
          :
          <Result correct={correct} />
        }
      </div>
    </>
  );
};
