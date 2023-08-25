import { Button } from "../Button/Button";
import styles from "./ButtonsContainer.module.css";

export const ButtonsContainer = () => {
  const data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.resultHeader}>
          <div className={styles.operation}>
            0+0=
            <hr />
            <div className={styles.result}>0</div>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <div className={styles.numsContainer}>
            {data.map((d) => {
              return <Button text={d} />;
            })}
            <Button text={"%"} />
            <Button text={"."} />
          </div>
          <div className={styles.operatorButtons}>
            <Button text={"+"} />
            <Button text={"-"} />
            <Button text={"*"} />
            <Button text={"/"} />
          </div>
        </div>
        <div className={styles.lastRow}>
            <Button text={"C"}  />
            <Button text={"="} />
          </div>
      </div>
    </>
  );
};
