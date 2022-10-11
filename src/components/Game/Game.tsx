import { FunctionComponent } from "react";

import { IQuestion } from "../../interfaces";
import { Progress } from "../Progress";

import styles from './game.module.scss';

type TProps = {
  step: number;
  questions: IQuestion;
  onClickVariant: (index: number) => void;
}

export const Game: FunctionComponent<TProps> = ({
  step,
  questions,
  onClickVariant,
}) => {
  return (
    <>
      <Progress step={step}/>
      <h1 className={styles.title}>
        {questions.title}
      </h1>
      <ul>
        {questions.variants.map((item, index) => (
          <li
            key={index}
            className={styles.item}
            onClick={() => onClickVariant(index)}
          >
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </>
  );
};
