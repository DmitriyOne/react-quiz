import { FunctionComponent } from "react";

import { questions } from "../../data";

import greatSrc from './great.png';

import styles from './result.module.scss';

type TProps = {
  correct: number;
}

export const Result: FunctionComponent<TProps> = ({
  correct,
}) => {
  const onClickReload = () => {
    window.location.reload();
  }

  return (
    <div className={styles.component}>
      <img
        className={styles.img}
        src={greatSrc}
        alt="woohoo"
      />
      <h2 className={styles.title}>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <button
        className={styles.button}
        onClick={onClickReload}
      >
        Попробовать снова
      </button>
    </div>
  );
};
