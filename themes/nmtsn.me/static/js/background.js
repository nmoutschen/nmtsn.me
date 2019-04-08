let triangleSize = Math.max(
  (window.innerWidth + window.innerHeight) / 20,
  100
);
let t = 0;

function setup() {
  var background = createCanvas(window.innerWidth, window.innerHeight);
  background.class("background");
  frameRate(30);
  noStroke();
  noiseSeed(Date.now());
};

function draw() {
  background(255);
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

  function getColor(x, y) {
    return 0xe8 + (getNoise(x * 10, y * 10) + 0.5) * 0x10;
  }

  for (let x = 0; x < width / triangleSize + 3; x++) {
    for (let y = 0; y < height / triangleSize + 3; y++) {
      fill(getColor(x, y));
      triangle(
        getX(x, y),
        getY(x, y),
        getX(x + 1, y),
        getY(x + 1, y),
        getX(x, y + 1),
        getY(x, y + 1)
      );
      fill(getColor(x + 0.5, y + 0.5));
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

window.onresize = function() {
  resizeCanvas(window.innerWidth, window.innerHeight);
};
