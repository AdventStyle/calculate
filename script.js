window.onload = (function () {
  const calculator = document.getElementsByClassName('container')[0];
  const input = document.getElementsByClassName('input')[0];

  let prevValue = "";
  let currentOperator = "";

  function clear() {
    input.innerText = "";
  }
  function plus() {
    // input.innerText = 
  }
  function calculate () {
    let result = "";
    if(currentOperator === "+"){
     result = +prevValue + +input.innerText;
    }
    input.innerText = result;
    currentOperator = "";
  }
  const setPrevValue = () => {
    prevValue = input.innerText;
  };
  const setCurrentOperator = (text) => {
    currentOperator = text;
  };

  calculator.addEventListener('click', (e) => {
    if (e.target.className === "numbers") {
      // console.log(e.target.innerText);
      let text = input.innerText;
      let targetText = e.target.innerText;
      let newText = text + targetText;
      input.innerText = newText;
    }
    if (e.target.className === 'operators') {
      let text = e.target.innerText;


      switch (text) {
        case '+':
          setPrevValue();
          clear();
          setCurrentOperator("+");
          console.log(prevValue, currentOperator);
          break;
        case '-':
          console.log(text);
          break;
        case '*':
          console.log(text);
          break;
        case '/':
          console.log(text);
          break;
        // case 'C':
        //   console.log(text);
        //   break;
        case '=':
          calculate();
          console.log(text);
          break;

        default:
          clear();
          break;
      }

    }
    // console.log(input.innerText);
  });

  // target.addEventListener(type, listener[, options]);
});