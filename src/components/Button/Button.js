import styles from "./Button.module.css";

export const Button = (props) => {
  const { text } = props;

  return (
    <>
      <button className={text==="C" || text === "="?styles.blue:styles.btn}>
        {text}
      </button>
    </>
  );
};
