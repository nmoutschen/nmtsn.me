<template>
  <div id="app">
    <header id="header">
      <h1>
        <router-link to="/">nmtsn<span>.me</span></router-link>
      </h1>
      <!--<nav id="nav">
      </nav>-->
    </header>
    <main>
      <router-view />
    </main>
    <Background />
  </div>
</template>

<script>
import Background from "@/components/Background.vue";

export default {
  components: { Background }
};
</script>

<style lang="less">
@import "common/base.less";
@import "common/colors.less";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @text;
}

#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 4rem;
  height: 120px;

  h1 {
    margin: 0px;

    a {
      text-decoration: none;
      color: @primary-dark;
      &:hover {
        color: @primary;

        span {
          color: @primary-light;
        }
      }

      span {
        color: @primary;
      }
    }
  }

  #nav {
    padding: 10px;
    a {
      text-decoration: none;
      font-weight: bold;
      color: @primary;
      &:hover {
        color: @primary-light;
      }

      &.router-link-exact-active {
        color: @primary-dark;
      }
    }
  }
}

main {
  padding: 0px 6rem;
}
</style>
