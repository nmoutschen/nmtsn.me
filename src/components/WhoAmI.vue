<template>
  <section class="whoami">
    <h2>Who am I?</h2>
    <p>My name is <strong>Nicolas</strong>.</p>
    <p>I am a <strong>builder</strong> and <strong>tinkerer</strong> who likes to
      play around with computer stuff.</p>
  </section>
</template>

<style scoped lang="less">
@import "../common/colors.less";

p::after {
  content: "_";
  color: @primary;
}
</style>
