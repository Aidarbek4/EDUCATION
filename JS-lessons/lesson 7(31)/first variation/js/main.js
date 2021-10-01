const display = document.querySelector('.calc-display');

function insert(data) {
  let currentData = display.innerText;

  if (isNotDuplicable(data) && 
			isNotDuplicable(currentData.substr(currentData.length - 1, 
			currentData.length))) {

  } else {
    display.innerText = currentData + data;
  }

}

function isNotDuplicable(sign) {
  return sign == "+" || sign == "-" || sign == "*" 
					|| sign == "/" || sign == ".";
}

function back() {
  let oldData = display.innerText;
  display.innerText = oldData.substring(0, oldData.length - 1);
}

function reset() {
  display.innerText = "";
}

function showResult() {
  let result = eval(display.innerText);
  display.innerText = result;
}