import styles from "./Button.module.css";


export const Button = (props) => {
  const { text,handleClick} = props;

  return (
    <>
      <button
        className={text === "C" || text === "=" ? styles.blue : styles.btn}
        onClick={()=>handleClick(text)}
      >
        {text}
      </button>
    </>
  );
};
