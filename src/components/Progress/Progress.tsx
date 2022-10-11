import { FunctionComponent } from "react";

import { questions } from "../../data";

import styles from './progress.module.scss';

type TProps = {
  step: number;
}

export const Progress: FunctionComponent<TProps> = ({
  step,
}) => {
  const percentage = step / questions.length * 100;

  return (
    <div className={styles.component}>
      <div
        style={{ width: `${percentage}%` }}
        className={styles.row}
      />
    </div>
  );
};

