const showResult = value => {
  if (value === "0") return value;

  let output = "";
  let decimal = "";
  let isDot = false;

  if (value.includes(".")) {
    output = value.substring(0, value.indexOf("."));
    decimal = value.substring(value.indexOf("."));
  } else {
    output = value;
  }

  if (parseFloat(value) < 0) {
    isDot = true;
    output = output.substring(1);
  }
  return isDot
    ? "-" + (parseFloat(output).toLocaleString() + decimal)
    : (parseFloat(output).toLocaleString() + decimal);
};

export default showResult;
