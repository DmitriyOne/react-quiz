import { FunctionComponent } from "react";

import styles from './result.module.scss';

export const Result: FunctionComponent = () => {
  return (
    <div className={styles.component}>
      <img
        className={styles.img}
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="woohoo"
      />
      <h2 className={styles.title}>
        Вы отгадали 3 ответа из 10
      </h2>
      <button
        className={styles.button}
      >
        Попробовать снова
      </button>
    </div>
  );
}