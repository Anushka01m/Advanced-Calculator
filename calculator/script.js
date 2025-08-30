const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function square() {
  display.value = Math.pow(eval(display.value), 2);
}

function sqrt() {
  display.value = Math.sqrt(eval(display.value));
}

function sin() {
  display.value = Math.sin(toRadians(eval(display.value))).toFixed(4);
}

function cos() {
  display.value = Math.cos(toRadians(eval(display.value))).toFixed(4);
}

function tan() {
  display.value = Math.tan(toRadians(eval(display.value))).toFixed(4);
}

function log() {
  display.value = Math.log10(eval(display.value)).toFixed(4);
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
