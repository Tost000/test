let clickCounter = 0;

function increaseCounter() {
  clickCounter++;
  document.getElementById(
    "counter"
  ).innerText = `Количество нажатий: ${clickCounter}`;
}
