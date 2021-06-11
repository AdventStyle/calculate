window.onload = function () {
  const calculator = document.getElementsByClassName("container")[0];
  const input = document.getElementsByClassName("input")[0];

  let prevValue = "";
  let currentValue = "";
  let currentOperator = "";

  function clear() {
    input.innerText = "";
  }

  function calculate() {
    let result = "";
    if (currentOperator === "+") {
      result = +prevValue + +currentValue;
    }
    if (currentOperator === "-") {
      result = +prevValue - +currentValue;
    }
    if (currentOperator === "*") {
      result = +prevValue * +currentValue;
    }
    if (currentOperator === "/") {
      result = +prevValue / +currentValue;
    }
    input.innerText = result;
    // currentOperator = "";
    prevValue = result;
  }

  const setPrevValue = () => {
    if (!currentOperator) {
      prevValue = input.innerText;
    } else {
      calculate();
    }
  };

  const setCurrentOperator = (text) => {
    currentOperator = text;
    input.innerText = text;
  };

  const setCurrentValue = (value) => {
    currentValue = value;
  };

  const isOp = (op) => {
    if (op === "+" || op === "-" || op === "*" || op === "/") {
      return true;
    }
    return false;
  };

  calculator.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    if (e.target.className === "numbers") {
      let text = input.innerText;
      if (isOp(text)) {
        clear();
        text = "";
      }

      let targetText = e.target.innerText;
      if(targetText === 0){
          //  if()
      }
      let newText = text + targetText;


      input.innerText = newText;
      setCurrentValue(newText);
    } else if (e.target.className === "operators") {
      let operators = e.target.innerText;

      if (isOp(operators)) {
        setPrevValue();
        clear();
        setCurrentOperator(operators);
        console.log(prevValue, currentOperator);
      } else if (operators === "=") {
        calculate();
      }
    } else if (e.target.className === "dot") {
      let text = input.innerText;
   
      // console.log("sss",text.indexOf(".") );
      if(text.indexOf(".") === -1 ){
        // console.log(text.lenght);
        // console.log(input.innerText.length);
        if(input.innerText.length < 1){
          input.innerText = "0";
          // console.log("qqq")
        }
        // console.log(text.length);
        // text = prevValue + ".";
        input.innerText = input.innerText + "."
      }
  
    }else if(e.target.className === "clear"){
      clear();
      // console.log("clear");
    }else if(e.target.className === "delete"){
      console.log("delete",input.innerText)
      input.innerText = input.innerText.slice(0, input.innerText.length - 1);
    }
  });
};
