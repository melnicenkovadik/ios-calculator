import { useState } from "react";

export const useCalculateState = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [memoryOperator, setMemoryOperator] = useState(null);
  const [memoryValue, setMemoryValue] = useState(null);
  const [memoryRead, setMemoryRead] = useState(null);

  const checkMemory = () => {
    if (operator !== null) {
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
      } else if (operator === "−") {
        setMemory(memory - parseFloat(value));
      } else if (operator === "×") {
        setMemory(memory * parseFloat(value));
      } else if (operator === "÷") {
        setMemory(memory / parseFloat(value));

      } else {
        setMemory(parseFloat(value));
      }
      if (operator === "m+") {
        setMemory(memoryValue + parseFloat(value));
      } else if (operator === "m-") {
        setMemory(memoryValue - parseFloat(value));
      }
    }
  };

  const result = () => {
    if (!operator) return;
    if (operator === "+") {
      setValue((memory + parseFloat(value)).toString());
    } else if (operator === "−") {
      setValue((memory - parseFloat(value)).toString());
    } else if (operator === "×") {
      setValue((memory * parseFloat(value)).toString());
    } else if (operator === "÷") {
      setValue((memory / parseFloat(value)).toString());
    }
    setMemory(null);
    setOperator(null);
  };

  const handleButtonPress = content => () => {
    const num = parseFloat(value);
    switch (content) {
      case  "AC":
        setValue("0");
        setMemory(null);
        setOperator(null);
        return;
        break;
      case  "±":
        setValue((num * -1).toString());
        return;
        break;
      case "%":
        setValue((num / 100).toString());
        setMemory(null);
        setOperator(null);
        return;
        break;
      case ",":
        if (value.includes(".")) return;
        setValue(value + ".");
        return;
        break;
      case "−":
        checkMemory();
        setValue("0");
        setOperator("−");
        return;
        break;
      case "+":
        checkMemory();
        setValue("0");
        setOperator("+");
        return;
        break;
      case "×":
        checkMemory();
        setValue("0");
        setOperator("×");
        return;
        break;
      case "÷":
        checkMemory();
        setValue("0");
        setOperator("÷");
        return;
        break;
      case "mr":
        checkMemory();
        setMemoryValue(num);
        setValue("0");
        return;
        break;
      case "mc":
        checkMemory();
        setMemoryValue(null);
        setMemoryRead(null);
        setMemoryOperator(null);
        return;
        break;
      case  "m+":
        setOperator("m+");
        checkMemory();
        setMemoryValue(num);
        setValue((num + memoryValue).toString());
        return;
        break;
      case "m-":
        setOperator("m-");
        checkMemory();
        setMemoryValue(num);
        setValue((num - memoryValue).toString());
        return;
        break;
      case "=":
        result();
        return;
        break;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };
  return {
    value,
    handleButtonPress
  };

};
