const userInput = document.getElementsByName("clip");
const container = document.querySelector(".img-container");
const img = document.querySelector("img");
const clipArray = [
  {
    x: 22.47,
    y: 55,
  },
  {
    x: 22.47,
    y: 55,
  },
  {
    x: 16.85,
    y: 55,
  },
  {
    x: 22.47,
    y: 55,
  },
  {
    x: 15.45,
    y: 50,
  },
  {
    x: 22.47,
    y: 45,
  },
  {
    x: 19.66,
    y: 45,
  },
  {
    x: 19.66,
    y: 45,
  },
  {
    x: 22.47,
    y: 45,
  },
  {
    x: 15.45,
    y: 50,
  },
];
userInput.forEach((el) => {
  el.onclick = function () {
    container.style.width = `${(clipArray[this.value - 1].x * 50) / 100}vw`;
    container.style.height = `${(clipArray[this.value - 1].y * 28) / 100}vw`;
    var x = 0,
      y = 0;
    for (let i = 0; i < this.value - 1; i++) {
      if (this.value <= 5) {
        x += clipArray[i].x;
      } else {
        if (i <= 4) continue;
        x += clipArray[i].x;
        y = clipArray[this.value - 6].y;
      }
    }
    if (this.value == 6) y = clipArray[0].y;
    console.log(x, y);
    img.style.transform = `translate(-${x}%,-${y}%)`;
  };
});
