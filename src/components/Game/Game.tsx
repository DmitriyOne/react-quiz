import { FunctionComponent } from "react";

import { Progress } from "../Progress";

import styles from './game.module.scss';

export const Game: FunctionComponent = () => {
  return (
    <>
      <Progress />
      <h1 className={styles.title}>
        Что такое useState?
      </h1>
      <ul className={styles.container}>
        <li className={styles.item}>
          Это функция для хранения данных компонента
        </li>
        <li className={styles.item}>
          Это глобальный стейт
        </li>
        <li className={styles.item}>
          Это когда на ты никому не нужен
        </li>
      </ul>
    </>
  )
}
