var numBalls = 80;

function generateSpanArray(bubblesElem){
    for(let i = 0; i < numBalls; i++){
      let randInt = getRandomInt();
      let spanElem = document.createElement("span");
      spanElem.setAttribute('style', `--i:${randInt}`);
      bubblesElem.appendChild(spanElem);
    }
  }

function getRandomInt(min=10, max=28) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {
  var bubblesElem = document.querySelector(".bubbles")
  generateSpanArray(bubblesElem);
};
