let triangleSize = Math.max(
  (window.innerWidth + window.innerHeight) / 20,
  100
);
let t = 0;

function toggleNav() {
  let cur = document.getElementById("nav").style.display;
  if (cur == "block") {
    document.getElementById("nav").style.display = "none";
  } else {
    document.getElementById("nav").style.display = "block";
  }
}

function setup() {
  var background = createCanvas(window.innerWidth, window.innerHeight);
  background.class("background");
  frameRate(30);
  stroke(0xF2, 0xAF, 0x29);
  fill(0x47);
  noiseSeed(Date.now());
};

function draw() {
  background(0x47);
  t += 0.004;

  function getNoise(x, y) {
    return noise(x, y, t) - 0.5;
  }

  function getX(x, y) {
    return (x + getNoise(x, y) * 1.5 - 2) * triangleSize;
  }

  function getY(x, y) {
    return (y + getNoise(x + 1000, y + 1000) * 1.5 - 2) * triangleSize;
  }


  for (let x = width / triangleSize + 2; x >= 0; x--) {
    for (let y = height / triangleSize + 2; y >= 0; y--) {
      triangle(
        getX(x, y),
        getY(x, y),
        getX(x + 1, y),
        getY(x + 1, y),
        getX(x, y + 1),
        getY(x, y + 1)
      );
      triangle(
        getX(x + 1, y),
        getY(x + 1, y),
        getX(x, y + 1),
        getY(x, y + 1),
        getX(x + 1, y + 1),
        getY(x + 1, y + 1)
      );
    }
  }
};

window.onload = function() {
  let header = document.getElementsByTagName("header")[0];
  let nav = document.getElementById("nav");
  let navHeader = header.cloneNode(true);
  navHeader.getElementsByTagName("i")[0].setAttribute("class", "fas fa-times");
  nav.insertBefore(navHeader, nav.firstChild);
};

window.onresize = function() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  if (window.innerWidth >= 780 && document.getElementById("nav").style.display != "block") {
    document.getElementById("nav").style.display = "block";
  }
};
