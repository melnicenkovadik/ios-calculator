import { useState, useEffect } from "react";

export const useCalc = () => {
  const [time, setTime] = useState(new Date());
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [mr, setMR] = useState(false);
  const [mrValue, setMRValue] = useState(null);

  useEffect(() => {
    setTime(new Date());
  }, [new Date().getMinutes()]);

  const setOperation = () => {
    if (operator !== null) {
      if (operator === "+") setMemory(memory + parseFloat(value));
      else if (operator === "−") setMemory(memory - parseFloat(value));
      else if (operator === "×") setMemory(memory * parseFloat(value));
      else if (operator === "÷") setMemory(memory / parseFloat(value));
    } else setMemory(parseFloat(value));
    setValue("0");
  };

  const handleButtonPress = content => () => {
    const num = parseFloat(value);


    if (content === "mr") {
      setMRValue(num);
      if (!operator) return;
      if (operator === "m+") setValue((mrValue + parseFloat(value)).toString());
      else if (operator === "m-") setValue((num - mrValue).toString());
      setOperator('mr');
      return;
    }

    if (content === "m+") {
      setOperator('m+');
      setMR(true);
      if (mrValue) return;
      setMRValue(num);
    }
    if (content === "m-") {
      setOperator('m-');
      setMR(true);
      if (mrValue) return;
      setMRValue(num);

    }
    if (content === "mc") {
      if (operator ==='m+' || operator ==='mr' || operator ==='m-'){
        setOperator(null);
      }
      setMRValue(null);
      setMR(false);
      return;
    }
    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "±") {
      setValue((num * -1).toString());
      return;
    }

    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === ".") {
      if (value.includes(".")) return;
      setValue(value + ".");
      return;
    }

    if (content === "+") {
      setOperation();
      setOperator("+");
      return;
    }
    if (content === "−") {
      setOperation();
      setOperator("−");
      return;
    }
    if (content === "×") {
      setOperation();
      setOperator("×");
      return;
    }
    if (content === "÷") {
      setOperation();
      setOperator("÷");
      return;
    }

    if (content === "=") {
      if (!operator) return;
      if (operator === "+") setValue((memory + parseFloat(value)).toString());
      else if (operator === "−") setValue((memory - parseFloat(value)).toString());
      else if (operator === "×") setValue((memory * parseFloat(value)).toString());
      else if (operator === "÷") setValue((memory / parseFloat(value)).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === ".") setValue(value + content);
    else setValue(parseFloat(num + content).toString());
  };
  return {
    time,
    value,
    mr,
    handleButtonPress
  };
};
