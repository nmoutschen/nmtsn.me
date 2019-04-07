<template>
  <div id="canvas">
    <vue-p5 @setup="setup" @draw="draw" />
  </div>
</template>

<script>
import VueP5 from "vue-p5";

export default {
  components: {
    "vue-p5": VueP5
  },
  model: {
    event: "resize"
  },
  data: () => {
    return {
      triangleSize: 100,
      t: 0,
      canvas: null,
      window: {
        width: 0,
        height: 0
      }
    };
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(this.window.width, this.window.height);
      this.triangleSize = Math.max(
        (this.window.width + this.window.height) / 20,
        100
      );
      sketch.frameRate(30);
      sketch.noStroke();
      sketch.noiseSeed(Date.now().getUTCMilliseconds());
    },
    draw(sketch) {
      let { width, height } = sketch;
      if (width != this.window.width || height != this.window.height) {
        sketch.resizeCanvas(this.window.width, this.window.height);
        this.triangleSize = Math.max(
          (this.window.width + this.window.height) / 20,
          100
        );
        width = this.window.width;
        height = this.window.height;
      }
      let t = this.t;
      let triangleSize = this.triangleSize;

      sketch.background(255);
      this.t += 0.004;

      function getNoise(x, y) {
        return sketch.noise(x, y, t) - 0.5;
      }

      function getX(x, y) {
        return (x + getNoise(x, y) * 1.5 - 2) * triangleSize;
      }

      function getY(x, y) {
        return (y + getNoise(x + 1000, y + 1000) * 1.5 - 2) * triangleSize;
      }

      function getColor(x, y) {
        return 0xf0 + (getNoise(x * 10, y * 10) + 0.5) * 0x08;
      }

      for (let x = 0; x < width / this.triangleSize + 3; x++) {
        for (let y = 0; y < height / this.triangleSize + 3; y++) {
          sketch.fill(getColor(x, y));
          sketch.triangle(
            getX(x, y),
            getY(x, y),
            getX(x + 1, y),
            getY(x + 1, y),
            getX(x, y + 1),
            getY(x, y + 1)
          );
          sketch.fill(getColor(x + 0.5, y + 0.5));
          sketch.triangle(
            getX(x + 1, y),
            getY(x + 1, y),
            getX(x, y + 1),
            getY(x, y + 1),
            getX(x + 1, y + 1),
            getY(x + 1, y + 1)
          );
        }
      }
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.window.width = window.innerWidth;
    this.window.height = window.innerHeight;
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style scoped>
#canvas {
  z-index: -1;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
</style>
