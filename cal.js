let display = document .getElementById ('display')
function displayValue(value){
    display.value += value;
}
function clearDisplay () {
    display.value='';

}
function calculate() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  function backSpace() {
    display.value= display.value.slice(0,-1);
  }