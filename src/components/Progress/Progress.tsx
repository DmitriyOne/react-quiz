import { FunctionComponent } from "react"

import styles from './progress.module.scss'

export const Progress: FunctionComponent = () => {
  return (
    <div className={styles.component}>
      <div style={{ width: '30%' }} className={styles.row} />
    </div>
  )
}

