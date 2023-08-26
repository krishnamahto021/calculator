import { ButtonsContainer } from "./components/ButtonsContainer/ButtonsContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { operationContext } from "./operationContex";
import { useState } from "react";

function App() {
  const [operand1, setOperand1] = useState("0");
  const [operand2, setOperand2] = useState("0");
  const [result, setResult] = useState("0");
  const [operator, setOperator] = useState(null);

  return (
    <div className="App">
      <operationContext.Provider
        value={{
          operand1,
          operand2,
          setOperand1,
          setOperand2,
          operator,
          setOperator,
          result,
          setResult,
        }}
      >
        <NavBar />
        <ButtonsContainer />
      </operationContext.Provider>
    </div>
  );
}

export default App;
