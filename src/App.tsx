import { FunctionComponent } from "react";

import { Game, Result } from "./components";

import styles from './app.module.scss';

const App: FunctionComponent = () => {
  return (<>
    <div className={styles.container}>
      <Game />
      {/* <Result />  */}
    </div>
  </>)
}

export default App;


