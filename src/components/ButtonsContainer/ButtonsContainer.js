import { useContext, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./ButtonsContainer.module.css";
import { operationContext } from "../../operationContex";

export const ButtonsContainer = () => {
  const data = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  let {
    operand1,
    setOperand1,
    operand2,
    setOperand2,
    operator,
    setOperator,
    result,
    setResult,
  } = useContext(operationContext);


  const [entry,setEntry] = useState("operand1");

  function handleClick(arg) {
    const asciiVal = arg.charCodeAt(0);
  
    if ((asciiVal >= 48 && asciiVal <= 57) || asciiVal === 46) {
      if (entry === "operand1") {
        if (operand1 === "0" && result === "0") {
          setOperand1(arg);
        } else  {
          setOperand1(operand1 + arg);
        }
        setEntry("operand2");
      } else if (entry === "operand2") {
        if(operand2 === "0"){
          setOperand2(arg);
        }else{
          setOperand2(operand2+arg);
        }
        
      }
    } else if (
      asciiVal === 42 ||
      asciiVal === 43 ||
      asciiVal === 45 ||
      asciiVal === 47 ||
      asciiVal === 37
    ) {
      setOperator(arg);
      setEntry("operand2");
    } else if (arg === "=") {
      handleResult();
      setEntry("operand1");
    } else if (arg === "C") {
      setOperand1("0");
      setOperand2("0");
      setOperator("");
      setResult("0");
      setEntry("operand1"); // Reset entry
    }
  }
  

  function handleResult() {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    let res;

    switch (operator) {
      case "+":
         res = num1+num2;
        setResult(res);
        setOperand1(res);
        setOperand2("0");
        break;

      case "-":
        res = num1-num2;        
        setResult(res);
        setOperand1(res);
        setOperand2("0");
        break;

      case "*":
        res = num1*num2;
        setResult(res);
        setOperand1(res);
        setOperand2("0");
        break;

      case "/":
        res = num1 / num2;
        setResult(res);
        setOperand1(res);
        setOperand2("0");
        break;

      case "%":
        res = num1 % num2;
        setResult(res);
        setOperand1(res);
        setOperand2("0");
        break;

      default:
        return;
    }
  }

  return (
    <>
      <div className={styles.container}>
        {operator  ? (
          <div className={styles.resultHeader}>
            <div className={styles.operation}>
              {operand1}
              {operator}
              {operand2}
              {" ="}
              <hr />
              <div className={styles.result}>{result}</div>
            </div>
          </div>
        ) : null}

        <div className={styles.buttonsContainer}>
          <div className={styles.numsContainer}>
            {data.map((d, i) => {
              return <Button text={d} handleClick={handleClick} key={i} />;
            })}
            <Button text={"%"} handleClick={handleClick} />
            <Button text={"."} handleClick={handleClick} />
          </div>
          <div className={styles.operatorButtons}>
            <Button text={"+"} handleClick={handleClick} />
            <Button text={"-"} handleClick={handleClick} />
            <Button text={"*"} handleClick={handleClick} />
            <Button text={"/"} handleClick={handleClick} />
          </div>
        </div>
        <div className={styles.lastRow}>
          <Button text={"C"} handleClick={handleClick} />
          <Button text={"="} handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};
